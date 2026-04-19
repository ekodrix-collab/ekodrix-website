import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Web Development, App Dev & Digital Marketing Insights — Ekodrix",
  description:
    "Ekodrix's tech blog — expert insights on web development, mobile app development, digital marketing, SEO, SaaS architecture, and software development from Kondotty, Kerala.",
  keywords: [
    "ekodrix blog",
    "software development blog kerala",
    "web development blog kondotty",
    "app development insights",
    "digital marketing blog kerala",
    "seo tips kerala",
    "software company blog kondotty",
    "tech blog malappuram",
    "saas development blog",
    "programming blog kerala",
    "startup tech blog india",
    "software engineering blog",
    "nextjs blog tutorial",
    "react development tips",
  ],
  alternates: { canonical: "https://ekodrix.com/blog" },
  openGraph: {
    title: "Ekodrix Blog — Tech Insights from Kondotty's Leading Software Company",
    description: "Expert insights on web development, app development, digital marketing & SEO from the Ekodrix engineering team.",
    url: "https://ekodrix.com/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const blogPosts = [
  {
    slug: "building-scalable-saas-platform",
    title: "Mastering SaaS Scalability: Engineering for 1M+ Transactions",
    excerpt: "A technical deep dive into the architecture and decisions behind building high-traffic SaaS platforms. From database sharding to advanced caching strategies.",
    category: "Architecture",
    date: "2026-01-20",
    readTime: "12 min read",
    featured: true,
    image: "/images/blog/saas-scalability.png"
  },
  {
    slug: "ai-production-workflows",
    title: "AI in Production: Integrating LLMs into Real-World SaaS",
    excerpt: "Learn how to effectively integrate cutting-edge AI into your production workflows without sacrificing reliability or performance.",
    category: "Artificial Intelligence",
    date: "2026-01-18",
    readTime: "10 min read",
    featured: false,
    image: "/images/blog/ai-production.png"
  },
  {
    slug: "art-of-premium-ux",
    title: "The Art of User Experience: Why Micro-interactions Matter",
    excerpt: "How the smallest details in design can define a premium product. Exploring the intersection of aesthetics and functionality.",
    category: "Design",
    date: "2026-01-15",
    readTime: "8 min read",
    featured: false,
    image: "/images/blog/ux-design.png"
  },
  {
    slug: "modern-tech-stack-2026",
    title: "Modern Tech Stack 2026: Next.js, Framer Motion, and Beyond",
    excerpt: "Why we choose these specific technologies to build production-grade systems that scale from Day 1 to IPO.",
    category: "Engineering",
    date: "2026-01-12",
    readTime: "15 min read",
    featured: false,
    image: "/images/blog/tech-stack.png"
  },
  {
    slug: "engineering-the-future",
    title: "Engineering the Future: Automated Production Pipelines",
    excerpt: "Our vision for the next generation of software deployment and automated infrastructure management.",
    category: "DevOps",
    date: "2026-01-08",
    readTime: "9 min read",
    featured: false,
    image: "/images/blog/engineering-future.png"
  },
  {
    slug: "startup-velocity-mvp-to-scale",
    title: "Startup Velocity: Shipping MVPs That Actually Scale",
    excerpt: "Breaking the myth of 'move fast and break things'. How to maintain extreme velocity while building stable engineering foundations.",
    category: "Startup Tech",
    date: "2026-01-05",
    readTime: "11 min read",
    featured: false,
    image: "/images/blog/startup-velocity.png"
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
                {/* Image Visual for Featured Post */}
                <div className="hidden md:block relative group-hover:scale-[1.02] transition-transform duration-700">
                   <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-green/20 to-resellerpro-blue-medium/20 rounded-2xl blur-lg group-hover:from-ekodrix-green/30 group-hover:to-resellerpro-blue-medium/30 transition-all duration-700" />
                   <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-700">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-ekodrix-green group-hover:border-ekodrix-green transition-all duration-500">
                        <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
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
            <ScrollReveal 
              key={post.slug} 
              type="blur-in" 
              delay={(index % 3) * 0.15} 
              threshold={0.1}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group glass-card block rounded-2xl p-8 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ekodrix-green/10 relative overflow-hidden h-full"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-green/0 to-resellerpro-blue-medium/0 group-hover:from-ekodrix-green/5 group-hover:to-resellerpro-blue-medium/5 rounded-2xl transition-all duration-700 pointer-events-none" />
                
                <div className="relative h-full flex flex-col">
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-white/5 group-hover:border-white/20 transition-all duration-500 bg-ekodrix-charcoal relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-black/50 text-[10px] font-bold text-ekodrix-green border border-ekodrix-green/30 backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
