import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const Hero = () => {
  const images = [hero2, hero1, hero3, hero4, hero5];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Background Decorative Gold Radial Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C49A62]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C49A62]/30 bg-[#F5EFE6]/60 text-[#C49A62] text-sm font-medium animate-fade-in backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#C49A62]" />
              <span>Empowering Student Entrepreneurs</span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0F1E36] leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              St. Ann's Incubation Foundation -{" "}
              <span className="font-serif italic font-normal text-[#C49A62]">SAIF</span>
              , Telangana's First Women's Degree College Incubation Foundation
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-slate-600 max-w-lg animate-fade-in font-light leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Nurturing innovation and entrepreneurship among students. Transform your ideas into successful ventures with our comprehensive incubation program.
            </p>

            {/* Apply Button */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="group rounded-full bg-[#0F1E36] hover:bg-[#1a3258] text-white px-8 py-6" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSedig31DTq0LfTt58hyFMG52LGmj2JFB4nPJkbqATr2ktgORg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Bento Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 animate-scale-in">
              {/* Large image */}
              <div className="col-span-2 row-span-2 relative group editorial-card rounded-2xl p-1.5 border-t-4 border-t-[#C49A62]">
                <img
                  src={images[0]}
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-xl shadow-lg hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Small images */}
              <div
                className="relative group editorial-card rounded-2xl p-1 border-t-2 border-t-[#C49A62]"
                style={{ animationDelay: "0.1s" }}
              >
                <img
                  src={images[1]}
                  alt="Workshop session"
                  className="w-full h-full object-cover rounded-xl shadow-lg hover-lift"
                />
              </div>

              <div
                className="relative group editorial-card rounded-2xl p-1 border-t-2 border-t-[#C49A62]"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={images[2]}
                  alt="Startup pitch"
                  className="w-full h-full object-cover rounded-xl shadow-lg hover-lift"
                />
              </div>

              {/* Bottom row */}
              <div
                className="relative group editorial-card rounded-2xl p-1 border-t-2 border-t-[#C49A62]"
                style={{ animationDelay: "0.3s" }}
              >
                <img
                  src={images[3]}
                  alt="Innovation lab"
                  className="w-full h-full object-cover rounded-xl shadow-lg hover-lift"
                />
              </div>

              <div
                className="col-span-2 relative group editorial-card rounded-2xl p-1 border-t-2 border-t-[#C49A62]"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src={images[4]}
                  alt="Success stories"
                  className="w-full h-full object-cover rounded-xl shadow-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;