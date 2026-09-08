import { useState, useEffect } from "react";

const trendingSearches = [
  "Silk Dresses",
  "Tailored Coats",
  "Minimalist Accessories",
  "Archive Edition",
];

const recommendations = [
  {
    id: 1,
    title: "Structured Wool Blazer",
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/cache/catalog/products/2026-04/5232508027/STU_1664-cr-450x672.jpg",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#1e293b", "#e2d9cc", "#000000"],
  },
  {
    id: 2,
    title: "HOLYTEE CULT FITTED BABY",
    image: "https://i.pinimg.com/736x/49/b0/18/49b018e375d231f9a772c4a071b4eb5a.jpg",
    price: "US $9.85",
    originalPrice: "US $17.95",
    colors: ["#94a3b8", "#f43f5e"],
  },
];

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* 1. Dropdown Search Card directly attached to bottom of navbar */}
      <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-2xl z-50 select-none animate-in slide-in-from-top-2 duration-300">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 pt-8 pb-12">
          
          {/* Top Row: Mini "SEARCH" Label and Close Button */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
              SEARCH
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="text-neutral-700 hover:text-black cursor-pointer p-1 transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Underlined Search Input */}
          <div className="relative flex items-center border-b border-neutral-300 pb-3">
            <svg
              className="w-5 h-5 text-neutral-600 mr-3 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for collection, product, or archive..."
              className="w-full text-base sm:text-lg text-neutral-900 placeholder-neutral-400 focus:outline-none bg-transparent font-light"
            />
          </div>

          {/* Content Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Left Column: Trending Searches */}
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="text-[11px] font-mono tracking-[0.18em] text-neutral-400 uppercase mb-4">
                TRENDING SEARCHES
              </h4>
              <ul className="space-y-3.5">
                {trendingSearches.map((term) => (
                  <li key={term}>
                    <button
                      type="button"
                      onClick={() => setSearchTerm(term)}
                      className="flex items-center gap-2.5 text-xs sm:text-[13px] text-neutral-700 hover:text-black transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-neutral-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span>{term}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-neutral-100 self-stretch" />

            {/* Right Column: Recommended For You */}
            <div className="md:col-span-7 lg:col-span-8">
              <h4 className="text-[11px] font-mono tracking-[0.18em] text-neutral-400 uppercase mb-4">
                RECOMMENDED FOR YOU
              </h4>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-[480px]">
                {recommendations.map((item) => (
                  <div key={item.id} className="flex flex-col group cursor-pointer">
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[3/4] w-full bg-[#f6f6f8] overflow-hidden">
                      <div className="absolute top-2 left-2 z-20 flex items-center text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">
                        <span className="bg-[#b38b7d] text-white px-2 py-0.5">NEW</span>
                        <span className="bg-[#ff4d6d] text-white px-2 py-0.5 ml-[2px]">DISCOUNT -10% OFF</span>
                      </div>

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-103"
                      />
                    </div>

                    {/* Info */}
                    <div className="mt-2.5 flex flex-col gap-1">
                      <h5 className="text-xs sm:text-[13px] font-semibold text-neutral-900 tracking-tight leading-snug">
                        {item.title}
                      </h5>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                          <span className="text-[#ff334b] font-medium">{item.price}</span>
                          <span className="text-neutral-400 line-through text-[10px] sm:text-[11px]">
                            {item.originalPrice}
                          </span>
                        </div>

                        {item.colors.length > 0 && (
                          <div className="flex items-center gap-1">
                            {item.colors.map((color, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedColors((prev) => ({ ...prev, [item.id]: idx }));
                                }}
                                style={{ backgroundColor: color }}
                                className={`w-3 h-3 border border-neutral-300 ${
                                  selectedColors[item.id] === idx ? "ring-1 ring-black" : ""
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. Dark Blurred Backdrop covering everything below the navbar */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 z-40"
      />
    </>
  );
}