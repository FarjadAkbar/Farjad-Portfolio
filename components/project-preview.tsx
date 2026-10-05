import Image from "next/image";
import type { Project } from "@/lib/data";

const themes: Record<string, string> = {
  pharma: "from-teal-950 via-teal-800 to-emerald-600",
  "botsify-agentic": "from-indigo-950 via-violet-800 to-fuchsia-500",
  realmex: "from-slate-950 via-sky-900 to-cyan-600",
  cabbie: "from-stone-950 via-amber-800 to-orange-400",
  gigsfinder: "from-purple-950 via-rose-900 to-pink-500",
};

export default function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${themes[project.slug]} p-5 sm:p-7`}>
      <div aria-hidden="true" className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
      <div className="relative mb-4 flex items-center justify-between gap-3 text-white">
        <span className="text-base font-semibold tracking-tight">{project.title}</span>
        <span className="rounded-full border border-white/30 px-2 py-1 text-[10px] uppercase tracking-widest">{project.category}</span>
      </div>
      <div className="relative overflow-hidden rounded-lg border border-white/30 bg-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
        <div aria-hidden="true" className="flex h-6 items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" /><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <div className="relative aspect-[16/9]">
          <Image src={project.image} alt={`${project.title} — product interface`} fill className="object-cover object-top" sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 550px" />
        </div>
      </div>
    </div>
  );
}
