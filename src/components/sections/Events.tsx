import React, { useState, useEffect } from "react";

// --- Import Charcha Images (.jpg) ---
import chercha1 from "@/assets/chercha-1.jpg";
import chercha2 from "@/assets/chercha-2.jpg";
import chercha3 from "@/assets/chercha-3.jpg";
import chercha4 from "@/assets/chercha-4.jpg";
import chercha5 from "@/assets/chercha-5.jpg";
import chercha6 from "@/assets/chercha-6.jpg";
import chercha7 from "@/assets/chercha-7.jpg";
import chercha8 from "@/assets/chercha-8.jpg";

// --- Import Vishwakarma Images (.jpg) ---
import vishwakarma1 from "@/assets/vishwakarma-1.jpg";
import vishwakarma2 from "@/assets/vishwakarma-2.jpg";
import vishwakarma3 from "@/assets/vishwakarma-3.jpg";
import vishwakarma4 from "@/assets/vishwakarma-4.jpg";
import vishwakarma5 from "@/assets/vishwakarma-5.jpg";
import vishwakarma6 from "@/assets/vishwakarma-6.jpg";
import vishwakarma7 from "@/assets/vishwakarma-7.jpg";
import vishwakarma8 from "@/assets/vishwakarma-8.jpg";

// --- Import Project Mitra Images (.jpg) ---
import mitra1 from "@/assets/mitra-1.jpg";
import mitra2 from "@/assets/mitra-2.jpg";
import mitra3 from "@/assets/mitra-3.jpg";
import mitra4 from "@/assets/mitra-4.jpg";
import mitra5 from "@/assets/mitra-5.jpg";
import mitra6 from "@/assets/mitra-6.jpg";
import mitra7 from "@/assets/mitra-7.jpg";
import mitra8 from "@/assets/mitra-8.jpg";

