import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/data";
import { BsArrowLeft } from "react-icons/bs";

type SingleBlogPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: SingleBlogPageProps): Metadata {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Blogs",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blogs/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function SingleBlogPage({ params }: SingleBlogPageProps) {
  const slug = params.slug;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Farjad Akbar",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blogs/${post.slug}`,
    },
  };

  return (
    <main className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-8 transition"
        >
          <BsArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-10">
          <time
            dateTime={post.date}
            className="text-sm text-gray-500 block mb-3"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            {post.excerpt}
          </p>
        </header>

        <article className="prose prose-gray max-w-none">
          {post.contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          ) : (
            <p className="text-gray-700 leading-relaxed">No content available for this post.</p>
          )}
        </article>
      </div>
    </main>
  );
}
