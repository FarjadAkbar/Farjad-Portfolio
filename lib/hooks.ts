import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { links } from "./data";

const navSectionNames = links.map((l) => l.name) as readonly SectionName[];

function isNavSection(name: string): name is SectionName {
  return (navSectionNames as readonly string[]).includes(name);
}

export function useSectionInView(sectionName: SectionName | string, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000 && isNavSection(sectionName)) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
