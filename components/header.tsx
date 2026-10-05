"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import BookingModal from "@/components/booking-modal";
import NavigationIcon from "./navigation-icons";
import SocialLinks from "./social-links";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 h-14 w-[calc(100%-2rem)] max-w-5xl rounded-[100px] border border-white border-opacity-40 bg-white bg-opacity-95 shadow-lg shadow-black/10 backdrop-blur-[0.5rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-4 left-1/2 -translate-x-1/2 h-14 w-[calc(100%-2rem)] max-w-5xl items-center justify-between gap-3 px-4 sm:px-5">
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center gap-1 lg:gap-3 text-[0.9rem] font-medium text-gray-600">
            {links.map((link) => {
              const isActive = pathname === link.hash || (link.hash !== "/" && pathname.startsWith(`${link.hash}/`));
              
              return (
                <motion.li
                  className="flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex items-center justify-center gap-2 px-3 py-2 hover:text-orange-600 transition",
                      {
                        "text-orange-600": isActive,
                      }
                    )}
                    aria-current={isActive ? "page" : undefined}
                    href={link.hash}
                  >
                    <NavigationIcon href={link.hash} />
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

          {/* Hire Me Button (Shown on Left on Mobile) */}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="md:hidden inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg text-xs whitespace-nowrap"
          >
            Hire Me <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <SocialLinks />
          {/* Desktop Hire Me Button */}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="hidden md:inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl text-sm whitespace-nowrap"
          >
            Hire Me <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </button>

          {/* Mobile Menu Toggle (Shown on Right on Mobile) */}
          <button
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden text-2xl text-gray-600 hover:text-orange-600 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            id="mobile-navigation"
            className="fixed top-20 inset-x-4 max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:hidden z-[1000] origin-top-right"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = pathname === link.hash || (link.hash !== "/" && pathname.startsWith(`${link.hash}/`));
                return (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={clsx(
                        "flex items-center gap-3 w-full px-4 py-3 rounded-xl transition text-gray-600",
                        {
                          "bg-orange-50 text-orange-600 font-semibold": isActive,
                          "hover:bg-gray-50": !isActive,
                        }
                      )}
                    >
                      <NavigationIcon href={link.hash} />
                    {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </header>
  );
}

