"use client";

import React from "react";
import { motion } from "framer-motion";
import { websiteProblemsData } from "@/lib/data";

export default function WebsiteProblems() {
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
            6 Common Website Problems I can Solve
          </h2>
          <p className="text-xl text-gray-600">
            Transform challenges into opportunities with proven solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteProblemsData.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-orange-600">
                      {problem.number}.
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">
                      {problem.title}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-red-600 mb-2">
                      Problem
                    </p>
                    <p className="text-gray-600 mb-4">
                      {problem.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-600 mb-2">
                      Solution
                    </p>
                    <p className="text-gray-700 font-medium">
                      {problem.solution}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-green-600">✓</span>
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

