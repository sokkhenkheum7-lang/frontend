import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { saleProducts, extraSaleProducts } from "../Data/salesDataWomen";

const womenSubCategories = [
  "ALL",
  "SALE TOPS",
  "SALE BOTTOMS",
  "SALE JEANS",
  "SALE KNITWEAR",
  "SALE OUTERWEAR",
  "SALE ACCESSORIES",
];

// Carousel Slides Data (Clean images only)
const heroSlides = [
  {
    id: 1,
    leftImage:
      "https://i.pinimg.com/736x/d0/64/f7/d064f79f37a0fa896a08df443b11383e.jpg",
    rightImage:
      "https://i.pinimg.com/736x/1d/4d/c3/1d4dc3815c136d4ff61ee94492ebe2e2.jpg",
  },
  {
    id: 2,
    leftImage:
      "https://cdn.shopify.com/s/files/1/0600/4493/5332/files/pc_sub_bn_01_0910.jpg?v=1789016789",
    rightImage:
      "https://i.pinimg.com/1200x/f9/ce/37/f9ce3751fa3eafee5e99307bdd01fee7.jpg",
  },
  {
    id: 3,
    leftImage:
      "https://i.pinimg.com/736x/24/96/39/2496390cbd815ef38d35d4da6fe7f310.jpg",
    rightImage:
      "https://i.pinimg.com/736x/0b/e5/77/0be577ece83732e2c152d5e9f5490fa5.jpg",
  },
];

export default function WomenSale({ initialCategory = "ALL", onBackToHome }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [selectedColors, setSelectedColors] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [animateGrid, setAnimateGrid] = useState(true);

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider every 4.5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  // Trigger grid entrance slide whenever active filter tab changes
  useEffect(() => {
    setAnimateGrid(false);
    const timer = setTimeout(() => setAnimateGrid(true), 15);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const allWomenProducts = [...saleProducts, ...extraSaleProducts];

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectColor = (productId, colorIndex) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorIndex }));
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProducts = allWomenProducts.filter((item) => {
    if (activeFilter === "ALL" || activeFilter === "WOMEN'S SALE") return true;
    const cat = (item.category || "").toUpperCase();
    const title = (item.title || "").toUpperCase();
    const filter = activeFilter.toUpperCase().replace("SALE ", "");
    return cat.includes(filter) || title.includes(filter);
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        allProducts={allWomenProducts}
        onBack={() => {
          setSelectedProduct(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onSelectProduct={handleSelectProduct}
      />
    );
  }

  const slide = heroSlides[currentSlide];

  return (
    <div className="w-full bg-white relative select-none overflow-x-hidden">
      {/* Scoped CSS for slide and pop animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes popInSlide {
          0% {
            opacity: 0;
            transform: scale(0.94) translateY(14px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 16s linear infinite;
        }
        .animate-pop-in {
          animation: popInSlide 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Floating 50% OFF Badge */}
      <div className="fixed right-0 top-2/5 -translate-y-1/2 z-30 bg-[#ff2a5f] text-white py-4 px-1 rounded-l-md shadow-xl cursor-pointer hover:bg-[#e01d50] hover:-translate-x-1 transition-all duration-300">
        <span className="text-[14px] font-black tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          50% OFF
        </span>
      </div>

      {/* Top Sliding Marquee Header */}
      <div className="w-full bg-gray-800 text-white overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold tracking-widest uppercase">
          <span className="w-1/2 text-center">
            ★ PROMOTION OFF 15% FOR STUDENTS • FREE SHIPPING OVER US $25 IN CAMBODIA • LIMITED TIME OFFER ★
          </span>
          <span className="w-1/2 text-center">
            ★ PROMOTION OFF 15% FOR STUDENTS • FREE SHIPPING OVER US $25 IN CAMBODIA • LIMITED TIME OFFER ★
          </span>
        </div>
      </div>

      {/* Top Banner Ribbon */}
      <div
        className="w-full h-[80px] sm:h-[100px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0600/4493/5332/files/pc_line_bn1_0910.jpg?v=1789016789')",
        }}
      />

      {/* Hero Dual Slider (Pure Image Layout) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-8 py-8 relative group">
        <div
          key={slide.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 relative overflow-hidden bg-neutral-100 rounded-sm"
        >
          {/* Left Model Image */}
          <div className="animate-pop-in relative h-[580px] md:h-[580px] flex items-center justify-center bg-[#eaeaea] overflow-hidden">
            <img
              src={slide.leftImage}
              alt="Slide visual left"
              className="h-full w-full object-cover object-top transition duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* Right Model Image */}
          <div className="animate-pop-in relative h-[580px] md:h-[580px] flex items-center justify-center bg-[#eaeaea] overflow-hidden">
            <img
              src={slide.rightImage}
              alt="Slide visual right"
              className="h-full w-full object-cover object-top transition duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>

        {/* Carousel Prev Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-6 sm:left-11 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-black hover:text-white text-black p-2.5 rounded-full shadow-md backdrop-blur-sm transition-all duration-200 cursor-pointer opacity-80 hover:opacity-100 z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carousel Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-6 sm:right-11 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-black hover:text-white text-black p-2.5 rounded-full shadow-md backdrop-blur-sm transition-all duration-200 cursor-pointer opacity-80 hover:opacity-100 z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {heroSlides.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx ? "w-8 bg-black" : "w-2 bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Mid-Page Promo Banner */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center my-4"
        style={{
          backgroundImage:
            "url('https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/banner/Ten11%3E2026%3EJuly/Collection/Hero%20banner/Pchun_ben_web_Main_Banner(2160x798).jpg')",
        }}
      />

      {/* Responsive Products Section */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase">
              Weekly Bestsellers
            </h1>
            <span className="text-xs text-neutral-500 font-medium">
              {filteredProducts.length} items
            </span>
          </div>
          <aside className="fixed bottom-6 left-6 z-40">
        <span className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg tracking-wider">
          EXTRA 10% OFF
        </span>
      </aside>

          {/* Subcategory Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {womenSubCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`text-xs px-4 py-2 border uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-black text-white border-black font-semibold shadow-sm"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 sm:gap-x-3.5 gap-y-6 sm:gap-y-8">
          {filteredProducts.map((item, index) => (
            <div
              key={item.id}
              style={{
                animationDelay: `${Math.min(index * 45, 450)}ms`,
              }}
              className={animateGrid ? "animate-slide-up" : "opacity-0"}
            >
              <ProductCard
                item={item}
                isWishlisted={Boolean(wishlist[item.id])}
                selectedColorIndex={selectedColors[item.id]}
                onSelectProduct={handleSelectProduct}
                onToggleWishlist={toggleWishlist}
                onSelectColor={handleSelectColor}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}