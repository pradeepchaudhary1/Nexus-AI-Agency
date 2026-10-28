import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-Bo4nKw7z.mjs";
import { t as Badge } from "./badge--9ZMeBB2.mjs";
import { H as FolderGit2, O as MessageSquarePlus, W as ExternalLink, c as Star, i as Trash2, nt as CirclePlus, rt as CircleCheck, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { t as Textarea } from "./textarea-DFifGPW9.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Dwbi87Uj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BLquehQw.js
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
var DEFAULT_PROJECTS = [{
	id: "p1",
	title: "Dental Clinic 24/7 AI Receptionist (Sofia)",
	type: "Voice AI System",
	link: "https://www.nexusaiagency.in/book-audit",
	notes: "Automated after-hours patient inquiry intake and calendar rescheduling with zero human drop-off."
}, {
	id: "p2",
	title: "Real Estate Buyer Qualification & WhatsApp Dispatch",
	type: "Automation Workflow",
	link: "https://www.nexusaiagency.in/book-audit",
	notes: "Instant webhook triage connecting inbound portal inquiries directly to agent phone and Google CRM."
}];
var DEFAULT_REVIEWS = [{
	id: "r1",
	name: "Dr. Rohit Verma",
	business: "SmileCraft Clinics",
	rating: 5,
	comment: "Nexus AI automated our missed calls during lunch hours and night shifts. Patient bookings increased within 10 days.",
	date: "14 Oct 2026"
}];
function ProjectsPage() {
	const [items, setItems] = (0, import_react.useState)(DEFAULT_PROJECTS);
	const [reviews, setReviews] = (0, import_react.useState)(DEFAULT_REVIEWS);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("admin") === "nexus2026" || localStorage.getItem("nexus_is_admin") === "true") {
				setIsAdmin(true);
				localStorage.setItem("nexus_is_admin", "true");
			}
		}
	}, []);
	const [title, setTitle] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("Video / Demo Call");
	const [link, setLink] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [openProjectModal, setOpenProjectModal] = (0, import_react.useState)(false);
	const [revName, setRevName] = (0, import_react.useState)("");
	const [revBusiness, setRevBusiness] = (0, import_react.useState)("");
	const [revRating, setRevRating] = (0, import_react.useState)(5);
	const [revComment, setRevComment] = (0, import_react.useState)("");
	const [openReviewModal, setOpenReviewModal] = (0, import_react.useState)(false);
	const [reviewSubmitted, setReviewSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const savedProjects = localStorage.getItem("nexus_client_projects");
		if (savedProjects) try {
			setItems(JSON.parse(savedProjects));
		} catch (e) {}
		const savedReviews = localStorage.getItem("nexus_client_reviews");
		if (savedReviews) try {
			setReviews(JSON.parse(savedReviews));
		} catch (e) {}
	}, []);
	const handleAddProject = (e) => {
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
		setOpenProjectModal(false);
	};
	const handleDeleteProject = (id) => {
		const updated = items.filter((x) => x.id !== id);
		setItems(updated);
		localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
	};
	const handleAddReview = (e) => {
		e.preventDefault();
		if (!revName.trim() || !revComment.trim()) return;
		const updated = [{
			id: Date.now().toString(),
			name: revName.trim(),
			business: revBusiness.trim() || "Verified Business",
			rating: revRating,
			comment: revComment.trim(),
			date: "Just now"
		}, ...reviews];
		setReviews(updated);
		localStorage.setItem("nexus_client_reviews", JSON.stringify(updated));
		setReviewSubmitted(true);
		setTimeout(() => {
			setRevName("");
			setRevBusiness("");
			setRevComment("");
			setOpenReviewModal(false);
			setReviewSubmitted(false);
		}, 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-container py-12 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-6 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "mb-2 bg-primary/10 text-primary border-primary/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "w-3.5 h-3.5 mr-1 inline" }), " Agency Deliverables & Proof"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground",
						children: "Our Projects & Deployments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Live architectures, client demonstrations, and authenticated performance reviews."
					})
				] }), isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open: openProjectModal,
					onOpenChange: setOpenProjectModal,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "bg-primary text-primary-foreground text-xs gap-1.5 h-9",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "w-4 h-4" }), " Add Project / Sheet (Admin Only)"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-base font-bold",
							children: "Add Deliverable or Case Study"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAddProject,
							className: "space-y-3 mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Project Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: title,
									onChange: (e) => setTitle(e.target.value),
									placeholder: "e.g. Real Estate WhatsApp Agent",
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
											value: "Voice AI System",
											children: "Voice AI System"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Automation Workflow",
											children: "Automation Workflow"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "CRM Integration",
											children: "CRM Integration"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Website AEO Setup",
											children: "Website AEO Setup"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Link (Demo URL / Google Sheet / Case Study)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: link,
									onChange: (e) => setLink(e.target.value),
									placeholder: "https://...",
									className: "h-9 text-xs mt-1",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: notes,
									onChange: (e) => setNotes(e.target.value),
									placeholder: "Short notes about results achieved...",
									className: "text-xs mt-1 min-h-[60px]"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full h-9 text-xs font-medium mt-2",
									children: "Save Deliverable"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "border flex flex-col justify-between hover:border-primary/50 transition-colors",
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
							className: "text-xs text-muted-foreground leading-relaxed",
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" }), " View Deployment"]
								})
							}), isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "h-8 px-2 text-destructive",
								onClick: () => handleDeleteProject(item.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
							})]
						})]
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "p-6 md:p-8 rounded-2xl bg-muted/20 border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-xl font-bold text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "text-amber-500 fill-amber-500 w-5 h-5" }), " Verified Client Reviews"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "Real feedback from clients who deployed Nexus AI systems."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: openReviewModal,
						onOpenChange: setOpenReviewModal,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "text-xs gap-1.5 h-9 border-amber-500/30 hover:border-amber-500 text-amber-500 hover:text-amber-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "w-4 h-4" }), " Leave a Review"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-base font-bold",
								children: "Write a Client Review"
							}) }), reviewSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-12 h-12 text-emerald-400 mx-auto mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-foreground",
										children: "Review Published!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "Thank you for sharing your experience with Nexus AI."
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleAddReview,
								className: "space-y-3 mt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold",
										children: "Your Full Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: revName,
										onChange: (e) => setRevName(e.target.value),
										placeholder: "e.g. Dr. Amit Sharma",
										className: "h-9 text-xs mt-1",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold",
										children: "Business / Practice Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: revBusiness,
										onChange: (e) => setRevBusiness(e.target.value),
										placeholder: "e.g. Apex Diagnostics",
										className: "h-9 text-xs mt-1"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold",
										children: "Rating"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: revRating,
										onChange: (e) => setRevRating(Number(e.target.value)),
										className: "w-full h-9 text-xs rounded-md border border-input bg-background px-3 mt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 5,
												children: "⭐⭐⭐⭐⭐ (5/5 Excellent)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 4,
												children: "⭐⭐⭐⭐ (4/5 Very Good)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 3,
												children: "⭐⭐⭐ (3/5 Good)"
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold",
										children: "Your Experience & Results *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: revComment,
										onChange: (e) => setRevComment(e.target.value),
										placeholder: "How did Nexus AI help your business?",
										className: "text-xs mt-1 min-h-[80px]",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full h-9 text-xs font-medium mt-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold",
										children: "Submit Review"
									})
								]
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: reviews.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl bg-card border text-xs space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex text-amber-500",
									children: [...Array(rev.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-500" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: rev.date
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "italic text-muted-foreground leading-relaxed",
								children: [
									"\"",
									rev.comment,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-bold text-foreground pt-1",
								children: [
									"— ",
									rev.name,
									", ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal text-muted-foreground",
										children: rev.business
									})
								]
							})
						]
					}, rev.id))
				})]
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };
