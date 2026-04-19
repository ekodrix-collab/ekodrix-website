import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService, getAllServices, SERVICE_SLUGS } from "@/lib/services-data";
import { ServiceSchema } from "@/components/schemas/ServiceSchema";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";
import { FAQSchema } from "@/components/schemas/FAQSchema";
import { ArrowRight, CheckCircle, Clock, Phone, Mail, MapPin, Star } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://ekodrix.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://ekodrix.com/services/${service.slug}`,
      siteName: "Ekodrix",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: service.name }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const allServices = getAllServices().filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <>
      <ServiceSchema
        name={service.name}
        description={service.description}
        url={`https://ekodrix.com/services/${service.slug}`}
        priceRange={service.priceRange}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ekodrix.com" },
          { name: "Services", url: "https://ekodrix.com/services" },
          { name: service.name, url: `https://ekodrix.com/services/${service.slug}` },
        ]}
      />
      <FAQSchema faqs={service.faqs} />

      <main className="min-h-screen pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ekodrix-charcoal-dark via-black to-black" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ekodrix-green/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-ekodrix-green transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-ekodrix-green transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gray-300">{service.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/20 text-ekodrix-green text-sm font-medium mb-6">
                  <span>{service.icon}</span>
                  <span>{service.category}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {service.title.split(" in ")[0]}
                  {service.title.includes(" in ") && (
                    <>
                      {" in "}
                      <span className="text-ekodrix-green">{service.title.split(" in ")[1]}</span>
                    </>
                  )}
                </h1>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-ekodrix-green" />
                    <span>Delivery: {service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-ekodrix-green" />
                    <span>Starting: {service.priceRange.split("-")[0]} onwards</span>
                  </div>
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
                    Call Now
                  </a>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="glass-card rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl font-bold mb-6 text-ekodrix-green">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {service.features.slice(0, 8).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Long Description */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <article
                  className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-400 prose-p:leading-relaxed prose-strong:text-white prose-li:text-gray-400 prose-h2:text-3xl prose-h3:text-xl"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <meta itemProp="name" content={service.name} />
                  <meta itemProp="description" content={service.description} />
                  <meta itemProp="areaServed" content="Kondotty, Malappuram, Kerala, India" />
                  {service.longDescription.split("\n\n").map((para, i) => {
                    if (para.startsWith("**") && para.endsWith("**")) {
                      return <h2 key={i}>{para.replace(/\*\*/g, "")}</h2>;
                    }
                    if (para.startsWith("**") && para.includes(":**")) {
                      return <h3 key={i}>{para.replace(/\*\*/g, "")}</h3>;
                    }
                    if (para.startsWith("- ")) {
                      return (
                        <ul key={i}>
                          {para
                            .split("\n")
                            .filter((l) => l.startsWith("- "))
                            .map((item, j) => (
                              <li key={j}>{item.replace("- ", "")}</li>
                            ))}
                        </ul>
                      );
                    }
                    return <p key={i}>{para}</p>;
                  })}
                </article>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <div className="glass-card rounded-2xl p-6 border border-white/10">
                  <h3 className="font-bold mb-4 text-white">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="glass-card rounded-2xl p-6 border border-ekodrix-green/20 bg-ekodrix-green/5">
                  <h3 className="font-bold mb-4 text-ekodrix-green">Get Free Consultation</h3>
                  <p className="text-gray-400 text-sm mb-4">Talk to our {service.name} expert. Free, no-obligation consultation.</p>
                  <div className="space-y-3">
                    <a href="tel:+917736767759" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-ekodrix-green" />
                      +91 77367 67759
                    </a>
                    <a href="mailto:hello@ekodrix.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 text-ekodrix-green" />
                      hello@ekodrix.com
                    </a>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-ekodrix-green" />
                      Kondotty, Malappuram, Kerala
                    </div>
                  </div>
                  <Link
                    href="/start-project"
                    className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold hover:scale-105 transition-all text-sm"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Pricing */}
                <div className="glass-card rounded-2xl p-6 border border-white/10">
                  <h3 className="font-bold mb-3 text-white">Pricing</h3>
                  <p className="text-ekodrix-green font-semibold text-lg mb-1">{service.priceRange}</p>
                  <p className="text-gray-400 text-sm">Contact us for an accurate quote based on your requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our {service.name} Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">A proven, structured approach to deliver outstanding results every time.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, i) => (
                <div key={i} className="glass-card rounded-xl p-6 border border-white/10 hover:border-ekodrix-green/30 transition-colors">
                  <div className="text-3xl font-black text-ekodrix-green/30 mb-2">{step.step}</div>
                  <h3 className="font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Ekodrix for {service.name}?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-6 glass-card rounded-xl border border-white/10">
                  <CheckCircle className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl border border-white/10">
                <CheckCircle className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">8+ years of combined experience in {service.name.toLowerCase()}</p>
              </div>
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl border border-white/10">
                <CheckCircle className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">100+ happy clients across Kerala and India</p>
              </div>
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl border border-white/10">
                <CheckCircle className="w-5 h-5 text-ekodrix-green flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">On-time delivery guaranteed with milestone tracking</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black/20 border-t border-white/5" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">{service.name} questions answered by our experts</p>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-6 border border-white/10"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-bold text-white mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-400 leading-relaxed text-sm" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Other Services</h2>
              <p className="text-gray-400">Complete IT solutions for your business in Kondotty</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/10 hover:border-ekodrix-green/30 hover:bg-white/[0.03] transition-all group"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-ekodrix-green transition-colors text-sm">{s.name}</div>
                    <div className="text-xs text-gray-400">{s.tagline}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 ml-auto group-hover:text-ekodrix-green transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-ekodrix-charcoal-dark border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your {service.name} Project in Kondotty?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Get a free consultation with our {service.name.toLowerCase()} experts. No commitment, no spam — just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-ekodrix-green/20"
              >
                Get Free Quote
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="https://wa.me/917736767759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
              >
                💬 WhatsApp Us
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              🏆 100+ clients served across Kerala • ⭐ 4.9/5 rating • 📍 Based in Kondotty, Malappuram
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
