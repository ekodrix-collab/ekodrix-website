export function StructuredData() {
  const softwareCompanySchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareCompany", "LocalBusiness", "ProfessionalService"],
    "@id": "https://ekodrix.com/#organization",
    name: "Ekodrix",
    legalName: "Ekodrix Software Solutions",
    url: "https://ekodrix.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ekodrix.com/logo.png",
      width: 600,
      height: 600,
    },
    image: [
      "https://ekodrix.com/og-image.jpg",
      "https://ekodrix.com/logo.png",
    ],
    description:
      "Ekodrix is the leading software company in Kondotty, Malappuram, Kerala. We specialize in web development, mobile app development, digital marketing, SEO, custom software solutions, and IT consulting. Trusted by 100+ clients across Kerala and India.",
    slogan: "Engineering Tomorrow's Software Today",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kondotty",
      addressLocality: "Kondotty",
      addressRegion: "Kerala",
      postalCode: "673638",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.1444",
      longitude: "75.9610",
    },
    hasMap: "https://www.google.com/maps?cid=6666666666666666", // Placeholder CID, user should replace with actual if they have GBP
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-77367-67759",
        contactType: "customer service",
        email: "hello@ekodrix.com",
        areaServed: ["IN", "US", "GB", "AE", "SA"],
        availableLanguage: ["English", "Malayalam", "Hindi", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-77367-67759",
        contactType: "sales",
        email: "hello@ekodrix.com",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam"],
      },
    ],
    telephone: "+91-77367-67759",
    email: "hello@ekodrix.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Kondotty" },
      { "@type": "City", name: "Malappuram" },
      { "@type": "City", name: "Kozhikode" },
      { "@type": "City", name: "Calicut" },
      { "@type": "City", name: "Manjeri" },
      { "@type": "City", name: "Perinthalmanna" },
      { "@type": "City", name: "Nilambur" },
      { "@type": "City", name: "Kochi" },
      { "@type": "State", name: "Kerala" },
      { "@type": "Country", name: "India" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "11.2188",
        longitude: "75.9965",
      },
      geoRadius: "200000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software & IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Custom website development using React, Next.js, WordPress and more",
            url: "https://ekodrix.com/services/web-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Android, iOS, React Native and Flutter app development",
            url: "https://ekodrix.com/services/app-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description:
              "SEO, Google Ads, Social Media Marketing and Content Marketing",
            url: "https://ekodrix.com/services/digital-marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
            description:
              "Local SEO, technical SEO, on-page and off-page optimization",
            url: "https://ekodrix.com/services/seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "ERP, CRM, SaaS and enterprise software development",
            url: "https://ekodrix.com/services/software-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Development",
            description:
              "Shopify, WooCommerce, and custom online store development",
            url: "https://ekodrix.com/services/ecommerce-development",
          },
        },
      ],
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "SEO",
      "Software Development",
      "E-commerce Solutions",
      "UI/UX Design",
      "Cloud Solutions",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Flutter",
      "React Native",
      "WordPress",
    ],
    sameAs: [
      "https://www.facebook.com/ekodrix",
      "https://www.instagram.com/ekodrix",
      "https://www.linkedin.com/company/ekodrix",
      "https://twitter.com/ekodrix",
      "https://github.com/ekodrix",
      "https://share.google/yvUulZGGd8pqPi9cv",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Free Consultation",
        description:
          "30-minute free consultation for all new clients. Discuss your project requirements.",
        price: "0",
        priceCurrency: "INR",
        url: "https://ekodrix.com/contact",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ekodrix.com/#website",
    name: "Ekodrix",
    url: "https://ekodrix.com",
    description:
      "Best software company in Kondotty, Kerala — web development, app development, digital marketing & custom software solutions",
    publisher: {
      "@id": "https://ekodrix.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ekodrix.com/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Web Development",
        "description": "Custom enterprise websites, React & Next.js applications, and corporate portals.",
        "url": "https://ekodrix.com/services/web-development"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "App Development",
        "description": "High-performance iOS and Android applications built with Flutter and React Native.",
        "url": "https://ekodrix.com/services/app-development"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Digital Marketing",
        "description": "Data-driven SEO, Google Ads, and social media marketing to scale your business.",
        "url": "https://ekodrix.com/services/digital-marketing"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Our Portfolio",
        "description": "Explore successful projects and case studies delivered by the Ekodrix team.",
        "url": "https://ekodrix.com/work"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contact Us",
        "description": "Get in touch for a free project consultation and tech strategy session.",
        "url": "https://ekodrix.com/contact"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "About Ekodrix",
        "description": "Learn about Kondotty's leading IT solutions and software engineering firm.",
        "url": "https://ekodrix.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareCompanySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        id="sitelinks-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
    </>
  );
}
