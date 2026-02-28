"use client";

import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import BookingModal from "@/components/booking-modal";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const categories = ["All", "Technology", "Healthcare"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <main className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <header className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-stack applications, microservices, and dashboards — from pharma operations and AI agents to marketplaces and fintech.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                activeFilter === category
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid — aligned cards, same structure */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex flex-col"
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-3 w-fit">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition line-clamp-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm font-medium mb-3 line-clamp-2">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                    View project
                    <BsArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Let&apos;s work together
          </h2>
          <p className="text-gray-600 mb-6">
            Have a project in mind? Get in touch.
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition shadow-md"
          >
            Get in Touch
            <BsArrowRight />
          </button>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
