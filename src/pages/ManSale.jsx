import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { saleProducts, extraSaleProducts } from "../Data/saleMan";

const menSubCategories = [
  "ALL",
  "SALE TOPS",
  "SALE BOTTOMS",
  "SALE OUTERWEAR",
  "SALE SHOES",
  "SALE ACCESSORIES",
];

const menHeroSlides = [
  {
    id: 1,
    leftImage:
      "https://i.pinimg.com/1200x/d2/0d/bc/d20dbcf691b424b6426af79562951d1a.jpg",
    rightImage:
      "https://i.pinimg.com/736x/5b/67/e4/5b67e4ada27f3f4965b45fc9820d7b28.jpg",
  },
  {
    id: 2,
    leftImage:
      "https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/Collection%20Highlight/Oxfit%20Atelier%20Men%20Web%20collection%20slider.jpg",
    rightImage:
      "https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/banner/Ten11%3E2026%3EJuly/Collection/Collection%20slider/ARENA%20STREET-Men-Web.jpg",
  },
  {
    id: 3,
    leftImage:
      "https://i.pinimg.com/1200x/f4/73/eb/f473eb407206a83a994dd5557f238c29.jpg",
    rightImage:
      "https://i.pinimg.com/736x/85/92/76/859276b7cbc428919015190cf9196780.jpg",
  },
];

