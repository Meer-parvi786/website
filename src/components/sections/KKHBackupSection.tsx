"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-data";
import {
  ShieldCheck,
  Plane,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function KKHBackupSection() {
  return (
    <section id="kkh-backup" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/kkh-road.webp"
                alt="Karakoram Highway - KKH Road Trip to Skardu"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-sk-green text-white rounded-xl p-4 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-sk-orange" />
                <span className="font-heading font-bold text-sm">
                  100% Backup
                </span>
              </div>
              <p className="text-white/70 text-xs">
                Zero extra cost on KKH alternate route
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sk-orange font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              Our Guarantee
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green mb-6">
              KKH Backup{" "}
              <span className="text-sk-orange">Plan</span>
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Do you know?</strong> Flights to Skardu are frequently canceled due to weather conditions. Many tour operators do not clearly inform travelers about this risk — which can leave guests stranded and facing unexpected problems.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              SkardoNest offers a unique KKH Backup Plan in Pakistan. When you book a By Air package with us, we automatically prepare an alternate travel plan via the Karakoram Highway (KKH).

If your Pakistan International Airlines (PIA) flight is canceled, then:
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Same package — Your journey will immediately continue as an unforgettable road trip via the Karakoram Highway (KKH).",
                "Zero extra charges — The road trip via the Karakoram Highway (KKH) is already included in the price of your flight package at no additional cost.",
                "AC transport + experienced driver — Travel through the breathtaking Babusar Pass scenic route",
                "1 extra night free — For any interruptions or unexpected delays during the journey.",
                "Real-time updates — 24/7 flight status monitoring",
                "Money-back option — If neither the flight nor the road route is possible, you will receive a full refund.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to know about the KKH Backup Plan for Skardu tours!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-sk-orange hover:bg-sk-orange-dark text-white font-heading font-bold text-sm px-6 py-3 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Ask About Backup Plan
              </a>
              <a
                href="#tours"
                className="flex items-center justify-center gap-2 border-2 border-sk-green text-sk-green font-heading font-bold text-sm px-6 py-3 rounded-xl hover:bg-sk-green hover:text-white transition-all"
              >
                <Plane className="w-4 h-4" />
                View Air Packages
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
