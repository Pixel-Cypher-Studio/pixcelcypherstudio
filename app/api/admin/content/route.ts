import { NextResponse } from "next/server";

import { getSupabaseServer } from "@/app/_lib/supabase/server";
import {
  buildFileUrl,
  buildObjectKey,
  deleteFromR2,
  inferFileType,
  normalizeSectionId,
  uploadToR2,
} from "@/app/_lib/storage/r2";

const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024;

export async function GET() {
  try {
    const supabase = getSupabaseServer();

    const { data, error } = await supabase
      .from("content_items")
      .select(
        "id, section, title, description, asset_url, asset_type, file_key, is_active, created_at, updated_at"
      )
      .order("section", { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ items: data }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "A file is required." }, { status: 400 });
    }

    if (!file.type || file.size === 0) {
      return NextResponse.json({ error: "Invalid file." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ error: "File exceeds 100 MB limit." }, { status: 400 });
    }

    const sectionId = normalizeSectionId(String(formData.get("section_id") ?? ""));
    const title = String(formData.get("title") ?? "").trim() || sectionId;
    const description = String(formData.get("description") ?? "").trim() || null;
    const positionValue = String(formData.get("position") ?? "").trim();
    const position = positionValue ? Number(positionValue) : null;

    if (!sectionId) {
      return NextResponse.json({ error: "Section identifier is required." }, { status: 400 });
    }

    if (position !== null && Number.isNaN(position)) {
      return NextResponse.json({ error: "Position must be numeric." }, { status: 400 });
    }

    const assetType = inferFileType(file.type);
    const key = buildObjectKey(sectionId, file.name);
    const assetUrl = buildFileUrl(key);

    const supabase = getSupabaseServer();

    const { data: existing, error: existingError } = await supabase
      .from("content_items")
      .select("*")
      .eq("section", sectionId)
      .maybeSingle();

    if (existingError) {
      return NextResponse.json({ error: existingError.message }, { status: 500 });
    }

    await uploadToR2({ key, file });

    const payload = {
      section: sectionId,
      position,
      title,
      description,
      asset_url: assetUrl,
      asset_type: assetType,
      file_key: key,
      is_active: true,
    };

    const { data: saved, error: saveError } = existing
      ? await supabase
          .from("content_items")
          .update(payload)
          .eq("id", existing.id)
          .select(
            "id, section, title, description, asset_url, asset_type, file_key, is_active, created_at, updated_at"
          )
          .single()
      : await supabase
          .from("content_items")
          .insert(payload)
          .select(
            "id, section, title, description, asset_url, asset_type, file_key, is_active, created_at, updated_at"
          )
          .single();

    if (saveError) {
      await deleteFromR2(key).catch(() => undefined);
      return NextResponse.json({ error: saveError.message }, { status: 500 });
    }

    if (existing?.file_key && existing.file_key !== key) {
      try {
        await deleteFromR2(existing.file_key);
      } catch {
        await deleteFromR2(key).catch(() => undefined);

        await supabase
          .from("content_items")
          .update({
            section: existing.section,
            position: existing.position,
            title: existing.title,
            description: existing.description,
            asset_url: existing.asset_url,
            asset_type: existing.asset_type,
            file_key: existing.file_key,
            is_active: existing.is_active,
          })
          .eq("id", existing.id);

        return NextResponse.json(
          { error: "Replacement failed while deleting the old file. Changes were rolled back." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ item: saved }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { section_id: rawSectionId } = (await request.json()) as {
      section_id?: string;
    };

    const sectionId = normalizeSectionId(String(rawSectionId ?? ""));

    if (!sectionId) {
      return NextResponse.json({ error: "Section identifier is required." }, { status: 400 });
    }

    const supabase = getSupabaseServer();

    const { data: existing, error: fetchError } = await supabase
      .from("content_items")
      .select("*")
      .eq("section", sectionId)
      .single();

    if (fetchError) {
      return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }

    const { error: deleteRowError } = await supabase
      .from("content_items")
      .delete()
      .eq("id", existing.id);

    if (deleteRowError) {
      return NextResponse.json({ error: deleteRowError.message }, { status: 500 });
    }

    try {
      if (existing.file_key) {
        await deleteFromR2(existing.file_key);
      }
    } catch {
      await supabase.from("content_items").insert({
        id: existing.id,
        section: existing.section,
        position: existing.position,
        title: existing.title,
        description: existing.description,
        asset_url: existing.asset_url,
        asset_type: existing.asset_type,
        file_key: existing.file_key,
        is_active: existing.is_active,
        created_at: existing.created_at,
        updated_at: existing.updated_at,
      });

      return NextResponse.json(
        { error: "Delete failed while removing the file. Database changes were rolled back." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}