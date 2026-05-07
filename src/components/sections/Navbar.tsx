"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-data";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Mountain,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Tour Packages", href: "#tours" },
  { label: "Destinations", href: "#destinations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  scrolled
                    ? "bg-sk-green"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Mountain
                  className={`w-6 h-6 transition-colors ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                />
              </div>
              <span
                className={`font-heading font-bold text-xl transition-colors ${
                  scrolled ? "text-sk-green" : "text-white"
                }`}
              >
                Skardo
                <span className="text-sk-orange">Nest</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-heading font-medium text-sm transition-all hover:bg-sk-green/10 ${
                    scrolled
                      ? "text-sk-green hover:text-sk-green-dark"
                      : "text-white hover:text-white/90 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  scrolled
                    ? "text-sk-green hover:bg-sk-green/10"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to know about Skardu tour packages!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sk-orange hover:bg-sk-orange-dark text-white px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-sk-green hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t shadow-xl"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sk-green font-heading font-medium text-base hover:bg-sk-cream transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t mt-3 flex flex-col gap-2">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sk-green font-medium hover:bg-sk-cream transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to know about Skardu tour packages!")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-sk-orange text-white px-4 py-3 rounded-lg font-heading font-semibold hover:bg-sk-orange-dark transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
