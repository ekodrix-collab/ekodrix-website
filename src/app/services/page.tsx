import { Metadata } from "next";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Services - EKODRIX",
  description: "Comprehensive software development services including SaaS, AI integration, web and mobile apps.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end software solutions that scale from Day 1
            </p>
          </div>
        </div>
      </section>
      <Services />
    </main>
  );
}
