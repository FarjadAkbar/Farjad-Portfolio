"use client";

import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import BookingModal from "@/components/booking-modal";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Farjad</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Full-stack developer specializing in modern web development, AI integration, and premium website design. 
              Building intelligent websites that drive business growth.
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
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
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
              <li>Website Development</li>
              <li>AI Integration</li>
              <li>Dashboard Design</li>
              <li>SEO Optimization</li>
              <li>Full-Stack Development</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="hover:text-orange-500 transition text-left"
                >
                  Book a Call
                </button>
              </li>
              <li>
                <a href="mailto:farjadakbar4@gmail.com" className="hover:text-orange-500 transition">
                  Email Me
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/+923312740314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  WhatsApp
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
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/farjad-akbar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="http://github.com/FarjadAkbar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
                aria-label="GitHub"
              >
                <FaGithubSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </footer>
  );
}