export default function ManSale({ initialCategory = "ALL", onBackToHome }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [selectedColors, setSelectedColors] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateGrid, setAnimateGrid] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % menHeroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setActiveFilter(initialCategory);
    setSelectedProduct(null);
  }, [initialCategory]);

  useEffect(() => {
    setAnimateGrid(false);
    const timer = setTimeout(() => setAnimateGrid(true), 20);
    return () => clearTimeout(timer);
  }, [activeFilter]);

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

  const allMenProducts = [...saleProducts, ...extraSaleProducts];

  const filteredProducts = saleProducts.filter((item) => {
    if (activeFilter === "ALL" || activeFilter === "MEN'S SALE") return true;

    const title = (item.title || "").toUpperCase();
    const cat = (item.category || "").toUpperCase();

    if (activeFilter === "SALE TOPS") {
      return (
        cat.includes("TOP") ||
        title.includes("TEE") ||
        title.includes("TOP") ||
        title.includes("SHIRT") ||
        title.includes("HOODIE")
      );
    }
    if (activeFilter === "SALE BOTTOMS") {
      return (
        cat.includes("BOTTOM") ||
        cat.includes("PANT") ||
        cat.includes("JEAN") ||
        title.includes("JEAN") ||
        title.includes("PANT") ||
        title.includes("SHORT")
      );
    }
    if (activeFilter === "SALE OUTERWEAR") {
      return (
        cat.includes("OUTERWEAR") ||
        title.includes("JACKET") ||
        title.includes("COAT") ||
        title.includes("BLAZER") ||
        title.includes("ZIP-UP")
      );
    }
    if (activeFilter === "SALE SHOES") {
      return (
        cat.includes("SHOES") ||
        cat.includes("FOOTWEAR") ||
        title.includes("BOOT") ||
        title.includes("SHOE") ||
        title.includes("DERBY")
      );
    }
    if (activeFilter === "SALE ACCESSORIES") {
      return (
        cat.includes("ACCESSORIES") ||
        title.includes("CAP") ||
        title.includes("HAT") ||
        title.includes("BELT") ||
        title.includes("BAG") ||
        title.includes("CHAIN")
      );
    }
    return true;
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menHeroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + menHeroSlides.length) % menHeroSlides.length
    );
  };

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        allProducts={allMenProducts}
        onBack={() => {
          setSelectedProduct(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onSelectProduct={handleSelectProduct}
      />
    );
  }

  const slide = menHeroSlides[currentSlide];

  return (
    <div className="w-full bg-white relative select-none overflow-x-hidden min-h-screen pb-16">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes popInSlide {
          0% { opacity: 0; transform: scale(0.96) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(18px); }
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
          animation: slideUpFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Floating 50% OFF Right Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff2a5f] text-white py-4 px-1 rounded-l-md shadow-xl cursor-pointer hover:bg-[#e01d50] hover:-translate-x-1 transition-all duration-300">
        <span className="text-[14px] font-black tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          50% OFF
        </span>
      </div>

      {/* Fixed Bottom Left Promo Badge */}
      <aside className="fixed bottom-6 left-6 z-40">
        <span className="bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl tracking-wider uppercase">
          EXTRA 10% OFF
        </span>
      </aside>

      {/* Marquee Banner */}
      <div className="w-full bg-blue-700 text-white overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold tracking-widest uppercase">
          <span className="w-1/2 text-center">
            ★ MEN'S ARCHIVE FLASH SALE • FREE SHIPPING OVER US $25 IN CAMBODIA • EXTRA 15% STUDENT DISCOUNT ★
          </span>
          <span className="w-1/2 text-center">
            ★ MEN'S ARCHIVE FLASH SALE • FREE SHIPPING OVER US $25 IN CAMBODIA • EXTRA 15% STUDENT DISCOUNT ★
          </span>
        </div>
      </div>

      {/* Promo Voucher Banner */}
      <div
        className="w-full h-[220px] sm:h-[290px] bg-cover bg-center flex items-center justify-center my-0"
        style={{
          backgroundImage:
            "url('https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/banner/Ten11%3E2026%3EJuly/Collection/Voucher/Voucher%20Cate.jpg')",
        }}
      />

      {/* Hero Dual Image Slider */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 relative group">
        <div
          key={slide.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 relative overflow-hidden bg-neutral-100"
        >
          <div className="animate-pop-in relative h-[420px] sm:h-[580px] flex items-center justify-center bg-[#eaeaea] overflow-hidden">
            <img
              src={slide.leftImage}
              alt="Men Slide Left"
              className="h-full w-full object-cover object-top transition duration-700 ease-out hover:scale-105"
            />
          </div>

          <div className="animate-pop-in relative h-[420px] sm:h-[580px] flex items-center justify-center bg-[#eaeaea] overflow-hidden">
            <img
              src={slide.rightImage}
              alt="Men Slide Right"
              className="h-full w-full object-cover object-top transition duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-6 sm:left-11 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-black hover:text-white text-black p-2.5 rounded-full shadow-md backdrop-blur-sm transition cursor-pointer z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-6 sm:right-11 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-black hover:text-white text-black p-2.5 rounded-full shadow-md backdrop-blur-sm transition cursor-pointer z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {menHeroSlides.map((item, idx) => (
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

      {/* Seasonal Hero Banner */}
      <div
        className="w-full h-[320px] sm:h-[500px] bg-cover bg-center flex items-center justify-center my-2"
        style={{
          backgroundImage:
            "url('https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/banner/Ten11%3E2026%3EJuly/Collection/Hero%20banner/Pchun_ben_web_Main_Banner(2160x798).jpg')",
        }}
      />

      {/* Products Section */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase">
              Men's Weekly Sale
            </h1>
            <span className="text-xs text-neutral-500 font-medium">
              {filteredProducts.length} items
            </span>
          </div>

          {/* Subcategory Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {menSubCategories.map((cat) => (
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

        {/* First Products Grid: Filtered Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 sm:gap-x-3.5 gap-y-6 sm:gap-y-8">
          {filteredProducts.map((item, index) => (
            <div
              key={item.id}
              style={{
                animationDelay: `${Math.min(index * 40, 400)}ms`,
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

        {/* Free Shipping Mid Banner */}
        <div className="w-full bg-black text-white text-center py-4 my-14 text-xs sm:text-sm font-bold tracking-wider uppercase">
          Buy US $25 Free Shipping in Cambodia
        </div>

        {/* Second Products Grid: New Additions / Extra Men's Collection */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-black tracking-tight text-neutral-900 uppercase">
            New Arrivals & Essentials
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            {extraSaleProducts.length} items
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 sm:gap-x-3.5 gap-y-6 sm:gap-y-8">
          {extraSaleProducts.map((item, index) => (
            <div
              key={`extra-${item.id}`}
              style={{
                animationDelay: `${Math.min(index * 40, 400)}ms`,
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