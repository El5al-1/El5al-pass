import { readFile } from "node:fs/promises";
import path from "node:path";

// The whole application is implemented as a single HTML file at the project root.
// This route serves that document directly at "/" while /api/health stays a Next.js route.
export const dynamic = "force-static";

export async function GET() {
  const html = await readFile(path.join(process.cwd(), "index.html"), "utf8");
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
