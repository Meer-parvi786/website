// SkardoNest Site Configuration - Edit this file to update tours, prices, images, etc.
// This serves as a simple CMS. All changes here reflect site-wide.

export const siteConfig = {
  name: "SkardoNest",
  tagline: "Discover Skardu With Locals",
  description:
    "Skardu-based tour company offering premium Skardu tour packages by air and road. 8+ years of experience, 500+ happy guests. Explore Deosai, Kachura, Shigar & more.",
  phone: "+92 347 8875789",
  whatsapp: "923478875789",
  email: "info@skardonest.com",
  address: "Main Bazaar, Skardu, Gilgit-Baltistan, Pakistan",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29222.76598779!2d75.6300!3d35.2971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e47e1d5b0b0b0b%3A0x1234567890!2sSkardu!5e0!3m2!1sen!2s!4v1700000000000",
  social: {
    facebook: "https://facebook.com/skardonest",
    instagram: "https://instagram.com/skardonest",
    youtube: "https://youtube.com/@skardonest",
    tiktok: "https://tiktok.com/@skardonest",
  },
};

export const featuredTours = [
  {
    id: "skardu-classic",
    title: "Skardu Classic Tour - 5 Days",
    subtitle: "Best Seller",
    duration: "5 Days / 4 Nights",
    price: 98000,
    priceLabel: "PKR per person",
    mode: "by-air" as const,
    image: "/hero-skardu.webp",
    highlights: [
      "Upper Kachura Lake",
      "Shangrila Resort",
      "Cold Desert",
      "Shigar Fort",
    ],
    groupSize: 12,
    includes: [
      "Return Flights (Islamabad-Skardu)",
      "Hotel Stay (4 Nights)",
      "Breakfast + Dinner",
      "All Transport (4x4)",
      "Local Guide",
    ],
    itinerary: [
      "Day 1: Fly Islamabad → Skardu, Shangrila Resort",
      "Day 2: Upper Kachura Lake, Cold Desert Safari",
      "Day 3: Shigar Fort & Valley Exploration",
      "Day 4: Manthal Buddha Rock, Skardu Bazaar",
      "Day 5: Fly Back to Islamabad",
    ],
  },
  {
    id: "deosai-expedition",
    title: "Deosai National Park Tour - 6 Days",
    subtitle: "Most Popular",
    duration: "6 Days / 5 Nights",
    price: 125000,
    priceLabel: "PKR per person",
    mode: "by-air" as const,
    image: "/deosai.webp",
    highlights: [
      "Deosai Plains",
      "Sheosar Lake",
      "Bara Pani",
      "Wildflowers & Bears",
    ],
    groupSize: 12,
    includes: [
      "Return Flights",
      "Hotel + Camping (2 Nights Deosai)",
      "All Meals",
      "4x4 Transport",
      "Camping Equipment",
    ],
    itinerary: [
      "Day 1: Fly to Skardu, Acclimatization",
      "Day 2: Drive to Deosai via Sadpara Lake",
      "Day 3: Explore Sheosar Lake & Bara Pani",
      "Day 4: Deosai Plains Wildlife Safari",
      "Day 5: Return to Skardu, Free Evening",
      "Day 6: Fly Back to Islamabad",
    ],
  },
  {
    id: "kkh-adventure",
    title: "KKH Road Trip - 7 Days",
    subtitle: "Adventure",
    duration: "7 Days / 6 Nights",
    price: 75000,
    priceLabel: "PKR per person",
    mode: "by-road" as const,
    image: "/kkh-road.webp",
    highlights: [
      "Karakoram Highway",
      "Babusar Pass",
      "Fairy Meadows",
      "Nanga Parbat View",
    ],
    groupSize: 12,
    includes: [
      "AC Transport (Islamabad-Skardu)",
      "Hotel Stay (6 Nights)",
      "Breakfast + Dinner",
      "Jeep Rides",
      "Local Guide",
    ],
    itinerary: [
      "Day 1: Drive Islamabad → Besham",
      "Day 2: Besham → Chilas → Skardu",
      "Day 3: Shigar Fort & Valley",
      "Day 4: Upper Kachura & Cold Desert",
      "Day 5: Fairy Meadows Day Trip",
      "Day 6: Skardu City Tour & Shopping",
      "Day 7: Drive Back to Islamabad",
    ],
  },
  {
    id: "skardu-honeymoon",
    title: "Skardu Honeymoon Special - 4 Days",
    subtitle: "Couples",
    duration: "4 Days / 3 Nights",
    price: 115000,
    priceLabel: "PKR per couple",
    mode: "by-air" as const,
    image: "/kachura.webp",
    highlights: [
      "Private Transport",
      "Luxury Resort",
      "Shangrila & Kachura",
      "Romantic Setup",
    ],
    groupSize: 2,
    includes: [
      "Return Flights",
      "Luxury Resort Stay (3 Nights)",
      "All Meals",
      "Private Car",
      "Flower Decoration",
    ],
    itinerary: [
      "Day 1: Fly to Skardu, Check-in Resort",
      "Day 2: Upper Kachura Lake Boating",
      "Day 3: Shigar Fort & Cold Desert Sunset",
      "Day 4: Fly Back to Islamabad",
    ],
  },
];

export const destinations = [
  {
    name: "Deosai Plains",
    image: "/deosai.webp",
    tagline: "Land of Giants — 4,114m altitude",
  },
  {
    name: "Upper Kachura Lake",
    image: "/kachura.webp",
    tagline: "Crystal clear turquoise waters",
  },
  {
    name: "Shigar Fort",
    image: "/shigar.webp",
    tagline: "700-year-old heritage fortress",
  },
  {
    name: "Khaplu Valley",
    image: "/khaplu.webp",
    tagline: "Gateway to Central Karakoram",
  },
  {
    name: "Chunda Valley",
    image: "/chunda.webp",
    tagline: "Hidden gem of Baltistan",
  },
];

