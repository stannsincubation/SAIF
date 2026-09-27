import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Product {
  id: string;
  productNo: string;
  title: string;
  category: "Baking" | "Handmade" | "Art" | "Sweets";
  price: number;
  description: string;
  sellerName: string;
  image: string;
}

const BUYER_GOOGLE_FORM_URL = "https://forms.gle/Xe9TPuy16zmxKq346";
const SELLER_GOOGLE_FORM_URL = "https://forms.gle/wTVoFffDkZSQJtCn7";

interface CommercePageProps {
  onBackToMain?: () => void;
}

export const CommercePage: React.FC<CommercePageProps> = ({ onBackToMain }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showBuyerForm, setShowBuyerForm] = useState(false);
  const [showSellerForm, setShowSellerForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Error loading products JSON:", err));
  }, []);

  const categories = ["All", "Baking", "Handmade", "Sweets", "Art"];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen w-full bg-[#1A0C09] text-[#E2C2A2] font-sans relative overflow-x-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4A261D] via-[#1A0C09] to-[#0D0504]" />

      {/* --- Top Sticky Navigation Bar --- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#1A0C09]/85 border-b border-[#C89F7A]/30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={onBackToMain}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E2C2A2] hover:text-white bg-[#2B1712] hover:bg-[#3D221B] border border-[#C89F7A]/40 px-3.5 py-2 rounded-xl transition-all duration-200 shadow-md"
        >
          <svg className="w-4 h-4 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>

        <div className="text-center">
          <h1 className="text-lg md:text-xl font-serif font-bold text-[#E2C2A2] tracking-wide">
            MARKETPLACE
          </h1>
        </div>

        <button
          onClick={() => setShowSellerForm(true)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold bg-gradient-to-r from-[#D8B48F] to-[#B88E69] hover:from-[#F3DECA] hover:to-[#D8B48F] text-[#1A0C09] px-4 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-black/40 hover:scale-105 active:scale-95 border border-[#E2C2A2]/50"
        >
          <svg className="w-4 h-4 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Sell Product
        </button>
      </header>

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="text-[#C89F7A] text-sm">✧</span>
            <div className="h-[1px] w-8 bg-[#C89F7A]/50" />
            <span className="text-[#C89F7A] text-sm">✧</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#E2C2A2] tracking-tight">
            Handcrafted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3DECA] via-[#E2C2A2] to-[#C89F7A]">Creations</span>
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-[#D8B48F]/90 font-serif italic">
            Discover artisanal pies, handmade crafts, freshly baked cookies, and original art.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#D8B48F] text-[#1A0C09] border-[#F3DECA] shadow-lg shadow-black/40 font-bold"
                  : "bg-[#2B1712]/90 text-[#D8B48F] border-[#C89F7A]/30 hover:text-[#F3DECA] hover:border-[#C89F7A]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- High Contrast Highlighted Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isSelected = selectedProduct?.id === product.id;

            return (
              <motion.div
                key={product.id}
                layoutId={`card-${product.id}`}
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer relative bg-[#2D1914] border border-[#C89F7A]/40 hover:border-[#F3DECA] rounded-2xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_28px_rgba(200,159,122,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Product Number Tag */}
                <div className="absolute top-6 left-6 z-20 bg-[#1A0C09]/90 backdrop-blur-md text-[#E2C2A2] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-[#C89F7A]/40 shadow-md">
                  #{product.productNo}
                </div>

                {/* Image Frame */}
                <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-[#1A0C09] mb-3.5 border border-[#C89F7A]/20">
                  <motion.img
                    layoutId={`image-${product.id}`}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ opacity: isSelected ? 0 : 1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0C09]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Info */}
                <div className="flex flex-col flex-grow justify-between gap-2.5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#D8B48F]">
                        {product.category}
                      </span>
                      <span className="text-[11px] text-[#E2C2A2]/70 font-medium italic">
                        by {product.sellerName}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#F3DECA] group-hover:text-white transition-colors leading-tight line-clamp-1 mt-1">
                      {product.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#C89F7A]/30">
                    <span className="text-lg font-bold font-serif text-[#F3DECA]">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-[#D8B48F] font-semibold group-hover:text-white group-hover:underline transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* --- FLIP Pop-Up Product Detail Overlay --- */}
      <AnimatePresence>
        {selectedProduct && !showBuyerForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-[#090302]/85 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedProduct.id}`}
              className="relative z-10 w-full max-w-2xl bg-[#2D1914] border border-[#E2C2A2]/50 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#1A0C09] hover:bg-[#D8B48F] text-[#E2C2A2] hover:text-[#1A0C09] transition-colors flex items-center justify-center font-bold text-sm border border-[#C89F7A]/40"
              >
                ✕
              </button>

              <div className="relative w-full md:w-1/2 h-[240px] md:h-auto overflow-hidden bg-[#1A0C09]">
                <motion.img
                  layoutId={`image-${selectedProduct.id}`}
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#1A0C09]/90 backdrop-blur-md text-[#E2C2A2] text-xs font-mono font-bold px-2.5 py-1 rounded-md border border-[#C89F7A]/40">
                  #{selectedProduct.productNo}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.15 }}
                className="w-full md:w-1/2 p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#D8B48F] font-semibold block">
                    {selectedProduct.category} • Sold by <span className="text-[#F3DECA]">{selectedProduct.sellerName}</span>
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#F3DECA]">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#E2C2A2]/90 font-serif leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#C89F7A]/30">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#D8B48F]">Price</span>
                    <span className="text-2xl font-serif font-bold text-[#F3DECA]">
                      ₹{selectedProduct.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setShowBuyerForm(true)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D8B48F] via-[#C89F7A] to-[#A87E5B] hover:from-[#F3DECA] hover:to-[#D8B48F] text-[#1A0C09] font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-black/50 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Buyer Google Form Overlay Modal --- */}
      <AnimatePresence>
        {showBuyerForm && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBuyerForm(false)}
              className="absolute inset-0 bg-[#090302]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-2xl h-[85vh] bg-[#2D1914] border border-[#E2C2A2]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 py-3.5 bg-[#1A0C09] border-b border-[#C89F7A]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#F3DECA]">
                    Purchase Request: {selectedProduct.title} ({selectedProduct.productNo})
                  </h3>
                  <p className="text-[11px] text-[#D8B48F]">Fill details to complete order</p>
                </div>
                <button
                  onClick={() => setShowBuyerForm(false)}
                  className="w-8 h-8 rounded-full bg-[#2D1914] hover:bg-[#D8B48F] text-[#E2C2A2] hover:text-[#1A0C09] flex items-center justify-center font-bold text-sm transition-colors border border-[#C89F7A]/40"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 w-full bg-[#1A0C09]">
                <iframe
                  src={BUYER_GOOGLE_FORM_URL}
                  className="w-full h-full border-none"
                  title="Buyer Google Form"
                >
                  Loading form...
                </iframe>
              </div>

              <div className="p-3 bg-[#1A0C09] border-t border-[#C89F7A]/30 text-center text-xs text-[#D8B48F]">
                Form not loading?{" "}
                <a
                  href={BUYER_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F3DECA] underline hover:text-white"
                >
                  Open in new tab
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Seller Google Form Overlay Modal --- */}
      <AnimatePresence>
        {showSellerForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSellerForm(false)}
              className="absolute inset-0 bg-[#090302]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-2xl h-[85vh] bg-[#2D1914] border border-[#E2C2A2]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 py-3.5 bg-[#1A0C09] border-b border-[#C89F7A]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#F3DECA]">Seller Application & Product Listing</h3>
                  <p className="text-[11px] text-[#D8B48F]">Submit your items to be listed on the marketplace</p>
                </div>
                <button
                  onClick={() => setShowSellerForm(false)}
                  className="w-8 h-8 rounded-full bg-[#2D1914] hover:bg-[#D8B48F] text-[#E2C2A2] hover:text-[#1A0C09] flex items-center justify-center font-bold text-sm transition-colors border border-[#C89F7A]/40"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 w-full bg-[#1A0C09]">
                <iframe
                  src={SELLER_GOOGLE_FORM_URL}
                  className="w-full h-full border-none"
                  title="Seller Google Form"
                >
                  Loading form...
                </iframe>
              </div>

              <div className="p-3 bg-[#1A0C09] border-t border-[#C89F7A]/30 text-center text-xs text-[#D8B48F]">
                Form not loading?{" "}
                <a
                  href={SELLER_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F3DECA] underline hover:text-white"
                >
                  Open in new tab
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommercePage;
