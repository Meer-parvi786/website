"use client";

import { motion } from "framer-motion";
import {
  Map,
  ShieldCheck,
  Users,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Map,
    title: "Local Guides",
    description:
      "Hamare guides Skardu ke native hain — har trail, har lake, aur har hidden spot ke baare mein jaante hain. Aapko tourist spot nahi, asli Skardu dikhaenge.",
    color: "bg-sk-green",
  },
  {
    icon: ShieldCheck,
    title: "KKH Backup Plan",
    description:
      "Flight cancel? No problem! Hamara unique KKH Backup Plan hai — agar flight cancel ho toh road trip free hai. Zero extra cost, zero tension.",
    color: "bg-sk-orange",
  },
  {
    icon: Users,
    title: "Small Groups (12 Max)",
    description:
      "Large groups ka chaos nahi! Hamari group size maximum 12 log hoti hai, taki har guest ko personal attention mile aur experience memorable ho.",
    color: "bg-sk-green",
  },
  {
    icon: PlaneTakeoff,
    title: "Flight Guarantee",
    description:
      "Skardu by air ka guarantee! Agar PIA flight cancel ho, hum aapko KKH se bhi le jayenge — same package, same quality, no extra charges.",
    color: "bg-sk-orange",
  },
];

export default function WhyChooseUs() {
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
            Why Choose Us
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green mb-4">
            SkardoNest Kyun <span className="text-sk-orange">Choose Karein?</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            Skardu ki safar mein sirf khoobsurti nahi, trust aur quality bhi zaroori hai. Hum promises nahi, guarantees dete hain.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl ${reason.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-sk-green mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#kkh-backup"
            className="inline-flex items-center gap-2 text-sk-green font-heading font-semibold hover:text-sk-orange transition-colors"
          >
            Learn more about our KKH Backup Plan
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
