import React, { useState } from "react";
import saifLogo from "@/assets/saif-logo.png";

interface NavbarProps {
  currentPage?: "landing" | "commerce";
  onNavigate?: (page: "landing" | "commerce", sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage = "landing", 
  onNavigate 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact section IDs based on your saved components and project structure
  const navLinks = [
    { label: "Home", sectionIds: ["home", "hero"] },
    { label: "About", sectionIds: ["about", "about-us"] },
    { label: "Podcasts", sectionIds: ["podcasts", "podcast"] },
    { label: "Events", sectionIds: ["pastevents", "events", "event"] },
    { 
      label: "Startups", 
      sectionIds: [
        "startups", 
        "startup", 
        "incubated-startups", 
        "incubated", 
        "startup-section"
      ] 
    },
    { label: "Contact", sectionIds: ["contact", "footer"] },
  ];

  const scrollToSection = (possibleIds: string[]) => {
    let el: HTMLElement | null = null;

    // Search for the element by any matching ID variant
    for (const id of possibleIds) {
      el = document.getElementById(id);
      if (el) break;
    }

    // Fallback search if ID is on an inner heading or container
    if (!el) {
      const headings = Array.from(document.querySelectorAll("h1, h2, h3, section"));
      el = (headings.find((h) => 
        h.textContent?.toLowerCase().includes("incubated startups") ||
        h.textContent?.toLowerCase().includes("startups")
      ) as HTMLElement) || null;
    }

    if (el) {
      const yOffset = -80; // Offset for sticky navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleLinkClick = (possibleIds: string[]) => {
    if (onNavigate) {
      if (currentPage !== "landing") {
        onNavigate("landing", possibleIds[0]);
      } else {
        scrollToSection(possibleIds);
      }
    } else {
      scrollToSection(possibleIds);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f6f0]/90 backdrop-blur-md border-b border-[#e5e0d8] text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: SAIF Logo & Title */}
        <button 
          onClick={() => handleLinkClick(["home", "hero"])} 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left"
        >
          <img 
            src={saifLogo} 
            alt="SAIF Logo" 
            className="h-10 w-auto object-contain" 
          />
          <div className="flex flex-col">
            <span className="font-bold text-base leading-tight text-slate-900 tracking-wide">
              SAIF
            </span>
            <span className="text-[10px] text-slate-500 leading-none">
              Incubation Centre
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Bar with Cream Pill Styling */}
        <div className="hidden md:flex items-center gap-1 bg-[#eae6dc] px-4 py-1.5 rounded-full border border-[#d8d2c4] shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.sectionIds)}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 hover:bg-[#dfd9cb] rounded-full transition-all duration-200"
            >
              {link.label}
            </button>
          ))}

          {/* Commerce Nav Link */}
          <button
            onClick={() => onNavigate && onNavigate("commerce")}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1.5 ${
              currentPage === "commerce"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-700 hover:text-slate-950 hover:bg-[#dfd9cb]"
            }`}
          >
            <span>🛒</span>
            <span>Commerce</span>
          </button>
        </div>

        {/* Right: Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleLinkClick(["contact", "footer"])}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-full border border-slate-800 transition-all shadow-sm"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900 p-2"
        >
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f6f0] border-b border-[#e5e0d8] px-4 py-3 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.sectionIds)}
              className="text-left text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-slate-950 py-2 px-3 rounded-lg hover:bg-[#eae6dc]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              if (onNavigate) onNavigate("commerce");
              setMobileMenuOpen(false);
            }}
            className="text-left text-xs uppercase tracking-wider font-bold bg-slate-900 text-white py-2 px-3 rounded-lg mt-1"
          >
            Commerce
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;