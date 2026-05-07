"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, featuredTours, whatsappMessage } from "@/lib/site-data";
import {
  Send,
  User,
  Phone,
  CalendarDays,
  Users,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    tour: "",
    date: "",
    persons: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Send to WhatsApp as well
    const message = `New Booking Request!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nTour: ${formData.tour}\nDate: ${formData.date}\nPersons: ${formData.persons}\n\nPlease confirm my booking.`;
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-sk-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-block text-sk-orange font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              Book Your Tour
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Abhi <span className="text-sk-orange">Booking</span> Karein
            </h2>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8">
              Form bharen ya WhatsApp par message karein — hamari team 30
              minute mein reply kare gi. Special group discounts available hain
              for 4+ persons!
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                {
                  icon: MessageCircle,
                  text: "WhatsApp: " + siteConfig.phone,
                  href: `https://wa.me/${siteConfig.whatsapp}`,
                },
                { icon: MapPin, text: siteConfig.address, href: "#" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-white/80 hover:text-sk-orange transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="font-heading font-semibold text-sm mb-2">
                Group Discount
              </p>
              <p className="text-white/60 text-sm">
                4+ persons ke saath book karein aur 10% group discount paayein.
                Corporate tours ke liye special rates available hain.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl text-sk-green mb-2">
                    Booking Request Sent!
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Hamari team jald hi aapko contact kare gi. WhatsApp par bhi
                    message bheja gaya hai.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", tour: "", date: "", persons: "" });
                    }}
                    className="text-sk-orange font-semibold text-sm hover:underline"
                  >
                    Book another tour
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-xl text-sk-green mb-6">
                    Booking Form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1.5">
                        <User className="w-4 h-4" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Apna naam likhein"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sk-green focus:ring-2 focus:ring-sk-green/20 outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1.5">
                        <Phone className="w-4 h-4" />
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="03XX-XXXXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sk-green focus:ring-2 focus:ring-sk-green/20 outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Tour Selection */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1.5">
                        <MapPin className="w-4 h-4" />
                        Select Tour
                      </label>
                      <select
                        required
                        value={formData.tour}
                        onChange={(e) =>
                          setFormData({ ...formData, tour: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sk-green focus:ring-2 focus:ring-sk-green/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Tour select karein</option>
                        {featuredTours.map((tour) => (
                          <option key={tour.id} value={tour.title}>
                            {tour.title} — PKR{" "}
                            {tour.price.toLocaleString()}
                          </option>
                        ))}
                        <option value="Custom Tour">Custom Tour (Tell us)</option>
                      </select>
                    </div>

                    {/* Date & Persons */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1.5">
                          <CalendarDays className="w-4 h-4" />
                          Travel Date
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sk-green focus:ring-2 focus:ring-sk-green/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1.5">
                          <Users className="w-4 h-4" />
                          Persons
                        </label>
                        <input
                          type="number"
                          required
                          min="1"
                          max="20"
                          placeholder="Kitne log?"
                          value={formData.persons}
                          onChange={(e) =>
                            setFormData({ ...formData, persons: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sk-green focus:ring-2 focus:ring-sk-green/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-sk-orange hover:bg-sk-orange-dark text-white font-heading font-bold text-base py-3.5 rounded-xl transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      {isSubmitting ? "Sending..." : "Submit Booking Request"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
