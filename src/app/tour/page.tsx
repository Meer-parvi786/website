"use client";

import { motion } from "framer-motion";
import { featuredTours, siteConfig, whatsappMessage, formatPrice } from "@/lib/site-data";
import {
  Clock,
  Plane,
  Car,
  Users,
  MessageCircle,
  Eye,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FeaturedTours() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
const router = useRouter();
  return (
    <section id="tours" className="py-16 lg:py-24 bg-white">
      <button onClick={() => router.push("/")}>Back</button>
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
            Our Tour Packages
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green mb-4">
            Skardu Tour Packages{" "}
            <span className="text-sk-orange">2025</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted tour packages — all inclusive with
            flights, hotels, meals, and local guides. Small groups, maximum
            12 people.
          </p>
        </motion.div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {tour.subtitle && (
                    <span className="bg-sk-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 inline mr-1" />
                      {tour.subtitle}
                    </span>
                  )}
                  <span
                    className={`text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
                      tour.mode === "by-air"
                        ? "bg-blue-500/90"
                        : "bg-sk-green/90"
                    }`}
                  >
                    {tour.mode === "by-air" ? (
                      <Plane className="w-3 h-3" />
                    ) : (
                      <Car className="w-3 h-3" />
                    )}
                    By {tour.mode === "by-air" ? "Air" : "Road"}
                  </span>
                </div>

                {/* Group Size Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-sk-green text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Max {tour.groupSize}
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <p className="text-sk-green font-heading font-bold text-lg">
                      PKR {formatPrice(tour.price)}
                    </p>
                    <p className="text-gray-400 text-[10px]">{tour.priceLabel}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 lg:p-6">
                <h3 className="font-heading font-bold text-lg lg:text-xl text-sk-green mb-2 group-hover:text-sk-green-light transition-colors">
                  {tour.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sk-orange" />
                    {tour.duration}
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-sk-cream text-sk-green font-medium px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Includes Preview */}
                <div className="space-y-1.5 mb-5">
                  {tour.includes.slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                  {tour.includes.length > 3 && (
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === tour.id ? null : tour.id
                        )
                      }
                      className="text-sk-orange text-sm font-medium hover:underline ml-6"
                    >
                      {expandedId === tour.id
                        ? "Show less"
                        : `+${tour.includes.length - 3} more`}
                    </button>
                  )}
                  {expandedId === tour.id &&
                    tour.includes.slice(3).map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {item}
                      </div>
                    ))}
                </div>

                {/* Itinerary Toggle */}
                {expandedId === tour.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-5 p-4 bg-gray-50 rounded-xl"
                  >
                    <p className="font-heading font-semibold text-sm text-sk-green mb-2">
                      Itinerary:
                    </p>
                    {tour.itinerary.map((day) => (
                      <p key={day} className="text-xs text-gray-600 mb-1">
                        {day}
                      </p>
                    ))}
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage(tour.title))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-sk-orange hover:bg-sk-orange-dark text-white font-heading font-semibold text-sm py-3 rounded-xl transition-all hover:shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Now
                  </a>
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === tour.id ? null : tour.id
                      )
                    }
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-sk-green text-sk-green font-heading font-semibold text-sm hover:bg-sk-green hover:text-white transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
