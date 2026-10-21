import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { B as Download, E as LogOut, U as CloudUpload, dt as ArchiveRestore, i as Trash2, m as RefreshCw, ut as Archive } from "../_libs/lucide-react.mjs";
import { G as isRedirect, S as useRouter, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-B3V5iLmQ.mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { t as supabase } from "./client-BmndfN-r.mjs";
import { t as Route } from "./admin.resources-CvgOEDYK.mjs";
import { t as Label } from "./label-DvayCU8F.mjs";
import { t as Textarea } from "./textarea-DFifGPW9.mjs";
import { t as createSsrRpc } from "./createSsrRpc-fQERfvAR.mjs";
import { a as formatSize, i as formatDate, n as categories, r as categoryMeta, s as visibilities, t as bucketFor } from "./resource-meta-B-OmFLLC.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.resources-D5VhIibL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("e211e8c27eee0a1053129b7769a37cb2e31b3dc869a84a1c647eee19cfb57993"));
/** Admin-only: retry Make.com delivery for leads still pending or failed. */
var retryLeadDeliveries = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("42176c07eea664427d537ff5050dee15cf8f1a4c1142eae678e285658a891bb3"));
/** Admin-only: count leads whose Make.com delivery has not succeeded. */
var getLeadDeliveryStatus = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("31f8fe30c57104788f60876dbfaa936f81fe49d6063d86577b443bee10c2545d"));
/** Admin view of leads whose Make.com delivery has not succeeded yet, with a manual retry. */
function LeadDeliveryPanel() {
	const qc = useQueryClient();
	const load = useServerFn(getLeadDeliveryStatus);
	const retry = useServerFn(retryLeadDeliveries);
	const pending = useQuery({
		queryKey: ["lead-deliveries"],
		queryFn: () => load()
	});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	const onRetry = async () => {
		setBusy(true);
		setMsg("");
		try {
			const r = await retry();
			setMsg(`Retried ${r.attempted}; delivered ${r.sent}.`);
		} catch {
			setMsg("Retry failed. Please try again.");
		}
		setBusy(false);
		qc.invalidateQueries({ queryKey: ["lead-deliveries"] });
	};
	const rows = pending.data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel mt-10 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Lead delivery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-xl font-semibold",
					children: "Leads not yet delivered to Make.com"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: onRetry,
					disabled: busy || rows.length === 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: busy ? "animate-spin" : "" }), " Retry delivery"]
				})]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "mt-3 text-sm text-primary",
				children: msg
			}),
			pending.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "Loading…"
			}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "All captured leads have been delivered."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2 text-sm",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-border p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: r.name
						}),
						" · ",
						r.source,
						" · ",
						r.webhook_status,
						" · ",
						r.webhook_attempts,
						" attempt(s)",
						r.webhook_last_error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: r.webhook_last_error
						})
					]
				}, r.id))
			})
		]
	});
}
var selectCls = "h-9 w-full rounded-md border border-input bg-background px-3 text-sm";
function AdminResources() {
	const { user } = Route.useRouteContext();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const isAdmin = useQuery({
		queryKey: ["is-admin", user.id],
		queryFn: async () => {
			const { data, error } = await supabase.rpc("has_role", {
				_user_id: user.id,
				_role: "admin"
			});
			if (error) throw error;
			return Boolean(data);
		}
	});
	const list = useQuery({
		queryKey: ["admin-resources"],
		enabled: isAdmin.data === true,
		queryFn: async () => {
			const { data, error } = await supabase.from("resources").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const [file, setFile] = (0, import_react.useState)(null);
	const [drag, setDrag] = (0, import_react.useState)(false);
	const [category, setCategory] = (0, import_react.useState)("document");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const inputRef = (0, import_react.useRef)(null);
	const signOut = async () => {
		await supabase.auth.signOut();
		qc.clear();
		navigate({ to: "/auth" });
	};
	if (isAdmin.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "site-container section-pad text-muted-foreground",
		children: "Checking access…"
	});
	if (!isAdmin.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-container section-pad max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Admin access required"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted-foreground",
				children: [
					"You're signed in as ",
					user.email,
					", but this account isn't an admin."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: "mt-6",
				onClick: signOut,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), " Sign out"]
			})
		]
	});
	const onDrop = (e) => {
		e.preventDefault();
		setDrag(false);
		const f = e.dataTransfer.files[0];
		if (f) setFile(f);
	};
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		const get = (k) => {
			return String(fd.get(k) ?? "").trim() || null;
		};
		const title = get("title");
		const visibility = String(fd.get("visibility") ?? "public");
		const external_url = get("external_url");
		if (!title) return setMsg({
			ok: false,
			text: "Please add a title."
		});
		if (external_url && !/^https?:\/\//i.test(external_url)) return setMsg({
			ok: false,
			text: "Embed link must start with http:// or https://"
		});
		setBusy(true);
		setMsg(null);
		let upload = null;
		if (file) {
			const bucket = bucketFor(visibility);
			const path = `${category}/${Date.now()}-${file.name.replace(/[^\w.-]+/g, "_")}`;
			const { error } = await supabase.storage.from(bucket).upload(path, file, file.type ? { contentType: file.type } : void 0);
			if (error) {
				setBusy(false);
				return setMsg({
					ok: false,
					text: `Upload failed: ${error.message}`
				});
			}
			upload = {
				bucket,
				file_path: path,
				file_name: file.name,
				file_size: file.size,
				mime_type: file.type || "application/octet-stream"
			};
		}
		const { error } = await supabase.from("resources").insert({
			title,
			category,
			visibility,
			external_url,
			description: get("description"),
			tags: (get("tags") ?? "").split(",").map((t) => t.trim()).filter(Boolean),
			client_name: get("client_name"),
			industry: get("industry"),
			problem: get("problem"),
			solution: get("solution"),
			outcome: get("outcome"),
			completion_date: get("completion_date"),
			...upload
		});
		setBusy(false);
		if (error) {
			if (upload) await supabase.storage.from(upload.bucket).remove([upload.file_path]);
			return setMsg({
				ok: false,
				text: `Could not save: ${error.message}`
			});
		}
		form.reset();
		setFile(null);
		setCategory("document");
		setMsg({
			ok: true,
			text: "Resource saved."
		});
		qc.invalidateQueries({ queryKey: ["admin-resources"] });
		qc.invalidateQueries({ queryKey: ["public-resources"] });
	}
	const refresh = () => {
		qc.invalidateQueries({ queryKey: ["admin-resources"] });
		qc.invalidateQueries({ queryKey: ["public-resources"] });
	};
	const toggleArchive = async (r) => {
		await supabase.from("resources").update({ archived: !r.archived }).eq("id", r.id);
		refresh();
	};
	const remove = async (r) => {
		if (!window.confirm(`Delete "${r.title}" permanently?`)) return;
		if (r.bucket && r.file_path) await supabase.storage.from(r.bucket).remove([r.file_path]);
		await supabase.from("resources").delete().eq("id", r.id);
		refresh();
	};
	const open = async (r) => {
		if (r.bucket && r.file_path) {
			const { data } = await supabase.storage.from(r.bucket).createSignedUrl(r.file_path, 600);
			if (data?.signedUrl) window.open(data.signedUrl, "_blank", "noopener");
		} else if (r.external_url) window.open(r.external_url, "_blank", "noopener");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Admin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Resource manager"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: signOut,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), " Sign out"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "glass-panel mt-8 grid gap-5 p-6 sm:p-8 lg:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onDragOver: (e) => {
								e.preventDefault();
								setDrag(true);
							},
							onDragLeave: () => setDrag(false),
							onDrop,
							onClick: () => inputRef.current?.click(),
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
							},
							role: "button",
							tabIndex: 0,
							"aria-label": "Choose or drop a file",
							className: `flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-6 text-center lg:col-span-2 ${drag ? "border-primary bg-surface" : "border-border"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-7 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm",
									children: file ? `${file.name} · ${formatSize(file.size)}` : "Drag & drop a PDF, MP4 or document, or click to choose"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Max 50 MB. Optional if you add an embed link."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: inputRef,
									type: "file",
									className: "sr-only",
									accept: ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.png,.jpg,.jpeg,video/mp4,video/*",
									onChange: (e) => setFile(e.target.files?.[0] ?? null)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "title",
								children: "Title *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "title",
								name: "title",
								required: true,
								maxLength: 200
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "category",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "category",
									name: "category",
									value: category,
									onChange: (e) => setCategory(e.target.value),
									className: selectCls,
									children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c.value,
										children: c.label
									}, c.value))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "visibility",
									children: "Visibility"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "visibility",
									name: "visibility",
									defaultValue: "public",
									className: selectCls,
									children: visibilities.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: v.value,
										children: v.label
									}, v.value))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "description",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "description",
								name: "description",
								rows: 3,
								maxLength: 2e3
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "tags",
								children: "Tags (comma separated)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "tags",
								name: "tags",
								placeholder: "crm, calling, real estate"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "external_url",
								children: "Embed / video link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "external_url",
								name: "external_url",
								type: "url",
								placeholder: "https://youtube.com/..."
							})]
						}),
						category === "project" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "client_name",
									children: "Client name (or anonymized)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "client_name",
									name: "client_name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "industry",
									children: "Industry"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "industry",
									name: "industry"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "problem",
									children: "Problem"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "problem",
									name: "problem",
									rows: 2
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "solution",
									children: "Solution"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "solution",
									name: "solution",
									rows: 2
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "outcome",
									children: "Outcome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "outcome",
									name: "outcome",
									rows: 2
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "completion_date",
									children: "Completion date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "completion_date",
									name: "completion_date",
									type: "date"
								})]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: busy,
								children: busy ? "Saving…" : "Save resource"
							}), msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "status",
								className: `text-sm ${msg.ok ? "text-primary" : "text-destructive"}`,
								children: msg.text
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-x-auto rounded-md border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[720px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-surface text-left text-xs uppercase text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3",
									children: "Visibility"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3",
									children: "Size"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3",
									children: "Uploaded"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
							list.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 6,
								className: "p-4 text-muted-foreground",
								children: "Loading…"
							}) }),
							list.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 6,
								className: "p-4 text-muted-foreground",
								children: "No resources yet."
							}) }),
							list.data?.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: `border-t border-border ${r.archived ? "opacity-50" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: r.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: r.file_name ?? r.external_url ?? "—"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: categoryMeta(r.category).label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-3",
										children: [visibilities.find((v) => v.value === r.visibility)?.label, r.archived && " · Archived"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: formatSize(r.file_size)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: formatDate(r.created_at)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-end gap-1",
											children: [
												(r.file_path || r.external_url) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "icon",
													variant: "ghost",
													onClick: () => open(r),
													"aria-label": `Open ${r.title}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "icon",
													variant: "ghost",
													onClick: () => toggleArchive(r),
													"aria-label": r.archived ? "Restore" : "Archive",
													children: r.archived ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveRestore, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "icon",
													variant: "ghost",
													onClick: () => remove(r),
													"aria-label": `Delete ${r.title}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
												})
											]
										})
									})
								]
							}, r.id))
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadDeliveryPanel, {})
			]
		})
	});
}
//#endregion
export { AdminResources as component };
