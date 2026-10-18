import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-Bo4nKw7z.mjs";
import { t as Badge } from "./badge--9ZMeBB2.mjs";
import { F as FolderGit2, L as ExternalLink, i as Trash2, q as CirclePlus, s as Star, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { t as Textarea } from "./textarea-DFifGPW9.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Dwbi87Uj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BKzjndeb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function ProjectsPage() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [title, setTitle] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("Video / Demo Call");
	const [link, setLink] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("nexus_client_projects");
		if (saved) try {
			setItems(JSON.parse(saved));
		} catch (e) {
			console.error(e);
		}
	}, []);
	const handleAdd = (e) => {
		e.preventDefault();
		if (!title.trim() || !link.trim()) return;
		const updated = [{
			id: Date.now().toString(),
			title,
			type,
			link,
			notes
		}, ...items];
		setItems(updated);
		localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
		setTitle("");
		setLink("");
		setNotes("");
		setOpen(false);
	};
	const handleDelete = (id) => {
		const updated = items.filter((x) => x.id !== id);
		setItems(updated);
		localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-container py-12 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-6 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "mb-2 bg-primary/10 text-primary border-primary/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "w-3.5 h-3.5 mr-1 inline" }), " Projects Vault"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl md:text-4xl font-bold tracking-tight text-foreground",
						children: "Our Projects & Deliverables"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Manage and view live project deliverables, client sheets, and video demonstrations."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "bg-primary text-primary-foreground text-xs gap-1.5 h-9",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "w-4 h-4" }), " Add Project / File / Sheet"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-base font-bold",
							children: "Add Deliverable or Project"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAdd,
							className: "space-y-3 mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: title,
									onChange: (e) => setTitle(e.target.value),
									placeholder: "e.g. Dental Clinic Sofia Call Recording",
									className: "h-9 text-xs mt-1",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Deliverable Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: type,
									onChange: (e) => setType(e.target.value),
									className: "w-full h-9 text-xs rounded-md border border-input bg-background px-3 mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Video / Demo Call",
											children: "Video / Demo Call"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Google Sheet / Doc",
											children: "Google Sheet / Doc"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Live Client Website",
											children: "Live Client Website"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Prompt / SOP",
											children: "Prompt / SOP"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Link (YouTube, Loom, Google Sheet, or Web URL)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: link,
									onChange: (e) => setLink(e.target.value),
									placeholder: "https://...",
									className: "h-9 text-xs mt-1",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Description / Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: notes,
									onChange: (e) => setNotes(e.target.value),
									placeholder: "Short notes about this deliverable...",
									className: "text-xs mt-1 min-h-[60px]"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full h-9 text-xs font-medium mt-2",
									children: "Save to Vault"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",
				children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-full text-center py-12 border border-dashed rounded-2xl text-muted-foreground text-sm",
					children: [
						"No projects added yet. Click ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"Add Project / File / Sheet\"" }),
						" above to upload your first video, Google sheet, or link."
					]
				}) : items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "border flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "w-fit text-[10px] mb-1",
							children: item.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-base font-bold",
							children: item.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "space-y-4 pt-0",
						children: [item.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: item.notes
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.link,
								target: "_blank",
								rel: "noreferrer",
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "default",
									size: "sm",
									className: "w-full text-xs h-8 gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" }), " View Deliverable"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "h-8 px-2 text-destructive",
								onClick: () => handleDelete(item.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
							})]
						})]
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "p-8 rounded-2xl bg-muted/30 border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-bold text-foreground mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "text-amber-500 fill-amber-500 w-5 h-5" }), " Client Reviews & Verification"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl bg-card border text-xs space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-amber-500",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-500" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "italic text-muted-foreground",
								children: "\"Nexus AI automated our clinic missed calls completely. Sofia handles 20+ patient inquiries every evening without staff intervention.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground",
								children: "— Dr. R. Verma, Dental Practice"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl bg-card border text-xs space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-amber-500",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-500" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "italic text-muted-foreground",
								children: "\"The Aanya voice agent screens buyers on budget and location before they book site visits, saving our agents 15+ hours weekly.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground",
								children: "— Urban Nest Properties"
							})
						]
					})]
				})]
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };
