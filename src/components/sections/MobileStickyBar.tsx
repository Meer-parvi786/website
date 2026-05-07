"use client";

import { siteConfig } from "@/lib/site-data";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileStickyBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 py-3.5 bg-sk-green text-white font-heading font-semibold text-sm active:bg-sk-green-dark transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to know about Skardu tour packages!")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 bg-green-500 text-white font-heading font-semibold text-sm active:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
