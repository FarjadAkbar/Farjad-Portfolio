"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function PortfolioSlider() {
  const portfolioImages = projectsData.map((project) => project.image);
  const duplicatedImages = [...portfolioImages, ...portfolioImages];

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Work
          </h2>
          <Link
            href="/portfolio"
            className="text-orange-600 font-semibold hover:text-orange-700 transition"
          >
            View all →
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 portfolio-slider">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        .portfolio-slider {
          animation: scroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }

        .portfolio-slider:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

