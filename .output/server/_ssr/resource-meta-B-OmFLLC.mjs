import { F as FolderLock, G as Clapperboard, L as FileText, N as GraduationCap, rt as Briefcase, w as Megaphone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resource-meta-B-OmFLLC.js
var categories = [
	{
		value: "update",
		label: "Latest Updates",
		icon: Megaphone
	},
	{
		value: "document",
		label: "PDFs & Documents",
		icon: FileText
	},
	{
		value: "demo",
		label: "Demo Recordings",
		icon: Clapperboard
	},
	{
		value: "course",
		label: "Courses & Tutorials",
		icon: GraduationCap
	},
	{
		value: "project",
		label: "Client Projects & Case Studies",
		icon: Briefcase
	},
	{
		value: "internal",
		label: "Internal Files",
		icon: FolderLock
	}
];
var visibilities = [
	{
		value: "public",
		label: "Public"
	},
	{
		value: "client",
		label: "Client-Only"
	},
	{
		value: "internal",
		label: "Internal"
	}
];
var bucketFor = (visibility) => visibility === "public" ? "public-resources" : visibility === "client" ? "client-resources" : "internal-files";
var categoryMeta = (value) => categories.find((c) => c.value === value) ?? categories[1];
function iconFor(category, mime) {
	if (mime?.startsWith("video/")) return Clapperboard;
	if (mime === "application/pdf") return FileText;
	return categoryMeta(category).icon;
}
var formatDate = (iso) => new Date(iso).toLocaleDateString("en-IN", {
	day: "numeric",
	month: "short",
	year: "numeric"
});
function formatSize(bytes) {
	if (!bytes) return "—";
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(0)} KB`;
	return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
//#endregion
export { formatSize as a, formatDate as i, categories as n, iconFor as o, categoryMeta as r, visibilities as s, bucketFor as t };
