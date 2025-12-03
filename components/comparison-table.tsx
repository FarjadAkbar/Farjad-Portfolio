"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { BsX } from "react-icons/bs";

export default function ComparisonTable() {
  const comparisonData = [
    {
      criteria: "Investment",
      yourService: "Custom pricing (starting $1,499)",
      fullTimeDesigner: "$80K+ yearly salary",
      otherAgencies: "$15K-$50K per project",
    },
    {
      criteria: "Delivery Speed",
      yourService: "48-72 hours",
      fullTimeDesigner: "2-3 weeks",
      otherAgencies: "3-6 months",
    },
    {
      criteria: "Quality Guarantee",
      yourService: "Unlimited revisions",
      fullTimeDesigner: "Variable quality",
      otherAgencies: "2-3 revision rounds",
    },
    {
      criteria: "Start Time",
      yourService: "Within 24 hours",
      fullTimeDesigner: "4-8 weeks hiring",
      otherAgencies: "2-4 weeks kickoff",
    },
    {
      criteria: "Scope",
      yourService: "Full-service solution",
      fullTimeDesigner: "Limited to skillset",
      otherAgencies: "Often requires multiple vendors",
    },
    {
      criteria: "Technology",
      yourService: "Latest AI & frameworks",
      fullTimeDesigner: "Depends on individual",
      otherAgencies: "Varies by agency",
    },
    {
      criteria: "Industry Focus",
      yourService: "Specialized expertise",
      fullTimeDesigner: "General knowledge",
      otherAgencies: "Jack of all trades",
    },
    {
      criteria: "Flexibility",
      yourService: "Pause or cancel anytime",
      fullTimeDesigner: "Long-term commitment",
      otherAgencies: "Contract penalties",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Smart Investment Choice
          </h2>
          <p className="text-xl text-gray-600">
            Compare your options and see why I deliver the best value. Final pricing discussed during your discovery call.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl min-w-[800px]">
            <div className="grid grid-cols-4 gap-0">
              {/* Header Row */}
              <div className="bg-gray-50 p-6 border-b-2 border-gray-200 font-semibold text-gray-900">
                <p className="text-sm uppercase tracking-wide">Criteria</p>
              </div>
              <div className="bg-orange-50 p-6 border-b-2 border-orange-200 text-center">
                <div className="mb-2">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Recommended
                  </span>
                </div>
                <p className="font-bold text-gray-900 text-lg">Hire Me</p>
              </div>
              <div className="bg-gray-50 p-6 border-b-2 border-gray-200 text-center">
                <p className="font-bold text-gray-900 text-lg">Full-time Designer</p>
              </div>
              <div className="bg-gray-50 p-6 border-b-2 border-gray-200 text-center">
                <p className="font-bold text-gray-900 text-lg">Other Agencies</p>
              </div>

              {/* Data Rows */}
              {comparisonData.map((row, index) => (
                <React.Fragment key={index}>
                  <div className="bg-gray-50 p-6 border-b border-gray-200 font-semibold text-gray-900 flex items-center">
                    <p>{row.criteria}</p>
                  </div>
                  <div className="bg-orange-50 p-6 border-b border-gray-200">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <HiCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p className="text-gray-700 text-sm text-center">{row.yourService}</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 border-b border-gray-200">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <BsX className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <p className="text-gray-600 text-sm text-center">{row.fullTimeDesigner}</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 border-b border-gray-200">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <BsX className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <p className="text-gray-600 text-sm text-center">{row.otherAgencies}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

