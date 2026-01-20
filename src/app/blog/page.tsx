import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - EKODRIX",
  description: "Insights on SaaS development, AI integration, and startup technology.",
};

const blogPosts = [
  {
    slug: "building-scalable-saas-platform",
    title: "How We Built a SaaS Platform That Handles 1M+ Daily Transactions",
    excerpt: "Deep dive into the architecture and decisions behind building a high-traffic SaaS platform. From database sharding to caching strategies.",
    category: "SaaS Development",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "ai-powered-saas-guide",
    title: "The Complete Guide to Building AI-Powered SaaS in 2024",
    excerpt: "Learn how to integrate cutting-edge AI into your SaaS products effectively without breaking the bank.",
    category: "AI & ML",
    date: "2024-01-10",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "saas-mrr-roadmap",
    title: "From 0 to $10K MRR: Technical Roadmap for SaaS Founders",
    excerpt: "A practical guide to scaling your SaaS from zero to $10K monthly recurring revenue. Focusing on technical debt vs speed.",
    category: "Startup Tech",
    date: "2024-01-05",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "microservices-vs-monolith",
    title: "Monolith vs Microservices: When to Switch?",
    excerpt: "Don't fall into the microservices trap too early. Here is our honest take on when you actually need to split your monolith.",
    category: "Architecture",
    date: "2023-12-28",
    readTime: "15 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => post !== featuredPost);

  return (
    <main className="min-h-screen pt-24 pb-20 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ekodrix-green/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-resellerpro-blue-medium/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-ekodrix-green mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span>Engineering Insights</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up delay-100">
            The <span className="gradient-text">EKODRIX</span> Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Deep dives into SaaS architecture, AI integration, and the business of software.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-20 animate-scale-in delay-300">
          <Link href={`/blog/${featuredPost.slug}`} className="group relative block">
            <div className="absolute inset-0 bg-gradient-to-r from-ekodrix-green/20 to-resellerpro-blue-medium/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-ekodrix-green/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-ekodrix-charcoal-dark/50 border border-white/10 text-ekodrix-green text-sm font-semibold backdrop-blur-md group-hover:border-ekodrix-green/30 group-hover:shadow-lg group-hover:shadow-ekodrix-green/20 transition-all duration-500">
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold group-hover:gradient-text transition-all duration-500">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 pt-4">
                    <div className="flex items-center gap-2 group-hover:text-gray-400 transition-colors">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-gray-400 transition-colors">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                {/* Decorative Visual for Featured Post */}
                <div className="hidden md:flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-green/10 to-resellerpro-blue-medium/10 rounded-2xl blur-lg group-hover:from-ekodrix-green/20 group-hover:to-resellerpro-blue-medium/20 transition-all duration-700" />
                   <div className="relative w-full aspect-video rounded-xl bg-ekodrix-charcoal border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] group-hover:border-white/20 transition-all duration-700">
                      <div className="absolute inset-0 bg-grid-white/[0.05]" />
                      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/10 group-hover:scale-110 transition-all duration-700">
                        <ArrowRight className="w-8 h-8 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-out" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {regularPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass-card rounded-2xl p-8 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ekodrix-green/10 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-green/0 to-resellerpro-blue-medium/0 group-hover:from-ekodrix-green/5 group-hover:to-resellerpro-blue-medium/5 rounded-2xl transition-all duration-700 pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-400 border border-white/5 group-hover:border-ekodrix-green/30 group-hover:text-ekodrix-green group-hover:bg-ekodrix-green/10 transition-all duration-500">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-ekodrix-green transition-colors duration-500">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1 group-hover:text-gray-400 transition-colors">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-gray-400 transition-colors">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-ekodrix-green/20 group-hover:text-ekodrix-green group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
