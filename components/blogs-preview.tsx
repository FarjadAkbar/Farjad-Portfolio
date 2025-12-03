"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogPostsData } from "@/lib/data";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function BlogsPreview() {
  const featuredBlogs = blogPostsData.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600">
            Insights, tutorials, and thoughts on web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-orange-600 font-semibold flex items-center gap-2 hover:gap-3 transition"
              >
                Read More
                <BsArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-orange-600 hover:text-orange-600 transition"
          >
            View All Blogs
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