interface ProjectEvent {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const pastEvents: ProjectEvent[] = [
  {
    id: "charcha",
    title: "Charcha",
    description:
      "Engaging panel discussions and thought-provoking dialogues with industry leaders, innovators, and creative minds across disciplines.",
    images: [
      chercha1,
      chercha2,
      chercha3,
      chercha4,
      chercha5,
      chercha6,
      chercha7,
      chercha8,
    ],
  },
  {
    id: "vishwakarma",
    title: "Vishwakarma",
    description:
      "A flagship exhibition showcasing groundbreaking engineering prototypes, technical models, and hands-on craftsmanship from emerging talent.",
    images: [
      vishwakarma1,
      vishwakarma2,
      vishwakarma3,
      vishwakarma4,
      vishwakarma5,
      vishwakarma6,
      vishwakarma7,
      vishwakarma8,
    ],
  },
  {
    id: "project-mitra",
    title: "Project Mitra",
    description:
      "Community outreach and social innovation projects designed to empower local societies through technology, mentorship, and sustainable outreach.",
    images: [
      mitra1,
      mitra2,
      mitra3,
      mitra4,
      mitra5,
      mitra6,
      mitra7,
      mitra8,
    ],
  },
];

// 3D Carousel Component with Image Click Event
const Carousel3D = ({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick: (imgSrc: string) => void;
}) => {
  const [angle, setAngle] = useState(0);
  const totalImages = images.length;
  const radius = 220;

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - 360 / totalImages);
    }, 2500);
    return () => clearInterval(interval);
  }, [totalImages]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAngle((prev) => prev + 360 / totalImages);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAngle((prev) => prev - 360 / totalImages);
  };

  return (
    <div className="relative w-full h-[310px] flex items-center justify-center [perspective:1000px]">
      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-2 z-30 w-10 h-10 rounded-full bg-[#fbf8f3] hover:bg-white text-[#78593a] shadow-md shadow-[#78593a]/15 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-[#e8ded1]"
      >
        <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-2 z-30 w-10 h-10 rounded-full bg-[#fbf8f3] hover:bg-white text-[#78593a] shadow-md shadow-[#78593a]/15 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-[#e8ded1]"
      >
        <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 3D Wheel Container */}
      <div
        className="relative w-[160px] h-[210px] transition-transform duration-1000 ease-out [transform-style:preserve-3d]"
        style={{
          transform: `translateZ(-${radius}px) rotateY(${angle}deg)`,
        }}
      >
        {images.map((img, index) => {
          const itemAngle = (360 / totalImages) * index;
          return (
            <div
              key={index}
              onClick={() => onImageClick(img)}
              className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#faf7f2] shadow-[0_12px_28px_rgba(120,89,58,0.18)] bg-[#f5ede3] backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-105 hover:border-[#8c6848]"
              style={{
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const PastEvents = () => {
  const [charcha, vishwakarma, projectMitra] = pastEvents;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-br from-[#fbf8f3] via-[#f3e9dc] to-[#e8ded1] text-[#4a3625]">
      
      {/* Light Overlay Effects */}
      <div className="absolute inset-0 opacity-70 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#e8ded1_0%,transparent_50%),radial-gradient(circle_at_80%_30%,#f0e4d4_0%,transparent_50%),radial-gradient(circle_at_50%_80%,#d9cabb_0%,transparent_60%)]" />

      {/* Soft Floating Orbs */}
      <div className="absolute top-12 left-10 w-24 h-24 rounded-full bg-gradient-to-tr from-[#e3d5c5] to-[#fbf8f3] shadow-[0_10px_30px_rgba(120,89,58,0.12)] opacity-80 animate-pulse pointer-events-none" />
      <div className="absolute top-24 right-12 w-16 h-16 rounded-full bg-gradient-to-tr from-[#d5c3b1] to-[#eedfce] shadow-[0_10px_30px_rgba(120,89,58,0.12)] opacity-80 pointer-events-none" />
      <div className="absolute bottom-16 left-16 w-20 h-20 rounded-full bg-gradient-to-tr from-[#ebdccb] to-[#f7f2ea] shadow-[0_10px_30px_rgba(120,89,58,0.1)] opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-3 mb-1">
            <span className="text-[#a07855] text-lg font-serif">✧</span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#cbb59f] via-[#8c6848] to-[#cbb59f] rounded-full" />
            <span className="text-[#a07855] text-lg font-serif">✧</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#3b2a1d]">
            PAST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8c6848] via-[#a07855] to-[#6d4f35]">EVENTS</span>
          </h2>

          <p className="max-w-lg mx-auto text-sm md:text-base font-serif italic text-[#6d5540] tracking-wide">
            Moments that inspired, connected, and created lasting memories. Click any image to expand.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="space-y-6">
          
          {/* Top Row: Side-by-Side (Charcha & Vishwakarma) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Charcha Card */}
            <div className="relative rounded-[32px] border border-[#fbf8f3] bg-[#f7f2eb]/70 backdrop-blur-2xl p-6 shadow-[0_15px_35px_rgba(100,75,50,0.08)] hover:shadow-[0_20px_40px_rgba(100,75,50,0.14)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-3">
                  <span className="px-7 py-2 rounded-full font-serif text-xl font-bold tracking-wide text-[#fcfaf7] bg-gradient-to-r from-[#8c6848] via-[#a07855] to-[#78593a] shadow-md shadow-[#78593a]/20 border border-[#d9c5b2]/40">
                    {charcha.title}
                  </span>
                </div>

                <p className="text-center text-xs md:text-sm text-[#5c4735] font-serif leading-relaxed max-w-md mx-auto mb-2 line-clamp-2">
                  {charcha.description}
                </p>
              </div>

              <Carousel3D
                images={charcha.images}
                onImageClick={(img) => setSelectedImage(img)}
              />
            </div>

            {/* Vishwakarma Card */}
            <div className="relative rounded-[32px] border border-[#fbf8f3] bg-[#f7f2eb]/70 backdrop-blur-2xl p-6 shadow-[0_15px_35px_rgba(100,75,50,0.08)] hover:shadow-[0_20px_40px_rgba(100,75,50,0.14)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-3">
                  <span className="px-7 py-2 rounded-full font-serif text-xl font-bold tracking-wide text-[#fcfaf7] bg-gradient-to-r from-[#9e7552] via-[#855e3d] to-[#6d4a2b] shadow-md shadow-[#6d4a2b]/20 border border-[#d9c5b2]/40">
                    {vishwakarma.title}
                  </span>
                </div>

                <p className="text-center text-xs md:text-sm text-[#5c4735] font-serif leading-relaxed max-w-md mx-auto mb-2 line-clamp-2">
                  {vishwakarma.description}
                </p>
              </div>

              <Carousel3D
                images={vishwakarma.images}
                onImageClick={(img) => setSelectedImage(img)}
              />
            </div>

          </div>

          {/* Bottom Row: Centered Project Mitra */}
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-[32px] border border-[#fbf8f3] bg-[#f7f2eb]/70 backdrop-blur-2xl p-6 shadow-[0_15px_35px_rgba(100,75,50,0.08)] hover:shadow-[0_20px_40px_rgba(100,75,50,0.14)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-3">
                  <span className="px-7 py-2 rounded-full font-serif text-xl font-bold tracking-wide text-[#fcfaf7] bg-gradient-to-r from-[#735438] via-[#8c6747] to-[#a37c58] shadow-md shadow-[#735438]/20 border border-[#d9c5b2]/40">
                    {projectMitra.title}
                  </span>
                </div>

                <p className="text-center text-xs md:text-sm text-[#5c4735] font-serif leading-relaxed max-w-md mx-auto mb-2 line-clamp-2">
                  {projectMitra.description}
                </p>
              </div>

              <Carousel3D
                images={projectMitra.images}
                onImageClick={(img) => setSelectedImage(img)}
              />
            </div>
          </div>

        </div>

      </div>

      {/* --- Image Pop-Out Modal (Lightbox) --- */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border-2 border-[#e8ded1] bg-[#1a1410] shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center font-bold text-lg"
            >
              ✕
            </button>

            {/* Popped-out Image */}
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full h-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default PastEvents;
