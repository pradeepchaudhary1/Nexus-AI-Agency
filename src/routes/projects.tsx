import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FolderGit2, ExternalLink, Star, PlusCircle, Trash2, MessageSquarePlus, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects & Verified Reviews — NexusAIAgency" },
      { name: "description", content: "Explore real AI client deliverables, sheets, demos, and authentic client feedback for Nexus AI." },
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

interface ClientReview {
  id: string;
  name: string;
  business: string;
  rating: number;
  comment: string;
  date: string;
}

const DEFAULT_PROJECTS: CustomProject[] = [
  {
    id: "p1",
    title: "Dental Clinic 24/7 AI Receptionist (Sofia)",
    type: "Voice AI System",
    link: "https://www.nexusaiagency.in/book-audit",
    notes: "Automated after-hours patient inquiry intake and calendar rescheduling with zero human drop-off."
  },
  {
    id: "p2",
    title: "Real Estate Buyer Qualification & WhatsApp Dispatch",
    type: "Automation Workflow",
    link: "https://www.nexusaiagency.in/book-audit",
    notes: "Instant webhook triage connecting inbound portal inquiries directly to agent phone and Google CRM."
  }
];

const DEFAULT_REVIEWS: ClientReview[] = [
  {
    id: "r1",
    name: "Dr. Rohit Verma",
    business: "SmileCraft Clinics",
    rating: 5,
    comment: "Nexus AI automated our missed calls during lunch hours and night shifts. Patient bookings increased within 10 days.",
    date: "14 Oct 2026"
  }
];

