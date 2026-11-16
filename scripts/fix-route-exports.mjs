// A TanStack route file should export only `Route`. Extra exports (e.g. `export default BookAuditPage`) stop code-splitting
// and trigger the "will not be code-split" warnings. This removes them unless another file really imports that route file.
// Idempotent. Handles CRLF. Run from the project root:  node scripts/fix-route-exports.mjs
import fs from "node:fs";
import path from "node:path";
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const norm = (f) => f.replace(/\\/g, "/");
const all = walk("src").filter((f) => /\.(ts|tsx)$/.test(f) && !norm(f).endsWith("routeTree.gen.ts"));
const routes = all.filter((f) => norm(f).startsWith("src/routes/") && f.endsWith(".tsx"));
const importedElsewhere = (file) => {
  const base = path.basename(file).replace(/\.tsx$/, "");
  const re = new RegExp(`from\\s*["'][^"']*\\/(routes\\/)?${base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`);
  return all.some((f) => f !== file && re.test(fs.readFileSync(f, "utf8")));
};
let changed = 0;
for (const file of routes) {
  const before = fs.readFileSync(file, "utf8");
  if (importedElsewhere(file)) { console.log("kept (imported by another file):", file); continue; }
  const after = before
    .replace(/^export default ([A-Z]\w*)[ \t]*;?[ \t]*(\r?\n|$)/gm, "")           // trailing `export default Page`
    .replace(/^export (function|const) (?!Route\b)([A-Z]\w*)/gm, "$1 $2");                     // `export function Page(` / `export const Page =`
  if (after !== before) { fs.writeFileSync(file, after); changed++; console.log("fixed:", file); }
}
console.log(changed ? `Done: ${changed} route file(s) changed.` : "Nothing to change.");
