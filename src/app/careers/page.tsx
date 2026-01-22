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
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Card3D } from "@/components/ui/Card3D";

export const metadata: Metadata = {
  title: "Careers - Join EKODRIX",
  description: "Join our team of talented developers building the future of software. We're hiring Fullstack Developers with expertise in React, Next.js, PostgreSQL, and MySQL.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ekodrix-green/20 rounded-full blur-[120px] animate-pulse-glow opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-resellerpro-blue-medium/20 rounded-full blur-[120px] animate-pulse-glow opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-float-slow" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-ekodrix-green mb-6 backdrop-blur-sm animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              We're Hiring!
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight animate-fade-in-up delay-100">
              Build The <br />
              <span className="gradient-text">Future With Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed text-balance animate-fade-in-up delay-200">
              Join a team of world-class engineers crafting production-grade SaaS products that shape the next generation of the web.
            </p>
            <a 
              href="#openings" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ekodrix-green text-white font-semibold hover:bg-ekodrix-green/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-ekodrix-green/20 animate-fade-in-up delay-300"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Ekodrix */}
      <section className="py-32 relative bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Join EKODRIX?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We're not just building software; we're building the future. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard 
              icon={<Rocket className="w-6 h-6" />}
              title="Ship Real Products"
              description="Work on production-grade SaaS applications used by thousands of users worldwide."
              color="text-ekodrix-green"
              delay="0"
            />
            <BenefitCard 
              icon={<Zap className="w-6 h-6" />}
              title="Modern Tech Stack"
              description="Build with cutting-edge technologies: Next.js, React, TypeScript, PostgreSQL, and more."
              color="text-resellerpro-blue-medium"
              delay="100"
            />
            <BenefitCard 
              icon={<Trophy className="w-6 h-6" />}
              title="Growth & Learning"
              description="Continuous learning opportunities with mentorship from senior engineers and founders."
              color="text-purple-400"
              delay="200"
            />
            <BenefitCard 
              icon={<Globe className="w-6 h-6" />}
              title="Remote Friendly"
              description="Work from anywhere with flexible hours and a results-driven culture."
              color="text-orange-400"
              delay="300"
            />
            <BenefitCard 
              icon={<Users className="w-6 h-6" />}
              title="Small Team, Big Impact"
              description="Your code will directly impact product direction and user experience."
              color="text-cyan-400"
              delay="400"
            />
            <BenefitCard 
              icon={<Heart className="w-6 h-6" />}
              title="Ownership Culture"
              description="Take ownership of features from design to deployment. We trust you to ship."
              color="text-pink-400"
              delay="500"
            />
            <BenefitCard 
              icon={<Code2 className="w-6 h-6" />}
              title="Code Quality First"
              description="Write clean, maintainable code with proper testing and CI/CD pipelines."
              color="text-green-400"
              delay="600"
            />
            <BenefitCard 
              icon={<Briefcase className="w-6 h-6" />}
              title="Competitive Package"
              description="Market-competitive salary with performance bonuses and equity options."
              color="text-yellow-400"
              delay="700"
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
            <p className="text-gray-400 text-lg">
              Find your perfect role and help us build amazing products.
            </p>
          </div>

          {/* Fullstack Developer Position */}
          <div className="glass-card rounded-3xl p-8 md:p-12 hover:bg-white/[0.03] transition-all duration-500 hover:shadow-2xl hover:shadow-ekodrix-green/10 group border-2 border-white/5 hover:border-ekodrix-green/20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ekodrix-green/10 text-ekodrix-green text-sm font-medium mb-4">
                  <Briefcase className="w-4 h-4" />
                  Full-Time
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-ekodrix-green transition-colors duration-300">
                  Fullstack Developer
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Remote / Hybrid
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Full-Time
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Engineering
                  </span>
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ekodrix-green text-white font-semibold hover:bg-ekodrix-green/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ekodrix-green/30 whitespace-nowrap self-start"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* About the Role */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-ekodrix-green" />
                About the Role
              </h4>
              <p className="text-gray-400 leading-relaxed">
                We're looking for a talented Fullstack Developer to join our engineering team. You'll work on building scalable, production-grade SaaS applications using modern web technologies. This is a hands-on role where you'll have the opportunity to work across the entire stack—from beautiful user interfaces to robust backend systems.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                <ResponsibilityItem text="Design and develop responsive, high-performance web applications using React and Next.js" />
                <ResponsibilityItem text="Build and maintain RESTful APIs and backend services with Node.js" />
                <ResponsibilityItem text="Work with PostgreSQL and MySQL databases to design efficient data models" />
                <ResponsibilityItem text="Collaborate with designers and product managers to deliver pixel-perfect UIs" />
                <ResponsibilityItem text="Write clean, maintainable code with comprehensive testing" />
                <ResponsibilityItem text="Participate in code reviews and contribute to engineering best practices" />
                <ResponsibilityItem text="Optimize applications for maximum performance and scalability" />
              </ul>
            </div>

            {/* Required Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Required Skills & Experience</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <SkillItem skill="React.js" level="Strong proficiency in React and modern JavaScript" />
                <SkillItem skill="Next.js" level="Experience building apps with Next.js 13+" />
                <SkillItem skill="JavaScript/TypeScript" level="Expert knowledge of ES6+ and TypeScript" />
                <SkillItem skill="PostgreSQL" level="Database design and optimization" />
                <SkillItem skill="MySQL" level="Experience with relational databases" />
                <SkillItem skill="Node.js" level="Backend development with Express/Fastify" />
                <SkillItem skill="Git" level="Version control and collaborative workflows" />
                <SkillItem skill="REST APIs" level="Building and consuming RESTful services" />
              </div>
            </div>

            {/* Nice to Have */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Nice to Have</h4>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="Docker" />
                <TechBadge name="AWS/Cloud" />
                <TechBadge name="Redis" />
                <TechBadge name="GraphQL" />
                <TechBadge name="Tailwind CSS" />
                <TechBadge name="CI/CD" />
                <TechBadge name="Microservices" />
                <TechBadge name="MongoDB" />
                <TechBadge name="Testing (Jest, Cypress)" />
              </div>
            </div>

            {/* What We Offer */}
            <div className="border-t border-white/10 pt-8">
              <h4 className="text-xl font-bold mb-4">What We Offer</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                <OfferItem text="Competitive salary package" />
                <OfferItem text="Performance bonuses" />
                <OfferItem text="Remote work flexibility" />
                <OfferItem text="Latest tech & tools" />
                <OfferItem text="Learning & development budget" />
                <OfferItem text="Health insurance" />
                <OfferItem text="Flexible working hours" />
                <OfferItem text="Equity options" />
              </ul>
            </div>
          </div>

          {/* Apply CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Don't see a perfect fit? We're always looking for talented individuals.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 text-ekodrix-green hover:text-ekodrix-green/80 transition-colors font-medium"
            >
              Send us your resume anyway
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-black/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Culture</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            At EKODRIX, we believe in building products with a <span className="text-white font-semibold">Founder Mindset</span>. Every team member has ownership, autonomy, and the freedom to innovate. We move fast, ship quality, and celebrate both successes and failures as learning opportunities.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            We're a small, talented team where your voice matters. No bureaucracy, no politics—just passionate people building amazing things together.
          </p>
        </div>
      </section>
    </main>
  );
}

// Component: Benefit Card
function BenefitCard({ icon, title, description, color, delay }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string; 
  delay: string;
}) {
  return (
    <Card3D intensity={0.4} enableScale={true}>
      <div 
        className="glass-card p-6 rounded-2xl hover:bg-white/[0.03] group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-ekodrix-green/10 animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-ekodrix-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card3D>
  );
}

// Component: Responsibility Item
function ResponsibilityItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-gray-400">
      <CheckCircle2 className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

// Component: Skill Item
function SkillItem({ skill, level }: { skill: string; level: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-ekodrix-green/30 hover:bg-white/[0.04] transition-all duration-300">
      <Code2 className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
      <div>
        <div className="font-semibold text-white mb-1">{skill}</div>
        <div className="text-sm text-gray-400">{level}</div>
      </div>
    </div>
  );
}

// Component: Tech Badge
function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-ekodrix-green/30 hover:text-white transition-all duration-300 cursor-default">
      {name}
    </span>
  );
}

// Component: Offer Item
function OfferItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-gray-400">
      <CheckCircle2 className="w-4 h-4 text-ekodrix-green flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}
