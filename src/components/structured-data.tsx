export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EKODRIX",
    url: "https://ekodrix.com",
    logo: "https://ekodrix.com/logo.png",
    description: "Premium software studio crafting production-grade SaaS products for ambitious startups.",
    sameAs: [
      "https://github.com/ekodrix",
      "https://twitter.com/ekodrix",
      "https://linkedin.com/company/ekodrix",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-123-456-7890",
      contactType: "Customer Service",
      email: "hello@ekodrix.com",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EKODRIX",
    url: "https://ekodrix.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ekodrix.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
