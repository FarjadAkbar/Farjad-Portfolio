"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  image,
  features,
  technologies,
  github,
  demo,
  highlight
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className={`overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg ${highlight ? "ring-2 ring-gray-900 dark:ring-white ring-opacity-20" : ""}`}
    >
      <div className="grid md:grid-cols-2 gap-0 max-w-[65rem]">
                <div className="relative h-64 md:h-auto">
                  <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                  {highlight && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Features:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {github && (
                      <Link href={github} target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white">
                          <BsGithub className="w-4 h-4" />
                          Code
                        </button>
                      </Link>
                    )}
                    {demo && (
                      <Link href={demo} target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 text-white rounded-lg transition-colors">
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
    </motion.div>
  );
}
