"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Impact, Real Stories
          </h2>
          <p className="text-xl text-gray-600">
            How we transformed businesses with AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-2 gap-0">
                {testimonial.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative h-48 bg-gray-100"
                  >
                    <Image
                      src={img}
                      alt={`${testimonial.company} screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                    {testimonial.clientName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.clientName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.clientRole} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

