"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Plus,
  RefreshCw,
  Search,
  Filter,
  Eye,
  Trash2,
  Edit2,
  ExternalLink,
  Upload,
  CheckCircle2,
  AlertCircle,
  X,
  Layers,
  Globe,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Star,
  ShieldCheck,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { PortfolioProject, PortfolioStats, ProjectSource } from "@/types/portfolio";
import { PortfolioCard } from "@/components/sections/portfolio";

export function PortfolioManager() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PUBLISHED" | "DRAFT" | "FEATURED">("ALL");
  const [sourceFilter, setSourceFilter] = useState<"ALL" | "DEFAULT" | "ADMIN">("ALL");
  const [syncingDefaults, setSyncingDefaults] = useState<boolean>(false);

  // Modals state
  const [isAddEditOpen, setIsAddEditOpen] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  const [previewProject, setPreviewProject] = useState<PortfolioProject | null>(null);
  const [deleteConfirmProject, setDeleteConfirmProject] = useState<PortfolioProject | null>(null);

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCategory, setFormCategory] = useState("Web Design & Development");
  const [formDomain, setFormDomain] = useState("");
  const [formImageUrl, setFormImageUrl] = useState("");
  const [formExternalUrl, setFormExternalUrl] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formAltText, setFormAltText] = useState("");
  const [formIsPublished, setFormIsPublished] = useState(true);
  const [formIsFeatured, setFormIsFeatured] = useState(false);
  const [formDisplayOrder, setFormDisplayOrder] = useState<number>(1);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submittingForm, setSubmittingForm] = useState(false);

  // Load projects from API
  const loadProjects = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/portfolio", { cache: "no-store" });
      if (!res.ok) {
        throw new Error("Failed to load portfolio projects.");
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setProjects(data.data);
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to load portfolio items");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  // Calculate statistics
  const stats: PortfolioStats = useMemo(() => {
    const active = projects.filter((p) => !p.isArchived);
    return {
      total: active.length,
      published: active.filter((p) => p.isPublished).length,
      drafts: active.filter((p) => !p.isPublished).length,
      featured: active.filter((p) => p.isFeatured).length,
      defaults: active.filter((p) => p.source === "DEFAULT").length,
      custom: active.filter((p) => p.source === "ADMIN").length,
    };
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (p.isArchived) return false;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" ||
        (statusFilter === "PUBLISHED" && p.isPublished) ||
        (statusFilter === "DRAFT" && !p.isPublished) ||
        (statusFilter === "FEATURED" && p.isFeatured);

      const matchesSource =
        sourceFilter === "ALL" || p.source === sourceFilter;

      return matchesSearch && matchesStatus && matchesSource;
    });
  }, [projects, searchQuery, statusFilter, sourceFilter]);

  // Open modal for Add
  const handleOpenAdd = () => {
    setEditingProject(null);
    setFormTitle("");
    setFormSlug("");
    setFormCategory("Web Design & Development");
    setFormDomain("");
    setFormImageUrl("");
    setFormExternalUrl("");
    setFormDescription("");
    setFormAltText("");
    setFormIsPublished(true);
    setFormIsFeatured(false);
    setFormDisplayOrder(projects.length + 1);
    setIsAddEditOpen(true);
  };

  // Open modal for Edit
  const handleOpenEdit = (project: PortfolioProject) => {
    setEditingProject(project);
    setFormTitle(project.title);
    setFormSlug(project.slug);
    setFormCategory(project.category);
    setFormDomain(project.domain);
    setFormImageUrl(project.imageUrl);
    setFormExternalUrl(project.externalUrl || `https://${project.domain}`);
    setFormDescription(project.description || "");
    setFormAltText(project.altText || "");
    setFormIsPublished(project.isPublished);
    setFormIsFeatured(project.isFeatured);
    setFormDisplayOrder(project.displayOrder);
    setIsAddEditOpen(true);
  };

  // Auto-generate slug and external URL when typing title/domain
  const handleTitleChange = (val: string) => {
    setFormTitle(val);
    if (!editingProject) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setFormSlug(generated);
    }
  };

  const handleDomainChange = (val: string) => {
    const clean = val.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    setFormDomain(clean);
    if (!formExternalUrl || formExternalUrl === `https://${formDomain}`) {
      setFormExternalUrl(clean ? `https://${clean}` : "");
    }
  };

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/portfolio/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to upload image.");
      }

      setFormImageUrl(data.url);
      toast.success("Screenshot uploaded successfully!");
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploadingImage(false);
    }
  };

  // Submit Add or Edit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formCategory.trim() || !formDomain.trim() || !formImageUrl.trim()) {
      toast.error("Please fill in all required fields (Title, Category, Domain, Screenshot).");
      return;
    }

    setSubmittingForm(true);
    try {
      if (editingProject) {
        // Update
        const res = await fetch(`/api/admin/portfolio/${editingProject.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formTitle.trim(),
            slug: formSlug.trim() || formTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            category: formCategory.trim(),
            domain: formDomain.trim(),
            imageUrl: formImageUrl.trim(),
            externalUrl: formExternalUrl.trim(),
            description: formDescription.trim(),
            altText: formAltText.trim(),
            isPublished: formIsPublished,
            isFeatured: formIsFeatured,
            displayOrder: Number(formDisplayOrder),
          }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.error || "Failed to update project.");
        toast.success(`Project "${formTitle}" updated successfully!`);
      } else {
        // Create
        const res = await fetch("/api/admin/portfolio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formTitle.trim(),
            slug: formSlug.trim() || formTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            category: formCategory.trim(),
            domain: formDomain.trim(),
            imageUrl: formImageUrl.trim(),
            externalUrl: formExternalUrl.trim(),
            description: formDescription.trim(),
            altText: formAltText.trim(),
            isPublished: formIsPublished,
            isFeatured: formIsFeatured,
            displayOrder: Number(formDisplayOrder),
          }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.error || "Failed to create project.");
        toast.success(`Project "${formTitle}" created and published!`);
      }

      setIsAddEditOpen(false);
      loadProjects();
    } catch (err: any) {
      toast.error(err.message || "Failed to save project.");
    } finally {
      setSubmittingForm(false);
    }
  };

  // Quick toggle publication status
  const handleTogglePublish = async (project: PortfolioProject) => {
    try {
      const newStatus = !project.isPublished;
      const res = await fetch(`/api/admin/portfolio/${project.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to update status");
      toast.success(newStatus ? `"${project.title}" is now Published!` : `"${project.title}" set to Draft.`);
      loadProjects();
    } catch (err: any) {
      toast.error(err.message || "Error updating publication status");
    }
  };

  // Quick toggle featured status
  const handleToggleFeatured = async (project: PortfolioProject) => {
    try {
      const newStatus = !project.isFeatured;
      const res = await fetch(`/api/admin/portfolio/${project.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFeatured: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to update featured status");
      toast.success(newStatus ? `"${project.title}" marked as Featured!` : `"${project.title}" unfeatured.`);
      loadProjects();
    } catch (err: any) {
      toast.error(err.message || "Error updating featured status");
    }
  };

  // Move project up or down in order
  const handleMoveOrder = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= filteredProjects.length) return;

    const current = filteredProjects[index];
    const target = filteredProjects[targetIndex];

    const currentOrder = current.displayOrder;
    const targetOrder = target.displayOrder === currentOrder 
      ? (direction === "up" ? currentOrder - 1 : currentOrder + 1)
      : target.displayOrder;

    try {
      const res = await fetch("/api/admin/portfolio/reorder", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orders: [
            { id: current.id, displayOrder: targetOrder },
            { id: target.id, displayOrder: currentOrder },
          ],
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to reorder projects.");
      toast.success("Order updated!");
      loadProjects();
    } catch (err: any) {
      toast.error(err.message || "Error reordering projects");
    }
  };

  // Confirm delete or hide
  const handleDeleteConfirm = async () => {
    if (!deleteConfirmProject) return;
    try {
      const isDefault = deleteConfirmProject.source === "DEFAULT";
      const res = await fetch(`/api/admin/portfolio/${deleteConfirmProject.id}?isDefault=${isDefault}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to delete project");

      toast.success(
        isDefault
          ? `Default project "${deleteConfirmProject.title}" hidden from public site.`
          : `Project "${deleteConfirmProject.title}" deleted successfully.`
      );
      setDeleteConfirmProject(null);
      loadProjects();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete project");
    }
  };

  // Sync 13 default projects
  const handleSyncDefaults = async () => {
    setSyncingDefaults(true);
    try {
      const res = await fetch("/api/admin/portfolio/sync", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Sync failed");
      toast.success(`Successfully synchronized ${data.count} default projects with database!`);
      loadProjects();
    } catch (err: any) {
      toast.error(err.message || "Failed to sync default projects");
    } finally {
      setSyncingDefaults(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-[#101422] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-ekodrix-green animate-pulse" />
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Portfolio Management
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-ekodrix-green/10 text-ekodrix-green border border-ekodrix-green/30">
                Dynamic Engine
              </span>
            </h1>
          </div>
          <p className="text-sm text-gray-400 max-w-xl">
            Create, edit, reorder, and publish portfolio showcase websites. Hardcoded defaults and admin projects merge seamlessly on the public website.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center flex-wrap gap-3 relative z-10">
          <button
            onClick={handleSyncDefaults}
            disabled={syncingDefaults}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-all flex items-center gap-2"
            title="Idempotently synchronize the 13 hardcoded default projects into Supabase"
          >
            <ShieldCheck className={`w-4 h-4 text-ekodrix-green ${syncingDefaults ? "animate-spin" : ""}`} />
            {syncingDefaults ? "Syncing..." : "Sync 13 Defaults"}
          </button>

          <button
            onClick={loadProjects}
            disabled={loading}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all"
            title="Refresh portfolio list"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>

          <button
            onClick={handleOpenAdd}
            className="px-5 py-2.5 rounded-xl bg-ekodrix-green hover:bg-ekodrix-green-light text-ekodrix-charcoal-dark font-bold text-xs transition-all shadow-lg shadow-ekodrix-green/20 flex items-center gap-2"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            Add New Project
          </button>
        </div>
      </div>

      {/* Stats KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-[#101422] border border-white/10 rounded-xl p-4">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Active</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-[#101422] border border-white/10 rounded-xl p-4">
          <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider mb-1">Published</p>
          <p className="text-2xl font-bold text-emerald-400">{stats.published}</p>
        </div>
        <div className="bg-[#101422] border border-white/10 rounded-xl p-4">
          <p className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider mb-1">Drafts / Hidden</p>
          <p className="text-2xl font-bold text-amber-400">{stats.drafts}</p>
        </div>
        <div className="bg-[#101422] border border-white/10 rounded-xl p-4">
          <p className="text-[10px] font-semibold text-yellow-400 uppercase tracking-wider mb-1">Featured</p>
          <p className="text-2xl font-bold text-yellow-400">{stats.featured}</p>
        </div>
        <div className="bg-[#101422] border border-white/10 rounded-xl p-4">
          <p className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider mb-1">Default Fallbacks</p>
          <p className="text-2xl font-bold text-blue-400">{stats.defaults}</p>
        </div>
        <div className="bg-[#101422] border border-white/10 rounded-xl p-4">
          <p className="text-[10px] font-semibold text-purple-400 uppercase tracking-wider mb-1">Custom Admin</p>
          <p className="text-2xl font-bold text-purple-400">{stats.custom}</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-[#101422] border border-white/10 rounded-xl p-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, domain, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#0A0D14] border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-2 bg-[#0A0D14] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-ekodrix-green"
          >
            <option value="ALL">All Status</option>
            <option value="PUBLISHED">Published Only</option>
            <option value="DRAFT">Drafts / Hidden</option>
            <option value="FEATURED">Featured Only</option>
          </select>

          {/* Source filter */}
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value as any)}
            className="px-3 py-2 bg-[#0A0D14] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-ekodrix-green"
          >
            <option value="ALL">All Sources</option>
            <option value="DEFAULT">Default (Legacy)</option>
            <option value="ADMIN">Admin Created</option>
          </select>
        </div>
      </div>

      {/* Project Table List */}
      <div className="bg-[#101422] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0A0D14] text-[11px] font-semibold text-gray-400 uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">Order</th>
                <th className="py-3.5 px-4">Project</th>
                <th className="py-3.5 px-4">Domain / Category</th>
                <th className="py-3.5 px-4 text-center">Source</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 text-center">Featured</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading && projects.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-ekodrix-green mb-2" />
                    Loading portfolio items...
                  </td>
                </tr>
              ) : filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    No portfolio projects match your search or filter.
                  </td>
                </tr>
              ) : (
                filteredProjects.map((project, idx) => (
                  <tr key={project.id} className="hover:bg-white/[0.02] transition-colors">
                    {/* Display Order & Reorder Controls */}
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <button
                          onClick={() => handleMoveOrder(idx, "up")}
                          disabled={idx === 0}
                          className="p-1 text-gray-400 hover:text-white disabled:opacity-20 transition-all"
                          title="Move Up"
                        >
                          <ArrowUp className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold text-ekodrix-green">
                          {project.displayOrder}
                        </span>
                        <button
                          onClick={() => handleMoveOrder(idx, "down")}
                          disabled={idx === filteredProjects.length - 1}
                          className="p-1 text-gray-400 hover:text-white disabled:opacity-20 transition-all"
                          title="Move Down"
                        >
                          <ArrowDown className="w-3 h-3" />
                        </button>
                      </div>
                    </td>

                    {/* Project Thumbnail & Title */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() => setPreviewProject(project)}
                          className="w-14 h-9 rounded-md bg-[#0A0D14] border border-white/10 overflow-hidden relative cursor-pointer group flex-shrink-0"
                          title="Click to preview"
                        >
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Eye className="w-3.5 h-3.5 text-white" />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-white line-clamp-1">{project.title}</p>
                          <p className="text-xs text-gray-400 font-mono line-clamp-1">/{project.slug}</p>
                        </div>
                      </div>
                    </td>

                    {/* Domain & Category */}
                    <td className="py-3.5 px-4">
                      <a
                        href={project.externalUrl || `https://${project.domain}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-gray-300 hover:text-ekodrix-green transition-colors"
                      >
                        {project.domain}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs text-gray-400">{project.category}</p>
                    </td>

                    {/* Source */}
                    <td className="py-3.5 px-4 text-center">
                      {project.source === "DEFAULT" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Default
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          Admin
                        </span>
                      )}
                    </td>

                    {/* Status Toggle */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => handleTogglePublish(project)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          project.isPublished
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20"
                        }`}
                        title="Click to toggle publication"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${project.isPublished ? "bg-emerald-400" : "bg-amber-400"}`} />
                        {project.isPublished ? "Published" : "Draft"}
                      </button>
                    </td>

                    {/* Featured Toggle */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => handleToggleFeatured(project)}
                        className={`p-1.5 rounded-lg transition-all ${
                          project.isFeatured
                            ? "text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
                        title="Click to toggle featured"
                      >
                        <Star className={`w-4 h-4 ${project.isFeatured ? "fill-yellow-400" : ""}`} />
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setPreviewProject(project)}
                          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                          title="Preview public card"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleOpenEdit(project)}
                          className="p-2 rounded-lg text-gray-400 hover:text-ekodrix-green hover:bg-white/5 transition-all"
                          title="Edit details"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmProject(project)}
                          className="p-2 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-white/5 transition-all"
                          title={project.source === "DEFAULT" ? "Hide from website" : "Delete project"}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================================================================
          ADD / EDIT PROJECT MODAL
      ========================================================================= */}
      {isAddEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-4xl bg-[#121622] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {editingProject ? "Edit Portfolio Project" : "Add New Portfolio Project"}
                  {editingProject && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-ekodrix-green/10 text-ekodrix-green border border-ekodrix-green/20">
                      {editingProject.source}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-gray-400">
                  {editingProject
                    ? `Updating "${editingProject.title}". Changes will instantly reflect on the public website.`
                    : "Enter project details and upload a full-page website screenshot to feature in the portfolio."}
                </p>
              </div>
              <button
                onClick={() => setIsAddEditOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column: Core Fields */}
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Project Title <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ResellerPro - SaaS CRM Platform"
                      value={formTitle}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0A0D14] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Category <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Web Design & Development · E-Commerce"
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0A0D14] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green"
                    />
                  </div>

                  {/* Domain (shows in browser card URL bar) */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Website Domain <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. resellerpro.in"
                      value={formDomain}
                      onChange={(e) => handleDomainChange(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0A0D14] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green font-mono"
                    />
                  </div>

                  {/* Unique Slug */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Slug / Identifier <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. resellerpro"
                      value={formSlug}
                      onChange={(e) => setFormSlug(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0A0D14] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green font-mono text-xs"
                    />
                  </div>

                  {/* External URL */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      External Link URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://resellerpro.in"
                      value={formExternalUrl}
                      onChange={(e) => setFormExternalUrl(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0A0D14] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green font-mono text-xs"
                    />
                  </div>
                </div>

                {/* Right Column: Screenshot & Options */}
                <div className="space-y-4">
                  {/* Screenshot Image Upload or URL */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Project Screenshot <span className="text-rose-400">*</span>
                    </label>
                    
                    {/* File Upload Box */}
                    <div className="border-2 border-dashed border-white/10 hover:border-ekodrix-green/50 rounded-xl p-4 text-center bg-[#0A0D14] transition-colors mb-2 relative">
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp,image/avif"
                        onChange={handleFileUpload}
                        disabled={uploadingImage}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-5 h-5 mx-auto text-ekodrix-green mb-1" />
                      <p className="text-xs text-gray-300 font-medium">
                        {uploadingImage ? "Uploading screenshot..." : "Click or drag to upload website screenshot"}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">PNG, WebP, JPEG up to 10MB</p>
                    </div>

                    {/* Direct Image URL input */}
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Or paste image URL (https://...)"
                        value={formImageUrl}
                        onChange={(e) => setFormImageUrl(e.target.value)}
                        className="w-full px-4 py-2 bg-[#0A0D14] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green font-mono"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Short Description (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief note about the project, client, or deliverables..."
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      className="w-full px-4 py-2 bg-[#0A0D14] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green resize-none"
                    />
                  </div>

                  {/* Ordering & Toggles */}
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Display Order
                      </label>
                      <input
                        type="number"
                        min={1}
                        value={formDisplayOrder}
                        onChange={(e) => setFormDisplayOrder(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#0A0D14] border border-white/10 rounded-xl text-xs text-white font-mono"
                      />
                    </div>

                    <div className="flex flex-col justify-end">
                      <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer p-2 bg-[#0A0D14] rounded-xl border border-white/10 hover:border-white/20">
                        <input
                          type="checkbox"
                          checked={formIsPublished}
                          onChange={(e) => setFormIsPublished(e.target.checked)}
                          className="accent-ekodrix-green w-4 h-4 rounded"
                        />
                        <span>Published</span>
                      </label>
                    </div>

                    <div className="flex flex-col justify-end">
                      <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer p-2 bg-[#0A0D14] rounded-xl border border-white/10 hover:border-white/20">
                        <input
                          type="checkbox"
                          checked={formIsFeatured}
                          onChange={(e) => setFormIsFeatured(e.target.checked)}
                          className="accent-yellow-400 w-4 h-4 rounded"
                        />
                        <span>Featured</span>
                      </label>
                    </div>
                  </div>

                  {/* Mini Preview Box */}
                  {formImageUrl && (
                    <div className="p-3 bg-[#0A0D14] rounded-xl border border-white/10">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Card Preview Mockup
                      </p>
                      <div className="max-w-[240px] mx-auto">
                        <PortfolioCard
                          item={{
                            id: formSlug || "preview",
                            title: formTitle || "Project Title",
                            category: formCategory || "Category",
                            image: formImageUrl,
                            url: formDomain || "domain.com",
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsAddEditOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingForm || uploadingImage}
                  className="px-6 py-2.5 rounded-xl bg-ekodrix-green hover:bg-ekodrix-green-light text-ekodrix-charcoal-dark font-bold text-xs transition-all shadow-lg shadow-ekodrix-green/20 flex items-center gap-2"
                >
                  {submittingForm && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                  {editingProject ? "Save Changes" : "Create & Publish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          LIVE PREVIEW MODAL
      ========================================================================= */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#121622] border border-white/10 rounded-3xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-ekodrix-green" />
                <h3 className="text-sm font-bold text-white">Live Public Card Preview</h3>
              </div>
              <button
                onClick={() => setPreviewProject(null)}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-2">
              <PortfolioCard
                item={{
                  id: previewProject.id,
                  title: previewProject.title,
                  category: previewProject.category,
                  image: previewProject.imageUrl,
                  url: previewProject.domain,
                  altText: previewProject.altText,
                }}
              />
            </div>

            <p className="text-[11px] text-gray-400 text-center mt-4">
              Hover over the browser window to see the full-page screenshot scrolling animation.
            </p>
          </div>
        </div>
      )}

      {/* =========================================================================
          DELETE / HIDE CONFIRMATION MODAL
      ========================================================================= */}
      {deleteConfirmProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#121622] border border-rose-500/20 rounded-3xl p-6 shadow-2xl relative">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
              <Trash2 className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {deleteConfirmProject.source === "DEFAULT"
                ? `Hide Default Project "${deleteConfirmProject.title}"?`
                : `Delete Project "${deleteConfirmProject.title}"?`}
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              {deleteConfirmProject.source === "DEFAULT"
                ? "This is one of the original 13 default projects. Confirming will archive and hide it from the public website, but its code fallback remains safely preserved."
                : "Are you sure you want to delete this custom project from the database? This action cannot be undone."}
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeleteConfirmProject(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-5 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs transition-all shadow-lg shadow-rose-500/20"
              >
                {deleteConfirmProject.source === "DEFAULT" ? "Yes, Hide Project" : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
