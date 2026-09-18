import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { categories, saleProducts, extraSaleProducts } from "../Data/saleTops";

export default function SaleTops({ initialCategory = "Sale Top" }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedColors, setSelectedColors] = useState({});
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
      setSelectedProduct(null);
    }
  }, [initialCategory]);

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

  const filterList = (list) =>
    activeCategory === "Women's Sale"
      ? list
      : list.filter((p) => p.category === activeCategory);

  const topFilteredProducts = filterList(saleProducts);
  const bottomFilteredProducts = filterList(extraSaleProducts);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        allProducts={[...saleProducts, ...extraSaleProducts]}
        onBack={() => {
          setSelectedProduct(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onSelectProduct={handleSelectProduct}
      />
    );
  }

  return (
    <main className="w-full bg-white relative select-none">
         <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes popInSlide {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(18px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes badgePop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-20deg);
          }
          70% {
            transform: scale(1.18) rotate(8deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
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
        .animate-badge-pop {
          animation: badgePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards;
        }
        .animate-slide-up {
          animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Sticky Pink "SALE OFF" Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-4/5 z-30 bg-[#ff2a5f] text-white py-4 px-1 rounded-l-md shadow-xl cursor-pointer hover:bg-[#e01d50] transition">
        <span className="text-[15px] font-black tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          SALE OFF 15%
        </span>
      </div>

      {/* Top Delivery Strip */}
      <div className="w-full bg-red-800 text-white overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold tracking-widest uppercase">
          <span className="w-1/2 text-center">
            ★ PROMOTION OFF 15% FOR STUDENTS • FREE SHIPPING OVER US $25 IN CAMBODIA • LIMITED TIME OFFER ★
          </span>
          <span className="w-1/2 text-center">
            ★ PROMOTION OFF 15% FOR STUDENTS • FREE SHIPPING OVER US $25 IN CAMBODIA • LIMITED TIME OFFER ★
          </span>
        </div>
        </div>

      {/* Top Banner Strip */}
      <div className="w-full bg-[#00647a] text-white text-[14px] py-4 px-4 flex items-center justify-between font-semibold tracking-wider uppercase">
        <div className="flex items-center gap-2">
          <span className="bg-[#f39c12] text-black px-1.5 py-0.5 font-black text-[12px] rounded-xs">
            WEEKEND FLASH
          </span>
          <span>60% OFF SITEWIDE</span>
          <span className="hidden sm:inline text-cyan-200">
            | With Code: FLASH60
          </span>
        </div>
        <a href="#" className="underline hover:text-cyan-200 transition">
          BACK TO SCHOOL SALE
        </a>
      </div>

      {/* Product Grid Container */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 py-8">
        {/* Category Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 uppercase">
            SALE TOP
          </h1>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 border transition-colors whitespace-nowrap uppercase cursor-pointer ${
                  activeCategory === cat
                    ? "bg-black text-white border-black font-semibold"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Main Top Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 sm:gap-x-3.5 gap-y-8">
          {topFilteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              isWishlisted={Boolean(wishlist[item.id])}
              selectedColorIndex={selectedColors[item.id]}
              onSelectProduct={handleSelectProduct}
              onToggleWishlist={toggleWishlist}
              onSelectColor={handleSelectColor}
            />
          ))}
        </div>

        {/* 2. Free Shipping Strip Divider */}
        <div className="w-full bg-black text-white text-center py-4 my-14 text-xs sm:text-sm font-bold tracking-wider uppercase">
          Buy US $25 Free Shipping in Cambodia
        </div>

        {/* 3. Lower Section (Special Offers) */}
        {bottomFilteredProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 uppercase">
                MORE SPECIAL OFFERS
              </h2>
              <span className="text-xs font-medium text-neutral-500">
                {bottomFilteredProducts.length} items
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 sm:gap-x-3.5 gap-y-8">
              {bottomFilteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  isWishlisted={Boolean(wishlist[item.id])}
                  selectedColorIndex={selectedColors[item.id]}
                  onSelectProduct={handleSelectProduct}
                  onToggleWishlist={toggleWishlist}
                  onSelectColor={handleSelectColor}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}