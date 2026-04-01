"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ContentItem = {
  id: string;
  section: string;
  position: number | null;
  title: string;
  description: string | null;
  asset_url: string;
  asset_type: "image" | "video";
  file_key: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

const SECTION_SUGGESTIONS = [
  "homepage.hero",
  "homepage.services",
  "about.banner",
  "contact.banner",
];

export default function AdminPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [form, setForm] = useState({
    section_id: "",
    title: "",
    description: "",
    position: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const sectionOptions = useMemo(() => {
    const sections = new Set(SECTION_SUGGESTIONS);
    items.forEach((item) => sections.add(item.section));
    return Array.from(sections).sort();
  }, [items]);

  async function loadItems() {
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/admin/content", { cache: "no-store" });
    const result = await response.json();

    if (!response.ok) {
      setLoading(false);
      setMessage(result.error ?? "Could not load content.");
      return;
    }

    setItems(result.items);
    setLoading(false);
  }

  useEffect(() => {
    void loadItems();
  }, []);

  function onPickFile(nextFile: File | null) {
    if (!nextFile) return;
    setFile(nextFile);
    if (!form.title.trim()) {
      setForm((current) => ({
        ...current,
        title: nextFile.name.replace(/\.[^.]+$/, ""),
      }));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      setMessage("Please choose an image or video.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    const formData = new FormData();
    formData.append("section_id", form.section_id);
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("position", form.position);
    formData.append("file", file);

    const response = await fetch("/api/admin/content", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      setSubmitting(false);
      setMessage(result.error ?? "Upload failed.");
      return;
    }

    setForm({
      section_id: "",
      title: "",
      description: "",
      position: "",
    });
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setSubmitting(false);
    setMessage(`Saved media for ${result.item.section}.`);
    await loadItems();
  }

  async function handleDelete(sectionId: string) {
    const response = await fetch("/api/admin/content", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ section_id: sectionId }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error ?? "Delete failed.");
      return;
    }

    setMessage(`Deleted media for ${sectionId}.`);
    await loadItems();
  }

  return (
    <main className="min-h-screen bg-[#09110f] px-4 py-10 text-[#f4e7c8] sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          <h1 className="text-3xl font-semibold">Admin Media Panel</h1>
          <p className="mt-2 text-sm text-[#f4e7c8]/70">
            Upload, replace, and delete section media backed by Cloudflare R2 and Supabase metadata.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Section identifier</label>
                <input
                  list="section-suggestions"
                  value={form.section_id}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, section_id: event.target.value }))
                  }
                  placeholder="homepage.hero"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none"
                  required
                />
                <datalist id="section-suggestions">
                  {sectionOptions.map((option) => (
                    <option key={option} value={option} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Title</label>
                <input
                  value={form.title}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, title: event.target.value }))
                  }
                  placeholder="Homepage hero reel"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Position</label>
                <input
                  value={form.position}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, position: event.target.value }))
                  }
                  inputMode="numeric"
                  placeholder="0"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Description</label>
                <textarea
                  value={form.description}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, description: event.target.value }))
                  }
                  rows={4}
                  placeholder="Optional internal note"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <label className="mb-2 block text-sm font-medium">Upload media</label>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(event) => {
                  event.preventDefault();
                  setDragActive(false);
                  onPickFile(event.dataTransfer.files[0] ?? null);
                }}
                className={`flex min-h-56 flex-col items-center justify-center rounded-[1.75rem] border border-dashed px-6 text-center transition ${
                  dragActive
                    ? "border-[#ff8b58] bg-[#ff8b58]/10"
                    : "border-white/15 bg-white/[0.03]"
                }`}
              >
                <span className="text-base font-medium">
                  {file ? file.name : "Drag and drop an image or video"}
                </span>
                <span className="mt-2 text-sm text-[#f4e7c8]/65">
                  or tap to choose a file
                </span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={(event) => onPickFile(event.target.files?.[0] ?? null)}
              />

              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-[#ff8b58] px-6 py-3 font-medium text-[#15211d] transition hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Saving..." : "Upload / Replace"}
              </button>

              {message ? <p className="text-sm text-[#f4e7c8]/80">{message}</p> : null}
            </div>
          </form>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Current Content</h2>
            <button
              type="button"
              onClick={() => void loadItems()}
              className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/[0.06]"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="text-sm text-[#f4e7c8]/70">Loading content...</p>
          ) : (
            <div className="grid gap-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 lg:grid-cols-[220px_1fr_auto]"
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    {item.asset_type === "image" ? (
                      <img
                        src={item.asset_url}
                        alt={item.title}
                        className="h-40 w-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.asset_url}
                        className="h-40 w-full object-cover"
                        muted
                        playsInline
                        controls
                      />
                    )}
                  </div>

                  <div className="space-y-2 text-sm">
                    <p><span className="text-[#f4e7c8]/55">Section:</span> {item.section}</p>
                    <p><span className="text-[#f4e7c8]/55">Type:</span> {item.asset_type}</p>
                    <p><span className="text-[#f4e7c8]/55">Title:</span> {item.title}</p>
                    <p className="break-all">
                      <span className="text-[#f4e7c8]/55">URL:</span> {item.asset_url}
                    </p>
                    <p><span className="text-[#f4e7c8]/55">Updated:</span> {new Date(item.updated_at).toLocaleString()}</p>
                  </div>

                  <div className="flex items-start justify-end">
                    <button
                      type="button"
                      onClick={() => void handleDelete(item.section)}
                      className="rounded-full border border-red-400/30 px-4 py-2 text-sm text-red-200 transition hover:bg-red-400/10"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}

              {!items.length ? (
                <p className="text-sm text-[#f4e7c8]/70">No content has been uploaded yet.</p>
              ) : null}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}