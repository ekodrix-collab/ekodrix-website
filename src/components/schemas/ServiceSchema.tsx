interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
  priceRange?: string;
}

export function ServiceSchema({ name, description, url, areaServed = "Kondotty, Malappuram, Kerala, India", priceRange }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "SoftwareCompany",
      "@id": "https://ekodrix.com/#organization",
      "name": "Ekodrix",
      "url": "https://ekodrix.com",
    },
    "areaServed": areaServed,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://ekodrix.com/contact",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+91-77367-67759",
        "contactType": "sales",
      },
    },
    ...(priceRange ? { "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "priceRange": priceRange } } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
