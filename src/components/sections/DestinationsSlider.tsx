"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { destinations } from "@/lib/site-data";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function DestinationsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth / 1.5;
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(destinations.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev >= destinations.length - 1 ? 0 : prev + 1;
        if (scrollRef.current) {
          const cardWidth = scrollRef.current.offsetWidth / 1.5;
          scrollRef.current.scrollTo({ left: next * cardWidth, behavior: "smooth" });
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="destinations" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 lg:mb-14 gap-4"
        >
          <div>
            <span className="inline-block text-sk-orange font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              Top Destinations
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green">
              Explore <span className="text-sk-orange">Skardu</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border-2 border-sk-green text-sk-green hover:bg-sk-green hover:text-white flex items-center justify-center transition-all"
              aria-label="Previous destination"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border-2 border-sk-green text-sk-green hover:bg-sk-green hover:text-white flex items-center justify-center transition-all"
              aria-label="Next destination"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {destinations.map((dest, index) => (
            <motion.a
              key={dest.name}
              href={`#tours`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex-shrink-0 w-[80vw] sm:w-[45vw] lg:w-[30vw] snap-center"
            >
              <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-white mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-sm">{dest.tagline}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sk-orange text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.offsetWidth / 1.5;
                  scrollRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-sk-orange w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to destination ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
