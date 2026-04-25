"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
  I started my journey in programming after school, where I quickly discovered my{" "}
  <span className="font-medium">passion for coding</span>. To pursue this interest, I began learning through YouTube, where I studied{" "}
  <span className="font-medium">full-stack web development and system design</span>. My favorite part of programming is the thrill of building projects and solving complex problems. I{" "}
  <span className="underline">love</span> the satisfaction of finally cracking a tough challenge. My core tech stack includes{" "}
  <span className="font-medium">Next.js, Laravel, NestJS, and PostgreSQL</span>. I also have experience with{" "}
  <span className="font-medium">TypeScript, Vue.js, and MongoDB</span>, and I'm always eager to learn and explore new technologies. I've worked on real-time applications, integrated third-party APIs, and contributed to team-based projects using Git and CI/CD workflows. I’m currently seeking a{" "}
  <span className="font-medium">full-time position</span> as a software engineer where I can grow, build meaningful products, and take on new challenges.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy spending time with my family and friends. I also{" "}
  <span className="font-medium">love learning new things</span> - currently, I’m diving into{" "}
  <span className="font-medium">model training</span> and experimenting with small-scale machine learning workflows. Outside of tech, I enjoy exploring new ideas, reading about innovation, and staying curious across different domains.
</p>

    </motion.section>
  );
}
