import { E as Megaphone, F as GraduationCap, J as Clapperboard, L as FolderLock, at as Briefcase, z as FileText } from "../_libs/lucide-react.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.resources-DrwCE_TL.js
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
var $$splitComponentImporter = () => import("./admin.resources-BicaLNq_.mjs");
var Route = createFileRoute("/_authenticated/admin/resources")({
	head: () => ({ meta: [
		{ title: "Resource Admin — NexusAIAgency" },
		{
			name: "description",
			content: "Manage NexusAIAgency resources, files and client projects."
		},
		{
			property: "og:title",
			content: "Resource Admin — NexusAIAgency"
		},
		{
			property: "og:description",
			content: "Private admin panel for NexusAIAgency resources."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { formatDate as a, visibilities as c, categoryMeta as i, bucketFor as n, formatSize as o, categories as r, iconFor as s, Route as t };
