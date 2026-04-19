import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocation, LOCATION_SLUGS, LOCATIONS } from "@/lib/locations-data";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";
import { FAQSchema } from "@/components/schemas/FAQSchema";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Star } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  const isGulf = location.state !== "Kerala";
  const locationStr = isGulf ? `${location.name}, ${location.state}` : `${location.name}, ${location.district}, Kerala`;

  return {
    title: `Software Company in ${location.name} | Web Development, App Development — Ekodrix`,
    description: `Leading software company serving ${location.name}, ${location.district}. Expert web development, mobile app development, digital marketing & SEO services in ${location.name}. Best IT company${isGulf ? ` for ${location.state} clients` : ` near ${location.name}`}. Call +91-77367-67759.`,
    keywords: [
      `software company ${location.slug}`,
      `it company ${location.slug}`,
      `web development ${location.slug}`,
      `app development ${location.slug}`,
      `digital marketing ${location.slug}`,
      `seo services ${location.slug}`,
      `best software company ${location.slug}`,
      `software company near ${location.slug}`,
      `it company near ${location.slug}`,
      `web designers ${location.slug}`,
      `app developers ${location.slug}`,
      `software company in ${location.name}`,
      `it company in ${location.name}`,
      `web development company in ${location.name}`,
      `mobile app development ${location.name}`,
      `digital marketing company ${location.name}`,
      `seo company ${location.name}`,
      `ekodrix ${location.slug}`,
      `ekodrix ${location.name}`,
      `software solutions ${location.name}`,
      `website design ${location.name}`,
      `website development ${location.name}`,
      `it solutions ${location.name}`,
      `technology company ${location.name}`,
    ],
    alternates: {
      canonical: `https://ekodrix.com/locations/${location.slug}`,
    },
    openGraph: {
      title: `Software Company in ${location.name} | Ekodrix`,
      description: `Best IT company for ${location.name} businesses. Web development, app development, digital marketing & SEO. Call +91-77367-67759.`,
      url: `https://ekodrix.com/locations/${location.slug}`,
      siteName: "Ekodrix",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Ekodrix — Software Company serving ${location.name}` }],
      type: "website",
      locale: "en_IN",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const isGulf = location.state !== "Kerala";
  const locationStr = isGulf ? `${location.name}, ${location.state}` : `${location.name}`;
  const districtStr = isGulf ? location.state : `${location.district}, Kerala`;

  const localFaqs = [
    {
      question: `Do you provide software services in ${location.name}?`,
      answer: `Yes! Ekodrix provides complete software and IT services to clients in ${locationStr}. Our team delivers all projects remotely with the same quality as on-site work. We regularly serve clients from ${districtStr} for web development, mobile app development, digital marketing, SEO, and custom software development. We're happy to schedule video calls for consultations and project discussions.`,
    },
    {
      question: `What is the cost of website development for ${location.name} businesses?`,
      answer: `Website development costs for ${location.name} businesses: Basic business website: ₹15,000-₹35,000. Professional corporate website: ₹40,000-₹80,000. E-commerce website: ₹60,000-₹2,00,000. Custom web application: ₹1,00,000+. All websites include responsive design, basic SEO setup, and Google Analytics integration. Contact us for a free, accurate quote.`,
    },
    {
      question: `How do I get a free consultation for my ${location.name} business?`,
      answer: `Getting started is easy! Call us at +91-77367-67759, WhatsApp us, or email hello@ekodrix.com. Tell us about your project and we'll schedule a free 30-minute consultation video call. We'll understand your requirements, suggest the best solution, and provide a detailed quote — all at no cost, no obligation.`,
    },
    {
      question: `Can you help my ${location.name} business rank on Google?`,
      answer: `Absolutely! Our local SEO services help businesses in ${locationStr} rank on Google for their target keywords. We optimize for both national and ${location.district}-specific local searches. Many of our clients from ${location.name} have achieved first-page rankings within 3-6 months and are generating consistent organic leads monthly.`,
    },
    {
      question: `Which is the best software company serving ${location.name}?`,
      answer: `Ekodrix is one of the most trusted software and IT companies serving clients in ${locationStr} and across ${isGulf ? location.state : "Kerala"}. With our headquarters in Kondotty, Malappuram, we have deep understanding of the regional market and business needs. We've helped 100+ businesses across the region transform their digital presence. Our 4.9/5 average rating from verified clients reflects our commitment to quality and service.`,
    },
  ];

  const nearbyLocations = LOCATIONS
    .filter((l) => l.district === location.district && l.slug !== slug)
    .slice(0, 6);

  const services = [
    { name: "Web Development", slug: "web-development", icon: "🌐", desc: `Custom websites for ${locationStr} businesses` },
    { name: "Mobile App Development", slug: "app-development", icon: "📱", desc: `Android & iOS apps for ${location.name}` },
    { name: "Digital Marketing", slug: "digital-marketing", icon: "📈", desc: `Grow your ${location.name} business online` },
    { name: "SEO Services", slug: "seo-services", icon: "🔍", desc: `Rank #1 on Google in ${location.name}` },
    { name: "Custom Software", slug: "software-development", icon: "💻", desc: `Business software for ${location.name} companies` },
    { name: "Graphic Design", slug: "graphic-design", icon: "🎨", desc: `Logo & branding for ${location.name} businesses` },
  ];

  const industries = [
    "Retail & E-commerce", "Healthcare & Medical", "Education & Training",
    "Restaurant & Food", "Real Estate & Construction", "Manufacturing & Industry",
    "Travel & Tourism", "Finance & Banking", "Automobile & Auto Parts", "Fashion & Textiles",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Software Development Services in ${location.name}`,
    "description": `Professional web development, app development, digital marketing and IT services for businesses in ${locationStr}`,
    "provider": {
      "@type": "SoftwareCompany",
      "@id": "https://ekodrix.com/#organization",
      "name": "Ekodrix",
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
    },
    "url": `https://ekodrix.com/locations/${location.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ekodrix.com" },
          { name: "Service Locations", url: "https://ekodrix.com/locations" },
          { name: location.name, url: `https://ekodrix.com/locations/${location.slug}` },
        ]}
      />
      <FAQSchema faqs={localFaqs} />

      <main className="min-h-screen pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-charcoal-dark via-black to-black" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ekodrix-green/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-ekodrix-green transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-ekodrix-green transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-gray-300">{location.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/20 text-ekodrix-green text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{districtStr}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Best Software Company <span className="text-ekodrix-green">in {location.name}</span>
                </h1>
                <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                  Ekodrix delivers world-class web development, mobile apps, digital marketing, SEO and custom software solutions to businesses in {locationStr}. {location.distanceFromKondotty && `Just ${location.distanceFromKondotty} from our Kondotty headquarters.`}
                </p>
                <div className="flex items-center gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-400 text-sm ml-1">4.9/5 from 100+ clients</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-ekodrix-green/20"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+917736767759"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    +91 77367 67759
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl font-bold mb-6">Why {location.name} Businesses Choose Ekodrix</h2>
                <ul className="space-y-3">
                  {[
                    `Deep understanding of ${isGulf ? location.state : "Kerala"} market and customer behavior`,
                    "100+ successful projects for businesses like yours",
                    "Complete services: web, app, marketing, SEO, software",
                    "Competitive pricing with no hidden costs",
                    "Direct communication — no middlemen",
                    "Results in 30-90 days, not 12 months",
                    "Full ownership of all deliverables",
                    "Post-launch support and maintenance included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services in this Location */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Services in {location.name}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Complete IT and software solutions for businesses in {locationStr}. Every service backed by 8+ years of experience and 100+ satisfied clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group glass-card p-6 rounded-2xl border border-white/10 hover:border-ekodrix-green/30 hover:bg-white/[0.03] transition-all"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-ekodrix-green transition-colors">
                    {service.name} in {location.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                  <div className="flex items-center gap-2 text-ekodrix-green text-sm font-medium">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Long Content Section */}
        <section className="py-20 bg-black/20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-400 prose-h2:text-3xl prose-h3:text-xl">
              <h2>Software Company Serving {location.name} — Why Ekodrix?</h2>
              <p>
                Finding a reliable software company in {locationStr} doesn&apos;t have to be difficult. Ekodrix, headquartered in Kondotty{location.distanceFromKondotty ? ` (just ${location.distanceFromKondotty} from ${location.name})` : ""}, has been the technology partner of choice for businesses across {isGulf ? location.state : "Kerala and the Gulf region"} since our founding.
              </p>
              <p>
                We believe that every business in {location.name} deserves access to world-class software and digital marketing solutions — not just the big companies in metro cities. That&apos;s why we work with businesses of all sizes in {districtStr}, from local shops setting up their first website to established companies building enterprise software.
              </p>

              <h3>Web Development for {location.name} Businesses</h3>
              <p>
                Your website is your most powerful sales tool. We build fast, beautiful, SEO-optimized websites for businesses in {location.name} that rank on Google and convert visitors into customers. Every website includes mobile optimization, Contact forms, WhatsApp integration, and basic SEO setup — at no extra cost.
              </p>

              <h3>Mobile App Development in {location.name}</h3>
              <p>
                Mobile apps are transforming how businesses in {location.name} serve their customers. Whether you need an e-commerce app, a service booking app, or an internal business tool — our team builds fast, reliable Android and iOS apps that users love. We use React Native and Flutter for cost-effective cross-platform development.
              </p>

              <h3>Digital Marketing for {location.name} Businesses</h3>
              <p>
                Want more customers from {location.name} and surrounding areas? Our digital marketing team runs SEO campaigns, Google Ads, Facebook/Instagram ads, and social media management that drives real business results. We understand the {isGulf ? `Gulf expat` : "Kerala"} market deeply and create campaigns that resonate with your target audience.
              </p>

              <h3>Industries We Serve in {location.name}</h3>
              <p>
                We have experience working with businesses across virtually every industry in {locationStr}:
              </p>
              <ul>
                {industries.map((ind) => <li key={ind}>{ind}</li>)}
              </ul>

              <h3>Get a Free Consultation for Your {location.name} Business</h3>
              <p>
                Ready to take your {location.name} business to the next level with technology? Contact Ekodrix today for a free, no-obligation consultation. Our team will understand your requirements and recommend the best solution for your specific needs and budget.
              </p>
              <p>
                📞 <strong>Call/WhatsApp: +91 77367 67759</strong><br />
                📧 <strong>Email: hello@ekodrix.com</strong><br />
                📍 <strong>Office: Kondotty, Malappuram, Kerala (serving all of {districtStr})</strong>
              </p>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 border-t border-white/5" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">FAQs — Software Company in {location.name}</h2>
            </div>
            <div className="space-y-4">
              {localFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-6 border border-white/10"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-bold text-white mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-400 text-sm leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Locations */}
        {nearbyLocations.length > 0 && (
          <section className="py-20 bg-black/20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">We Also Serve Nearby Areas</h2>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {nearbyLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:border-ekodrix-green/30 hover:text-ekodrix-green transition-all"
                  >
                    Software Company {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-ekodrix-charcoal-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Grow Your {location.name} Business with Technology?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join 100+ businesses across Kerala who trust Ekodrix for their software and digital marketing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-ekodrix-green/20"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="https://wa.me/917736767759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
