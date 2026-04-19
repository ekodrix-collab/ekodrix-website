export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  process: Array<{ step: string; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  priceRange: string;
  deliveryTime: string;
  category: string;
  icon: string;
}

export const SERVICES: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Dev",
    tagline: "Websites That Win Customers",
    title: "Web Development Company in Kondotty",
    metaTitle: "Web Development Company in Kondotty | Professional Website Design — Ekodrix",
    metaDescription:
      "Looking for the best web development company in Kondotty? Ekodrix builds fast, SEO-friendly, responsive websites. Custom web apps, WordPress, React, Next.js. Free quote! Call +91-77367-67759.",
    keywords: [
      "web development company kondotty",
      "website development kondotty",
      "web design company kondotty",
      "website design kondotty",
      "custom web development kondotty",
      "professional web development kondotty",
      "web development services kondotty",
      "website development services kondotty",
      "web application development kondotty",
      "responsive web design kondotty",
      "react development kondotty",
      "nextjs development kondotty",
      "nodejs development kondotty",
      "wordpress development kondotty",
      "ecommerce website kondotty",
      "php development kondotty",
      "website design malappuram",
      "web development malappuram",
      "web development company kerala",
      "affordable web development kondotty",
      "business website design kondotty",
      "corporate website design kondotty",
      "landing page design kondotty",
      "seo friendly website kondotty",
      "mobile friendly website kondotty",
      "fast loading website kondotty",
      "website redesign kondotty",
      "website maintenance kondotty",
      "website development cost kondotty",
      "cheap website design kerala",
      "full stack development kondotty",
      "mern stack development kondotty",
      "laravel development kondotty",
      "portfolio website design kondotty",
    ],
    description:
      "Professional web development services in Kondotty. We build fast, secure, and beautiful websites that rank on Google and convert visitors into customers.",
    longDescription: `Are you looking for a professional web development company in Kondotty, Malappuram? Ekodrix is Kerala's most trusted web development partner, delivering world-class websites that don't just look stunning — they rank on Google and convert visitors into paying customers.

With 8+ years of collective experience and 100+ websites delivered across Kerala, India, and internationally, our expert team crafts every website with precision, performance, and SEO at its core. Whether you need a simple business website, a powerful e-commerce store, or a complex web application — we have the expertise to deliver.

We serve businesses in Kondotty, Malappuram, Kozhikode, and across Kerala. Our web development team specializes in React, Next.js, Node.js, WordPress, PHP, and Python — choosing the perfect technology stack for your unique requirements.

**Why Ekodrix is the Best Web Development Company in Kondotty?**

Our websites are built for three things: speed, search engine visibility, and conversions. Every page is optimized for Google's Core Web Vitals, ensuring fast loading, smooth interaction, and visual stability. Our responsive designs look perfect on all devices from mobile to desktop.

We don't just build websites — we build business assets. Our post-launch support, maintenance, and SEO optimization services ensure your website keeps performing long after launch.

**Our Web Development Services in Kondotty Include:**
- Custom website design and development
- E-commerce website development (Shopify, WooCommerce, custom)
- React and Next.js web applications
- WordPress development and customization
- PHP and Laravel web development
- REST API and backend development
- Website redesign and migration
- Website maintenance and support
- SEO-optimized web development
- Progressive Web Apps (PWA)

Contact Ekodrix today for a free consultation and get a detailed quote for your web development project in Kondotty.`,
    features: [
      "100% Responsive Design — perfect on all devices",
      "SEO-Optimized from day one — built to rank on Google",
      "Lightning-fast performance — Core Web Vitals green",
      "Secure HTTPS with SSL included",
      "Content Management System (CMS) integration",
      "Payment gateway integration",
      "Social media integration",
      "Google Analytics and tracking setup",
      "On-site SEO setup included",
      "1 month free post-launch support",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "WordPress",
      "PHP / Laravel",
      "Python / Django",
      "MySQL / PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Vercel / AWS",
    ],
    benefits: [
      "Rank higher on Google with SEO-built websites",
      "Generate more leads with conversion-optimized layouts",
      "Reach more customers with mobile-first responsive design",
      "Save time with easy-to-manage content systems",
      "Grow confidently with scalable architecture",
    ],
    process: [
      {
        step: "01",
        title: "Consultation & Planning",
        description:
          "We start with a free consultation to understand your business, goals, and target audience in Kondotty and beyond.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        description:
          "Our designers create wireframes and visual designs. You approve before we write a single line of code.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Our engineers build your website with clean code, following best practices for performance and SEO.",
      },
      {
        step: "04",
        title: "Testing & QA",
        description:
          "Rigorous testing across all devices and browsers. We fix every bug before hand-off.",
      },
      {
        step: "05",
        title: "Launch & SEO Setup",
        description:
          "We deploy your website, set up Google Analytics, Search Console, and on-page SEO.",
      },
      {
        step: "06",
        title: "Support & Growth",
        description:
          "Ongoing maintenance, updates, and SEO optimization to keep your website ranking and growing.",
      },
    ],
    faqs: [
      {
        question: "How much does website development cost in Kondotty?",
        answer:
          "Website development costs in Kondotty vary based on complexity. A basic business website starts from ₹15,000, a professional website from ₹35,000, an e-commerce website from ₹60,000, and custom web applications from ₹1,00,000. Contact Ekodrix for a free, accurate quote based on your specific needs.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A basic website takes 7-15 days. A business or portfolio website takes 15-30 days. E-commerce websites take 30-60 days. Complex web applications take 2-6 months. Timeline depends on features, content readiness, and feedback cycles. Ekodrix always delivers on time.",
      },
      {
        question: "What technologies do you use for web development in Kondotty?",
        answer:
          "We use industry-leading technologies including React, Next.js, Node.js, PHP, Laravel, Python, WordPress, and more. The tech stack is chosen based on your project requirements, budget, and scalability needs. We recommend React/Next.js for fast, modern websites and WordPress for easy content management.",
      },
      {
        question: "Will my website rank on Google?",
        answer:
          "Yes! Every website we build at Ekodrix is SEO-optimized from the ground up. We implement on-page SEO, proper heading structure, schema markup, fast loading, and mobile optimization. We also set up Google Analytics and Search Console so you can track your rankings from day one.",
      },
      {
        question: "Do you provide website maintenance in Kondotty?",
        answer:
          "Absolutely! We offer comprehensive website maintenance packages including content updates, security patches, backups, performance optimization, and technical support. Maintenance plans start from ₹3,000/month. We also provide 1 month free support after every project launch.",
      },
    ],
    priceRange: "₹15,000 - ₹5,00,000+",
    deliveryTime: "7-90 days",
    category: "Development",
    icon: "🌐",
  },

  "app-development": {
    slug: "app-development",
    name: "Mobile App Development",
    shortName: "App Dev",
    tagline: "Apps That Users Love",
    title: "Mobile App Development Company in Kondotty",
    metaTitle: "Mobile App Development Company in Kondotty | Android & iOS Apps — Ekodrix",
    metaDescription:
      "Top mobile app development company in Kondotty, Kerala. Android, iOS, React Native & Flutter apps for startups and businesses. 100+ apps delivered. Free quote!",
    keywords: [
      "app development company kondotty",
      "mobile app development kondotty",
      "android app development kondotty",
      "ios app development kondotty",
      "react native development kondotty",
      "flutter app development kondotty",
      "app developers kondotty",
      "mobile application development kondotty",
      "custom app development kondotty",
      "app development services kondotty",
      "app development company malappuram",
      "mobile app developers kerala",
      "android app developers kondotty",
      "iphone app development kondotty",
      "cross platform app development kondotty",
      "hybrid app development kondotty",
      "native app development kondotty",
      "ecommerce app development kondotty",
      "food delivery app development kondotty",
      "taxi app development kondotty",
      "healthcare app development kondotty",
      "education app development kondotty",
      "startup app development kondotty",
      "mvp app development kondotty",
      "app ui ux design kondotty",
      "app store optimization kondotty",
      "app maintenance kondotty",
      "mobile app development cost kerala",
      "affordable app development kondotty",
      "best app developers kondotty",
    ],
    description:
      "Expert mobile app development in Kondotty. Android, iOS, React Native & Flutter apps that delight users and grow your business.",
    longDescription: `Looking for the best mobile app development company in Kondotty? Ekodrix is Kerala's premier app development studio, helping businesses turn ideas into powerful mobile experiences that users love.

We have developed 50+ mobile apps for startups, SMEs, and enterprises across Kerala and India. From simple utility apps to complex platforms with real-time features, we have the expertise to deliver apps that stand out in the App Store and Google Play.

Our team specializes in Native Android (Kotlin/Java), Native iOS (Swift), React Native, and Flutter development. We recommend cross-platform frameworks like React Native and Flutter for most projects as they offer 80% cost savings while delivering near-native performance.

**Mobile App Development Services in Kondotty:**
- Android App Development (Kotlin, Java)
- iOS App Development (Swift, Objective-C)
- Cross-Platform Apps (React Native, Flutter)
- Progressive Web Apps (PWA)
- App UI/UX Design
- App Testing and QA
- App Store and Play Store Submission
- App Maintenance and Updates
- App Analytics Integration
- Push Notification Setup

Whether you're building a food delivery app, an e-commerce app, a healthcare app, or an enterprise mobile solution — Ekodrix delivers on time and within budget. Contact us today for a free consultation.`,
    features: [
      "Native-level performance on Android and iOS",
      "Offline functionality support",
      "Push notifications and real-time updates",
      "Payment gateway integration",
      "Social login (Google, Facebook, Apple)",
      "GPS and location-based features",
      "Camera, QR code, and media integration",
      "Analytics dashboard",
      "App Store and Play Store deployment",
      "Post-launch maintenance and support",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Kotlin (Android)",
      "Swift (iOS)",
      "Firebase",
      "Node.js / Python Backend",
      "PostgreSQL / MongoDB",
      "AWS / Google Cloud",
      "Redux / Zustand",
      "Expo",
    ],
    benefits: [
      "Reach customers on both Android and iOS",
      "Build brand loyalty with branded mobile experience",
      "Increase sales with in-app purchases and payments",
      "Engage users with push notifications",
      "Collect valuable data with in-app analytics",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description: "We define your app's core features, target audience, and technical architecture.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Our designers create intuitive wireframes and beautiful visual designs. You approve every screen.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Agile development in 2-week sprints — you see progress regularly and can provide feedback.",
      },
      {
        step: "04",
        title: "Testing",
        description:
          "Comprehensive testing on real devices across Android and iOS. We find and fix every bug.",
      },
      {
        step: "05",
        title: "Launch",
        description:
          "We handle App Store and Play Store submission, including listing optimization for maximum downloads.",
      },
      {
        step: "06",
        title: "Growth",
        description:
          "Ongoing updates, performance monitoring, and feature additions to keep your app competitive.",
      },
    ],
    faqs: [
      {
        question: "How much does mobile app development cost in Kondotty?",
        answer:
          "Mobile app development costs depend on features and complexity. A simple app starts from ₹50,000, a moderate app with backend from ₹1,50,000, and complex apps with advanced features from ₹3,00,000+. Cross-platform apps (React Native/Flutter) are 30-40% more affordable than building separate native apps. Contact Ekodrix for a free detailed quote.",
      },
      {
        question: "Android or iOS — which platform should I start with?",
        answer:
          "In India, Android has 95%+ market share, so we recommend starting with Android if your primary market is India. For international markets, we recommend building for both platforms simultaneously using React Native or Flutter — it's cost-effective and reaches all users.",
      },
      {
        question: "How long does app development take?",
        answer:
          "A basic app takes 2-3 months, a moderate app with backend takes 3-6 months, and a complex app with advanced features takes 6-12 months. We follow Agile methodology with regular updates so you're never in the dark about progress.",
      },
      {
        question: "Can you help submit the app to Google Play and Apple App Store?",
        answer:
          "Yes! We handle the complete app store submission process including creating developer accounts, preparing app listings, screenshots, store descriptions, and ensuring compliance with all store guidelines. We also optimize your app listing (ASO) for maximum organic downloads.",
      },
      {
        question: "What is the difference between React Native and Flutter?",
        answer:
          "React Native uses JavaScript/TypeScript (same as web development), making it ideal if you also need a web version. Flutter uses Dart and offers slightly better performance with a more consistent UI across platforms. Both deliver excellent results. At Ekodrix, we recommend based on your specific needs and team's familiarity.",
      },
    ],
    priceRange: "₹50,000 - ₹10,00,000+",
    deliveryTime: "2-9 months",
    category: "Development",
    icon: "📱",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Marketing",
    tagline: "Marketing That Gets Results",
    title: "Digital Marketing Company in Kondotty",
    metaTitle: "Digital Marketing Company in Kondotty | SEO, Google Ads, Social Media — Ekodrix",
    metaDescription:
      "Best digital marketing company in Kondotty, Malappuram. SEO, Google Ads, Social Media Marketing, Content Marketing. Grow your business online. Free consultation!",
    keywords: [
      "digital marketing company kondotty",
      "digital marketing agency kondotty",
      "digital marketing services kondotty",
      "online marketing kondotty",
      "internet marketing kondotty",
      "seo company kondotty",
      "google ads management kondotty",
      "social media marketing kondotty",
      "content marketing kondotty",
      "email marketing kondotty",
      "digital marketing malappuram",
      "digital marketing kozhikode",
      "digital marketing kerala",
      "best digital marketing company kondotty",
      "affordable digital marketing kondotty",
      "facebook ads kondotty",
      "instagram marketing kondotty",
      "youtube marketing kondotty",
      "whatsapp marketing kondotty",
      "online advertising kondotty",
      "ppc services kondotty",
      "sem services kondotty",
      "brand marketing kondotty",
      "lead generation kondotty",
      "digital marketing consultant kondotty",
      "website traffic increase kondotty",
      "online business growth kondotty",
      "marketing agency malappuram",
      "digital marketing packages kerala",
    ],
    description:
      "Results-driven digital marketing agency in Kondotty. SEO, Google Ads, Social Media & Content Marketing to grow your business online.",
    longDescription: `Want to grow your business online in Kondotty and beyond? Ekodrix is the most trusted digital marketing agency in Kondotty, Malappuram, delivering measurable results — more traffic, more leads, more sales.

We combine data-driven strategy with creative execution to build your brand's online presence and drive qualified customers to your business. Our digital marketing experts have helped 80+ businesses across Kerala grow their online revenue.

Every campaign we run is backed by solid keyword research, competitor analysis, and ROI-focused targeting. We don't just run ads — we build digital growth engines.

**Our Digital Marketing Services in Kondotty:**
- Search Engine Optimization (SEO)
- Google Ads (PPC) Management
- Facebook and Instagram Ads
- Social Media Marketing and Management
- Content Marketing and Blog Writing
- Email Marketing Campaigns
- YouTube Marketing
- WhatsApp Business Marketing
- Online Reputation Management
- Conversion Rate Optimization

Whether you're a startup in Kondotty looking for your first 100 customers or an established business wanting to dominate your market — Ekodrix has the strategy and execution skills to make it happen.`,
    features: [
      "Monthly ranking reports with keyword tracking",
      "ROI-focused campaigns — every rupee counts",
      "Dedicated account manager",
      "Google Ads certified team",
      "Local SEO for Kondotty and Malappuram businesses",
      "Social media content calendar",
      "Competitor analysis and monitoring",
      "Google Analytics and reporting setup",
      "Conversion tracking and lead attribution",
      "24/7 campaign monitoring",
    ],
    technologies: [
      "Google Analytics 4",
      "Google Ads",
      "Facebook Ads Manager",
      "SEMrush / Ahrefs",
      "Google Search Console",
      "Mailchimp / SendGrid",
      "Hootsuite / Buffer",
      "Canva / Adobe Creative Suite",
      "Google Tag Manager",
      "HubSpot CRM",
    ],
    benefits: [
      "Get found on Google for your target keywords",
      "Generate qualified leads at lower cost than traditional marketing",
      "Build brand authority and trust online",
      "Reach your exact target audience",
      "Track and measure every marketing outcome",
    ],
    process: [
      { step: "01", title: "Audit & Analysis", description: "Complete audit of your current online presence, competitors, and target keywords." },
      { step: "02", title: "Strategy Development", description: "Custom marketing strategy aligned with your business goals and budget." },
      { step: "03", title: "Campaign Setup", description: "Setup tracking, ad accounts, landing pages, and all campaign infrastructure." },
      { step: "04", title: "Launch & Optimize", description: "Campaigns go live and we continuously optimize based on data." },
      { step: "05", title: "Report & Scale", description: "Monthly detailed reports with insights and recommendations for scaling." },
      { step: "06", title: "Growth & Dominance", description: "Expand to new channels and audiences as your online presence grows." },
    ],
    faqs: [
      {
        question: "How much does digital marketing cost in Kondotty?",
        answer:
          "Digital marketing packages in Kondotty start from ₹10,000/month for basic SEO and social media management. Google Ads management starts from ₹8,000/month + ad spend. Comprehensive digital marketing packages (SEO + ads + social media + content) range from ₹25,000-₹75,000/month depending on your goals and competition.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term investment. You'll see initial improvements in keyword rankings within 2-3 months. Significant traffic growth typically happens in 4-6 months. Full potential is reached in 9-12 months. Unlike paid ads, SEO results compound over time — the longer you invest, the more valuable it becomes. We provide monthly ranking reports so you can see progress.",
      },
      {
        question: "Is Google Ads or Facebook Ads better for my business?",
        answer:
          "Both serve different purposes. Google Ads captures people already searching for your product/service — high intent buyers. Facebook/Instagram Ads are great for brand awareness and reaching people who don't know you exist yet. For most Kondotty businesses, we recommend starting with Google Ads for immediate leads while building SEO for long-term organic traffic.",
      },
      {
        question: "Can you help my business rank on Google in Kondotty?",
        answer:
          "Yes! Our local SEO services are specifically designed to help Kondotty and Malappuram businesses rank at the top of Google for local searches. We optimize your Google My Business profile, build local citations, implement local schema markup, and create location-specific content to dominate the local pack and organic results.",
      },
      {
        question: "Do you provide digital marketing for small businesses in Kondotty?",
        answer:
          "Absolutely! We have specially designed affordable digital marketing packages for small businesses in Kondotty starting from ₹10,000/month. We focus on the highest-impact activities that deliver maximum ROI within your budget. Many of our successful clients started as small businesses and grew into regional leaders with our marketing support.",
      },
    ],
    priceRange: "₹10,000/month - ₹1,00,000+/month",
    deliveryTime: "Ongoing — results in 3-12 months",
    category: "Marketing",
    icon: "📈",
  },

  "seo-services": {
    slug: "seo-services",
    name: "SEO Services",
    shortName: "SEO",
    tagline: "Rank #1 on Google",
    title: "SEO Company in Kondotty | Search Engine Optimization Services",
    metaTitle: "SEO Company in Kondotty | Local SEO, Technical SEO — Ekodrix",
    metaDescription:
      "Best SEO company in Kondotty, Malappuram. Local SEO, technical SEO, on-page & off-page optimization. Rank #1 on Google. Proven results. Free SEO audit!",
    keywords: [
      "seo company kondotty",
      "seo services kondotty",
      "seo agency kondotty",
      "search engine optimization kondotty",
      "local seo kondotty",
      "google ranking services kondotty",
      "seo expert kondotty",
      "seo consultant kondotty",
      "technical seo kondotty",
      "on page seo kondotty",
      "off page seo kondotty",
      "seo malappuram",
      "seo kerala",
      "website ranking services kondotty",
      "rank on google kondotty",
      "seo packages kondotty",
      "affordable seo kondotty",
      "ecommerce seo kondotty",
      "local seo malappuram",
      "google my business optimization kondotty",
      "keyword research kondotty",
      "link building services kondotty",
      "seo audit kondotty",
      "seo optimization kerala",
      "best seo company kerala",
    ],
    description:
      "Professional SEO services in Kondotty. Local SEO, technical SEO, and content optimization to rank your website #1 on Google.",
    longDescription: `Want your business to appear at the top of Google when customers in Kondotty and Malappuram search for your products or services? Ekodrix's expert SEO team has helped 60+ businesses in Kerala achieve first-page Google rankings.

Search Engine Optimization (SEO) is the most cost-effective long-term strategy for growing your online business. Unlike paid ads, SEO traffic is free, sustainable, and compounds over time. A well-ranked website can generate hundreds of qualified leads every month without ongoing ad spend.

Our SEO services cover everything — from technical website audits and on-page optimization to content creation and high-quality link building. We work transparently with monthly reports showing exactly what we've done and what results it's delivering.

**Our SEO Services in Kondotty Include:**
- Local SEO (Google Maps and local pack ranking)
- Technical SEO audit and fixes
- On-page SEO optimization
- Content creation and optimization
- Link building and off-page SEO
- Google My Business optimization
- E-commerce SEO
- Schema markup implementation
- Competitor analysis
- Monthly ranking reports

We use only white-hat, Google-approved SEO techniques. No shortcuts, no penalties — just sustainable growth.`,
    features: [
      "Free initial SEO audit worth ₹10,000",
      "Monthly keyword ranking reports",
      "Google My Business optimization",
      "Local citation building (100+ directories)",
      "Technical SEO fixes included",
      "Content optimization and creation",
      "Competitor gap analysis",
      "Core Web Vitals optimization",
      "Schema markup implementation",
      "Transparent monthly reporting",
    ],
    technologies: [
      "Google Search Console",
      "Google Analytics 4",
      "SEMrush",
      "Ahrefs",
      "Screaming Frog",
      "Google My Business",
      "Moz",
      "Surfer SEO",
      "Schema.org Validator",
      "PageSpeed Insights",
    ],
    benefits: [
      "Rank on the first page of Google for your target keywords",
      "Get free organic traffic without paying for ads",
      "Build long-term sustainable lead generation",
      "Appear in Google Maps local pack",
      "Outrank your competitors in Kondotty and Malappuram",
    ],
    process: [
      { step: "01", title: "SEO Audit", description: "Complete technical, on-page, and off-page audit to identify all ranking opportunities." },
      { step: "02", title: "Keyword Research", description: "Deep keyword research to find high-value, achievable keywords for your business." },
      { step: "03", title: "Technical Fixes", description: "Fix all technical issues affecting your rankings — speed, mobile, indexing, errors." },
      { step: "04", title: "On-Page Optimization", description: "Optimize all pages with target keywords, proper structure, and schema markup." },
      { step: "05", title: "Content & Links", description: "Create SEO content and build high-quality backlinks from relevant websites." },
      { step: "06", title: "Monitor & Grow", description: "Monthly tracking of rankings, traffic, and leads with detailed reports." },
    ],
    faqs: [
      {
        question: "How long does SEO take to work in Kondotty?",
        answer:
          "SEO results depend on competition, starting point, and budget. Most Kondotty businesses see initial ranking improvements in 2-3 months, reach page 1 for local keywords in 4-6 months, and achieve top 3 positions within 9-12 months. Local search terms with lower competition (like 'software company kondotty') usually rank faster than highly competitive terms.",
      },
      {
        question: "What is local SEO and why does my Kondotty business need it?",
        answer:
          "Local SEO focuses on ranking your business for geographic-specific searches like 'software company kondotty' or 'web developer near me'. It includes Google My Business optimization, local citation building, and location-specific content. For any Kondotty business serving local customers, local SEO is the single highest-ROI marketing activity available.",
      },
      {
        question: "How much does SEO cost in Kondotty?",
        answer:
          "SEO packages in Kondotty start from ₹10,000/month for local SEO (perfect for small businesses). Standard packages with content creation and link building range from ₹20,000-₹50,000/month. Enterprise SEO for high-competition keywords ranges from ₹50,000-₹1,50,000/month. All packages include monthly reporting. Contact us for a custom quote.",
      },
      {
        question: "Can you guarantee first page Google rankings?",
        answer:
          "No SEO company can ethically guarantee specific rankings — Google's algorithm is complex and constantly evolving. What Ekodrix guarantees is: (1) use of only white-hat SEO techniques, (2) measurable improvement in rankings and traffic over time, (3) transparent monthly reporting, and (4) best practices based on 8+ years of SEO experience in the Kerala market.",
      },
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer:
          "On-page SEO covers everything you do on your website — keyword optimization, content quality, page speed, mobile responsiveness, schema markup, internal linking, and technical structure. Off-page SEO covers what happens outside your website — primarily building backlinks from other websites, local directory citations, and brand mentions. Both are essential for ranking on Google.",
      },
    ],
    priceRange: "₹10,000/month - ₹1,50,000+/month",
    deliveryTime: "Ongoing — results in 3-12 months",
    category: "Marketing",
    icon: "🔍",
  },

  "ecommerce-development": {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    shortName: "E-commerce",
    tagline: "Sell Online 24/7",
    title: "E-commerce Development Company in Kondotty",
    metaTitle: "E-commerce Website Development in Kondotty | Online Store Design — Ekodrix",
    metaDescription:
      "Best e-commerce development company in Kondotty. Shopify, WooCommerce & custom online stores. Sell more with fast, secure, mobile-friendly e-commerce websites. Free quote!",
    keywords: [
      "ecommerce development company kondotty",
      "online store development kondotty",
      "ecommerce website design kondotty",
      "ecommerce solutions kondotty",
      "shopify development kondotty",
      "woocommerce development kondotty",
      "ecommerce website kondotty",
      "online shopping website kondotty",
      "ecommerce app development kondotty",
      "ecommerce seo kondotty",
      "ecommerce website malappuram",
      "online store kerala",
      "ecommerce development kerala",
      "ecommerce website development india",
      "custom ecommerce development kondotty",
      "multi vendor ecommerce kondotty",
      "b2b ecommerce development kondotty",
      "marketplace development kondotty",
      "payment gateway integration kondotty",
      "razorpay integration kondotty",
    ],
    description: "Professional e-commerce development in Kondotty. Build, launch, and grow your online store with Ekodrix.",
    longDescription: `Ready to take your business online and start selling 24/7? Ekodrix builds high-converting e-commerce stores for businesses in Kondotty, Malappuram, and across Kerala. We've helped 40+ businesses launch successful online stores that generate consistent revenue.

Whether you need a simple product catalog website, a full-featured online store with inventory management, or a custom multi-vendor marketplace — we have the expertise to deliver exactly what you need.

We work with all major e-commerce platforms including Shopify, WooCommerce (WordPress), Magento, and custom-built solutions using React/Next.js and Node.js.

**E-commerce Development Services in Kondotty:**
- Shopify store design and development
- WooCommerce development and customization
- Custom e-commerce development (React/Node.js)
- Payment gateway integration (Razorpay, Stripe, PayPal)
- Inventory management system
- Order management and tracking
- Multi-vendor marketplace development
- E-commerce mobile app development
- E-commerce SEO optimization
- E-commerce analytics setup`,
    features: [
      "Mobile-first responsive design",
      "Multiple payment gateway integration",
      "Automatic inventory management",
      "Order tracking and notifications",
      "GST invoice generation",
      "Product review system",
      "Coupon and discount management",
      "SEO-optimized product pages",
      "Admin dashboard for easy management",
      "Integration with WhatsApp/Instagram catalog",
    ],
    technologies: ["Shopify", "WooCommerce", "Next.js", "Razorpay", "Stripe", "Node.js", "MongoDB", "Redis", "AWS S3", "SendGrid"],
    benefits: [
      "Sell products 24/7 without a physical store limitation",
      "Reach customers across India and worldwide",
      "Reduce overhead with automated order processing",
      "Build customer loyalty with a professional shopping experience",
      "Scale easily as your product catalog and orders grow",
    ],
    process: [
      { step: "01", title: "Product Catalog Planning", description: "Plan your product catalog, categories, pricing, and shipping strategy." },
      { step: "02", title: "Store Design", description: "Create a beautiful store design that reflects your brand and maximizes conversions." },
      { step: "03", title: "Development", description: "Build the store with all features — cart, checkout, payments, inventory." },
      { step: "04", title: "Payment Setup", description: "Integrate payment gateways, configure tax and shipping rules." },
      { step: "05", title: "Testing & Launch", description: "Thorough testing of the entire buying journey before going live." },
      { step: "06", title: "Marketing & Growth", description: "SEO optimization, Google Shopping setup, and ongoing growth support." },
    ],
    faqs: [
      {
        question: "How much does e-commerce website development cost in Kondotty?",
        answer:
          "E-commerce website costs in Kondotty: Basic Shopify store from ₹25,000, WooCommerce store from ₹35,000, custom e-commerce website from ₹75,000, and multi-vendor marketplace from ₹2,00,000+. Cost depends on number of products, features required, and payment gateway setup. Contact us for a free detailed quote.",
      },
      {
        question: "Shopify vs WooCommerce — which is better for my business?",
        answer:
          "Shopify is easier to manage, has better out-of-the-box features, and excellent support — ideal for businesses wanting simplicity. WooCommerce (WordPress) is more customizable and cheaper in the long run but requires slightly more technical management. For most small businesses in Kondotty, WooCommerce is recommended for cost-effectiveness. For growing businesses, Shopify's scalability is worth the monthly fee.",
      },
      {
        question: "Can you integrate Razorpay or other Indian payment gateways?",
        answer:
          "Yes! We integrate all major Indian payment gateways including Razorpay, PayU, CCAvenue, Paytm, and PhonePe. We also integrate international gateways like Stripe and PayPal. All integrations include GST compliance and UPI payment support.",
      },
      {
        question: "Do you provide e-commerce SEO services in Kondotty?",
        answer:
          "Yes! E-commerce SEO is critical for organic sales. We optimize every product page with target keywords, implement e-commerce schema markup, optimize category pages, improve page speed, and set up Google Shopping campaigns. Our e-commerce SEO clients typically see 200-500% increase in organic traffic within 6-12 months.",
      },
      {
        question: "Can I manage the store myself after launch?",
        answer:
          "Absolutely! Every e-commerce store we build comes with a user-friendly admin dashboard where you can add/edit products, manage orders, update prices, and apply discounts without any technical knowledge. We also provide a training session and documentation so you're comfortable managing everything independently.",
      },
    ],
    priceRange: "₹25,000 - ₹5,00,000+",
    deliveryTime: "3-8 weeks",
    category: "Development",
    icon: "🛒",
  },

  "software-development": {
    slug: "software-development",
    name: "Custom Software Development",
    shortName: "Software Dev",
    tagline: "Software Built for Your Business",
    title: "Custom Software Development Company in Kondotty",
    metaTitle: "Custom Software Development Company in Kondotty, Kerala — Ekodrix",
    metaDescription:
      "Custom software development company in Kondotty, Malappuram. ERP, CRM, SaaS development for businesses in Kerala. Automate processes, reduce costs. Free consultation!",
    keywords: [
      "software development company kondotty",
      "custom software development kondotty",
      "software development services kondotty",
      "enterprise software development kondotty",
      "software solutions kondotty",
      "saas development kondotty",
      "crm software development kondotty",
      "erp software development kondotty",
      "business software development kondotty",
      "custom software malappuram",
      "software development kerala",
      "application development kondotty",
      "software company malappuram",
      "business automation software kondotty",
      "inventory management software kondotty",
      "billing software development kondotty",
      "school management software kondotty",
      "hospital management software kondotty",
    ],
    description: "Custom software development in Kondotty. ERP, CRM, SaaS and enterprise solutions to automate and scale your business.",
    longDescription: `Is your business outgrowing generic software? Ekodrix builds custom software solutions specifically designed for your unique business processes — eliminating inefficiencies and giving you a competitive advantage.

We specialize in building scalable, secure, and maintainable software for businesses across Kondotty, Malappuram, and Kerala. From ERP systems and CRM platforms to SaaS products and internal tools — we translate your business requirements into powerful software.

Our custom software development is built on modern architecture with cloud deployment, ensuring reliability, performance, and easy scaling as your business grows.

**Custom Software Solutions We Build:**
- ERP (Enterprise Resource Planning) software
- CRM (Customer Relationship Management) systems
- SaaS platform development
- School management systems
- Hospital management software
- Restaurant management systems
- Inventory management software
- Billing and accounting software
- HR management systems (HRMS)
- Logistics and fleet management software`,
    features: [
      "Fully customized to your exact requirements",
      "Scalable architecture for business growth",
      "Cloud deployment with 99.9% uptime",
      "Role-based access control",
      "Automated reports and dashboards",
      "Integration with existing systems",
      "Mobile app companion available",
      "Regular backups and data security",
      "User training and documentation",
      "Lifetime maintenance support available",
    ],
    technologies: ["Node.js", "Python / Django", "React / Next.js", "PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS / Azure", "Redis", "Elasticsearch"],
    benefits: [
      "Automate repetitive tasks and save 10+ hours per week",
      "Eliminate human errors with automated workflows",
      "Make better decisions with real-time data and reports",
      "Scale operations without hiring proportionally",
      "Own your software — no per-user licensing fees",
    ],
    process: [
      { step: "01", title: "Requirements Analysis", description: "Deep dive into your business processes, pain points, and future requirements." },
      { step: "02", title: "System Architecture", description: "Design scalable, secure system architecture and database schema." },
      { step: "03", title: "Agile Development", description: "Build in sprints with regular demos so you stay in control of the product." },
      { step: "04", title: "Testing & QA", description: "Comprehensive unit, integration, and user acceptance testing." },
      { step: "05", title: "Deployment & Training", description: "Deploy to cloud, train your team, and ensure smooth adoption." },
      { step: "06", title: "Support & Evolution", description: "Ongoing maintenance, bug fixes, and feature additions as your business grows." },
    ],
    faqs: [
      {
        question: "How much does custom software development cost in Kondotty?",
        answer:
          "Custom software costs depend heavily on complexity. Simple tools and dashboards start from ₹1,50,000. Business automation systems range ₹3,00,000-₹8,00,000. Complex ERP/CRM systems range ₹5,00,000-₹20,00,000+. Cloud SaaS platforms range from ₹10,00,000+. We provide detailed quotes after understanding your requirements. The investment pays back quickly through automation savings.",
      },
      {
        question: "Why custom software instead of ready-made solutions like Tally or QuickBooks?",
        answer:
          "Ready-made software is designed for the average business. Custom software is designed for YOUR business. Benefits of custom: (1) No per-user licensing fees that grow with your team; (2) Fits your exact processes without workarounds; (3) Integrates with all your other systems; (4) You own it completely; (5) Scales exactly as your business needs. The ROI typically exceeds the initial investment within 12-18 months.",
      },
      {
        question: "How long does custom software development take?",
        answer:
          "Development timelines: Simple tools/dashboards: 1-3 months. Business automation systems: 3-6 months. Complex ERP/CRM: 6-12 months. SaaS platforms: 6-18 months. We follow Agile methodology, delivering working features every 2 weeks — so you see real progress throughout development.",
      },
      {
        question: "Who owns the software after development?",
        answer:
          "You do — 100%. All source code, databases, and intellectual property belong to your company completely. We provide full source code, documentation, and deployment instructions. Unlike SaaS subscriptions where you're renting software, with Ekodrix custom development you own your software forever.",
      },
      {
        question: "Can you integrate the software with our existing systems?",
        answer:
          "Yes! We specialize in system integration. Whether it's connecting with your existing accounting software (Tally, QuickBooks), payment gateways (Razorpay), shipping carriers, WhatsApp Business API, or any third-party service — we handle the complete integration so all your tools work seamlessly together.",
      },
    ],
    priceRange: "₹1,50,000 - ₹20,00,000+",
    deliveryTime: "2-12 months",
    category: "Development",
    icon: "💻",
  },

  "graphic-design": {
    slug: "graphic-design",
    name: "Graphic Design",
    shortName: "Design",
    tagline: "Designs That Make an Impression",
    title: "Graphic Design Company in Kondotty",
    metaTitle: "Graphic Design Company in Kondotty | Logo Design, Branding — Ekodrix",
    metaDescription:
      "Best graphic design company in Kondotty, Malappuram. Logo design, brand identity, brochures, social media graphics. Premium designs. Free quote!",
    keywords: [
      "graphic design company kondotty",
      "graphic design services kondotty",
      "logo design kondotty",
      "branding agency kondotty",
      "logo design malappuram",
      "creative agency kondotty",
      "business card design kondotty",
      "brochure design kondotty",
      "banner design kondotty",
      "social media design kondotty",
      "brand identity kondotty",
      "packaging design kondotty",
      "poster design kondotty",
      "flyer design kondotty",
      "ui ux design kondotty",
      "graphic designer kondotty",
      "affordable logo design kerala",
    ],
    description: "Creative graphic design services in Kondotty. Logo design, brand identity, print materials, and digital graphics that make your brand unforgettable.",
    longDescription: `Your brand's visual identity is often the first impression customers have of your business. At Ekodrix, our creative design team crafts stunning visuals that communicate your brand values, attract your target audience, and leave a lasting impression.

We provide comprehensive graphic design services for businesses in Kondotty, Malappuram, and across Kerala — from startups building their brand identity from scratch to established businesses needing a visual refresh.

**Graphic Design Services in Kondotty:**
- Logo design and brand identity
- Business card and stationery design
- Brochure and catalogue design
- Flyer and poster design
- Social media graphics and templates
- Banner and billboard design
- Packaging and label design
- Menu card design
- Presentation design (PowerPoint, Google Slides)
- UI/UX interface design`,
    features: [
      "Unlimited revisions until you're 100% satisfied",
      "Delivery in all formats (AI, PSD, PNG, PDF, SVG)",
      "Brand style guide included with logo packages",
      "Fast turnaround — logos in 3-5 days",
      "Print-ready and web-ready files",
      "Experienced creative team",
      "Industry-specific design knowledge",
      "Social media kit included",
      "Trademark-safe original designs",
      "Competitive pricing",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro", "Adobe XD", "Sketch", "After Effects", "CorelDRAW"],
    benefits: [
      "Make a powerful first impression on potential customers",
      "Build brand recognition and trust",
      "Stand out from competitors with unique visual identity",
      "Get professional-quality designs at affordable prices",
      "Consistent branding across all marketing materials",
    ],
    process: [
      { step: "01", title: "Brief & Discovery", description: "We learn about your brand, target audience, and design preferences." },
      { step: "02", title: "Concept Development", description: "Our designers create 2-3 unique concepts for your review." },
      { step: "03", title: "Refinement", description: "We refine your chosen concept with your feedback until it's perfect." },
      { step: "04", title: "Finalization", description: "Prepare all final files in required formats for print and digital use." },
      { step: "05", title: "Brand Guide", description: "Create a brand style guide documenting colors, fonts, and usage rules." },
      { step: "06", title: "Application", description: "Apply your new brand identity across all marketing materials." },
    ],
    faqs: [
      {
        question: "How much does logo design cost in Kondotty?",
        answer: "Logo design packages at Ekodrix: Basic logo (1 concept, 2 revisions) from ₹3,000. Standard package (3 concepts, unlimited revisions, brand guide) from ₹8,000. Premium branding package (logo + business card + letterhead + social media kit + brand guide) from ₹20,000. All packages include files in all required formats.",
      },
      {
        question: "How many design revisions do you provide?",
        answer: "We provide unlimited revisions on all design projects until you are 100% satisfied with the result. We don't charge extra for revisions — your satisfaction is our only goal. Most clients finalize their designs within 2-3 rounds of revisions.",
      },
      {
        question: "How long does graphic design take?",
        answer: "Logo design: 3-5 days. Business card/stationery: 2-3 days. Brochure: 5-7 days. Full brand identity package: 10-15 days. Social media graphics: 1-2 days per set. Rush delivery is available for urgent requirements.",
      },
      {
        question: "What file formats do you deliver?",
        answer: "We deliver all standard formats: Vector files (AI, EPS, SVG) for unlimited scalability, PNG with transparent background for digital use, PDF for print quality, JPEG for general use. For web projects, we also provide optimized WebP files. You receive ALL formats — nothing extra to pay.",
      },
      {
        question: "Can you redesign our existing logo?",
        answer: "Yes! Logo redesign is one of our most popular services. We maintain your brand's core identity while modernizing the design for today's digital world. We also offer brand audits to identify which elements to keep, improve, or replace. Many clients are surprised how impactful a professional redesign can be for their business image.",
      },
    ],
    priceRange: "₹3,000 - ₹1,00,000+",
    deliveryTime: "2-15 days",
    category: "Design",
    icon: "🎨",
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortName: "UI/UX",
    tagline: "Designs Users Love to Use",
    title: "UI/UX Design Company in Kondotty",
    metaTitle: "UI/UX Design Company in Kondotty | Web & App Interface Design — Ekodrix",
    metaDescription:
      "Professional UI/UX design company in Kondotty. User interface design, user research, wireframing & prototyping for web and mobile apps. Free consultation!",
    keywords: ["ui ux design kondotty", "ui design company kondotty", "ux design kondotty", "user interface design kondotty", "app design kondotty", "web design kondotty", "wireframing kondotty", "prototyping kondotty", "ui ux design malappuram", "product design kondotty"],
    description: "Professional UI/UX design services in Kondotty. Research-driven design that delights users and drives conversions.",
    longDescription: `Great products are built on great design. At Ekodrix, our UI/UX design team creates interfaces that are not just beautiful — they're intuitive, efficient, and user-tested to maximize engagement and conversions.

We follow a research-driven design process: understanding your users, mapping their journeys, wireframing solutions, and validating with real users before development begins. This saves development costs and ensures the final product meets real user needs.`,
    features: ["User research and persona development", "Customer journey mapping", "Wireframing and information architecture", "High-fidelity interactive prototypes", "Usability testing", "Design system creation", "Accessibility-first design", "Handoff-ready Figma files", "Design QA during development"],
    technologies: ["Figma", "Adobe XD", "InVision", "Maze (user testing)", "Hotjar", "Framer", "Principle", "Zeplin"],
    benefits: ["Reduce development rework with validated designs", "Increase conversion rates with proven UX patterns", "Build user loyalty with intuitive interfaces", "Reduce support costs with self-explanatory UX", "Ship faster with clear design specifications"],
    process: [
      { step: "01", title: "Research", description: "User interviews, competitor analysis, and market research." },
      { step: "02", title: "Information Architecture", description: "Define structure, navigation, and user flows." },
      { step: "03", title: "Wireframing", description: "Low-fidelity layouts to validate structure before visual design." },
      { step: "04", title: "Visual Design", description: "High-fidelity designs with your brand identity applied." },
      { step: "05", title: "Prototyping", description: "Interactive prototype for user testing and stakeholder approval." },
      { step: "06", title: "Handoff", description: "Developer-ready Figma files with all specifications and assets." },
    ],
    faqs: [
      { question: "What is the difference between UI and UX design?", answer: "UX (User Experience) design focuses on the overall experience — how easy and enjoyable the product is to use. It covers research, user flows, and information architecture. UI (User Interface) design focuses on the visual appearance — colors, typography, icons, and layout. Both are essential, and at Ekodrix, our designers are proficient in both." },
      { question: "Do I need UI/UX design before development?", answer: "Yes — always! Designing first saves significant development costs. It's far cheaper to change a design in Figma than to rewrite developed code. Proper UX design also ensures the final product actually meets user needs, reducing post-launch changes." },
      { question: "How much does UI/UX design cost in Kondotty?", answer: "UI/UX design costs depend on the scope. A mobile app design (10-15 screens) starts from ₹25,000. A website UI/UX design starts from ₹20,000. A comprehensive SaaS product design starts from ₹80,000. We provide detailed quotes after understanding your project." },
    ],
    priceRange: "₹20,000 - ₹3,00,000+",
    deliveryTime: "1-8 weeks",
    category: "Design",
    icon: "✨",
  },

  "wordpress-development": {
    slug: "wordpress-development",
    name: "WordPress Development",
    shortName: "WordPress",
    tagline: "Power Your Website with WordPress",
    title: "WordPress Development Company in Kondotty",
    metaTitle: "WordPress Development in Kondotty | WordPress Website Design — Ekodrix",
    metaDescription: "Expert WordPress development company in Kondotty. Custom WordPress websites, WooCommerce stores, theme customization, plugin development. Fast & secure. Free quote!",
    keywords: ["wordpress development kondotty", "wordpress website design kondotty", "wordpress company kondotty", "woocommerce development kondotty", "wordpress malappuram", "wordpress developer kerala", "custom wordpress kondotty", "wordpress plugin development kondotty", "wordpress theme development kondotty", "wordpress maintenance kondotty"],
    description: "Professional WordPress development in Kondotty. Custom themes, WooCommerce stores, plugin development and WordPress maintenance.",
    longDescription: `WordPress powers 43% of all websites on the internet, and for good reason — it's flexible, powerful, and easy to manage. At Ekodrix, we build premium WordPress websites for businesses in Kondotty, Malappuram, and across Kerala.

Our WordPress development services range from custom theme development and WooCommerce stores to complex multi-site networks and custom plugin development. Every WordPress site we build is fast, secure, SEO-optimized, and easy for you to manage without technical knowledge.`,
    features: ["Custom WordPress theme development", "WooCommerce e-commerce setup", "Plugin development and customization", "WordPress security hardening", "Speed optimization (90+ PageSpeed score)", "SEO plugin setup and configuration", "Multi-site WordPress network", "Membership and subscription sites", "LMS (Learning Management System)", "WordPress maintenance and updates"],
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Advanced Custom Fields", "Elementor / Gutenberg", "Genesis Framework", "Cloudflare", "WP Rocket", "Yoast SEO"],
    benefits: ["Easy content management without technical skills", "Thousands of plugins for any functionality", "Cost-effective compared to custom development", "Large community support and resources", "Scalable from small sites to enterprise"],
    process: [
      { step: "01", title: "Planning", description: "Define site structure, features, and content requirements." },
      { step: "02", title: "Theme Design", description: "Create custom design aligned with your brand." },
      { step: "03", title: "Development", description: "Develop custom theme, configure plugins, build all features." },
      { step: "04", title: "Content Setup", description: "Upload and format your content, images, and media." },
      { step: "05", title: "SEO & Speed", description: "Configure SEO plugins, optimize speed, and set up analytics." },
      { step: "06", title: "Training & Launch", description: "Train you on WordPress management, then go live." },
    ],
    faqs: [
      { question: "How much does a WordPress website cost in Kondotty?", answer: "WordPress website costs in Kondotty: Basic WordPress site: ₹15,000 - ₹30,000. Business website with custom design: ₹35,000 - ₹75,000. WooCommerce store: ₹40,000 - ₹1,50,000. Custom theme with advanced features: ₹75,000+. Maintenance plans start from ₹3,000/month." },
      { question: "Is WordPress good for SEO?", answer: "WordPress is excellent for SEO when properly configured. With plugins like Yoast SEO or Rank Math, you get complete control over your SEO. Combined with fast hosting, optimized images, and our SEO setup, WordPress sites regularly outrank competitors. Every WordPress site we build is fully SEO-optimized from launch." },
    ],
    priceRange: "₹15,000 - ₹1,50,000+",
    deliveryTime: "1-6 weeks",
    category: "Development",
    icon: "🔧",
  },

  "flutter-app-development": {
    slug: "flutter-app-development",
    name: "Flutter App Development",
    shortName: "Flutter",
    tagline: "One Codebase. Two Platforms.",
    title: "Flutter App Development Company in Kondotty",
    metaTitle: "Flutter App Development in Kondotty | Android & iOS Apps — Ekodrix",
    metaDescription: "Expert Flutter app development company in Kondotty. Build beautiful Android and iOS apps from a single codebase. Fast, affordable, and native-quality apps.",
    keywords: ["flutter app development kondotty", "flutter developer kondotty", "flutter app company kondotty", "flutter android ios kondotty", "cross platform app kondotty", "flutter malappuram", "flutter developer kerala", "dart development kondotty"],
    description: "Expert Flutter app development in Kondotty. Build one app for Android and iOS with native performance.",
    longDescription: `Flutter is Google's revolutionary cross-platform framework that lets us build beautiful, natively compiled Android and iOS apps from a single codebase — at 40% lower cost than building two separate native apps.

At Ekodrix, our Flutter developers have built 20+ Flutter apps for businesses across Kerala and India. Flutter apps are nearly indistinguishable from native apps in terms of performance and user experience.`,
    features: ["Single codebase for Android and iOS", "Near-native performance", "Beautiful Material and Cupertino UI components", "Hot reload for fast development", "Extensive widget library", "Firebase and backend integration", "Custom animations", "Platform-specific features (camera, GPS, etc.)", "App store submission for both platforms"],
    technologies: ["Flutter", "Dart", "Firebase", "Supabase", "GetX / Riverpod", "Dio (networking)", "Hive (local storage)", "Google Maps SDK", "Stripe SDK", "Razorpay SDK"],
    benefits: ["40% cheaper than native development", "Consistent UI across Android and iOS", "Faster development and delivery", "Access to 90% of native device features", "Google-backed with long-term support"],
    process: [
      { step: "01", title: "Design", description: "UI/UX design for both Android and iOS screens." },
      { step: "02", title: "Architecture", description: "Set up project structure, state management, and navigation." },
      { step: "03", title: "Development", description: "Build features in agile sprints with regular demo sessions." },
      { step: "04", title: "Testing", description: "Test on real Android and iOS devices." },
      { step: "05", title: "Launch", description: "Submit to Google Play and Apple App Store." },
      { step: "06", title: "Maintenance", description: "Updates, bug fixes, and new feature development." },
    ],
    faqs: [
      { question: "Is Flutter better than React Native?", answer: "Both are excellent. Flutter uses Dart (compiled to native code) and tends to have slightly better performance and more consistent UI. React Native uses JavaScript (same as web) which is beneficial if you also need a web version. Ekodrix recommends Flutter for apps requiring pixel-perfect custom UI and React Native when code sharing with a web app is needed." },
      { question: "How much does Flutter app development cost in Kondotty?", answer: "Flutter app development starts from ₹60,000 for a basic app and ₹1,50,000+ for apps with backend integration, real-time features, and payment gateways. Since Flutter creates one app for both platforms, you're effectively saving 40% compared to building separate Android and iOS apps." },
    ],
    priceRange: "₹60,000 - ₹8,00,000+",
    deliveryTime: "2-6 months",
    category: "Development",
    icon: "⚡",
  },

  "social-media-marketing": {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    shortName: "Social Media",
    tagline: "Grow Your Brand on Social",
    title: "Social Media Marketing Agency in Kondotty",
    metaTitle: "Social Media Marketing Agency in Kondotty | Facebook, Instagram, YouTube — Ekodrix",
    metaDescription: "Best social media marketing agency in Kondotty. Facebook, Instagram, YouTube marketing. Grow followers, engagement and sales. Affordable SMM packages. Free audit!",
    keywords: ["social media marketing kondotty", "smm services kondotty", "facebook marketing kondotty", "instagram marketing kondotty", "youtube marketing kondotty", "social media management kondotty", "social media agency kondotty", "social media malappuram", "smm company kerala", "facebook ads kondotty", "instagram ads kondotty"],
    description: "Strategic social media marketing services in Kondotty. Grow your brand's presence on Facebook, Instagram, YouTube and LinkedIn.",
    longDescription: `Social media is where your customers spend hours every day. Ekodrix's social media marketing team helps businesses in Kondotty and Malappuram build a powerful social presence that generates real business results — not just likes and follows.

We manage everything: content creation, scheduling, community management, paid ad campaigns, and detailed analytics reporting. Our social media experts understand the Kerala market and create content that resonates with your local audience while also reaching wider markets.`,
    features: ["Content calendar planning (30 posts/month)", "Graphic design for posts and stories", "Copywriting in English and Malayalam", "Instagram Reels and YouTube Shorts", "Facebook and Instagram ad campaigns", "Community management (comments/DMs)", "Monthly analytics report", "Competitor monitoring", "Influencer collaboration", "WhatsApp Business marketing"],
    technologies: ["Meta Business Suite", "Facebook Ads Manager", "Instagram Insights", "YouTube Studio", "Hootsuite / Buffer", "Canva Pro", "Adobe Premiere Pro", "Google Analytics", "Meta Pixel", "Sprout Social"],
    benefits: ["Build brand awareness at scale", "Engage directly with your customers", "Generate leads through targeted ad campaigns", "Build community around your brand", "Drive website traffic from social media"],
    process: [
      { step: "01", title: "Audit & Strategy", description: "Audit your current social presence and create a winning strategy." },
      { step: "02", title: "Brand Voice", description: "Define your brand's social voice, themes, and content pillars." },
      { step: "03", title: "Content Creation", description: "Create engaging posts, stories, reels, and videos." },
      { step: "04", title: "Publishing", description: "Publish at optimal times for maximum reach and engagement." },
      { step: "05", title: "Community Management", description: "Respond to comments and DMs to build real relationships." },
      { step: "06", title: "Analyze & Optimize", description: "Monthly reports with insights and strategy optimization." },
    ],
    faqs: [
      { question: "How much does social media marketing cost in Kondotty?", answer: "Social media management packages start from ₹8,000/month (10 posts, basic management) to ₹35,000/month (daily posting, stories, reels, community management, monthly ads). Paid social media advertising campaigns start with a minimum ad budget of ₹5,000/month plus management fee. Contact us for a custom package." },
      { question: "Which social media platforms should my Kondotty business focus on?", answer: "It depends on your business type. Most Kondotty businesses benefit from Facebook + Instagram (largest user base in Kerala). B2B companies should prioritize LinkedIn. Restaurants, fashion, and lifestyle brands should invest heavily in Instagram Reels and YouTube Shorts. WhatsApp Business is essential for customer communication in Kerala." },
    ],
    priceRange: "₹8,000/month - ₹50,000+/month",
    deliveryTime: "Ongoing",
    category: "Marketing",
    icon: "📱",
  },

  "google-ads-management": {
    slug: "google-ads-management",
    name: "Google Ads Management",
    shortName: "Google Ads",
    tagline: "Immediate Results with Google Ads",
    title: "Google Ads Management Company in Kondotty",
    metaTitle: "Google Ads Management in Kondotty | PPC, Google AdWords — Ekodrix",
    metaDescription: "Expert Google Ads management in Kondotty, Malappuram. PPC campaigns that generate leads immediately. Google certified team. ROI-focused. Free audit!",
    keywords: ["google ads management kondotty", "ppc services kondotty", "google adwords kondotty", "pay per click kondotty", "google ads kerala", "google ads malappuram", "sem services kondotty", "paid advertising kondotty", "display advertising kondotty", "remarketing kondotty", "google shopping ads kondotty"],
    description: "Results-driven Google Ads management in Kondotty. Get immediate leads and traffic with ROI-focused PPC campaigns.",
    longDescription: `Need leads right now? Google Ads delivers immediate results by placing your business at the top of Google search results for your target keywords. At Ekodrix, our Google Ads certified team manages campaigns that generate qualified leads at the lowest possible cost per click.

Unlike traditional advertising, Google Ads only charges you when someone clicks on your ad — meaning you only pay for actual interest. Our team constantly optimizes your campaigns to maximize ROI and minimize wasted spend.`,
    features: ["Google Ads account setup and audit", "Keyword research and competitive analysis", "Ad copy writing and testing", "Landing page recommendations", "Conversion tracking setup", "Bid strategy optimization", "Negative keyword management", "Ad extensions maximization", "Monthly performance reports", "Google certified campaign managers"],
    technologies: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Google Merchant Center", "Google Search Console", "SEMrush", "Callrail (call tracking)", "Looker Studio"],
    benefits: ["Appear at the top of Google immediately", "Only pay when someone clicks your ad", "Target your exact audience by location, device, and intent", "Track every lead back to the specific keyword", "Scale up quickly when campaigns are profitable"],
    process: [
      { step: "01", title: "Audit & Research", description: "Audit competitor ads and research highest-converting keywords." },
      { step: "02", title: "Campaign Structure", description: "Build optimally structured campaigns for quality score and relevance." },
      { step: "03", title: "Ad Creation", description: "Write compelling ads and create multiple variations for testing." },
      { step: "04", title: "Launch", description: "Launch campaigns with conversion tracking fully configured." },
      { step: "05", title: "Optimize", description: "Weekly optimization of bids, keywords, and ad copy based on data." },
      { step: "06", title: "Scale", description: "Increase budget on profitable campaigns, pause underperformers." },
    ],
    faqs: [
      { question: "How much does Google Ads management cost in Kondotty?", answer: "Google Ads management fees at Ekodrix: Basic (up to ₹30,000 ad spend): ₹8,000/month. Standard (₹30,000-₹1,00,000 ad spend): ₹15,000/month. Premium (₹1,00,000+ ad spend): 12% of ad spend. Ad budget is paid directly to Google, separate from management fees. Minimum recommended ad budget for Kondotty local campaigns: ₹10,000/month." },
      { question: "How quickly do Google Ads show results?", answer: "Google Ads delivers results immediately after launch — you can get leads on the first day. However, it takes 4-8 weeks to fully optimize campaigns for maximum efficiency. During this learning period, we continuously test and refine to reduce cost per lead." },
    ],
    priceRange: "₹8,000/month management + ad budget",
    deliveryTime: "Immediate results",
    category: "Marketing",
    icon: "🎯",
  },

  "logo-design": {
    slug: "logo-design",
    name: "Logo Design",
    shortName: "Logo",
    tagline: "Your Brand Starts with a Logo",
    title: "Logo Design Company in Kondotty",
    metaTitle: "Logo Design Company in Kondotty | Professional Logo Design — Ekodrix",
    metaDescription: "Best logo design company in Kondotty, Malappuram. Professional, unique, custom logo designs for businesses in Kerala. Unlimited revisions. Fast delivery. Free quote!",
    keywords: ["logo design kondotty", "logo design malappuram", "logo design company kondotty", "brand logo designer kondotty", "professional logo design kerala", "logo design cost kondotty", "business logo design kondotty", "logo maker kondotty", "brand identity kondotty", "affordable logo design kerala"],
    description: "Professional logo design services in Kondotty. Unique, memorable logos that represent your brand perfectly.",
    longDescription: `Your logo is the face of your business — it's the first thing customers see and the symbol they'll associate with your brand for years. Ekodrix's design team creates unique, professional logos for businesses in Kondotty, Malappuram, and across Kerala.

We don't use templates or stock graphics. Every logo we design is 100% custom-created for your specific business, based on your industry, values, and target audience.`,
    features: ["100% custom design — no templates", "3 initial concept presentations", "Unlimited revisions", "All source files included (AI, EPS, SVG, PNG, PDF)", "Brand color palette guidance", "Font pairing recommendations", "Transparent background PNG", "Social media profile versions", "Fast delivery within 3-5 days"],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "CorelDRAW"],
    benefits: ["Create a professional first impression", "Build instant brand recognition", "Stand out from competitors", "Works at all sizes from favicons to billboards", "Fully editable vector files"],
    process: [
      { step: "01", title: "Brand Discovery", description: "We learn about your business, values, and design preferences." },
      { step: "02", title: "Research", description: "Research your industry and competitors for differentiation opportunities." },
      { step: "03", title: "Concept Design", description: "Create 3 distinct logo concepts for your review." },
      { step: "04", title: "Refinement", description: "Refine your chosen concept based on feedback." },
      { step: "05", title: "Finalization", description: "Perfect the final design in all variations." },
      { step: "06", title: "Delivery", description: "Receive all files in every format you need." },
    ],
    faqs: [
      { question: "How much does logo design cost in Kondotty?", answer: "Logo design packages: Basic logo (1 concept, 3 revisions): ₹3,000. Standard logo (3 concepts, unlimited revisions, all files): ₹8,000. Premium brand identity (logo + business card + letterhead + social kit + brand guide): ₹20,000. All packages are custom designs — no templates ever." },
      { question: "How long does logo design take?", answer: "We deliver initial logo concepts within 3-5 business days. Final files are typically delivered within 7-10 days including revision rounds. Rush delivery within 48 hours is available for an additional fee." },
    ],
    priceRange: "₹3,000 - ₹20,000+",
    deliveryTime: "3-10 days",
    category: "Design",
    icon: "🏷️",
  },

  "it-consulting": {
    slug: "it-consulting",
    name: "IT Consulting",
    shortName: "IT Consulting",
    tagline: "Expert IT Guidance for Your Business",
    title: "IT Consulting Company in Kondotty",
    metaTitle: "IT Consulting Company in Kondotty, Kerala | Technology Consulting — Ekodrix",
    metaDescription: "Expert IT consulting services in Kondotty, Malappuram. Technology strategy, digital transformation, software selection & IT infrastructure planning for Kerala businesses.",
    keywords: ["it consulting kondotty", "it consulting company kondotty", "technology consulting kondotty", "it services kondotty", "digital transformation kondotty", "it infrastructure kondotty", "tech consulting malappuram", "it solutions kondotty", "it support kondotty", "cloud consulting kondotty", "software consulting kerala"],
    description: "Expert IT consulting services in Kondotty. Technology strategy, digital transformation, and IT infrastructure planning.",
    longDescription: `Technology should be an asset, not a headache. Ekodrix's IT consulting team helps businesses in Kondotty and Malappuram make smart technology decisions, optimize existing systems, and successfully execute digital transformation initiatives.

Whether you're a small business choosing your first software systems, or a growing company needing to modernize your IT infrastructure — our consultants provide honest, vendor-neutral advice backed by years of practical experience in the Kerala business ecosystem.`,
    features: ["IT strategy and roadmap development", "Software and vendor selection advisory", "Digital transformation planning", "IT infrastructure assessment", "Cloud migration strategy", "Cybersecurity audit and recommendations", "Budget optimization for IT spending", "Vendor management and negotiation", "Team training recommendations", "Ongoing advisory retainer available"],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Office 365", "Zoho Suite", "Various ERP/CRM platforms", "Network and security tools"],
    benefits: ["Make confident, informed technology decisions", "Avoid costly software mistakes", "Save money on IT spending", "Accelerate your digital transformation", "Build a technology foundation for growth"],
    process: [
      { step: "01", title: "Initial Assessment", description: "Understand your business processes, current systems, and goals." },
      { step: "02", title: "Gap Analysis", description: "Identify technology gaps and improvement opportunities." },
      { step: "03", title: "Strategy Development", description: "Create a practical technology roadmap aligned with your budget and goals." },
      { step: "04", title: "Vendor Evaluation", description: "Evaluate and recommend specific software and services." },
      { step: "05", title: "Implementation Support", description: "Support during implementation to ensure success." },
      { step: "06", title: "Ongoing Advisory", description: "Available for ongoing questions and strategic guidance." },
    ],
    faqs: [
      { question: "What IT consulting services do you provide in Kondotty?", answer: "We provide technology strategy consulting, digital transformation roadmaps, software selection advisory (ERP, CRM, accounting software), cloud migration planning, IT infrastructure design, cybersecurity assessment, and vendor management. We work with all types of businesses from retail and manufacturing to healthcare and education." },
    ],
    priceRange: "₹5,000/session - ₹50,000+/month retainer",
    deliveryTime: "Ongoing engagement",
    category: "Consulting",
    icon: "🔮",
  },

  "react-development": {
    slug: "react-development",
    name: "React Development",
    shortName: "React",
    tagline: "Modern Web Apps with React",
    title: "React Development Company in Kondotty",
    metaTitle: "React Development Company in Kondotty, Kerala | React.js Web Apps — Ekodrix",
    metaDescription: "Expert React development company in Kondotty. Build fast, scalable web applications with React.js and Next.js. Modern frontend development. Free consultation!",
    keywords: ["react development kondotty", "react developer kondotty", "react js company kondotty", "reactjs development kondotty", "nextjs development kondotty", "react web app kondotty", "react malappuram", "react developer kerala", "frontend developer kondotty", "typescript development kondotty"],
    description: "Expert React and Next.js development in Kondotty. Build modern, fast, scalable web applications.",
    longDescription: `React is the world's most popular JavaScript library for building user interfaces, and Next.js is its production-ready framework. At Ekodrix, our React/Next.js experts build lightning-fast web applications for businesses in Kondotty and across Kerala.

Whether you need a dynamic single-page application, a server-rendered website, or a complex SaaS dashboard — our React team delivers pixel-perfect, performant applications that users love.`,
    features: ["React 18 with latest features", "Server-Side Rendering with Next.js", "TypeScript for type safety", "Tailwind CSS for modern styling", "API routes and backend integration", "State management (Redux, Zustand, Context)", "Real-time features with WebSockets", "Progressive Web App (PWA) support", "Deployment on Vercel or AWS", "SEO-optimized with Next.js"],
    technologies: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux / Zustand", "Node.js / Express", "GraphQL / REST API", "PostgreSQL", "Supabase / PlanetScale", "Vercel"],
    benefits: ["Faster page loads than traditional websites", "Better SEO with server-side rendering", "Smoother user experience with SPA architecture", "Easier maintenance with component-based code", "Scales to millions of users without rewrites"],
    process: [
      { step: "01", title: "Architecture Planning", description: "Design component architecture, routing, and state management strategy." },
      { step: "02", title: "Setup & Foundation", description: "Project setup with TypeScript, linting, testing, and CI/CD." },
      { step: "03", title: "Component Development", description: "Build reusable components following atomic design principles." },
      { step: "04", title: "Integration", description: "Connect to backend APIs, databases, and third-party services." },
      { step: "05", title: "Testing & Performance", description: "Unit tests, integration tests, and performance optimization." },
      { step: "06", title: "Deploy & Monitor", description: "Deploy to Vercel/AWS, set up monitoring and error tracking." },
    ],
    faqs: [
      { question: "What is the difference between React and Next.js?", answer: "React is a JavaScript library for building UI components. Next.js is a framework built on top of React that adds server-side rendering, static generation, API routes, image optimization, and many other production-ready features. For most business websites and applications, we recommend Next.js as it provides better SEO and performance out of the box." },
    ],
    priceRange: "₹50,000 - ₹10,00,000+",
    deliveryTime: "4 weeks - 12 months",
    category: "Development",
    icon: "⚛️",
  },

  "cloud-solutions": {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    shortName: "Cloud",
    tagline: "Scale Your Business with Cloud",
    title: "Cloud Solutions Company in Kondotty",
    metaTitle: "Cloud Solutions Company in Kondotty | AWS, Google Cloud Services — Ekodrix",
    metaDescription: "Professional cloud solutions in Kondotty. AWS, Google Cloud, Azure deployment. Cloud migration, DevOps, cloud architecture. Scalable solutions for Kerala businesses.",
    keywords: ["cloud solutions kondotty", "cloud services kondotty", "aws services kondotty", "cloud migration kondotty", "cloud hosting kondotty", "devops kondotty", "cloud architecture kondotty", "cloud consultant kerala", "aws consulting kerala"],
    description: "Enterprise cloud solutions in Kondotty. AWS, Google Cloud, Azure deployment, migration and management for Kerala businesses.",
    longDescription: `Move your business to the cloud and unlock unlimited scalability, better security, and lower infrastructure costs. Ekodrix's cloud experts help businesses in Kondotty migrate existing systems to the cloud and architect new cloud-native applications.

We work with all major cloud providers — AWS, Google Cloud, and Microsoft Azure. Our cloud solutions ensure your applications are highly available, auto-scaling, and cost-optimized.`,
    features: ["Cloud architecture design", "AWS / Google Cloud / Azure deployment", "Cloud migration from on-premise", "Containerization with Docker and Kubernetes", "CI/CD pipeline setup", "Auto-scaling configuration", "Database managed services", "CDN setup for global performance", "Cloud cost optimization", "24/7 cloud monitoring and alerts"],
    technologies: ["Amazon Web Services (AWS)", "Google Cloud Platform", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions / Jenkins", "NGINX", "Cloudflare", "Supabase"],
    benefits: ["99.99% uptime with cloud redundancy", "Auto-scale during traffic spikes", "Pay only for what you use", "Eliminate hardware maintenance", "Global performance with CDN"],
    process: [
      { step: "01", title: "Cloud Assessment", description: "Assess current infrastructure and create cloud migration plan." },
      { step: "02", title: "Architecture Design", description: "Design optimal cloud architecture for your workload." },
      { step: "03", title: "Migration", description: "Migrate applications and databases with zero downtime." },
      { step: "04", title: "Optimization", description: "Right-size resources for performance and cost optimization." },
      { step: "05", title: "Automation", description: "Set up CI/CD pipelines and infrastructure as code." },
      { step: "06", title: "Monitoring", description: "Configure alerts, dashboards, and automated incident response." },
    ],
    faqs: [
      { question: "Which cloud provider is best for my business in Kondotty?", answer: "AWS is the most feature-rich and has the largest ecosystem — best for complex applications needing many services. Google Cloud is excellent for AI/ML workloads and has great pricing for compute. Azure is ideal if you're already in the Microsoft ecosystem (Office 365, active directory). For most startups and small businesses in Kerala, AWS or Google Cloud is our recommendation." },
    ],
    priceRange: "₹20,000 setup + cloud costs",
    deliveryTime: "2-8 weeks",
    category: "Development",
    icon: "☁️",
  },

  "content-writing": {
    slug: "content-writing",
    name: "Content Writing",
    shortName: "Content",
    tagline: "Words That Win Customers",
    title: "Content Writing Services in Kondotty",
    metaTitle: "Content Writing Services in Kondotty | SEO Content, Blog Writing — Ekodrix",
    metaDescription: "Professional content writing services in Kondotty. SEO blog writing, website content, social media content. Get content that ranks on Google and converts readers.",
    keywords: ["content writing services kondotty", "seo content writing kondotty", "blog writing kondotty", "website content writing kondotty", "content writing malappuram", "content writing kerala", "copywriting kondotty", "article writing kondotty", "content marketing kondotty"],
    description: "Professional SEO content writing services in Kondotty. Blog posts, website content, and marketing copy that ranks and converts.",
    longDescription: `Great content is the foundation of every successful online business. It drives organic traffic, builds authority, and converts visitors into customers. Ekodrix's content team creates SEO-optimized, high-quality content for businesses in Kondotty and across Kerala.

Our writers combine deep SEO keyword research with compelling storytelling to create content that Google loves to rank and customers love to read. We write in English and can assist with Malayalam content needs.`,
    features: ["SEO keyword research for every piece", "Plagiarism-free 100% original content", "Expert writers in your industry niche", "On-page SEO formatting included", "Internal and external linking recommendations", "Meta title and description included", "Content calendar planning", "Blog posts, website pages, social content", "Product descriptions", "Press releases and PR content"],
    technologies: ["SEMrush / Ahrefs (keyword research)", "Grammarly Premium", "Surfer SEO (optimization)", "Copyscape (plagiarism check)", "Google Docs", "Hemingway Editor"],
    benefits: ["Rank on Google for valuable keywords", "Build authority and expertise in your industry", "Generate consistent organic traffic", "Convert readers into leads with compelling CTAs", "Save time with professional writing support"],
    process: [
      { step: "01", title: "Topic Research", description: "Research target keywords and content topics that will rank." },
      { step: "02", title: "Outline", description: "Create detailed content outline for your review before writing." },
      { step: "03", title: "Writing", description: "Write in-depth, SEO-optimized content that serves reader intent." },
      { step: "04", title: "SEO Optimization", description: "Optimize with target keywords, meta tags, and proper structure." },
      { step: "05", title: "Review", description: "Quality check, proofread, and your review/feedback." },
      { step: "06", title: "Publish & Track", description: "Publish content and track rankings over time." },
    ],
    faqs: [
      { question: "How much does content writing cost in Kondotty?", answer: "Content writing rates: Blog post (1000 words): ₹1,500-₹3,000. Long-form article (2000 words): ₹3,000-₹6,000. Service page (1500 words): ₹2,500-₹5,000. Website content (5 pages): ₹10,000-₹25,000. Monthly blog packages (4-8 posts): ₹10,000-₹30,000/month." },
    ],
    priceRange: "₹1,500/post - ₹30,000+/month",
    deliveryTime: "2-5 days per piece",
    category: "Marketing",
    icon: "✍️",
  },

  "react-native-development": {
    slug: "react-native-development",
    name: "React Native Development",
    shortName: "React Native",
    tagline: "Cross-Platform Apps with React Native",
    title: "React Native App Development in Kondotty",
    metaTitle: "React Native App Development in Kondotty | Cross-Platform Apps — Ekodrix",
    metaDescription: "Expert React Native app development in Kondotty, Kerala. Build Android and iOS apps with shared code. Cost-effective cross-platform mobile development.",
    keywords: ["react native development kondotty", "react native developer kondotty", "react native app kondotty", "cross platform app development kondotty", "react native kerala", "react native malappuram"],
    description: "Expert React Native app development in Kondotty. Build Android and iOS apps with one shared JavaScript codebase.",
    longDescription: `React Native is Facebook's open-source framework for building truly native mobile apps using JavaScript and React. At Ekodrix, our React Native developers build cross-platform apps for businesses in Kondotty that work flawlessly on both Android and iOS.

The biggest advantage: one codebase serves both platforms, reducing development cost by 40% compared to native development while delivering genuine native performance and user experience.`,
    features: ["Shared codebase for Android and iOS", "True native rendering (not WebView)", "Access to all native device APIs", "Hot reload and fast iteration", "Large ecosystem of native modules", "Code sharing with React web apps", "OTA updates without app store resubmission", "TypeScript support"],
    technologies: ["React Native", "TypeScript", "Expo", "Redux / Zustand", "React Query", "React Navigation", "Firebase", "Node.js backend", "Razorpay SDK", "Native modules"],
    benefits: ["40% cheaper than separate native apps", "Single team maintains both platforms", "Share business logic with web app", "Fast development with hot reload", "Active community and Meta support"],
    process: [
      { step: "01", title: "Project Setup", description: "Initialize React Native project with TypeScript, navigation, and state management." },
      { step: "02", title: "UI Development", description: "Build all screens following iOS and Android design guidelines." },
      { step: "03", title: "API Integration", description: "Connect to backend APIs and third-party services." },
      { step: "04", title: "Native Modules", description: "Add any platform-specific native functionality required." },
      { step: "05", title: "Testing", description: "Test on real Android and iOS devices." },
      { step: "06", title: "Deploy", description: "Submit to Google Play and Apple App Store." },
    ],
    faqs: [
      { question: "React Native vs Flutter — which should I choose?", answer: "React Native is ideal if: (1) you also need a web version and want to share code, (2) your team knows JavaScript/TypeScript, (3) you need many third-party integrations (larger ecosystem). Flutter is ideal if: (1) you want pixel-perfect custom UI, (2) maximum animation smoothness, (3) performance is the top priority. Ekodrix recommends based on your specific project." },
    ],
    priceRange: "₹60,000 - ₹8,00,000+",
    deliveryTime: "2-6 months",
    category: "Development",
    icon: "📲",
  },

  "crm-software": {
    slug: "crm-software",
    name: "CRM Software Development",
    shortName: "CRM Software",
    tagline: "Manage Customers Smarter",
    title: "CRM Software Development Company in Kondotty",
    metaTitle: "CRM Software Development in Kondotty | Custom CRM Solutions — Ekodrix",
    metaDescription: "Custom CRM software development in Kondotty, Kerala. Build a CRM tailored to your business. Manage leads, customers, sales pipeline & automate workflows.",
    keywords: ["crm software development kondotty", "custom crm kondotty", "crm company kondotty", "crm solutions malappuram", "customer relationship management kondotty", "sales crm kerala", "crm development india"],
    description: "Custom CRM software development in Kondotty. Manage leads, customers, and sales pipeline with a CRM built for your business.",
    longDescription: `A well-implemented CRM is the backbone of any successful sales operation. Ekodrix builds custom CRM systems for businesses in Kondotty that fit your exact sales process — not the other way around.

Unlike generic CRMs that require you to adapt your business to the software, our custom CRMs are built around your specific workflow, terminology, and business rules. The result: higher adoption, better data, and more closed deals.`,
    features: ["Lead and contact management", "Visual sales pipeline", "Task and follow-up automation", "Email and WhatsApp integration", "Custom fields for your data", "Activity tracking and call logs", "Automated lead assignment", "Commercial quotation generation", "Revenue forecasting dashboard", "Mobile CRM app included"],
    technologies: ["Node.js", "React / Next.js", "PostgreSQL", "Redis", "WhatsApp Business API", "Gmail / Outlook API", "Twilio SMS", "Docker", "AWS"],
    benefits: ["Never lose a lead again", "Automate follow-ups and nurturing", "Get real-time visibility into your sales pipeline", "Make data-driven sales decisions", "Scale your sales team without chaos"],
    process: [
      { step: "01", title: "Sales Process Mapping", description: "Map your exact sales process, stages, and requirements." },
      { step: "02", title: "CRM Architecture", description: "Design database schema and system architecture." },
      { step: "03", title: "Development", description: "Build CRM with all required features in agile sprints." },
      { step: "04", title: "Integration", description: "Integrate with email, WhatsApp, and other tools." },
      { step: "05", title: "Data Migration", description: "Import existing customer data from spreadsheets or old systems." },
      { step: "06", title: "Training & Launch", description: "Train team on CRM usage and go live." },
    ],
    faqs: [
      { question: "Why build a custom CRM instead of using Zoho or HubSpot?", answer: "Generic CRMs like Zoho and HubSpot are excellent for standard use cases but come with monthly per-user fees (₹1,000-₹5,000/user/month) and require adapting your processes to fit their structure. Custom CRM: one-time development cost, fits your exact process, no ongoing fees, fully owned by you, and integrates with local tools like WhatsApp Business. For teams of 10+ users, custom CRM pays back in 18-24 months." },
    ],
    priceRange: "₹2,00,000 - ₹8,00,000+",
    deliveryTime: "3-6 months",
    category: "Development",
    icon: "👥",
  },

  "erp-software": {
    slug: "erp-software",
    name: "ERP Software Development",
    shortName: "ERP Software",
    tagline: "Streamline Your Entire Business",
    title: "ERP Software Development Company in Kondotty",
    metaTitle: "ERP Software Development in Kondotty, Kerala | Custom ERP Solutions — Ekodrix",
    metaDescription: "Custom ERP software development in Kondotty, Kerala. Integrate accounting, inventory, HR, sales and operations in one system. Built for Kerala businesses.",
    keywords: ["erp software development kondotty", "custom erp kondotty", "erp solutions malappuram", "enterprise resource planning kondotty", "erp company kerala", "erp software kerala", "business management software kondotty"],
    description: "Custom ERP software development in Kondotty. Connect all your business processes in one integrated system.",
    longDescription: `Running a business on disconnected software and spreadsheets creates inefficiency, errors, and wasted time. Ekodrix builds custom ERP (Enterprise Resource Planning) systems for businesses in Kondotty and across Kerala that integrate all your operations — accounting, inventory, HR, sales, production, and more — in one unified platform.

Our ERPs are built specifically for Indian businesses, with GST compliance, Indian banking integrations, Malayalam/English support, and understanding of local business practices.`,
    features: ["Inventory management with barcode support", "Purchase order and vendor management", "Sales order and invoicing (GST compliant)", "Accounts payable and receivable", "HR and payroll management", "Manufacturing and production planning", "Multi-branch management", "Financial reporting and analytics", "Customer and vendor portals", "Mobile app for on-the-go access"],
    technologies: ["Node.js", "React / Next.js", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "AWS", "Print integrations", "Tally/GST API integration"],
    benefits: ["Single system for all business operations", "Eliminate data silos and duplicate entry", "Real-time business intelligence and reports", "GST compliance automated", "Reduce operational costs by 20-30%"],
    process: [
      { step: "01", title: "Business Analysis", description: "Deep understanding of all business processes and data flows." },
      { step: "02", title: "ERP Architecture", description: "Design modular ERP architecture covering all required areas." },
      { step: "03", title: "Phased Development", description: "Build in phases — core modules first, then additions." },
      { step: "04", title: "Data Migration", description: "Migrate all historical data from existing systems." },
      { step: "05", title: "User Training", description: "Comprehensive training for all users and departments." },
      { step: "06", title: "Go-Live Support", description: "Intensive support during the go-live period." },
    ],
    faqs: [
      { question: "How much does custom ERP development cost in Kondotty?", answer: "Custom ERP development costs: Small business ERP (5-10 modules): ₹5,00,000 - ₹10,00,000. Mid-size business ERP (10-15 modules): ₹10,00,000 - ₹20,00,000. Enterprise ERP (15+ modules, multi-branch): ₹20,00,000+. The investment typically pays back within 2-3 years through efficiency gains and reduced software subscription costs." },
    ],
    priceRange: "₹5,00,000 - ₹30,00,000+",
    deliveryTime: "6-18 months",
    category: "Development",
    icon: "🏭",
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);

export function getService(slug: string): ServiceData | undefined {
  return SERVICES[slug];
}

export function getAllServices(): ServiceData[] {
  return Object.values(SERVICES);
}
