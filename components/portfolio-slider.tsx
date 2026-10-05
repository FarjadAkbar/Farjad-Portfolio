"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { BsHandIndex } from "react-icons/bs";
import { projectsData } from "@/lib/data";
import ProjectPreview from "./project-preview";

export default function PortfolioSlider() {
  const drag = useRef({ pointerId: -1, startX: 0, scrollLeft: 0, moved: false });
  const [isDragging, setIsDragging] = useState(false);
  const selected = ["botsify-agentic", "pharma", "realmex", "cabbie", "gigsfinder"];
  return (
    <section className="overflow-hidden bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Selected work</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Real products. Hands-on engineering.</h2>
            <p className="mt-3 max-w-xl text-gray-600">Explore what I built, the problems I worked through, and the engineering behind each product.</p>
          </div>
          <Link href="/portfolio" className="font-semibold text-orange-600 hover:text-orange-700">Explore all projects →</Link>
        </div>
        <p className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <BsHandIndex aria-hidden="true" className="h-4 w-4" />
          Drag to explore
        </p>
        <div
          role="region"
          aria-label="Selected projects. Drag or use arrow keys to explore."
          tabIndex={0}
          className={`work-carousel flex select-none gap-6 overflow-x-auto pb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600 ${isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"}`}
          onPointerDown={(event) => {
            drag.current.moved = false;
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: event.currentTarget.scrollLeft, moved: false };
          }}
          onPointerMove={(event) => {
            const current = drag.current;
            if (current.pointerId !== event.pointerId) return;
            const distance = event.clientX - current.startX;
            if (!current.moved && Math.abs(distance) < 6) return;
            if (!current.moved) {
              current.moved = true;
              event.currentTarget.setPointerCapture(event.pointerId);
              event.currentTarget.style.scrollSnapType = "none";
              setIsDragging(true);
            }
            event.currentTarget.scrollLeft = current.scrollLeft - distance;
          }}
          onPointerUp={(event) => {
            drag.current.pointerId = -1;
            event.currentTarget.style.scrollSnapType = "";
            setIsDragging(false);
          }}
          onPointerCancel={(event) => {
            drag.current.pointerId = -1;
            event.currentTarget.style.scrollSnapType = "";
            setIsDragging(false);
          }}
          onLostPointerCapture={() => {
            drag.current.pointerId = -1;
            setIsDragging(false);
          }}
          onPointerLeave={() => {
            if (!drag.current.moved) drag.current.pointerId = -1;
          }}
          onDragStart={(event) => event.preventDefault()}
          onClickCapture={(event) => {
            if (drag.current.moved && event.detail !== 0) {
              event.preventDefault();
              event.stopPropagation();
              drag.current.moved = false;
            }
          }}
        >
          {selected.map((slug) => {
            const project = projectsData.find((item) => item.slug === slug)!;
            return (
              <Link key={slug} href={`/portfolio/${slug}`} className="group cursor-inherit w-[85%] max-w-[480px] shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600 sm:w-[480px]">
                <ProjectPreview project={project} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((tech) => <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">{tech}</span>)}</div>
                  <span className="mt-5 inline-block text-sm font-semibold text-orange-600">Explore project →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .work-carousel { scrollbar-width: none; }
        .work-carousel::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
