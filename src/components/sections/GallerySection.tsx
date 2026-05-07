"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/lib/site-data";
import { X, ZoomIn, Play } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
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
            Photo Gallery
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green mb-4">
            Skardu Ki <span className="text-sk-orange">Khoobsurti</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            Dekhein Skardu, Deosai, Kachura, Shigar aur cold desert ki
            breathtaking photos. Har photo ek kahani kehti hai.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  image.aspect === "tall" ? "h-72 lg:h-80" : "h-52 lg:h-56"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}

          {/* Reels Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative rounded-xl overflow-hidden cursor-pointer group h-72 lg:h-80 bg-sk-green"
          >
            <img
              src="/gallery-5.webp"
              alt="Skardu Reels"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-white font-heading font-bold text-lg">
                Watch Our Reels
              </p>
              <p className="text-white/60 text-sm">
                @skardonest on Instagram & TikTok
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-white/70 text-sm font-medium">
              {galleryImages[selectedImage].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
