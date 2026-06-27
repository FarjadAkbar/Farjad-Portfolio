import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "lib", "blog");

export function getBlogContent(fileName: string): string {
  if (!fileName) return "";

  const safeName = path.basename(fileName);
  const filePath = path.join(BLOG_DIR, safeName);

  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}
