import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";

import bites from "@/assets/bites.png";
import luna from "@/assets/luna.png";
import browine from "@/assets/brownie.png";
import cookies from "@/assets/cookies.png";
import life from "@/assets/life.png";
import curu from "@/assets/curu.png";
import hypo from "@/assets/hypo.png";
import bricks from "@/assets/bricks.png";

interface StartupItem {
  id: string;
  title: string;
  category: string;
  description: string;
  mentee: string;
  mentor: string;
  image: string;
}

const startupItems: StartupItem[] = [
  {
    id: "startup-1",
    title: "Moringa bites",
    category: "FoodTech",
    description: "Innovative quick-bite culinary experiences powered by smart automation.",
    mentee: "Syeda Maliha",
    mentor: "Dr. Khushboo Vyas",
    image: bites,
  },
  {
    id: "startup-2",
    title: "Loona Bar",
    category: "Creative Studio",
    description: "Next-generation digital aesthetics and interactive brand experiences.",
    mentee: "Syeda Riha Fatima",
    mentor: "Hanna Jesse",
    image: luna,
  },
  {
    id: "startup-3",
    title: "Brownie Rani",
    category: "Gourmet Bakery",
    description: "Artisanal desserts crafted with premium organic ingredients.",
    mentee: "Shazi Shireen",
    mentor: "Dr. A. Vijaya Rani",
    image: browine,
  },
  {
    id: "startup-4",
    title: "Ironic cookies",
    category: "Confectionery",
    description: "Delightful fresh-baked snacks designed for high-energy teams.",
    mentee: "Maria Sana",
    mentor: "Dr. Khushboo Vyas",
    image: cookies,
  },
  {
    id: "startup-5",
    title: "Life match",
    category: "Health & Wellness",
    description: "Personalized lifestyle tracking and holistic wellness solutions.",
    mentee: "Amatur Rahman Sheema",
    mentor: "M. Monika Sai",
    image: life,
  },
  {
    id: "startup-6",
    title: "Curu",
    category: "FinTech",
    description: "Smart wealth management and seamless peer-to-peer financial tools.",
    mentee: "Srivalli Chary",
    mentor: "D. Sujatha",
    image: curu,
  },
  {
    id: "startup-7",
    title: "On the Hypo Relief",
    category: "MedTech",
    description: "Cutting-edge clinical diagnostics and physiological monitoring.",
    mentee: "Sania Tarannum",
    mentor: "Dr. Khushboo Vyas",
    image: hypo,
  },
  {
    id: "startup-8",
    title: "Moss Bricks",
    category: "PropTech",
    description: "Sustainable modular construction and smart architectural systems.",
    mentee: "Dania Tahseen Qadri",
    mentor: "D. Sujatha",
    image: bricks,
  },
];

// Duplicate list so the loop is seamless without blanks
const duplicatedItems = [...startupItems, ...startupItems];