export const testimonials = [
  {
    name: "Ahmed Ali",
    city: "Karachi",
    rating: 5,
    text: "SkardoNest ne humara tour ekdum perfect banaya! Deosai ka scene dekh ke rooh qabar se nikal gayi. Flight cancel hui thi toh unhone KKH se bheja aur experience hi alag tha. Highly recommended!",
    tour: "Deosai Tour 2025",
    avatar: "/team-guide.webp",
  },
  {
    name: "Fatima Noor",
    city: "Lahore",
    rating: 5,
    text: "Best honeymoon decision ever! Private car, luxury resort, aur Kachura Lake pe boating — sab kuch top-notch tha. Team bohat cooperative aur friendly tha. Thank you SkardoNest!",
    tour: "Honeymoon Tour 2025",
    avatar: "/team-ops.webp",
  },
  {
    name: "Usman Sheikh",
    city: "Islamabad",
    rating: 5,
    text: "8 friends ke saath gaye the, sab ko bohat acha laga. Group size 12 max ka policy hai, is liye personal attention milti hai. Cold Desert pe sunset jo dekha wo yaad rahega hamesha!",
    tour: "KKH Road Trip 2024",
    avatar: "/team-driver.webp",
  },
  {
    name: "Ayesha Khan",
    city: "Peshawar",
    rating: 5,
    text: "Family tour pe gaye thi — kids bohat enjoy kiye. Shigar Fort pe guide bohat informative tha. Meals bhi bohat achi quality ki the. InshaAllah dobara zaroor aayenge!",
    tour: "Family Tour 2025",
    avatar: "/team-ops.webp",
  },
  {
    name: "Bilal Raza",
    city: "Rawalpindi",
    rating: 5,
    text: "Solo traveler ke liye bhi SkardoNest best hai. Group mein merge ho gaya aur sab achay log thay. Deosai mein camping ka experience lifetime ka tha. Well organized tour!",
    tour: "Deosai Camping 2024",
    avatar: "/team-guide.webp",
  },
];

export const galleryImages = [
  { src: "/gallery-1.webp", alt: "Sheosar Lake, Deosai Plains", aspect: "tall" },
  { src: "/gallery-2.webp", alt: "Katpana Cold Desert, Skardu", aspect: "wide" },
  { src: "/gallery-3.webp", alt: "Shangrila Resort, Lower Kachura", aspect: "tall" },
  { src: "/gallery-4.webp", alt: "Manthal Buddha Rock", aspect: "wide" },
  { src: "/gallery-5.webp", alt: "Sunset over Skardu Valley", aspect: "tall" },
  { src: "/gallery-6.webp", alt: "Stargazing at Cold Desert", aspect: "wide" },
];

export const blogPosts = [
  {
    title: "Best Time to Visit Skardu — Season by Season Guide",
    excerpt:
      "Planning a trip to Skardu? Here is our complete guide on when to visit based on weather, activities, and budget. From spring blossoms to winter snow — each season has its own charm!",
    image: "/blog-1.webp",
    date: "15 Apr 2026",
    category: "Travel Guide",
    slug: "#",
  },
  {
    title: "Top 10 Things to Do in Skardu — A Local's List",
    excerpt:
      "We asked our local guides for their absolute favorite spots in Skardu. These hidden gems and popular attractions will make your trip unforgettable. #7 will surprise you!",
    image: "/blog-2.webp",
    date: "2 Mar 2026",
    category: "Things To Do",
    slug: "#",
  },
  {
    title: "Skardu by Air vs by Road — Complete Comparison",
    excerpt:
      "Confused about how to reach Skardu? We break down the pros and cons of flying vs driving via KKH. Cost, time, scenery, comfort — everything you need to know before booking.",
    image: "/blog-3.webp",
    date: "18 Feb 2026",
    category: "Travel Tips",
    slug: "#",
  },
];

export const teamMembers = [
  {
    name: "Ali Raza",
    role: "Lead Guide & Founder",
    bio: "Born and raised in Skardu. 8+ years of guiding experience across Gilgit-Baltistan. Knows every trail, lake, and hidden gem.",
    image: "/team-guide.webp",
  },
  {
    name: "Sana Fatima",
    role: "Operations Manager",
    bio: "Manages bookings, logistics, and guest experience. Your go-to person for smooth trip planning from Lahore.",
    image: "/team-ops.webp",
  },
  {
    name: "Driver Sajjad",
    role: "Transport & Logistics",
    bio: "15 years driving KKH. The safest pair of hands on Karakoram roads. Knows every shortcut and scenic route.",
    image: "/team-driver.webp",
  },
];

export const seasonalBanner = {
  title: "Eid ul Adha Special Tour",
  subtitle: "Celebrate Eid in the Mountains of Skardu!",
  description:
    "5-Day All-Inclusive Package — Qurbani Arrangement Available! Limited seats, book now for Eid special rates.",
  ctaText: "Book Eid Special",
  discount: "15% OFF",
  image: "/eid-banner.webp",
};

export const whatsappMessage = (tourName: string) =>
  `Hi, I want details for ${tourName}. Please share the itinerary and available dates. Thanks! — SkardoNest Website`;

export const formatPrice = (price: number) =>
  price.toLocaleString("en-PK", {
    style: "decimal",
    maximumFractionDigits: 0,
  });
