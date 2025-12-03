import Hero from "@/components/hero";
import PortfolioShowcase from "@/components/portfolio-showcase";
import BlogsPreview from "@/components/blogs-preview";
import BookCallCTA from "@/components/book-call-cta";
import Technologies from "@/components/technologies";
import WebsiteProblems from "@/components/website-problems";
import HowItWorks from "@/components/how-it-works";
import WhyChooseMe from "@/components/why-choose-me";
import TestimonialsSection from "@/components/testimonials-section";
import ComparisonTable from "@/components/comparison-table";
import PauseAnytime from "@/components/pause-anytime";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioShowcase />
      <BookCallCTA />
      <Technologies />
      <WebsiteProblems />
      <HowItWorks />
      <WhyChooseMe />
      <TestimonialsSection />
      <ComparisonTable />
      <BlogsPreview />
      <PauseAnytime />
    </main>
  );
}
