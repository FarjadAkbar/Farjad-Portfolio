"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import BookingModal from "@/components/booking-modal";

export default function Hero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background Pattern with Overlapping Textures */}
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

      <div className="relative text-center" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            Full Stack Engineer
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Farjad Akbar
          <br />
          <span className="text-orange-600">Building Full-Stack & AI Products</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Laravel, NestJS, Vue, React — scalable apps, microservices, and AI-driven features. From pharma operations platforms to agentic workflows.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/portfolio"
            className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
          >
            View Portfolio
            <BsArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="px-8 py-4 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600 transition"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
}

