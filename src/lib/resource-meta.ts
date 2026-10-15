import { Clapperboard, FileText, FolderLock, GraduationCap, Megaphone, Briefcase, type LucideIcon } from "lucide-react";

export const categories: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "update", label: "Latest Updates", icon: Megaphone },
  { value: "document", label: "PDFs & Documents", icon: FileText },
  { value: "demo", label: "Demo Recordings", icon: Clapperboard },
  { value: "course", label: "Courses & Tutorials", icon: GraduationCap },
  { value: "project", label: "Client Projects & Case Studies", icon: Briefcase },
  { value: "internal", label: "Internal Files", icon: FolderLock },
];

export const visibilities = [
  { value: "public", label: "Public" },
  { value: "client", label: "Client-Only" },
  { value: "internal", label: "Internal" },
] as const;

export const bucketFor = (visibility: string) =>
  visibility === "public" ? "public-resources" : visibility === "client" ? "client-resources" : "internal-files";

export const categoryMeta = (value: string) => categories.find((c) => c.value === value) ?? categories[1]!;

export function iconFor(category: string, mime?: string | null): LucideIcon {
  if (mime?.startsWith("video/")) return Clapperboard;
  if (mime === "application/pdf") return FileText;
  return categoryMeta(category).icon;
}

export const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export function formatSize(bytes?: number | null) {
  if (!bytes) return "—";
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
