"use client";

import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import BookingModal from "@/components/booking-modal";
import Image from "next/image";
import NavigationIcon from "./navigation-icons";
import SocialLinks from "./social-links";
import { HiOutlineCalendar, HiOutlineMail, HiOutlineCode, HiOutlineSparkles, HiOutlineChartBar, HiOutlineSearch, HiOutlineGlobe } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/favicon.png" alt="" width={36} height={36} />
              <span className="text-2xl font-bold">Farjad</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              I’m Farjad, a full-stack engineer based in Karachi. I build web applications and AI automation, with hands-on ownership of APIs, databases, and production infrastructure. Have a product to build or a system to improve? Let’s talk.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    <NavigationIcon href={link.hash} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { label: "Web Applications", Icon: HiOutlineGlobe },
                { label: "AI Agents & Integrations", Icon: HiOutlineSparkles },
                { label: "Operational Dashboards", Icon: HiOutlineChartBar },
                { label: "Performance Optimization", Icon: HiOutlineSearch },
                { label: "Backend APIs & Services", Icon: HiOutlineCode },
              ].map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-500" />{label}</li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center gap-2 hover:text-orange-500 transition text-left"
                >
                  <HiOutlineCalendar aria-hidden="true" className="h-4 w-4" /> Book a Call
                </button>
              </li>
              <li>
                <a href="mailto:farjadakbar4@gmail.com" className="inline-flex items-center gap-2 hover:text-orange-500 transition">
                  <HiOutlineMail aria-hidden="true" className="h-4 w-4" /> Email Me
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/+923312740314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-orange-500 transition"
                >
                  <FaWhatsapp aria-hidden="true" className="h-4 w-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Farjad. All rights reserved.
            </p>
            <SocialLinks dark />
          </div>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </footer>
  );
}
