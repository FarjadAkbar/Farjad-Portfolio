"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/data";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const project = getProjectBySlug(slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return (
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Link href="/portfolio" className="text-orange-600 font-semibold hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const images = "images" in project && Array.isArray(project.images) ? project.images : [project.image];

  return (
    <main className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-8 transition"
        >
          <BsArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <header className="mb-10">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            {project.subtitle}
          </p>
        </header>

        {/* Image gallery */}
        <section className="mb-10 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
          <div className="relative aspect-video w-full">
            <Image
              src={images[activeImageIndex] ?? project.image}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto border-t border-gray-200 bg-white">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageIndex(i)}
                  title={`View screenshot ${i + 1} of ${images.length}`}
                  aria-label={`View screenshot ${i + 1} of ${images.length}`}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
                    activeImageIndex === i ? "border-orange-500 ring-2 ring-orange-200" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">About this project</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Key features</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              View live
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-600 transition"
            >
              <BsGithub className="w-4 h-4" />
              Source code
            </a>
          ) : null}
        </section>
      </div>
    </main>
  );
}
