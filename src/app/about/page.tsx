import { Metadata } from "next";
import { Code2, Rocket, Heart, Globe, ArrowRight, Zap, Target, Shield } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";

export const metadata: Metadata = {
  title: "About Us - EKODRIX",
  description: "Learn about EKODRIX - a premium software studio crafting production-grade SaaS products.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ekodrix-green/20 rounded-full blur-[100px] animate-pulse-glow opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-resellerpro-blue-medium/20 rounded-full blur-[100px] animate-pulse-glow opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-float-slow" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-ekodrix-green mb-6 backdrop-blur-sm animate-fade-in-up">
              EST. 2024
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight animate-fade-in-up delay-100">
              Engineering <br />
              <span className="gradient-text">The Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed text-balance animate-fade-in-up delay-200">
              We are not just developers; we are craftsmen. EKODRIX is a premium software studio dedicated to shipping production-grade SaaS products that define the next generation of the web.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-32 relative bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-float-slow group">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-1 transition-all duration-500 hover:scale-[1.02]">
                <div className="w-full h-full bg-gradient-to-br from-ekodrix-charcoal to-black rounded-xl p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-grid-white/[0.05]" />
                   <Code2 className="w-48 h-48 text-white/5 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500">
                       OG
                     </span>
                   </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-ekodrix-green/10 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-resellerpro-blue-medium/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-right">
                The <span className="gradient-text">Founder Mindset</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-right delay-100">
                At EKODRIX, we don't just write code; we build businesses. With a "Founder Mindset," we approach every project as if it were our own. We understand that code is a liability, and functionality is an asset.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-right delay-200">
                Our mission is to become the go-to partner for ambitious startups worldwide. We ship fast, we ship quality, and we build systems that scale from Day 1 to IPO.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-ekodrix-green/30 hover:bg-white/[0.08] transition-all duration-300 cursor-default group animate-scale-in delay-300">
                  <div className="text-3xl font-bold text-ekodrix-green mb-1 group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-resellerpro-blue-medium/30 hover:bg-white/[0.08] transition-all duration-300 cursor-default group animate-scale-in delay-400">
                  <div className="text-3xl font-bold text-resellerpro-blue-medium mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-400">Production Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Principles that guide every line of code we write and every product we ship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard 
              icon={<Rocket className="w-6 h-6" />}
              title="Ship Fast"
              description="Velocity is our currency. We deliver MVP to market in record time without cutting corners."
              color="text-ekodrix-green"
              delay="0"
            />
            <ValueCard 
              icon={<Code2 className="w-6 h-6" />}
              title="Code is Craft"
              description="We write clean, maintainable, and scalable code that other developers love to read."
              color="text-resellerpro-blue-medium"
              delay="100"
            />
            <ValueCard 
              icon={<Target className="w-6 h-6" />}
              title="Product Driven"
              description="We focus on outcomes, not just outputs. We build products that solve real problems."
              color="text-purple-400"
              delay="200"
            />
            <ValueCard 
              icon={<Globe className="w-6 h-6" />}
              title="Global Standard"
              description="World-class engineering standards with a deep understanding of local nuances."
              color="text-orange-400"
              delay="300"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team - Auto Scrolling */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h2>
            <p className="text-gray-400 text-lg">Problem-solvers who care about outcomes.</p>
          </div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll-left">
            {/* First set of team members */}
            {teamMembers.map((member, index) => (
              <TeamCard key={`first-${index}`} member={member} />
            ))}
            {/* Duplicate for seamless loop */}
            {teamMembers.map((member, index) => (
              <TeamCard key={`second-${index}`} member={member} />
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ekodrix-charcoal-dark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ekodrix-charcoal-dark to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* Skills / Tech Stack Grid */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Built With Modern Stack</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
                {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                    <span key={tech} className="text-xl md:text-2xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
}

const teamMembers = [
  { name: "Muhammed Rashid", role: "Fullstack Developer", image: "/team/member-1.png", color: "from-blue-500 to-cyan-500" },
  { name: "Anaswar", role: "Fullstack Developer", image: "/team/member-2.png", color: "from-purple-500 to-pink-500" },
  { name: "Mrithul", role: "Fullstack Developer", image: "/team/member-3.png", color: "from-orange-500 to-red-500" },
  { name: "Unais", role: "Fullstack Developer", image: "/team/member-4.png", color: "from-red-500 to-rose-500" },
  { name: "BijuLal", role: "Fullstack Developer", image: "/team/member-5.png", color: "from-green-500 to-emerald-500" },
  { name: "Sadiq Ameen", role: "Fullstack Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadiq", color: "from-indigo-500 to-blue-500" },
  { name: "Muhammed Siyad", role: "Fullstack Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siyad", color: "from-teal-500 to-cyan-500" },
];

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <div className="flex-shrink-0 w-64 group cursor-pointer">
      <Card3D intensity={0.6} enableScale={true}>
        <div className="glass-card rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-2xl hover:shadow-ekodrix-green/10">
          {/* Profile Image */}
          <div className="relative mb-4 mx-auto w-24 h-24">
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500 border-2 border-white/10 group-hover:border-white/20`}>
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Name & Role */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1 group-hover:text-ekodrix-green transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {member.role}
            </p>
          </div>
        </div>
      </Card3D>
    </div>
  );
}

function ValueCard({ icon, title, description, color, delay }: { icon: any, title: string, description: string, color: string, delay: string }) {
  return (
    <Card3D intensity={0.4} enableScale={true}>
      <div 
        className={`glass-card p-8 rounded-2xl hover:bg-white/[0.03] group animate-fade-in-up cursor-pointer hover:shadow-2xl hover:shadow-ekodrix-green/10`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out group-hover:shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/[0.02] group-hover:to-white/0 transition-all duration-500 pointer-events-none" />
      </div>
    </Card3D>
  );
}
