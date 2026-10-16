import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Archive, ArchiveRestore, Download, LogOut, Trash2, UploadCloud } from "lucide-react";
import { useRef, useState, type DragEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/client";
import { LeadDeliveryPanel } from "@/components/lead-delivery-panel";
import { bucketFor, categories, categoryMeta, formatDate, formatSize, visibilities } from "@/lib/resource-meta";

export const Route = createFileRoute("/_authenticated/admin/resources")({
  head: () => ({ meta: [
    { title: "Resource Admin — NexusAIAgency" },
    { name: "description", content: "Manage NexusAIAgency resources, files and client projects." },
    { property: "og:title", content: "Resource Admin — NexusAIAgency" },
    { property: "og:description", content: "Private admin panel for NexusAIAgency resources." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex" },
  ] }),
  component: AdminResources,
});

const selectCls = "h-9 w-full rounded-md border border-input bg-background px-3 text-sm";

function AdminResources() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const isAdmin = useQuery({
    queryKey: ["is-admin", user.id],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      if (error) throw error;
      return Boolean(data);
    },
  });
  const list = useQuery({
    queryKey: ["admin-resources"],
    enabled: isAdmin.data === true,
    queryFn: async () => {
      const { data, error } = await supabase.from("resources").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const [category, setCategory] = useState("document");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const signOut = async () => { await supabase.auth.signOut(); qc.clear(); navigate({ to: "/auth" }); };

  if (isAdmin.isLoading) return <div className="site-container section-pad text-muted-foreground">Checking access…</div>;
  if (!isAdmin.data) return (
    <div className="site-container section-pad max-w-xl">
      <h1 className="font-display text-2xl font-semibold">Admin access required</h1>
      <p className="mt-3 text-muted-foreground">You're signed in as {user.email}, but this account isn't an admin.</p>
      <Button variant="outline" className="mt-6" onClick={signOut}><LogOut /> Sign out</Button>
    </div>
  );

  const onDrop = (e: DragEvent) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => { const v = String(fd.get(k) ?? "").trim(); return v || null; };
    const title = get("title");
    const visibility = String(fd.get("visibility") ?? "public");
    const external_url = get("external_url");
    if (!title) return setMsg({ ok: false, text: "Please add a title." });
    if (external_url && !/^https?:\/\//i.test(external_url)) return setMsg({ ok: false, text: "Embed link must start with http:// or https://" });
    setBusy(true); setMsg(null);
    let upload: { bucket: string; file_path: string; file_name: string; file_size: number; mime_type: string } | null = null;
    if (file) {
      const bucket = bucketFor(visibility);
      const path = `${category}/${Date.now()}-${file.name.replace(/[^\w.-]+/g, "_")}`;
      const { error } = await supabase.storage.from(bucket).upload(path, file, file.type ? { contentType: file.type } : undefined);
      if (error) { setBusy(false); return setMsg({ ok: false, text: `Upload failed: ${error.message}` }); }
      upload = { bucket, file_path: path, file_name: file.name, file_size: file.size, mime_type: file.type || "application/octet-stream" };
    }
    const { error } = await supabase.from("resources").insert({
      title, category, visibility, external_url,
      description: get("description"),
      tags: (get("tags") ?? "").split(",").map((t) => t.trim()).filter(Boolean),
      client_name: get("client_name"), industry: get("industry"), problem: get("problem"),
      solution: get("solution"), outcome: get("outcome"), completion_date: get("completion_date"),
      ...upload,
    });
    setBusy(false);
    if (error) {
      if (upload) await supabase.storage.from(upload.bucket).remove([upload.file_path]);
      return setMsg({ ok: false, text: `Could not save: ${error.message}` });
    }
    form.reset(); setFile(null); setCategory("document");
    setMsg({ ok: true, text: "Resource saved." });
    qc.invalidateQueries({ queryKey: ["admin-resources"] });
    qc.invalidateQueries({ queryKey: ["public-resources"] });
  }

  type Row = NonNullable<typeof list.data>[number];
  const refresh = () => { qc.invalidateQueries({ queryKey: ["admin-resources"] }); qc.invalidateQueries({ queryKey: ["public-resources"] }); };
  const toggleArchive = async (r: Row) => { await supabase.from("resources").update({ archived: !r.archived }).eq("id", r.id); refresh(); };
  const remove = async (r: Row) => {
    if (!window.confirm(`Delete "${r.title}" permanently?`)) return;
    if (r.bucket && r.file_path) await supabase.storage.from(r.bucket).remove([r.file_path]);
    await supabase.from("resources").delete().eq("id", r.id); refresh();
  };
  const open = async (r: Row) => {
    if (r.bucket && r.file_path) {
      const { data } = await supabase.storage.from(r.bucket).createSignedUrl(r.file_path, 600);
      if (data?.signedUrl) window.open(data.signedUrl, "_blank", "noopener");
    } else if (r.external_url) window.open(r.external_url, "_blank", "noopener");
  };

  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div><p className="eyebrow">Admin</p><h1 className="mt-2 font-display text-3xl font-semibold">Resource manager</h1></div>
          <Button variant="outline" onClick={signOut}><LogOut /> Sign out</Button>
        </div>

        <form onSubmit={onSubmit} className="glass-panel mt-8 grid gap-5 p-6 sm:p-8 lg:grid-cols-2">
          <div
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)} onDrop={onDrop}
            onClick={() => inputRef.current?.click()} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") inputRef.current?.click(); }}
            role="button" tabIndex={0} aria-label="Choose or drop a file"
            className={`flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-6 text-center lg:col-span-2 ${drag ? "border-primary bg-surface" : "border-border"}`}
          >
            <UploadCloud className="size-7 text-primary" />
            <p className="mt-3 text-sm">{file ? `${file.name} · ${formatSize(file.size)}` : "Drag & drop a PDF, MP4 or document, or click to choose"}</p>
            <p className="mt-1 text-xs text-muted-foreground">Max 50 MB. Optional if you add an embed link.</p>
            <input ref={inputRef} type="file" className="sr-only" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.png,.jpg,.jpeg,video/mp4,video/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          </div>
          <div className="space-y-2"><Label htmlFor="title">Title *</Label><Input id="title" name="title" required maxLength={200} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2"><Label htmlFor="category">Category</Label><select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className={selectCls}>{categories.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}</select></div>
            <div className="space-y-2"><Label htmlFor="visibility">Visibility</Label><select id="visibility" name="visibility" defaultValue="public" className={selectCls}>{visibilities.map((v) => <option key={v.value} value={v.value}>{v.label}</option>)}</select></div>
          </div>
          <div className="space-y-2 lg:col-span-2"><Label htmlFor="description">Description</Label><Textarea id="description" name="description" rows={3} maxLength={2000} /></div>
          <div className="space-y-2"><Label htmlFor="tags">Tags (comma separated)</Label><Input id="tags" name="tags" placeholder="crm, calling, real estate" /></div>
          <div className="space-y-2"><Label htmlFor="external_url">Embed / video link</Label><Input id="external_url" name="external_url" type="url" placeholder="https://youtube.com/..." /></div>
          {category === "project" && <>
            <div className="space-y-2"><Label htmlFor="client_name">Client name (or anonymized)</Label><Input id="client_name" name="client_name" /></div>
            <div className="space-y-2"><Label htmlFor="industry">Industry</Label><Input id="industry" name="industry" /></div>
            <div className="space-y-2"><Label htmlFor="problem">Problem</Label><Textarea id="problem" name="problem" rows={2} /></div>
            <div className="space-y-2"><Label htmlFor="solution">Solution</Label><Textarea id="solution" name="solution" rows={2} /></div>
            <div className="space-y-2"><Label htmlFor="outcome">Outcome</Label><Textarea id="outcome" name="outcome" rows={2} /></div>
            <div className="space-y-2"><Label htmlFor="completion_date">Completion date</Label><Input id="completion_date" name="completion_date" type="date" /></div>
          </>}
          <div className="flex items-center gap-4 lg:col-span-2">
            <Button type="submit" disabled={busy}>{busy ? "Saving…" : "Save resource"}</Button>
            {msg && <p role="status" className={`text-sm ${msg.ok ? "text-primary" : "text-destructive"}`}>{msg.text}</p>}
          </div>
        </form>

        <div className="mt-10 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-surface text-left text-xs uppercase text-muted-foreground"><tr><th className="p-3">Name</th><th className="p-3">Category</th><th className="p-3">Visibility</th><th className="p-3">Size</th><th className="p-3">Uploaded</th><th className="p-3 text-right">Actions</th></tr></thead>
            <tbody>
              {list.isLoading && <tr><td colSpan={6} className="p-4 text-muted-foreground">Loading…</td></tr>}
              {list.data?.length === 0 && <tr><td colSpan={6} className="p-4 text-muted-foreground">No resources yet.</td></tr>}
              {list.data?.map((r: any) => (
                <tr key={r.id} className={`border-t border-border ${r.archived ? "opacity-50" : ""}`}>
                  <td className="p-3"><p className="font-medium">{r.title}</p><p className="text-xs text-muted-foreground">{r.file_name ?? r.external_url ?? "—"}</p></td>
                  <td className="p-3">{categoryMeta(r.category).label}</td>
                  <td className="p-3">{visibilities.find((v) => v.value === r.visibility)?.label}{r.archived && " · Archived"}</td>
                  <td className="p-3">{formatSize(r.file_size)}</td>
                  <td className="p-3">{formatDate(r.created_at)}</td>
                  <td className="p-3"><div className="flex justify-end gap-1">
                    {(r.file_path || r.external_url) && <Button size="icon" variant="ghost" onClick={() => open(r)} aria-label={`Open ${r.title}`}><Download /></Button>}
                    <Button size="icon" variant="ghost" onClick={() => toggleArchive(r)} aria-label={r.archived ? "Restore" : "Archive"}>{r.archived ? <ArchiveRestore /> : <Archive />}</Button>
                    <Button size="icon" variant="ghost" onClick={() => remove(r)} aria-label={`Delete ${r.title}`}><Trash2 /></Button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <LeadDeliveryPanel />
      </div>
    </section>
  );
}
