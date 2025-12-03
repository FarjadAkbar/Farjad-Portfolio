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
  
  const categories = ["All", "Technology", "Education", "Healthcare"];
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Stats */}
        <div className="relative mb-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {/* Grid Pattern Layer */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(180, 180, 180, 0.2) 1px, transparent 1px), linear-gradient(rgba(180, 180, 180, 0.2) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
                backgroundPosition: "center center",
              }}
            ></div>
            
            {/* Pattern Image Layer */}
            <div
              className="absolute inset-0 w-full h-full opacity-40"
              style={{
                backgroundImage: `url('/pattren.png')`,
                backgroundSize: "30px 30px",
                backgroundPosition: "center center",
                backgroundRepeat: "repeat",
              }}
            ></div>
            
            {/* Radial Gradient Overlay for Content Highlight */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: `radial-gradient(70% 70% at center, transparent 0%, transparent 10%, rgba(255, 255, 255, 0.14) 25%, rgba(255, 255, 255, 0.333) 40%, rgba(255, 255, 255, 0.57) 60%, rgba(255, 255, 255, 0.808) 80%, rgba(255, 255, 255, 0.95) 100%)`,
              }}
            ></div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center" style={{ zIndex: 1 }}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">6+</p>
                    <p className="text-sm text-gray-600">Successful Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">5+</p>
                    <p className="text-sm text-gray-600">Countries</p>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                My Work That
                <br />
                <span className="text-orange-600">Generates Real Results</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                AI-powered websites and intelligent dashboards that transform businesses across technology, education, and beyond
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">200%</p>
                    <p className="text-sm text-gray-600">Avg. Growth</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Tech Focus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
              <Image 
                src="https://picsum.photos/id/20/800/600" 
                alt="Portfolio Showcase" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeFilter === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-xl transition group"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how AI and modern design can elevate your business
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
            >
              Book Discovery Call
              <BsArrowRight />
            </button>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
