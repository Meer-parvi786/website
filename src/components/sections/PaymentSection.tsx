"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { paymentMethods, siteConfig } from "@/lib/site-data";
import {
  Landmark,
  CreditCard,
  Wallet,
  Smartphone,
  CheckCircle2,
  Copy,
  Shield,
  Clock,
  X,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  landmark: Landmark,
  "credit-card": CreditCard,
  wallet: Wallet,
  smartphone: Smartphone,
};

export default function PaymentSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState("");

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text.replace(/-/g, ""));
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <section id="payment" className="py-16 lg:py-24 bg-sk-cream">
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
            Payment Methods
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green mb-4">
            Easy & Secure{" "}
            <span className="text-sk-orange">Payment Options</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            Jo tarika aapko convenient ho, wahan se pay karein. Bank transfer,
            card, Easypaisa ya JazzCash — sab secure aur instant hain.
          </p>
        </motion.div>

        {/* Payment Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {paymentMethods.map((pm, index) => {
            const IconComponent = iconMap[pm.icon];
            const isExpanded = expandedId === pm.id;
            return (
              <motion.div
                key={pm.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-white rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? `${pm.borderColor} shadow-lg`
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Card Header */}
                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : pm.id)
                  }
                  className="w-full p-5 lg:p-6 text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pm.color} flex items-center justify-center shrink-0`}
                    >
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-base text-sk-green">
                        {pm.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-gray-400 text-[11px] flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {pm.processingTime}
                        </span>
                        <span className="text-gray-300 text-[11px]">|</span>
                        <span className="text-green-600 text-[11px] font-medium">
                          {pm.fee}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {pm.description}
                  </p>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6 border-t border-gray-100 pt-4">
                        {/* Account Details */}
                        <p className={`font-heading font-semibold text-xs ${pm.textColor} mb-2 uppercase tracking-wide`}>
                          Account Details
                        </p>
                        <div className="space-y-1.5 mb-4">
                          {Object.entries(pm.details).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex items-center justify-between gap-2 py-1"
                            >
                              <span className="text-[11px] text-gray-400 capitalize">
                                {key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/Account/, "")
                                  .trim()}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-semibold text-gray-800 font-mono">
                                  {String(value)}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    copyToClipboard(String(value), `${pm.id}-${key}`)
                                  }
                                  className="text-gray-300 hover:text-sk-green transition-colors"
                                  aria-label={`Copy ${key}`}
                                >
                                  <Copy className="w-3 h-3" />
                                </button>
                                {copiedField === `${pm.id}-${key}` && (
                                  <span className="text-green-500 text-[10px]">
                                    Copied!
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Instructions */}
                        <p className="font-heading font-semibold text-xs text-gray-700 mb-2">
                          Kaise Pay Karein:
                        </p>
                        <ol className="space-y-1.5 mb-4">
                          {pm.instructions.map((inst, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-[11px] text-gray-500"
                            >
                              <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[9px] font-bold text-gray-600 mt-0.5">
                                {i + 1}
                              </span>
                              {inst}
                            </li>
                          ))}
                        </ol>

                        {/* CTA */}
                        <a
                          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I have made payment via ${pm.name} for my booking. Please confirm. Thanks!`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${pm.color} text-white font-heading font-semibold text-xs py-2.5 rounded-lg transition-all hover:shadow-md`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          Payment Confirm Karein
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Security Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-lg text-sk-green mb-1">
                100% Secure & Guaranteed
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hamari payments fully secure hain. Agar kisi bhi wajah se tour cancel
                ho jaye toh full refund milta hai — no questions asked. SkardoNest
                ki 8 saal ki trust ki bunyad par, aapki paisa ki hifazat hamari
                zimmedari hai.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                SSL Encrypted
              </span>
              <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Full Refund
              </span>
              <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Instant Confirm
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
