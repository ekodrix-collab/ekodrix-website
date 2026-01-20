"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function StartProjectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Project form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          className="text-center glass rounded-2xl p-12 border border-glass-border max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-400">
            We've received your project details. Our team will get back to you within 24 hours.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-void">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
              Start Your Project
            </h1>
            <p className="text-xl text-gray-400">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 border border-glass-border space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-cosmic border border-glass-border text-white focus:outline-none focus:border-accent-start transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-cosmic border border-glass-border text-white focus:outline-none focus:border-accent-start transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-cosmic border border-glass-border text-white focus:outline-none focus:border-accent-start transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-cosmic border border-glass-border text-white focus:outline-none focus:border-accent-start transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="saas">SaaS Development</option>
                  <option value="ai">AI Integration</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="backend">Backend/API</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-cosmic border border-glass-border text-white focus:outline-none focus:border-accent-start transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="30k-50k">₹30K - ₹50K</option>
                  <option value="50k-100k">₹50K - ₹100K</option>
                  <option value="100k-250k">₹100K - ₹250K</option>
                  <option value="250k-500k">₹250K - ₹500K</option>
                  <option value="500k+">₹500K+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                Timeline *
              </label>
              <select
                id="timeline"
                required
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-cosmic border border-glass-border text-white focus:outline-none focus:border-accent-start transition-colors"
              >
                <option value="">Select...</option>
                <option value="asap">ASAP</option>
                <option value="1month">Within 1 Month</option>
                <option value="3months">1-3 Months</option>
                <option value="6months">3-6 Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-cosmic border border-glass-border text-white focus:outline-none focus:border-accent-start transition-colors resize-none"
                placeholder="Tell us about your project, goals, and requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-accent-gradient text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-accent-glow transition-all flex items-center justify-center gap-2"
            >
              Submit Project Request
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
