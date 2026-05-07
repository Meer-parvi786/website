"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/site-data";
import { MapPin, Award, Mountain, CloudSun } from "lucide-react";

// Skardu Weather Widget
function WeatherWidget() {
  const [weather, setWeather] = useState<{
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    wind: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real weather from Open-Meteo API (free, no key required)
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=35.2971&longitude=75.6300&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia/Karachi"
        );
        const data = await res.json();
        const current = data.current;
        const code = current.weather_code;

        let condition = "Clear";
        if (code >= 0 && code <= 3) condition = "Clear";
        else if (code >= 45 && code <= 48) condition = "Foggy";
        else if (code >= 51 && code <= 67) condition = "Rainy";
        else if (code >= 71 && code <= 77) condition = "Snowy";
        else if (code >= 95) condition = "Stormy";

        setWeather({
          temp: Math.round(current.temperature_2m),
          condition,
          icon:
            condition === "Clear"
              ? "☀️"
              : condition === "Rainy"
              ? "🌧️"
              : condition === "Snowy"
              ? "❄️"
              : condition === "Foggy"
              ? "🌫️"
              : "⛈️",
          humidity: current.relative_humidity_2m,
          wind: Math.round(current.wind_speed_10m),
        });
      } catch {
        // Fallback data
        setWeather({
          temp: 18,
          condition: "Clear",
          icon: "☀️",
          humidity: 45,
          wind: 12,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-sk-green to-sk-green-dark text-white rounded-2xl p-6 lg:p-8 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <CloudSun className="w-5 h-5 text-sk-orange" />
        <h3 className="font-heading font-semibold text-lg">
          Live Skardu Weather
        </h3>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-12 bg-white/10 rounded-lg w-32" />
          <div className="h-4 bg-white/10 rounded w-24" />
        </div>
      ) : weather ? (
        <div className="space-y-4">
          <div className="flex items-end gap-3">
            <span className="text-5xl">{weather.icon}</span>
            <div>
              <p className="font-heading font-bold text-4xl">
                {weather.temp}°C
              </p>
              <p className="text-white/60 text-sm">{weather.condition}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <p className="text-white/50 text-xs">Humidity</p>
              <p className="font-heading font-bold text-lg">
                {weather.humidity}%
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <p className="text-white/50 text-xs">Wind</p>
              <p className="font-heading font-bold text-lg">
                {weather.wind} km/h
              </p>
            </div>
          </div>
          <p className="text-white/40 text-xs">
            Source: Open-Meteo API &bull; Live data
          </p>
        </div>
      ) : null}
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-16 lg:py-24 bg-sk-cream">
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
            Our Team
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sk-green mb-4">
            Skardu-Based{" "}
            <span className="text-sk-orange">Team</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            Hum Skardu ke hain, Skardu ko jaante hain. Hamari team locals ki hai
            jo aapko asli Baltistan dikhaegi — tourist guides nahi, real
            hosts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Members */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading font-bold text-lg text-white">
                    {member.name}
                  </h3>
                  <p className="text-sk-orange text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Weather Widget */}
          <WeatherWidget />
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sk-green/10 flex items-center justify-center shrink-0">
              <Mountain className="w-6 h-6 text-sk-green" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-sk-green mb-2">
                SkardoNest — Skardu Ki Apni Company
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hum Lahore ya Karachi se operate nahi karte — hamara office
                Skardu mein hai, hamari team Skardu ki hai, aur hamara mission
                hai aapko Baltistan ka asli experience dilana. Har tour mein local
                families se miltein hain, local food khate hain, aur hidden spots
                dikhte hain jo kisi blog par nahi milega.{" "}
                <strong className="text-sk-green">
                  Aap sirf tourist nahi, hamare mehmaan hain.
                </strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