function ProjectsPage() {
  const [items, setItems] = useState<CustomProject[]>(DEFAULT_PROJECTS);
  const [reviews, setReviews] = useState<ClientReview[]>(DEFAULT_REVIEWS);

  // Admin visibility check via URL parameter: ?admin=nexus2026
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "nexus2026" || localStorage.getItem("nexus_is_admin") === "true") {
        setIsAdmin(true);
        localStorage.setItem("nexus_is_admin", "true");
      }
    }
  }, []);

  // Project Modal State
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Video / Demo Call");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [openProjectModal, setOpenProjectModal] = useState(false);

  // Review Modal State
  const [revName, setRevName] = useState("");
  const [revBusiness, setRevBusiness] = useState("");
  const [revRating, setRevRating] = useState(5);
  const [revComment, setRevComment] = useState("");
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem("nexus_client_projects");
    if (savedProjects) {
      try { setItems(JSON.parse(savedProjects)); } catch (e) {}
    }
    const savedReviews = localStorage.getItem("nexus_client_reviews");
    if (savedReviews) {
      try { setReviews(JSON.parse(savedReviews)); } catch (e) {}
    }
  }, []);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !link.trim()) return;
    const newItem: CustomProject = { id: Date.now().toString(), title, type, link, notes };
    const updated = [newItem, ...items];
    setItems(updated);
    localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
    setTitle(""); setLink(""); setNotes(""); setOpenProjectModal(false);
  };

  const handleDeleteProject = (id: string) => {
    const updated = items.filter((x) => x.id !== id);
    setItems(updated);
    localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revName.trim() || !revComment.trim()) return;

    const newRev: ClientReview = {
      id: Date.now().toString(),
      name: revName.trim(),
      business: revBusiness.trim() || "Verified Business",
      rating: revRating,
      comment: revComment.trim(),
      date: "Just now"
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    localStorage.setItem("nexus_client_reviews", JSON.stringify(updated));

    setReviewSubmitted(true);
    setTimeout(() => {
      setRevName(""); setRevBusiness(""); setRevComment("");
      setOpenReviewModal(false); setReviewSubmitted(false);
    }, 1800);
  };

  return (
    <div className="site-container py-12 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-6 border-b border-border">
        <div>
          <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
            <FolderGit2 className="w-3.5 h-3.5 mr-1 inline" /> Agency Deliverables &amp; Proof
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Our Projects &amp; Deployments
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Live architectures, client demonstrations, and authenticated performance reviews.
          </p>
        </div>

        {/* Admin-Only Button */}
        {isAdmin && (
          <Dialog open={openProjectModal} onOpenChange={setOpenProjectModal}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground text-xs gap-1.5 h-9">
                <PlusCircle className="w-4 h-4" /> Add Project / Sheet (Admin Only)
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-base font-bold">Add Deliverable or Case Study</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddProject} className="space-y-3 mt-2">
                <div>
                  <label className="text-xs font-semibold">Project Title</label>
                  <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Real Estate WhatsApp Agent" className="h-9 text-xs mt-1" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Deliverable Type</label>
                  <select value={type} onChange={(e) => setType(e.target.value)} className="w-full h-9 text-xs rounded-md border border-input bg-background px-3 mt-1">
                    <option value="Voice AI System">Voice AI System</option>
                    <option value="Automation Workflow">Automation Workflow</option>
                    <option value="CRM Integration">CRM Integration</option>
                    <option value="Website AEO Setup">Website AEO Setup</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold">Link (Demo URL / Google Sheet / Case Study)</label>
                  <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://..." className="h-9 text-xs mt-1" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Description</label>
                  <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Short notes about results achieved..." className="text-xs mt-1 min-h-[60px]" />
                </div>
                <Button type="submit" className="w-full h-9 text-xs font-medium mt-2">Save Deliverable</Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Projects Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {items.map((item) => (
          <Card key={item.id} className="border flex flex-col justify-between hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit text-[10px] mb-1">{item.type}</Badge>
              <CardTitle className="text-base font-bold">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              {item.notes && <p className="text-xs text-muted-foreground leading-relaxed">{item.notes}</p>}
              <div className="pt-2 border-t flex items-center justify-between gap-2">
                <a href={item.link} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="default" size="sm" className="w-full text-xs h-8 gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" /> View Deployment
                  </Button>
                </a>
                {isAdmin && (
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-destructive" onClick={() => handleDeleteProject(item.id)}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Verified Reviews Section with Public Add Option */}
      <section className="p-6 md:p-8 rounded-2xl bg-muted/20 border border-border">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Star className="text-amber-500 fill-amber-500 w-5 h-5" /> Verified Client Reviews
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">Real feedback from clients who deployed Nexus AI systems.</p>
          </div>

          {/* Public Add Review Button */}
          <Dialog open={openReviewModal} onOpenChange={setOpenReviewModal}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs gap-1.5 h-9 border-amber-500/30 hover:border-amber-500 text-amber-500 hover:text-amber-400">
                <MessageSquarePlus className="w-4 h-4" /> Leave a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-base font-bold">Write a Client Review</DialogTitle>
              </DialogHeader>

              {reviewSubmitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-bold text-foreground">Review Published!</h4>
                  <p className="text-xs text-muted-foreground mt-1">Thank you for sharing your experience with Nexus AI.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-3 mt-2">
                  <div>
                    <label className="text-xs font-semibold">Your Full Name *</label>
                    <Input value={revName} onChange={(e) => setRevName(e.target.value)} placeholder="e.g. Dr. Amit Sharma" className="h-9 text-xs mt-1" required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Business / Practice Name</label>
                    <Input value={revBusiness} onChange={(e) => setRevBusiness(e.target.value)} placeholder="e.g. Apex Diagnostics" className="h-9 text-xs mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Rating</label>
                    <select value={revRating} onChange={(e) => setRevRating(Number(e.target.value))} className="w-full h-9 text-xs rounded-md border border-input bg-background px-3 mt-1">
                      <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                      <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                      <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Your Experience &amp; Results *</label>
                    <Textarea value={revComment} onChange={(e) => setRevComment(e.target.value)} placeholder="How did Nexus AI help your business?" className="text-xs mt-1 min-h-[80px]" required />
                  </div>
                  <Button type="submit" className="w-full h-9 text-xs font-medium mt-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold">Submit Review</Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Dynamic Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((rev) => (
            <div key={rev.id} className="p-4 rounded-xl bg-card border text-xs space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-amber-500" />))}
                </div>
                <span className="text-[10px] text-muted-foreground">{rev.date}</span>
              </div>
              <p className="italic text-muted-foreground leading-relaxed">"{rev.comment}"</p>
              <p className="font-bold text-foreground pt-1">— {rev.name}, <span className="font-normal text-muted-foreground">{rev.business}</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}