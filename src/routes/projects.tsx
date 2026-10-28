import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { ExternalLink, Plus, Edit2, Trash2, Shield, Save, X, Sparkles, Filter, Globe, FileText, Video, Phone, MapPin, Building2, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

interface Project {
  id: string
  title: string
  category: string
  clientBusiness: string
  clientLocation: string
  clientPhone: string
  coverImage: string
  description: string
  deploymentType: 'website' | 'pdf' | 'video'
  deploymentUrl: string
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Dental Clinic 24/7 AI Receptionist (Sofia)',
    category: 'Voice AI System',
    clientBusiness: 'Apex Healthcare & Dental Clinic',
    clientLocation: 'Jaipur, Rajasthan, India',
    clientPhone: '+91 9876543210',
    coverImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    description: 'Automated after-hours patient inquiry intake, medical triage guardrails, and calendar rescheduling with zero human drop-off.',
    deploymentType: 'pdf',
    deploymentUrl: 'https://docs.google.com/document/d/1kzX_D2Z3TBfQmJ9Mw6xqDX4RYlXlfFSyv-9NcO34eX8/edit?usp=sharing',
  },
  {
    id: 'proj-2',
    title: 'UrbanNest Luxury Real Estate AI Portal',
    category: 'Website & AEO',
    clientBusiness: 'UrbanNest Properties & Builders',
    clientLocation: 'Mumbai & Austin, TX',
    clientPhone: '+91 8003469293',
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    description: 'Sub-second real estate search engine pre-configured with AEO schema, automated WhatsApp brochures, and buyer budget qualification.',
    deploymentType: 'website',
    deploymentUrl: 'https://urbannestproperties.lovable.app',
  },
  {
    id: 'proj-3',
    title: 'Glow & Go Studio 24/7 Booking Assistant',
    category: 'Voice AI & WhatsApp',
    clientBusiness: 'Glow & Go Salons & Spa',
    clientLocation: 'Delhi NCR, India',
    clientPhone: '+91 9166516942',
    coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    description: 'Automated appointment scheduler handling phone calls while stylists attend in-store clients, with automated WhatsApp reminders.',
    deploymentType: 'website',
    deploymentUrl: 'https://glow-go-studio.lovable.app',
  },
  {
    id: 'proj-4',
    title: 'NextRank Academy Counselling & Admission Engine',
    category: 'WhatsApp CRM & Voice',
    clientBusiness: 'NextRank Coaching Institute',
    clientLocation: 'Kota, Rajasthan, India',
    clientPhone: '+91 8003469293',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-channel speed-to-lead qualification system connecting incoming student inquiries to Google Sheets CRM with 60-second follow-up.',
    deploymentType: 'website',
    deploymentUrl: 'https://nextrankguide.lovable.app',
  },
]

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [pin, setPin] = useState('')
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search)
      if (p.get('admin') === 'true') setIsAdmin(true)
      const saved = localStorage.getItem('nexus_projects_db')
      if (saved) {
        try { setProjects(JSON.parse(saved)) } catch {}
      }
    }
  }, [])

  const saveProjectsToStorage = (updated: Project[]) => {
    setProjects(updated)
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexus_projects_db', JSON.stringify(updated))
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updated = projects.filter((p) => p.id !== id)
      saveProjectsToStorage(updated)
    }
  }

  const handleOpenAdd = () => {
    setEditingProject({
      id: 'proj-' + Date.now(),
      title: '',
      category: 'Voice AI System',
      clientBusiness: '',
      clientLocation: 'Jaipur, India',
      clientPhone: '',
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      description: '',
      deploymentType: 'website',
      deploymentUrl: '',
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (proj: Project) => {
    setEditingProject(proj)
    setIsModalOpen(true)
  }

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingProject) return
    const exists = projects.some((p) => p.id === editingProject.id)
    let updated: Project[]
    if (exists) {
      updated = projects.map((p) => (p.id === editingProject.id ? editingProject : p))
    } else {
      updated = [editingProject, ...projects]
    }
    saveProjectsToStorage(updated)
    setIsModalOpen(false)
    setEditingProject(null)
  }

  const categories = ['All', 'Voice AI System', 'Website & AEO', 'WhatsApp CRM & Voice', 'Voice AI & WhatsApp']
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  const getDeploymentIcon = (type: string) => {
    if (type === 'pdf') return <FileText className="w-4 h-4 text-amber-400" />
    if (type === 'video') return <Video className="w-4 h-4 text-red-400" />
    return <Globe className="w-4 h-4 text-cyan-400" />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      {/* Owner Admin Header Bar */}
      {isAdmin && (
        <div className="bg-amber-950/90 border-b border-amber-600/50 p-3 sticky top-0 z-50 text-xs backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <span className="font-bold text-amber-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> Owner Portfolio Manager
            </span>
            {!isUnlocked ? (
              <div className="flex gap-2">
                <input
                  type="password"
                  placeholder="Enter PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="bg-black/80 px-2.5 py-1 rounded border border-amber-600 text-white text-xs w-24 outline-none"
                />
                <button
                  onClick={() => {
                    if (pin === '2026') setIsUnlocked(true)
                    else alert('Incorrect PIN')
                  }}
                  className="bg-amber-600 px-3 py-1 rounded font-bold text-black"
                >
                  Unlock
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Admin Active
                </span>
                <button
                  onClick={handleOpenAdd}
                  className="bg-cyan-600 hover:bg-cyan-500 px-3.5 py-1.5 rounded-lg font-bold text-white flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add New Project
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Header */}
      <section className="pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
          <Sparkles className="w-4 h-4" /> Production Deployments & Case Studies
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Autonomous Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">In Action</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-8">
          Explore real-world voice agents, AEO-ready websites, and autonomous CRM pipelines deployed for healthcare, real estate, and service businesses worldwide.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition group flex flex-col justify-between"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>

                  {/* Owner Controls */}
                  {isAdmin && isUnlocked && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-lg border border-slate-700">
                      <button
                        onClick={() => handleOpenEdit(project)}
                        className="p-1 hover:text-cyan-400 text-slate-300 transition cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-1 hover:text-red-400 text-slate-300 transition cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-slate-300 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" /> {project.clientBusiness}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> {project.clientLocation}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 capitalize flex items-center gap-1.5">
                  {getDeploymentIcon(project.deploymentType)}
                  {project.deploymentType === 'pdf' ? 'Architecture PDF' : project.deploymentType === 'video' ? 'Walkthrough Video' : 'Live Platform'}
                </span>
                <a
                  href={project.deploymentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/40 text-cyan-300 hover:text-slate-950 font-bold text-xs transition duration-200"
                >
                  View Deployment <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Edit / Add Modal (Only for Owner) */}
      {isModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 text-left shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-cyan-400" /> Manage Project Deployment
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Project Title *</label>
                <input
                  required
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  placeholder="e.g. Dental Clinic 24/7 AI Receptionist (Sofia)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Category / Project Type *</label>
                  <select
                    value={editingProject.category}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                  >
                    <option>Voice AI System</option>
                    <option>Website & AEO</option>
                    <option>WhatsApp CRM & Voice</option>
                    <option>Voice AI & WhatsApp</option>
                    <option>Full Autonomous Suite</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Client Business Name *</label>
                  <input
                    required
                    value={editingProject.clientBusiness}
                    onChange={(e) => setEditingProject({ ...editingProject, clientBusiness: e.target.value })}
                    placeholder="e.g. Apex Dental Care"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Client Location *</label>
                  <input
                    required
                    value={editingProject.clientLocation}
                    onChange={(e) => setEditingProject({ ...editingProject, clientLocation: e.target.value })}
                    placeholder="e.g. Jaipur, India or Austin, TX"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Client Phone (Internal / Optional)</label>
                  <input
                    value={editingProject.clientPhone}
                    onChange={(e) => setEditingProject({ ...editingProject, clientPhone: e.target.value })}
                    placeholder="+91 8003469293"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Cover Image URL *</label>
                <input
                  required
                  value={editingProject.coverImage}
                  onChange={(e) => setEditingProject({ ...editingProject, coverImage: e.target.value })}
                  placeholder="https://...image-url.jpg"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Deployment Type</label>
                  <select
                    value={editingProject.deploymentType}
                    onChange={(e) => setEditingProject({ ...editingProject, deploymentType: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                  >
                    <option value="website">Live Website URL</option>
                    <option value="pdf">Architecture PDF</option>
                    <option value="video">Client Video Walkthrough</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-slate-400 mb-1">Deployment URL / Link *</label>
                  <input
                    required
                    value={editingProject.deploymentUrl}
                    onChange={(e) => setEditingProject({ ...editingProject, deploymentUrl: e.target.value })}
                    placeholder="https://urbannestproperties.lovable.app"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Project Description & Results *</label>
                <textarea
                  required
                  rows={3}
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  placeholder="Automated after-hours patient inquiry intake with zero human drop-off..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-semibold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" /> Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage