"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/site-data";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 lg:py-24 bg-sk-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 lg:mb-16 gap-4"
        >
          <div>
            <span className="inline-block text-sk-orange font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              Travel Blog
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green">
              Latest <span className="text-sk-orange">Articles</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sk-green font-heading font-semibold hover:text-sk-orange transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sk-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    5 min read
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-sk-green mb-2 group-hover:text-sk-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sk-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
