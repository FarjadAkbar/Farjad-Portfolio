"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function WhyChooseMe() {
  const features = [
    {
      badge: "AI AUTOMATION",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "AI that fits the workflow",
      description: "Conversational agents, MCP integrations, and web and file search that connect AI to the tools and information a product needs.",
      icon: "🧠",
    },
    {
      title: "Interfaces for everyday work",
      description: "Dashboards, admin panels, and real-time views that help teams manage inventory, conversations, bookings, and operations.",
      icon: "📊",
    },
    {
      badge: "COST OPTIMIZATION",
      badgeColor: "bg-green-100 text-green-700",
      title: "Performance with a practical budget",
      description: "Provider routing, database tuning, queues, and caching. At Botsify, I reduced AI spend and integration costs while simplifying production infrastructure.",
      icon: "📈",
    },
    {
      badge: "PRODUCTION OWNERSHIP",
      badgeColor: "bg-orange-100 text-orange-700",
      title: "Beyond the first release",
      description: "I work across APIs, background jobs, databases, and deployment, and investigate production issues when real usage exposes the edge cases.",
      icon: "🔗",
    },
    {
      title: "Experience across business domains",
      description: "From pharmaceutical operations and property alerts to taxi tracking and live music bookings, I turn business rules into usable product workflows.",
      icon: "🎯",
    },
    {
      title: "Resilience built into the system",
      description: "LLM provider fallbacks, isolated MCP sessions, booking safeguards, and support tools that help teams recover when things go wrong.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I bring to your product
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hands-on engineering across the interface, backend, and infrastructure, grounded in the needs of the business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {feature.badge && (
                    <div className="mb-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${feature.badgeColor}`}
                      >
                        {feature.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl">
                    {feature.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Explore Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/portfolio"
              className="block bg-gray-900 text-white rounded-xl p-6 hover:bg-gray-800 transition shadow-lg hover:shadow-xl h-full flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-gray-900"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-gray-900"></div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-gray-900"></div>
                </div>
                <span className="text-lg font-semibold">See the work behind these skills</span>
              </div>
              <BsArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

