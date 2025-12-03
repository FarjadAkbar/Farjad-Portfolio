"use client";

import React, { useState } from "react";
import { blogPostsData } from "@/lib/data";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import BookingModal from "@/components/booking-modal";

export default function BlogsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Insights, tutorials, and thoughts on web development, AI, and technology
          </p>
        </div>

        <div className="space-y-8">
          {blogPostsData.map((blog) => (
            <article
              key={blog.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-300 hover:shadow-lg transition"
            >
              <div className="mb-4">
                <span className="text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">{blog.excerpt}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition"
              >
                Read More
                <BsArrowRight />
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to discuss a topic or have questions?</p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
          >
            Book a Call
            <BsArrowRight />
          </button>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}

