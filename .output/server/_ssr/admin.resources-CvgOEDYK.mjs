import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.resources-CvgOEDYK.js
var $$splitComponentImporter = () => import("./admin.resources-D5VhIibL.mjs");
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
export { Route as t };
