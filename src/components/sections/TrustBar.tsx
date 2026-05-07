"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  MapPin,
} from "lucide-react";

const trustItems = [
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Guests" },
  { icon: Shield, value: "0%", label: "Cancellation Rate" },
  { icon: MapPin, value: "100%", label: "Skardu-Based Team" },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-8 mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:max-w-none px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 lg:gap-4 lg:flex-col lg:text-center"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-sk-cream flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-sk-green" />
              </div>
              <div>
                <p className="font-heading font-bold text-xl lg:text-2xl text-sk-green">
                  {item.value}
                </p>
                <p className="text-gray-500 text-xs lg:text-sm font-medium">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
