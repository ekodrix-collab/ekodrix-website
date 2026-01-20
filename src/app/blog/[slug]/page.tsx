import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const blogPosts: Record<string, {
  title: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}> = {
  "building-scalable-saas-platform": {
    title: "How We Built a SaaS Platform That Handles 1M+ Daily Transactions",
    category: "SaaS Development",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
# How We Built a SaaS Platform That Handles 1M+ Daily Transactions

Building a SaaS platform that can handle millions of daily transactions requires careful architecture, 
scalable infrastructure, and best practices. In this article, we'll dive deep into the technical decisions 
and architecture patterns that made this possible.

## Architecture Overview

Our platform is built on a microservices architecture, allowing us to scale individual components independently. 
We use Kubernetes for orchestration, PostgreSQL for primary data storage, and Redis for caching and session management.

## Key Technical Decisions

1. **Database Sharding**: We implemented horizontal sharding to distribute load across multiple database instances.
2. **Caching Strategy**: Multi-layer caching with Redis and CDN to reduce database load.
3. **Async Processing**: Background jobs for heavy operations to keep API response times low.
4. **Monitoring**: Comprehensive observability with distributed tracing and metrics.

## Results

- **99.99% Uptime**: Achieved through redundancy and failover mechanisms
- **< 100ms Response Time**: Average API response time under load
- **Horizontal Scalability**: Can handle 10x traffic spikes without issues

This architecture has proven to be robust and scalable, handling over 1 million transactions daily with ease.
    `,
  },
  "ai-powered-saas-guide": {
    title: "The Complete Guide to Building AI-Powered SaaS in 2024",
    category: "AI & ML",
    date: "2024-01-10",
    readTime: "12 min read",
    content: `
# The Complete Guide to Building AI-Powered SaaS in 2024

AI integration is no longer a nice-to-have—it's becoming essential for competitive SaaS products. 
This guide covers everything you need to know about building AI-powered SaaS applications.

## Getting Started with AI Integration

The first step is understanding what AI capabilities your product needs. Common use cases include:

- **Natural Language Processing**: Chatbots, content generation, sentiment analysis
- **Computer Vision**: Image recognition, document processing
- **Predictive Analytics**: Forecasting, recommendations
- **Automation**: Workflow automation, intelligent routing

## Choosing the Right AI Stack

We recommend starting with proven APIs like OpenAI's GPT models, then building custom models 
for specific use cases. The key is to balance cost, latency, and accuracy.

## Implementation Best Practices

1. **Start Small**: Begin with one AI feature and iterate
2. **Handle Failures Gracefully**: AI isn't perfect—have fallbacks
3. **Monitor Costs**: AI API calls can get expensive at scale
4. **User Feedback Loop**: Continuously improve based on user interactions

Building AI-powered SaaS requires careful planning, but the results can be transformative for your product.
    `,
  },
  "saas-mrr-roadmap": {
    title: "From 0 to $10K MRR: Technical Roadmap for SaaS Founders",
    category: "Startup Tech",
    date: "2024-01-05",
    readTime: "10 min read",
    content: `
# From 0 to $10K MRR: Technical Roadmap for SaaS Founders

Scaling a SaaS from zero to $10K monthly recurring revenue requires the right technical foundation. 
This roadmap outlines the key technical milestones and decisions you'll need to make.

## Phase 1: MVP (0-$1K MRR)

**Focus**: Speed to market, core features only

- Use managed services (Vercel, Supabase, Stripe)
- Single database, no complex architecture
- Basic monitoring and error tracking
- Focus on product-market fit

## Phase 2: Growth ($1K-$5K MRR)

**Focus**: Stability and performance

- Implement proper database indexing
- Add caching layer (Redis)
- Set up CI/CD pipeline
- Comprehensive error tracking and monitoring
- Start thinking about multi-tenancy

## Phase 3: Scale ($5K-$10K MRR)

**Focus**: Scalability and optimization

- Database optimization and query tuning
- Implement background job processing
- Add CDN for static assets
- Set up load balancing
- Consider microservices for critical paths

## Key Metrics to Track

- **Uptime**: Target 99.9%+
- **Response Time**: Keep APIs under 200ms
- **Error Rate**: < 0.1%
- **Database Performance**: Monitor slow queries

The technical foundation you build early will determine how smoothly you can scale. Invest in the right infrastructure from the start.
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
    title: `${post.title} - EKODRIX Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
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
  );
}
