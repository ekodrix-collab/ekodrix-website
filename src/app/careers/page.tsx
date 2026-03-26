import { Metadata } from "next";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Rocket, 
  Heart, 
  Zap, 
  Globe,
  Code2,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Video
} from "lucide-react";
import Link from "next/link";
import { Card3D } from "@/components/ui/Card3D";

export const metadata: Metadata = {
  title: "Careers - Join EKODRIX",
  description: "Join our team of talented developers building the future of software. We're hiring Fullstack Developers and Video Editors.",
};

const JOBS = [
  {
    id: "video-editor",
    title: "Video Editor & Motion Graphics Artist",
    department: "Creative",
    location: "Remote",
    type: "Full-Time",
    description: "Create engaging content for a premium software studio. Mastery of storytelling, pacing, and high-impact visual effects are essential.",
    requirements: ["Adobe Premiere Pro", "After Effects", "CapCut", "Storytelling & Pacing"],
    isNew: true
  },
  {
    id: "fullstack-dev",
    title: "Fullstack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description: "Build scalable, production-grade SaaS applications using modern web technologies (React, Next.js, Node.js, PostgreSQL).",
    requirements: ["React/Next.js", "TypeScript", "Node.js", "SQL"],
    isNew: false
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section - Compact */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ekodrix-green/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-resellerpro-blue-medium/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-ekodrix-green mb-6 backdrop-blur-sm animate-fade-in-up">
            <Sparkles className="w-3 h-3" />
            We're Hiring!
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight animate-fade-in-up delay-100">
            Join the <span className="gradient-text">Elite Team</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            We're building production-grade software that shapes the future. Skip the bureaucracy and ship something that matters.
          </p>
          <a href="#openings" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-ekodrix-green text-white font-semibold hover:bg-ekodrix-green/90 transition-all duration-300 hover:scale-105 animate-fade-in-up delay-300">
            View Open Positions
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Benefits - Compact Grid */}
      <section className="py-24 relative bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <BenefitCard icon={<Rocket className="w-5 h-5" />} title="Ship Fast" color="text-ekodrix-green" />
            <BenefitCard icon={<Zap className="w-5 h-5" />} title="Modern Stack" color="text-blue-400" />
            <BenefitCard icon={<Users className="w-5 h-5" />} title="Small Team" color="text-purple-400" />
            <BenefitCard icon={<Heart className="w-5 h-5" />} title="Ownership" color="text-pink-400" />
          </div>
        </div>
      </section>

      {/* Open Positions - Standard List View */}
      <section id="openings" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Roles</h2>
            <p className="text-gray-400">Find your place in our growing studio.</p>
          </div>

          <div className="space-y-4">
            {JOBS.map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-16 text-center text-sm text-gray-500">
            Don't see a role? <Link href="/contact" className="text-ekodrix-green hover:underline">Send us your portfolio anyway.</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ icon, title, color }: { icon: any, title: string, color: string }) {
  return (
    <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/[0.05] transition-all border border-white/5">
      <div className={`p-2.5 rounded-lg bg-white/5 ${color}`}>{icon}</div>
      <span className="font-bold text-sm">{title}</span>
    </div>
  );
}

function JobRow({ job }: { job: typeof JOBS[0] }) {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-300 group border border-white/5 hover:border-ekodrix-green/30 relative overflow-hidden">
      {job.isNew && (
        <div className="absolute top-0 right-0 px-4 py-1 bg-ekodrix-green text-[10px] font-bold text-black uppercase tracking-tighter rounded-bl-xl">
          Hot Role
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-ekodrix-green font-mono uppercase tracking-widest">{job.department}</span>
            <span className="text-white/10">•</span>
            <span className="text-xs text-gray-500">{job.type}</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-ekodrix-green transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mb-4 line-clamp-2">
            {job.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {job.requirements.map(req => (
              <span key={req} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-400">
                {req}
              </span>
            ))}
          </div>
        </div>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 text-white text-sm font-semibold hover:bg-ekodrix-green hover:text-white transition-all duration-300 self-start md:self-center border border-white/10"
        >
          Apply
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
