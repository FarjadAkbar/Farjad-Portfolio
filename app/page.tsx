import Hero from "@/components/hero";
import PortfolioShowcase from "@/components/portfolio-showcase";
import Technologies from "@/components/technologies";
import WhyChooseMe from "@/components/why-choose-me";
import BlogsPreview from "@/components/blogs-preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioShowcase />
      <Technologies />
      <WhyChooseMe />
      <BlogsPreview />
    </main>
  );
}