export const Startups = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const xTranslation = useMotionValue(0);

  // Smooth continuous right-to-left marquee motion
  useEffect(() => {
    const cardWidthWithGap = 304;
    const totalDistance = cardWidthWithGap * startupItems.length;

    let controls: any;

    if (!isHovered && !selectedId) {
      controls = animate(xTranslation, [-totalDistance, 0], {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [xTranslation, isHovered, selectedId]);

  // Arrow button handlers
  const handleArrowClick = (direction: "left" | "right") => {
    const shiftAmount = 304;
    const currentX = xTranslation.get();
    const targetX = direction === "left" ? currentX - shiftAmount : currentX + shiftAmount;

    animate(xTranslation, targetX, {
      duration: 0.5,
      ease: "easeOut",
    });
  };

  const activeItem = startupItems.find((item) => item.id === selectedId);

  return (
    <section className="relative w-full py-8 md:py-12 bg-gradient-to-br from-[#fbf8f3] via-[#f3e9dc] to-[#e8ded1] text-[#4a3625] overflow-hidden">
      
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 opacity-60 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#e8ded1_0%,transparent_50%),radial-gradient(circle_at_70%_70%,#f0e4d4_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-6 space-y-1">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-[#a07855] text-sm font-serif">✧</span>
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#cbb59f] via-[#8c6848] to-[#cbb59f] rounded-full" />
            <span className="text-[#a07855] text-sm font-serif">✧</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#3b2a1d] leading-none">
            INCUBATED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8c6848] via-[#a07855] to-[#6d4f35]">STARTUPS</span>
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm font-serif italic text-[#6d5540] pt-1">
            Pioneering ventures reshaping technology, design, and sustainability.
          </p>
        </div>

        {/* --- Slideshow Container with Navigation Arrows --- */}
        <div
          className="relative group/carousel px-4 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => handleArrowClick("left")}
            aria-label="Scroll Left"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#fbf8f3]/90 hover:bg-white text-[#78593a] shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-[#e8ded1]"
          >
            <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrowClick("right")}
            aria-label="Scroll Right"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#fbf8f3]/90 hover:bg-white text-[#78593a] shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-[#e8ded1]"
          >
            <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Infinite Motion Track */}
          <motion.div
            style={{ x: xTranslation }}
            className="flex gap-6 py-2"
          >
            {duplicatedItems.map((item, index) => {
              const uniqueKey = `${item.id}-${index}`;
              const isSelected = selectedId === item.id;

              return (
                <motion.div
                  key={uniqueKey}
                  onClick={() => setSelectedId(item.id)}
                  className="group cursor-pointer relative flex-shrink-0 w-[280px] flex flex-col rounded-2xl bg-[#f7f2eb]/80 border border-[#fbf8f3] p-3 shadow-[0_8px_24px_rgba(100,75,50,0.06)] hover:shadow-[0_16px_32px_rgba(100,75,50,0.12)] transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  {/* Rectangular Image Container */}
                  <div className="relative w-full h-[190px] rounded-xl overflow-hidden bg-[#e8ded1]">
                    <motion.img
                      layoutId={`image-${item.id}`}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                      style={{
                        opacity: isSelected ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>

                  {/* Card Details */}
                  <div className="mt-3 px-1 pb-1 flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#a07855] font-semibold">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#3b2a1d] leading-tight">
                      {item.title}
                    </h3>

                    {/* Mentee & Mentor Summary Tags */}
                    <div className="mt-2 pt-2 border-t border-[#e8ded1]/60 text-[11px] space-y-0.5 text-[#5c4735]">
                      <p><span className="font-semibold text-[#8c6848]">Mentee:</span> {item.mentee}</p>
                      <p><span className="font-semibold text-[#8c6848]">Mentor:</span> {item.mentor}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* --- FLIP Pop-Out Overlay Modal --- */}
      <AnimatePresence>
        {selectedId && activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#2d2218]/40 backdrop-blur-md"
            />

            <motion.div
              className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-[#faf7f2] rounded-2xl border border-[#e8ded1] shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#3b2a1d]/10 hover:bg-[#3b2a1d] text-[#3b2a1d] hover:text-white transition-colors duration-200 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>

              <div className="relative w-full md:w-1/2 h-[260px] md:h-auto overflow-hidden bg-[#e8ded1]">
                <motion.img
                  layoutId={`image-${activeItem.id}`}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-3"
              >
                <span className="text-xs uppercase tracking-widest text-[#a07855] font-semibold">
                  {activeItem.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3b2a1d]">
                  {activeItem.title}
                </h3>
                <p className="text-xs md:text-sm text-[#5c4735] font-serif leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Full Mentee & Mentor Details */}
                <div className="mt-2 p-3 rounded-xl bg-[#f2e8dc] border border-[#e8ded1] text-xs text-[#3b2a1d] space-y-1">
                  <p><strong className="text-[#8c6848]">Mentee:</strong> {activeItem.mentee}</p>
                  <p><strong className="text-[#8c6848]">Mentor:</strong> {activeItem.mentor}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Startups;