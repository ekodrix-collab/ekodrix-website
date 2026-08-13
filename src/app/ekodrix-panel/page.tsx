"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  LogOut,
  Search,
  Filter,
  Eye,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  Mail,
  Phone,
  Building,
  Calendar,
  DollarSign,
  Shield,
  Key,
  Database,
  Send,
  RefreshCw,
  Tag,
  Menu,
  MessageSquare,
  UserCheck,
  ChevronRight,
  TrendingUp,
  FileText,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { EkodrixLogo } from "@/components/logos/ekodrix-logo";
import { AuthService, AdminUser } from "@/lib/services/auth-service";
import { ProjectRequestService } from "@/lib/services/project-requests";
import { ProjectRequest, ProjectRequestStats, RequestStatus } from "@/types/project-request";

type AdminTab = "dashboard" | "requests" | "settings";

export default function AdminPanelPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Requests & Stats state
  const [requests, setRequests] = useState<ProjectRequest[]>([]);
  const [stats, setStats] = useState<ProjectRequestStats>({
    total: 0,
    new: 0,
    contacted: 0,
    inProgress: 0,
    completed: 0,
    rejected: 0,
  });
  const [loading, setLoading] = useState(true);

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<RequestStatus | "All">("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");

  // Selected Detail Modal state
  const [selectedRequest, setSelectedRequest] = useState<ProjectRequest | null>(null);
  const [editingNotes, setEditingNotes] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [reqList, reqStats] = await Promise.all([
        ProjectRequestService.getProjectRequests({
          status: statusFilter,
          projectType: typeFilter,
          searchQuery,
        }),
        ProjectRequestService.getProjectRequestStats(),
      ]);
      setRequests(reqList);
      setStats(reqStats);
    } catch (err) {
      toast.error("Failed to load project requests");
    } finally {
      setLoading(false);
    }
  }, [statusFilter, typeFilter, searchQuery]);

  // Check Auth state on load
  useEffect(() => {
    const isAuth = AuthService.isAuthenticated();
    setIsAuthenticated(isAuth);
    if (isAuth) {
      setUser(AuthService.getCurrentUser());
      loadData();
    } else {
      setLoading(false);
    }
  }, [loadData]);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [loadData, isAuthenticated]);

  // Handle Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    const res = await AuthService.login(loginEmail, loginPassword);
    setLoginLoading(false);
    if (res.success && res.user) {
      setIsAuthenticated(true);
      setUser(res.user);
      toast.success("Welcome back to EKODRIX Panel!");
      loadData();
    } else {
      toast.error(res.error || "Login failed");
    }
  };

  const handleDemoLogin = async () => {
    setLoginLoading(true);
    const res = await AuthService.login("admin@ekodrix.com", "admin123");
    setLoginLoading(false);
    if (res.success && res.user) {
      setIsAuthenticated(true);
      setUser(res.user);
      toast.success("Demo Admin access granted!");
      loadData();
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
    toast.info("Logged out of EKODRIX Panel");
  };

  // Status Change
  const handleStatusChange = async (id: string, newStatus: RequestStatus) => {
    const updated = await ProjectRequestService.updateProjectRequestStatus(id, newStatus);
    if (updated) {
      toast.success(`Request ${id} status updated to '${newStatus}'`);
      if (selectedRequest?.id === id) {
        setSelectedRequest(updated);
      }
      loadData();
    }
  };

  // Save Notes
  const handleSaveNotes = async () => {
    if (!selectedRequest) return;
    const updated = await ProjectRequestService.updateProjectRequestStatus(
      selectedRequest.id,
      selectedRequest.status,
      editingNotes
    );
    if (updated) {
      setSelectedRequest(updated);
      toast.success("Notes saved successfully");
      loadData();
    }
  };

  // Delete Request
  const handleDeleteRequest = async (id: string) => {
    if (confirm("Are you sure you want to delete this project request?")) {
      await ProjectRequestService.deleteProjectRequest(id);
      toast.success("Project request deleted");
      if (selectedRequest?.id === id) setSelectedRequest(null);
      loadData();
    }
  };

  // Helper for status badge styling
  const getStatusBadge = (status: RequestStatus) => {
    const map: Record<RequestStatus, { bg: string; text: string; dot: string }> = {
      New: { bg: "bg-emerald-500/10 border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400" },
      Contacted: { bg: "bg-blue-500/10 border-blue-500/30", text: "text-blue-400", dot: "bg-blue-400" },
      "In Progress": { bg: "bg-amber-500/10 border-amber-500/30", text: "text-amber-400", dot: "bg-amber-400" },
      Completed: { bg: "bg-purple-500/10 border-purple-500/30", text: "text-purple-400", dot: "bg-purple-400" },
      Rejected: { bg: "bg-rose-500/10 border-rose-500/30", text: "text-rose-400", dot: "bg-rose-400" },
    };
    const s = map[status] || map.New;
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${s.bg} ${s.text}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
        {status}
      </span>
    );
  };

  // Format date helper
  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    } catch {
      return isoStr;
    }
  };

  // If NOT authenticated, render Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0D14] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Glowing background effects matching EKODRIX brand */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-ekodrix-green/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-[#121622]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <EkodrixLogo size="md" variant="light" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/30 text-xs font-semibold text-ekodrix-green uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5" /> EKODRIX Admin Portal
            </div>
            <p className="text-sm text-gray-400">
              Sign in to manage client project submissions & system preferences
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@ekodrix.com"
                  className="w-full px-4 py-3 bg-[#0A0D14] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#0A0D14] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 rounded-xl bg-ekodrix-green hover:bg-ekodrix-green-light text-ekodrix-charcoal-dark font-bold text-sm transition-all shadow-lg shadow-ekodrix-green/20 flex items-center justify-center gap-2"
            >
              {loginLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Sign In to Panel"}
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <span className="relative px-4 bg-[#121622] text-xs text-gray-500 uppercase tracking-widest">
              Integration Preview
            </span>
          </div>

          <button
            onClick={handleDemoLogin}
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 group"
          >
            <UserCheck className="w-4 h-4 text-ekodrix-green group-hover:scale-110 transition-transform" />
            One-Click Demo Admin Login
          </button>

          <div className="mt-6 text-center">
            <p className="text-[0.7rem] text-gray-500 leading-relaxed">
              Protected Admin Area. Supabase Auth and Role-Based Access Control (RBAC) integration ready.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    // Fixed full-viewport container — escapes root layout overflow-x-hidden and outer <main>
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", flexDirection: "column", overflow: "hidden" }}
      className="bg-[#090C15] text-white font-sans selection:bg-ekodrix-green selection:text-ekodrix-charcoal-dark"
    >
      {/* Mobile Header Bar — full width, sits on top */}
      <div className="md:hidden flex-shrink-0 flex items-center justify-between p-4 bg-[#101422] border-b border-white/10 z-50">
        <div className="flex items-center gap-3">
          <EkodrixLogo size="sm" variant="light" />
          <span className="text-xs font-bold text-ekodrix-green uppercase tracking-wider bg-ekodrix-green/10 px-2 py-0.5 rounded border border-ekodrix-green/20">
            Panel
          </span>
        </div>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 text-gray-300 hover:text-white"
        >
          {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Inner row: Sidebar + Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "row", overflow: "hidden", position: "relative" }}>

        {/* Mobile overlay backdrop */}
        {mobileSidebarOpen && (
          <div
            className="absolute inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <aside
          className={`absolute md:relative top-0 left-0 z-40 w-64 bg-[#0E121F] border-r border-white/10 p-6 flex flex-col justify-between flex-shrink-0 transition-transform duration-300 ease-in-out ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
          style={{ height: "100%", overflowY: "auto" }}
        >
          <div>
            {/* Brand Header — Admin badge on top, logo below */}
            <div className="flex flex-col items-start gap-2 mb-8">
              <span className="text-[0.65rem] font-bold text-ekodrix-green uppercase tracking-widest bg-ekodrix-green/10 px-2 py-0.5 rounded border border-ekodrix-green/20">
                Admin Panel
              </span>
              <EkodrixLogo size="sm" variant="light" />
            </div>

            {/* Nav Items */}
            <nav className="space-y-2">
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === "dashboard"
                    ? "bg-ekodrix-green/10 text-ekodrix-green border border-ekodrix-green/30 shadow-lg shadow-ekodrix-green/5"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>

              <button
                onClick={() => {
                  setActiveTab("requests");
                  setMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === "requests"
                    ? "bg-ekodrix-green/10 text-ekodrix-green border border-ekodrix-green/30 shadow-lg shadow-ekodrix-green/5"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <FolderKanban className="w-4 h-4" />
                  Project Requests
                </div>
                {stats.new > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-ekodrix-green text-ekodrix-charcoal-dark rounded-full">
                    {stats.new}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab("settings");
                  setMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === "settings"
                    ? "bg-ekodrix-green/10 text-ekodrix-green border border-ekodrix-green/30 shadow-lg shadow-ekodrix-green/5"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </nav>
          </div>

          {/* User Info & Logout */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ekodrix-green/20 border border-ekodrix-green/40 flex items-center justify-center text-ekodrix-green font-bold text-sm">
                  EK
                </div>
                <div className="truncate max-w-[110px]">
                  <p className="text-xs font-semibold text-white truncate">{user?.name || "Administrator"}</p>
                  <p className="text-[0.65rem] text-gray-400 truncate">{user?.email}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-rose-500/10 hover:text-rose-400 text-gray-400 text-xs font-medium transition-all border border-white/5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content Area — scrolls independently */}
        <main style={{ flex: 1, overflowY: "auto" }} className="p-4 md:p-8">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              {activeTab === "dashboard" && "Dashboard Overview"}
              {activeTab === "requests" && "Project Requests Submissions"}
              {activeTab === "settings" && "System & Integrations Settings"}
            </h1>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              EKODRIX Management & Client Lead Pipeline
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              title="Refresh data"
              className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-xs font-medium transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stat Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-[#121624] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Submissions</span>
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stats.total}</div>
                <div className="text-[0.75rem] text-gray-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-ekodrix-green" /> All-time submissions
                </div>
              </div>

              <div className="bg-[#121624] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">New Requests</span>
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stats.new}</div>
                <div className="text-[0.75rem] text-emerald-400 font-medium">
                  Requires response
                </div>
              </div>

              <div className="bg-[#121624] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">In Progress</span>
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stats.inProgress}</div>
                <div className="text-[0.75rem] text-gray-400">
                  Active negotiations & dev
                </div>
              </div>

              <div className="bg-[#121624] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Completed</span>
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stats.completed}</div>
                <div className="text-[0.75rem] text-gray-400">
                  Successfully closed
                </div>
              </div>
            </div>

            {/* Pipeline Visual Bar */}
            <div className="bg-[#121624] border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Pipeline Status Breakdown
              </h3>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex gap-0.5">
                <div
                  style={{ width: `${stats.total ? (stats.new / stats.total) * 100 : 0}%` }}
                  className="bg-emerald-400 h-full transition-all"
                  title={`New: ${stats.new}`}
                />
                <div
                  style={{ width: `${stats.total ? (stats.contacted / stats.total) * 100 : 0}%` }}
                  className="bg-blue-400 h-full transition-all"
                  title={`Contacted: ${stats.contacted}`}
                />
                <div
                  style={{ width: `${stats.total ? (stats.inProgress / stats.total) * 100 : 0}%` }}
                  className="bg-amber-400 h-full transition-all"
                  title={`In Progress: ${stats.inProgress}`}
                />
                <div
                  style={{ width: `${stats.total ? (stats.completed / stats.total) * 100 : 0}%` }}
                  className="bg-purple-400 h-full transition-all"
                  title={`Completed: ${stats.completed}`}
                />
                <div
                  style={{ width: `${stats.total ? (stats.rejected / stats.total) * 100 : 0}%` }}
                  className="bg-rose-400 h-full transition-all"
                  title={`Rejected: ${stats.rejected}`}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> New ({stats.new})</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> Contacted ({stats.contacted})</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> In Progress ({stats.inProgress})</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-400" /> Completed ({stats.completed})</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-400" /> Rejected ({stats.rejected})</span>
              </div>
            </div>

            {/* Recent Submissions Section */}
            <div className="bg-[#121624] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Recent Project Submissions</h3>
                  <p className="text-xs text-gray-400">Submissions received from the Start Project form</p>
                </div>
                <button
                  onClick={() => setActiveTab("requests")}
                  className="text-xs font-semibold text-ekodrix-green hover:underline flex items-center gap-1"
                >
                  View All Requests <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {requests.length === 0 ? (
                <div className="py-12 text-center text-gray-500 text-sm">
                  No project requests found yet. Submissions will appear here once connected to Supabase.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300">
                    <thead className="bg-white/5 text-xs text-gray-400 uppercase tracking-wider">
                      <tr>
                        <th className="p-4 rounded-l-xl">Client Name</th>
                        <th className="p-4">Project Type</th>
                        <th className="p-4">Budget</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Date Submitted</th>
                        <th className="p-4 rounded-r-xl text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {requests.slice(0, 5).map((req) => (
                        <tr key={req.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-medium text-white">
                            <div>{req.name}</div>
                            <div className="text-xs text-gray-400 font-normal">{req.email}</div>
                          </td>
                          <td className="p-4">
                            <span className="uppercase text-xs font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10">
                              {req.projectType}
                            </span>
                          </td>
                          <td className="p-4 text-gray-300">{req.budget}</td>
                          <td className="p-4">{getStatusBadge(req.status)}</td>
                          <td className="p-4 text-xs text-gray-400">{formatDate(req.created_at)}</td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => {
                                setSelectedRequest(req);
                                setEditingNotes(req.notes || "");
                              }}
                              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-ekodrix-green/20 text-xs font-medium text-ekodrix-green transition-colors inline-flex items-center gap-1.5"
                            >
                              <Eye className="w-3.5 h-3.5" /> Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PROJECT REQUESTS MANAGEMENT */}
        {activeTab === "requests" && (
          <div className="space-y-6">
            {/* Search & Filter Controls */}
            <div className="bg-[#121624] border border-white/10 rounded-2xl p-5 flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, email, company..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#090C15] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Filter Pills & Type Dropdown */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-1 bg-[#090C15] p-1 rounded-xl border border-white/10 overflow-x-auto w-full sm:w-auto">
                  {(["All", "New", "Contacted", "In Progress", "Completed", "Rejected"] as const).map(
                    (st) => (
                      <button
                        key={st}
                        onClick={() => setStatusFilter(st)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                          statusFilter === st
                            ? "bg-ekodrix-green text-ekodrix-charcoal-dark shadow"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {st}
                      </button>
                    )
                  )}
                </div>

                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2.5 bg-[#090C15] border border-white/10 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-ekodrix-green"
                >
                  <option value="All">All Types</option>
                  <option value="saas">SaaS</option>
                  <option value="ai">AI Integration</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="backend">Backend/API</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Requests Table */}
            <div className="bg-[#121624] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              {loading ? (
                <div className="py-20 text-center text-gray-400 flex flex-col items-center justify-center gap-3">
                  <RefreshCw className="w-6 h-6 animate-spin text-ekodrix-green" />
                  <span>Loading project submissions...</span>
                </div>
              ) : requests.length === 0 ? (
                <div className="py-20 text-center text-gray-400 flex flex-col items-center justify-center gap-3">
                  <FolderKanban className="w-10 h-10 text-gray-600" />
                  <p className="text-base font-semibold text-gray-300">No project requests match your criteria</p>
                  <p className="text-xs text-gray-500">Try clearing filters or search queries</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300">
                    <thead className="bg-white/5 text-xs text-gray-400 uppercase tracking-wider border-b border-white/10">
                      <tr>
                        <th className="p-4">Req ID</th>
                        <th className="p-4">Client / Company</th>
                        <th className="p-4">Type</th>
                        <th className="p-4">Budget / Timeline</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Submitted</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {requests.map((req) => (
                        <tr key={req.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-mono text-xs text-gray-400">{req.id}</td>
                          <td className="p-4">
                            <div className="font-semibold text-white">{req.name}</div>
                            <div className="text-xs text-gray-400">{req.email}</div>
                            {req.company && (
                              <div className="text-[0.7rem] text-ekodrix-green font-medium mt-0.5 flex items-center gap-1">
                                <Building className="w-3 h-3" /> {req.company}
                              </div>
                            )}
                          </td>
                          <td className="p-4">
                            <span className="uppercase text-xs font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10">
                              {req.projectType}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="text-xs font-semibold text-white">{req.budget}</div>
                            <div className="text-[0.7rem] text-gray-400">Timeline: {req.timeline}</div>
                          </td>
                          <td className="p-4">
                            <select
                              value={req.status}
                              onChange={(e) =>
                                handleStatusChange(req.id, e.target.value as RequestStatus)
                              }
                              className="bg-[#090C15] border border-white/10 text-xs font-semibold text-white px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-ekodrix-green"
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="p-4 text-xs text-gray-400">{formatDate(req.created_at)}</td>
                          <td className="p-4 text-right space-x-2">
                            <button
                              onClick={() => {
                                setSelectedRequest(req);
                                setEditingNotes(req.notes || "");
                              }}
                              className="p-2 rounded-lg bg-white/5 hover:bg-ekodrix-green/20 text-ekodrix-green transition-colors"
                              title="View Request Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteRequest(req.id)}
                              className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-rose-400 transition-colors"
                              title="Delete Request"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: INTEGRATION SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-8 max-w-4xl">
            {/* Supabase Card */}
            <div className="bg-[#121624] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Supabase Database Integration</h3>
                    <p className="text-xs text-gray-400">Database architecture ready for project request storage</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Ready to Connect
                </span>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <p>
                  To connect Supabase for live data persistence across the Start Project form and Admin Panel, add the following environment variables to your <code className="text-ekodrix-green bg-white/5 px-1.5 py-0.5 rounded">.env.local</code> file:
                </p>
                <pre className="bg-[#090C15] p-4 rounded-xl text-gray-300 font-mono text-[0.75rem] overflow-x-auto border border-white/10">
{`NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key`}
                </pre>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[0.75rem] text-gray-400 space-y-2">
                  <strong className="text-white block">Supabase Service Location:</strong>
                  The project request service layer is isolated in <code className="text-ekodrix-green">src/lib/services/project-requests.ts</code>. Simply uncomment the Supabase query functions inside that file.
                </div>
              </div>
            </div>

            {/* Nodemailer Card */}
            <div className="bg-[#121624] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Nodemailer Email Notifications</h3>
                    <p className="text-xs text-gray-400">Automated admin alerts & client confirmation emails</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Ready to Connect
                </span>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <p>
                  To enable automated email alerts when a user submits a Start Project form, add your SMTP server configuration to <code className="text-ekodrix-green bg-white/5 px-1.5 py-0.5 rounded">.env.local</code>:
                </p>
                <pre className="bg-[#090C15] p-4 rounded-xl text-gray-300 font-mono text-[0.75rem] overflow-x-auto border border-white/10">
{`SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=hello@ekodrix.com
SMTP_PASS=your-app-password
ADMIN_NOTIFICATION_EMAIL=leads@ekodrix.com`}
                </pre>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[0.75rem] text-gray-400">
                  <strong className="text-white block mb-1">Server API Route Setup:</strong>
                  Create an API route at <code className="text-ekodrix-green">src/app/api/notifications/email/route.ts</code> using Nodemailer. Frontend form code remains completely clean and credential-free.
                </div>
              </div>
            </div>

            {/* Admin Security Card */}
            <div className="bg-[#121624] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Admin Authentication & Access Control</h3>
                  <p className="text-xs text-gray-400">Session controls and security credentials</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">Active Session</div>
                  <div className="text-xs text-gray-400">Logged in as {user?.email}</div>
                </div>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold transition-colors"
                >
                  End Admin Session
                </button>
              </div>
            </div>
          </div>
        )}
        </main>
      </div>

      {/* REQUEST DETAIL MODAL / DRAWER */}
      <AnimatePresence>
        {selectedRequest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#121624] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRequest(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded">
                    {selectedRequest.id}
                  </span>
                  {getStatusBadge(selectedRequest.status)}
                </div>
                <h2 className="text-2xl font-bold text-white">{selectedRequest.name}</h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                  <a
                    href={`mailto:${selectedRequest.email}`}
                    className="flex items-center gap-1.5 hover:text-ekodrix-green transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-ekodrix-green" />
                    {selectedRequest.email}
                  </a>
                  {selectedRequest.company && (
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <Building className="w-3.5 h-3.5 text-ekodrix-green" />
                      {selectedRequest.company}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(selectedRequest.created_at)}
                  </span>
                </div>
              </div>

              {/* Request Parameters Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div>
                  <span className="text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                    Project Type
                  </span>
                  <span className="text-sm font-bold text-white uppercase">{selectedRequest.projectType}</span>
                </div>

                <div>
                  <span className="text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                    Budget Range
                  </span>
                  <span className="text-sm font-bold text-ekodrix-green">{selectedRequest.budget}</span>
                </div>

                <div>
                  <span className="text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                    Timeline
                  </span>
                  <span className="text-sm font-bold text-white uppercase">{selectedRequest.timeline}</span>
                </div>
              </div>

              {/* Description Body */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Project Description
                </h4>
                <div className="bg-[#090C15] p-4 rounded-2xl border border-white/10 text-sm text-gray-200 leading-relaxed whitespace-pre-wrap">
                  {selectedRequest.description}
                </div>
              </div>

              {/* Status Update Control */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Update Status
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(["New", "Contacted", "In Progress", "Completed", "Rejected"] as RequestStatus[]).map(
                    (st) => (
                      <button
                        key={st}
                        onClick={() => handleStatusChange(selectedRequest.id, st)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          selectedRequest.status === st
                            ? "bg-ekodrix-green text-ekodrix-charcoal-dark font-bold shadow-lg"
                            : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5"
                        }`}
                      >
                        {st}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Admin Internal Notes */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Internal Admin Notes
                </h4>
                <textarea
                  rows={3}
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Add internal notes about lead qualification, discovery call details..."
                  className="w-full p-3.5 bg-[#090C15] border border-white/10 rounded-2xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green"
                />
                <button
                  onClick={handleSaveNotes}
                  className="mt-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
                >
                  Save Internal Notes
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() => handleDeleteRequest(selectedRequest.id)}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete Submission
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${selectedRequest.email}?subject=Regarding your project request with EKODRIX`}
                    className="px-4 py-2.5 rounded-xl bg-ekodrix-green text-ekodrix-charcoal-dark font-bold text-xs hover:bg-ekodrix-green-light transition-all flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" /> Reply to Client
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
