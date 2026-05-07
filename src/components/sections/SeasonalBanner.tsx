"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { seasonalBanner, siteConfig } from "@/lib/site-data";
import { MessageCircle, Timer, Sparkles } from "lucide-react";

export default function SeasonalBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 15 days from now for demo
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={seasonalBanner.image}
              alt={seasonalBanner.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-sk-green/85" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Text */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 bg-sk-orange/20 border border-sk-orange/30 rounded-full px-4 py-1.5 mb-4">
                    <Sparkles className="w-4 h-4 text-sk-orange" />
                    <span className="text-sk-orange text-sm font-bold">
                      {seasonalBanner.discount} — Limited Time
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
                    {seasonalBanner.title}
                  </h2>

                  <h3 className="font-heading font-semibold text-xl text-sk-orange mb-4">
                    {seasonalBanner.subtitle}
                  </h3>

                  <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
                    {seasonalBanner.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I am interested in the Eid ul Adha Special Tour! Please share details.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-sk-orange hover:bg-sk-orange-dark text-white font-heading font-bold text-base px-6 py-3 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {seasonalBanner.ctaText}
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right: Countdown */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center gap-2 justify-center mb-4">
                    <Timer className="w-5 h-5 text-sk-orange" />
                    <p className="text-white/70 font-heading font-medium text-sm">
                      Offer Ends In
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {timeUnits.map((unit) => (
                      <div
                        key={unit.label}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 lg:p-4"
                      >
                        <p className="font-heading font-bold text-2xl lg:text-4xl text-white">
                          {String(unit.value).padStart(2, "0")}
                        </p>
                        <p className="text-white/60 text-xs lg:text-sm mt-1">
                          {unit.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Qurbani Badge */}
                  <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                    <p className="text-sk-orange font-heading font-bold text-sm mb-1">
                      Qurbani Arrangement Available
                    </p>
                    <p className="text-white/60 text-xs">
                      Baltistan mein Qurbani ka mukammal arrangement
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
