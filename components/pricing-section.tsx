"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { pricingData } from "@/lib/data";
import { HiCheck } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import BookingModal from "@/components/booking-modal";

export default function PricingSection() {
  const packageData = pricingData.websiteDevelopment;
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Custom Solutions, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Book a discovery call to discuss your specific needs and get a custom quote
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl w-full border-2 border-orange-200 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-4 right-4">
              <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recommended
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {packageData.title}
              </h3>
              <p className="text-lg text-gray-600">
                {packageData.description}
              </p>
            </div>

            <div className="mb-8 space-y-4">
              {packageData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <HiCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Starting from</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {packageData.price}
                  </span>
                  <span className="text-gray-600 text-lg">
                    {packageData.priceNote}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {packageData.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="flex-1 bg-orange-600 text-white px-6 py-4 rounded-full font-semibold text-center hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
              >
                {packageData.ctaButton}
              </button>
              <a
                href={packageData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-full font-semibold text-center hover:border-orange-600 hover:text-orange-600 transition flex items-center justify-center gap-2"
              >
                <BsWhatsapp className="w-5 h-5" />
                Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
}

