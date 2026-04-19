interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  category?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Ekodrix Team",
  image = "https://ekodrix.com/og-image.jpg",
  category,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": "https://ekodrix.com/about",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://ekodrix.com/#organization",
      "name": "Ekodrix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ekodrix.com/logo.png",
      },
    },
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630,
    },
    ...(category ? { "articleSection": category } : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
