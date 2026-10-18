import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FolderGit2, ExternalLink, Star, PlusCircle, Trash2 } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects & Client Work — NexusAIAgency" },
      { name: "description", content: "Explore our real AI client deliverables, sheets, videos, and verified reviews." },
    ],
  }),
  component: ProjectsPage,
});

interface CustomProject {
  id: string;
  title: string;
  type: string;
  link: string;
  notes: string;
}

function ProjectsPage() {
  const [items, setItems] = useState<CustomProject[]>([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Video / Demo Call");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nexus_client_projects");
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch (e) { console.error(e); }
    }
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !link.trim()) return;

    const newItem: CustomProject = {
      id: Date.now().toString(),
      title,
      type,
      link,
      notes,
    };

    const updated = [newItem, ...items];
    setItems(updated);
    localStorage.setItem("nexus_client_projects", JSON.stringify(updated));

    setTitle("");
    setLink("");
    setNotes("");
    setOpen(false);
  };

  const handleDelete = (id: string) => {
    const updated = items.filter((x) => x.id !== id);
    setItems(updated);
    localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
  };

  return (
    <div className="site-container py-12 max-w-6xl">
      {/* Top Header & Upload Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-6 border-b border-border">
        <div>
          <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
            <FolderGit2 className="w-3.5 h-3.5 mr-1 inline" /> Projects Vault
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Projects &amp; Deliverables
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage and view live project deliverables, client sheets, and video demonstrations.
          </p>
        </div>

        {/* Upload / Add Project Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground text-xs gap-1.5 h-9">
              <PlusCircle className="w-4 h-4" /> Add Project / File / Sheet
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-base font-bold">Add Deliverable or Project</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAdd} className="space-y-3 mt-2">
              <div>
                <label className="text-xs font-semibold">Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Dental Clinic Sofia Call Recording"
                  className="h-9 text-xs mt-1"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold">Deliverable Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full h-9 text-xs rounded-md border border-input bg-background px-3 mt-1"
                >
                  <option value="Video / Demo Call">Video / Demo Call</option>
                  <option value="Google Sheet / Doc">Google Sheet / Doc</option>
                  <option value="Live Client Website">Live Client Website</option>
                  <option value="Prompt / SOP">Prompt / SOP</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold">Link (YouTube, Loom, Google Sheet, or Web URL)</label>
                <Input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://..."
                  className="h-9 text-xs mt-1"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold">Description / Notes</label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Short notes about this deliverable..."
                  className="text-xs mt-1 min-h-[60px]"
                />
              </div>
              <Button type="submit" className="w-full h-9 text-xs font-medium mt-2">
                Save to Vault
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Projects Display List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {items.length === 0 ? (
          <div className="col-span-full text-center py-12 border border-dashed rounded-2xl text-muted-foreground text-sm">
            No projects added yet. Click <strong>"Add Project / File / Sheet"</strong> above to upload your first video, Google sheet, or link.
          </div>
        ) : (
          items.map((item) => (
            <Card key={item.id} className="border flex flex-col justify-between">
              <CardHeader className="pb-2">
                <Badge variant="outline" className="w-fit text-[10px] mb-1">{item.type}</Badge>
                <CardTitle className="text-base font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                {item.notes && <p className="text-xs text-muted-foreground">{item.notes}</p>}
                <div className="pt-2 border-t flex items-center justify-between gap-2">
                  <a href={item.link} target="_blank" rel="noreferrer" className="flex-1">
                    <Button variant="default" size="sm" className="w-full text-xs h-8 gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" /> View Deliverable
                    </Button>
                  </a>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-destructive" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Reviews Section */}
      <section className="p-8 rounded-2xl bg-muted/30 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Star className="text-amber-500 fill-amber-500 w-5 h-5" /> Client Reviews &amp; Verification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-card border text-xs space-y-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-amber-500" />))}
            </div>
            <p className="italic text-muted-foreground">
              "Nexus AI automated our clinic missed calls completely. Sofia handles 20+ patient inquiries every evening without staff intervention."
            </p>
            <p className="font-bold text-foreground">— Dr. R. Verma, Dental Practice</p>
          </div>
          <div className="p-4 rounded-xl bg-card border text-xs space-y-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-amber-500" />))}
            </div>
            <p className="italic text-muted-foreground">
              "The Aanya voice agent screens buyers on budget and location before they book site visits, saving our agents 15+ hours weekly."
            </p>
            <p className="font-bold text-foreground">— Urban Nest Properties</p>
          </div>
        </div>
      </section>
    </div>
  );
}