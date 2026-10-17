export function StructuredData() {
  const softwareCompanySchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareCompany", "LocalBusiness", "ProfessionalService"],
    "@id": "https://www.ekodrix.com/#organization",
    name: "Ekodrix",
    legalName: "Ekodrix Software Solutions",
    url: "https://www.ekodrix.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.ekodrix.com/logo.png",
      width: 600,
      height: 600,
    },
    image: [
      "https://www.ekodrix.com/og-image.jpg",
      "https://www.ekodrix.com/logo.png",
    ],
    description:
      "Ekodrix is a premier international software engineering and technology consulting company serving clients across the UAE, GCC, USA, UK, Australia, and India. We specialize in custom web applications, mobile apps, enterprise software, SaaS platforms, digital marketing, and SEO.",
    slogan: "Engineering Tomorrow's Software Today",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Muhammed Siyad",
      jobTitle: "Chief Executive Officer (CEO)",
    },
    employee: [
      {
        "@type": "Person",
        name: "Muhammed Siyad",
        jobTitle: "Chief Executive Officer (CEO)",
      },
      {
        "@type": "Person",
        name: "Muhammed Rashid",
        jobTitle: "Chief Technology Officer (CTO)",
      },
      {
        "@type": "Person",
        name: "Anaswar Mohanan",
        jobTitle: "Chief Marketing Officer (CMO)",
      },
    ],
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
    hasMap: "https://www.google.com/maps?cid=6666666666666666",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-77367-67759",
        contactType: "customer service",
        email: "hello@ekodrix.com",
        areaServed: ["AE", "SA", "QA", "KW", "OM", "BH", "US", "GB", "AU", "CA", "IN"],
        availableLanguage: ["English", "Arabic", "Malayalam", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-77367-67759",
        contactType: "sales",
        email: "hello@ekodrix.com",
        areaServed: ["AE", "SA", "QA", "KW", "OM", "BH", "US", "GB", "AU", "CA", "IN"],
        availableLanguage: ["English", "Arabic", "Malayalam", "Hindi"],
      },
    ],
    telephone: "+91-77367-67759",
    email: "hello@ekodrix.com",
    currenciesAccepted: "AED, SAR, QAR, KWD, OMR, BHD, USD, GBP, AUD, EUR, INR",
    paymentAccepted: "Credit Card, Bank Wire Transfer, Stripe, Cash",
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
      // GCC Hubs
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "City", name: "Doha" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "City", name: "Kuwait City" },
      { "@type": "Country", name: "Oman" },
      { "@type": "City", name: "Muscat" },
      { "@type": "Country", name: "Bahrain" },
      { "@type": "City", name: "Manama" },
      // Global Hubs
      { "@type": "Country", name: "United States" },
      { "@type": "City", name: "New York" },
      { "@type": "City", name: "San Francisco" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "City", name: "London" },
      { "@type": "Country", name: "Australia" },
      { "@type": "City", name: "Sydney" },
      { "@type": "City", name: "Melbourne" },
      { "@type": "Country", name: "Canada" },
      { "@type": "City", name: "Toronto" },
      { "@type": "Country", name: "Singapore" },
      // India & Regional
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
            url: "https://www.ekodrix.com/services/web-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Android, iOS, React Native and Flutter app development",
            url: "https://www.ekodrix.com/services/app-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description:
              "SEO, Google Ads, Social Media Marketing and Content Marketing",
            url: "https://www.ekodrix.com/services/digital-marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
            description:
              "Local SEO, technical SEO, on-page and off-page optimization",
            url: "https://www.ekodrix.com/services/seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "ERP, CRM, SaaS and enterprise software development",
            url: "https://www.ekodrix.com/services/software-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Development",
            description:
              "Shopify, WooCommerce, and custom online store development",
            url: "https://www.ekodrix.com/services/ecommerce-development",
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
        url: "https://www.ekodrix.com/contact",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ekodrix.com/#website",
    name: "Ekodrix",
    url: "https://www.ekodrix.com",
    description:
      "Best software company in Kondotty, Kerala — web development, app development, digital marketing & custom software solutions",
    publisher: {
      "@id": "https://www.ekodrix.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.ekodrix.com/blog?search={search_term_string}",
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
        "url": "https://www.ekodrix.com/services/web-development"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "App Development",
        "description": "High-performance iOS and Android applications built with Flutter and React Native.",
        "url": "https://www.ekodrix.com/services/app-development"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Digital Marketing",
        "description": "Data-driven SEO, Google Ads, and social media marketing to scale your business.",
        "url": "https://www.ekodrix.com/services/digital-marketing"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Our Portfolio",
        "description": "Explore successful projects and case studies delivered by the Ekodrix team.",
        "url": "https://www.ekodrix.com/work"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contact Us",
        "description": "Get in touch for a free project consultation and tech strategy session.",
        "url": "https://www.ekodrix.com/contact"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "About Ekodrix",
        "description": "Learn about Kondotty's leading IT solutions and software engineering firm.",
        "url": "https://www.ekodrix.com/about"
      }
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ResellerPro",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    creator: {
      "@type": "Organization",
      name: "Ekodrix",
      url: "https://www.ekodrix.com",
    },
    url: "https://www.ekodrix.com/resellerpro",
    description: "All-in-one SaaS CRM and reseller automation platform engineered by Ekodrix Technologies.",
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
      <script
        type="application/ld+json"
        id="software-application-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
}
