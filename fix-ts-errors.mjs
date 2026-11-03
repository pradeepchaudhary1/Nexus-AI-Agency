// Idempotent: safe to run more than once. Run from the project root: node scripts/fix-ts-errors.mjs
import fs from "node:fs";
const edit = (file, fn) => {
  if (!fs.existsSync(file)) return console.log("skip (missing):", file);
  const before = fs.readFileSync(file, "utf8"); const after = fn(before);
  if (after !== before) { fs.writeFileSync(file, after); console.log("fixed:", file); } else console.log("no change:", file);
};
// 1) lead-forms: duplicated  id="x" name="y" id="x" name="y"  (caused by running the PowerShell replace twice); LeadForm must accept props
edit("src/components/lead-forms.tsx", (s) => {
  s = s.replace(/(id="[^"]+" name="[^"]+") \1/g, "$1");
  if (!/export function LeadForm\(\s*_?props/.test(s)) s = s.replace(/export function LeadForm\(\s*\)/, "export function LeadForm(_props: { source?: string; demoType?: string; compact?: boolean } = {})");
  return s;
});
// 2) strict-index errors: search.url -> search['url'];  split(...)[0] -> split(...)[0]!
const strict = (s) => s.replace(/\bsearch\.url\b/g, "search['url']").replace(/(\.split\((['"])[^'"]*\2\)\[0\])(?!\!)/g, "$1!");
edit("src/routes/solutions-engine.tsx", strict);
edit("src/routes/audit-report.tsx", (s) => {
  s = strict(s);
  // 3) missing icon imports (real runtime crash when the UPI copy button renders)
  const m = /import\s*\{([^}]*)\}\s*from\s*['"]lucide-react['"]/.exec(s);
  if (m) { const names = m[1].split(",").map((x) => x.trim()).filter(Boolean);
    for (const n of ["Check", "Copy"]) if (!names.includes(n)) names.push(n);
    s = s.replace(m[0], `import { ${names.join(", ")} } from 'lucide-react'`); }
  return s;
});
