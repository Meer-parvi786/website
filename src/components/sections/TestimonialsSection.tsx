"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/site-data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setActiveIndex((i) => (i <= 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i >= testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-16 lg:py-24 bg-sk-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-sk-orange font-heading font-semibold text-sm tracking-wide uppercase mb-3">
            Guest Reviews
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green mb-4">
            Hamare Guests Kya <span className="text-sk-orange">Kehte Hain?</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            500+ khush guests aur counting. Padhein unki real reviews aur jaanein
            kyun SkardoNest Pakistan ka best tour company hai.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 lg:p-10 shadow-lg border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-sk-orange/20 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sk-green">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[activeIndex].city} &bull;{" "}
                    {testimonials[activeIndex].tour}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-sk-green text-sk-green hover:bg-sk-green hover:text-white flex items-center justify-center transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-sk-orange w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-sk-green text-sk-green hover:bg-sk-green hover:text-white flex items-center justify-center transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
