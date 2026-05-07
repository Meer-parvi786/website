"use client";

import { motion } from "framer-motion";
import { siteConfig, whatsappMessage } from "@/lib/site-data";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Mountain,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-sk-green text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sk-orange flex items-center justify-center">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">
                Skardo<span className="text-sk-orange">Nest</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Skardu-based tour company with 8+ years of experience. We help you
              discover the beauty of Gilgit-Baltistan with local expertise and
              guaranteed service.
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  icon: Facebook,
                  href: siteConfig.social.facebook,
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: siteConfig.social.instagram,
                  label: "Instagram",
                },
                {
                  icon: Youtube,
                  href: siteConfig.social.youtube,
                  label: "YouTube",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-sk-orange flex items-center justify-center transition-all hover:scale-105"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Tour Packages", href: "#tours" },
                { label: "Destinations", href: "#destinations" },
                { label: "Gallery", href: "#gallery" },
                { label: "Blog", href: "#blog" },
                { label: "KKH Backup Plan", href: "#kkh-backup" },
                { label: "About Us", href: "#team" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-sk-orange transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Popular Tours
            </h4>
            <ul className="space-y-3">
              {[
                "Skardu Classic 5 Days",
                "Deosai Expedition 6 Days",
                "KKH Road Trip 7 Days",
                "Honeymoon Special 4 Days",
                "Eid ul Adha Special",
                "Custom Group Tours",
              ].map((tour) => (
                <li key={tour}>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage(tour))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-sk-orange transition-colors text-sm"
                  >
                    {tour}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sk-orange shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  {siteConfig.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sk-orange shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-white/70 hover:text-sk-orange transition-colors text-sm"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sk-orange shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 hover:text-sk-orange transition-colors text-sm"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-sk-orange shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-sk-orange transition-colors text-sm"
                >
                  WhatsApp: {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full">
        <iframe
          src={siteConfig.mapEmbedUrl}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SkardoNest Office Location - Skardu"
          className="opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} SkardoNest. All rights reserved.
            Skardu, Gilgit-Baltistan, Pakistan.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 hover:text-sk-orange text-xs transition-colors"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to know about Skardu tour packages!")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </footer>
  );
}
