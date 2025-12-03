"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsCalendar3 } from "react-icons/bs";
import BookingModal from "@/components/booking-modal";

export default function BookCallCTA() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BsCalendar3 className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a discovery call to discuss your project requirements and get a custom quote
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
            >
              Book a Call
              <BsArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600 transition"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
}

