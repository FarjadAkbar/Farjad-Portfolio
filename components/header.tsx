"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import BookingModal from "@/components/booking-modal";

export default function Header() {
  const pathname = usePathname();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-4 left-[25%] h-14 w-[60%] rounded-[100px] border border-white border-opacity-40 bg-white bg-opacity-95 shadow-lg shadow-black/10 backdrop-blur-[0.5rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-4 left-[25%] h-14 w-[60%] items-center justify-between px-6">
        <ul className="flex items-center justify-center gap-6 text-[0.9rem] font-medium text-gray-600">
          {links.map((link) => {
            const isActive = pathname === link.hash;
            
            return (
              <motion.li
                className="flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex items-center justify-center px-4 py-2 hover:text-orange-600 transition",
                    {
                      "text-orange-600": isActive,
                    }
                  )}
                  href={link.hash}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      className="bg-orange-100 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl text-sm"
        >
          Hire Me
        </button>
      </nav>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </header>
  );
}
