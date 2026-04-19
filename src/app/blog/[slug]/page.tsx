import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleSchema } from "@/components/schemas/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";

const blogPosts: Record<string, {
  title: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}> = {
  "building-scalable-saas-platform": {
    title: "Mastering SaaS Scalability: Engineering for 1M+ Transactions",
    category: "Architecture",
    date: "2026-01-20",
    readTime: "12 min read",
    content: `
# Mastering SaaS Scalability: Engineering for 1M+ Transactions

Building a SaaS platform that can handle millions of daily transactions requires more than just powerful servers. It requires a fundamental shift in how we think about data state, concurrency, and distributed systems.

## The Bottleneck: The Database

In almost every high-traffic SaaS, the database is the first point of failure. At EKODRIX, we move beyond simple vertical scaling. We implement horizontal sharding and read-replicas to distribute load.

- **Dynamic Sharding**: Distributing user data across multiple PostgreSQL instances based on tenant IDs.
- **Connection Pooling**: Using tools like PgBouncer to manage thousands of concurrent connections efficiently.

## Distributed Caching

Every millisecond counts. We utilize a multi-layer caching strategy:
1. **Edge Caching**: static assets and common API responses at the CDN level.
2. **In-Memory Caching**: Redis for session data and hot application state.
3. **Application Cache**: Stale-while-revalidate patterns for frequently accessed metadata.

## Event-Driven Architecture

To maintain a responsive UI, we move heavy processing out of the request-response cycle. Our systems use Message Queues (RabbitMQ/SQS) to handle everything from email notifications to complex data processing asynchronously.

Engineering for scale is an iterative process. It's about building systems that are not just fast, but resilient and observable.
    `,
  },
  "ai-production-workflows": {
    title: "AI in Production: Integrating LLMs into Real-World SaaS",
    category: "Artificial Intelligence",
    date: "2026-01-18",
    readTime: "10 min read",
    content: `
# AI in Production: Integrating LLMs into Real-World SaaS

Integrating Large Language Models (LLMs) into a production SaaS is vastly different from building a simple chatbot. It requires careful consideration of latency, cost, and reliability.

## Beyond the Prompt

A production-grade AI feature isn't just about a good prompt. It's about the infrastructure surrounding it.

- **RAG (Retrieval-Augmented Generation)**: Connecting LLMs to your private data securely to provide context-aware responses.
- **Semantic Search**: Using vector databases (like Pinecone or pgvector) to find relevant information based on meaning, not just keywords.
- **Prompt Engineering as Code**: Versioning and testing prompts as part of the CI/CD pipeline.

## Managing Latency and Costs

LLM calls are slow and expensive. We implement several optimizations:
- **Streaming Responses**: Improving perceived performance by showing text as it's generated.
- **Caching Embeddings**: Avoiding redundant API calls for similar queries.
- **Model Routing**: Routing simple tasks to cheaper, faster models while reserving high-end models for complex logic.

## The Ethical Layer

Reliability is key. We build automated validation layers to catch "hallucinations" and ensure that AI-generated content meets safety and quality standards before it reaches the user.
    `,
  },
  "art-of-premium-ux": {
    title: "The Art of User Experience: Why Micro-interactions Matter",
    category: "Design",
    date: "2026-01-15",
    readTime: "8 min read",
    content: `
# The Art of User Experience: Why Micro-interactions Matter

In a crowded SaaS market, the difference between a tool and a product is how it feels. Premium UX is not just about a clean layout; it's about the invisible interactions that guide the user.

## The Power of the "Wait"

How your application handles loading states defines its quality. Instead of generic spinners, we use skeleton screens and progress indicators that mirror the final content, reducing perceived wait times.

## Micro-animations

Small animations provide critical feedback. A subtle button press animation, a smooth transition between pages, or a gentle tooltip pop-up confirms the user's action and builds trust.

- **Haptic Feedback**: Simulating physical touch for mobile users.
- **State Transitions**: Animating the change between an "empty" and "populated" state to maintain context.

## Design for Success

We believe in "Invisible UI" — where the most important actions are the most intuitive. By removing friction and emphasizing clarity, we help users achieve their goals without thinking about the interface.
    `,
  },
  "modern-tech-stack-2026": {
    title: "Modern Tech Stack 2026: Next.js, Framer Motion, and Beyond",
    category: "Engineering",
    date: "2026-01-12",
    readTime: "15 min read",
    content: `
# Modern Tech Stack 2026: Next.js, Framer Motion, and Beyond

Choosing the right tech stack is the most important decision a founder can make. At EKODRIX, we prioritize tools that offer both high developer velocity and world-class performance.

## The Core: Next.js

Next.js has become the industry standard for production web apps. Its support for Static Site Generation (SSG), Server-Side Rendering (SSR), and powerful middleware allows us to build SEO-friendly, blazing-fast interfaces.

## Fluid Motion: Framer Motion

Animations shouldn't be an afterthought. We use Framer Motion to create cinematic transitions that feel "alive". From scroll-triggered animations to layout transitions, it allows us to create the premium feel our clients expect.

## Scalable Backend: TypeScript & Node.js

Safety first. By using TypeScript across the entire stack, we catch errors at compile-time, not in production. Combined with a scalable Node.js backend and a robust ORM like Prisma, we build systems that are easy to maintain and scale.

The 2026 stack is about cohesion. Choosing tools that work together seamlessly allows us to ship faster and build better.
    `,
  },
  "engineering-the-future": {
    title: "Engineering the Future: Automated Production Pipelines",
    category: "DevOps",
    date: "2026-01-08",
    readTime: "9 min read",
    content: `
# Engineering the Future: Automated Production Pipelines

In modern software development, shipping code is as important as writing it. An automated production pipeline is the backbone of any scalable SaaS.

## Continuous Integration & Deployment (CI/CD)

Gone are the days of manual deployments. We implement rigorous CI/CD pipelines that:
- **Automated Testing**: Run unit, integration, and E2E tests on every pull request.
- **Zero-Downtime Deployments**: Using blue-green or canary deployments to ensure users never see an error page.
- **Environment Parity**: Ensuring local, staging, and production environments are identical.

## Infrastructure as Code (IaC)

We treat infrastructure like software. By using tools like Terraform or AWS CDK, we define our entire server environment in code. This makes our systems reproducible, versioned, and easy to audit.

## Observability

You can't fix what you can't see. We integrate comprehensive monitoring (Sentry, New Relic, Datadog) from Day 1, allowing us to proactively solve issues before they affect the end user.
    `,
  },
  "startup-velocity-mvp-to-scale": {
    title: "Startup Velocity: Shipping MVPs That Actually Scale",
    category: "Startup Tech",
    date: "2026-01-05",
    readTime: "11 min read",
    content: `
# Startup Velocity: Shipping MVPs That Actually Scale

The "move fast and break things" era is over. Ambitions startups today need to move fast *without* breaking the foundation.

## Strategic Technical Debt

Velocity is critical, but not all debt is equal. We focus on shipping the core value proposition (MVP) quickly while making smart architectural decisions that allow for future growth.

- **Modular Design**: Building isolated components that can be easily updated or replaced.
- **Documentation**: Keeping a clear record of "Why" decisions were made, not just "How".

## Focus on One Metric

An MVP should be laser-focused. Whether it's user engagement, conversion, or data processing speed, we optimize the technical stack around the one metric that defines your startup's success.

## Building for the "What If"

What if you get 10,000 users tomorrow? We build with "day one scalability" in mind — choosing managed services that can scale with a single click, allowing founders to focus on business, not servers.
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Ekodrix Blog — Software Company Kondotty`,
    description: `${post.content.replace(/[#\n]/g, ' ').substring(0, 155).trim()}...`,
    keywords: [
      post.category.toLowerCase(),
      "ekodrix blog",
      "software development blog kerala",
      "web development tips kondotty",
      "digital marketing insights kerala",
      "software company blog malappuram",
      "tech blog kondotty",
    ],
    alternates: { canonical: `https://ekodrix.com/blog/${params.slug}` },
    openGraph: {
      title: `${post.title} | Ekodrix Blog`,
      description: `${post.content.replace(/[#\n]/g, ' ').substring(0, 155).trim()}...`,
      url: `https://ekodrix.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Ekodrix Team"],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Ekodrix Blog`,
      description: `${post.content.replace(/[#\n]/g, ' ').substring(0, 155).trim()}...`,
    },
    robots: { index: true, follow: true },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.content.replace(/[#\n]/g, ' ').substring(0, 155).trim()}
        url={`https://ekodrix.com/blog/${params.slug}`}
        datePublished={post.date}
        category={post.category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ekodrix.com" },
          { name: "Blog", url: "https://ekodrix.com/blog" },
          { name: post.title, url: `https://ekodrix.com/blog/${params.slug}` },
        ]}
      />
    <main className="min-h-screen pt-20">
      <article className="py-24 bg-void">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-3 py-1 rounded-full bg-accent-start/20 text-accent-glow text-sm font-semibold mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6 gradient-text">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}
