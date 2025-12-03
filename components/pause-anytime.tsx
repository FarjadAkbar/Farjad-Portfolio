"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsPauseCircle } from "react-icons/bs";
import BookingModal from "@/components/booking-modal";

export default function PauseAnytime() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BsPauseCircle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Month Too Busy? Pause Anytime.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Zero penalties. Resume when ready. Your subscription, your rules.
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
          >
            Start Risk-Free Today
          </button>
        </motion.div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
}

