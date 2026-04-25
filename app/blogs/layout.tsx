import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Farjad Akbar",
  description:
    "Insights on web development, AI engineering, system design, and scalable software architecture.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Farjad Akbar",
    description:
      "Insights on web development, AI engineering, system design, and scalable software architecture.",
    type: "website",
    url: "/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Farjad Akbar",
    description:
      "Insights on web development, AI engineering, system design, and scalable software architecture.",
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
