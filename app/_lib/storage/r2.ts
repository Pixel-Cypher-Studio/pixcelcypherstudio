import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const IMAGE_PREFIX = "image/";
const VIDEO_PREFIX = "video/";

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getR2Client() {
  const accountId = getRequiredEnv("R2_ACCOUNT_ID");
  const accessKeyId = getRequiredEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = getRequiredEnv("R2_SECRET_ACCESS_KEY");

  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export function getR2BucketName() {
  return getRequiredEnv("R2_BUCKET_NAME");
}

export function normalizeSectionId(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9./-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/\/{2,}/g, "/")
    .replace(/^-|-$/g, "");
}

export function inferFileType(contentType: string) {
  if (contentType.startsWith(IMAGE_PREFIX)) return "image" as const;
  if (contentType.startsWith(VIDEO_PREFIX)) return "video" as const;
  throw new Error("Only image and video uploads are allowed.");
}

export function getFileExtension(fileName: string) {
  const match = fileName.toLowerCase().match(/\.([a-z0-9]+)$/);
  return match ? match[1] : "bin";
}

export function buildObjectKey(sectionId: string, fileName: string) {
  return `${sectionId}/${Date.now()}.${getFileExtension(fileName)}`;
}

export function buildFileUrl(key: string) {
  const baseUrl = getRequiredEnv("R2_PUBLIC_BASE_URL").replace(/\/$/, "");
  return `${baseUrl}/${key}`;
}

export async function uploadToR2(params: {
  key: string;
  file: File;
}) {
  const client = getR2Client();
  const bucket = getR2BucketName();
  const body = Buffer.from(await params.file.arrayBuffer());

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: params.key,
      Body: body,
      ContentType: params.file.type || "application/octet-stream",
    })
  );
}

export async function deleteFromR2(key: string) {
  const client = getR2Client();
  const bucket = getR2BucketName();

  await client.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    })
  );
}