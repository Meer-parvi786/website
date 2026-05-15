"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-data";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/skardu1.jpg"
          alt="Skardu Valley - Karakoram Mountains, Gilgit-Baltistan"
          className="w-full h-full object-cover"
      
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mt-12"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">
              Skardu-Based Company — 2+ Years Experience
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Discover Skardu
            <br />
            <span className="text-sk-orange">With Locals</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Pakistan’s most breathtaking region — explore Deosai National Park, Upper Kachura Lake, Shigar, and Skardu on an unforgettable journey with experienced local guides.{" "}
            <span className="text-white font-semibold">
              Flight guarantee included!
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              href="/tour"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sk-orange hover:bg-sk-orange-dark text-white font-heading font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl shadow-orange-500/25"
            >
              View Packages
              <ChevronDown className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to know about Skardu tour packages!")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border-2 border-white/30 hover:bg-white/25 text-white font-heading font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </motion.a>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-sk-orange font-heading font-bold text-lg">500+</span>
              Happy Guests
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-sk-orange font-heading font-bold text-lg">2+</span>
              Years Experience
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-sk-orange font-heading font-bold text-lg">0%</span>
              Cancellation Rate
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
