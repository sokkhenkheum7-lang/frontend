import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import {
  categories,
  saleProducts,
  extraSaleProducts,
} from "../Data/salebottomMan";

export default function SaleBottomMan({
  initialCategory = "ALL",
  onBackToHome,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedColors, setSelectedColors] = useState({});
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory.toUpperCase());
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

  const filterList = (list) => {
    if (!activeCategory || activeCategory === "ALL") return list;
    return list.filter(
      (p) => (p.category || "").toUpperCase() === activeCategory.toUpperCase()
    );
  };

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
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 16s linear infinite;
        }
      `}</style>

      {/* Floating 50% OFF Right Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff2a5f] text-white py-4 px-1 rounded-l-md shadow-xl cursor-pointer hover:bg-[#e01d50] hover:-translate-x-1 transition-all duration-300">
        <span className="text-[14px] font-black tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          50% OFF
        </span>
      </div>

      {/* Delivery Strip */}
      <div className="w-full bg-black text-white overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold tracking-widest uppercase">
          <span className="w-1/2 text-center">
            ★ MEN'S BOTTOMS SALE • FREE SHIPPING OVER US $25 IN CAMBODIA • EXTRA 15% STUDENT DISCOUNT ★
          </span>
          <span className="w-1/2 text-center">
            ★ MEN'S BOTTOMS SALE • FREE SHIPPING OVER US $25 IN CAMBODIA • EXTRA 15% STUDENT DISCOUNT ★
          </span>
        </div>
      </div>

      {/* Product Grid Container */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 py-8">
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 uppercase">
              MEN'S SALE BOTTOMS
            </h1>
            <span className="text-xs text-neutral-500 font-medium">
              {topFilteredProducts.length + bottomFilteredProducts.length} items
            </span>
          </div>

          {/* Subcategory Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 border transition-colors whitespace-nowrap uppercase cursor-pointer ${
                  activeCategory === cat
                    ? "bg-black text-white border-black font-semibold shadow-xs"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Main Bottoms Grid */}
        {topFilteredProducts.length > 0 ? (
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
        ) : (
          <p className="text-sm text-neutral-500 py-6 text-center">
            No items found for category "{activeCategory}".
          </p>
        )}

        {/* 2. Free Shipping Bar */}
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
                  key={`extra-${item.id}`}
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