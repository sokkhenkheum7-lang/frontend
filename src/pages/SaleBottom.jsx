import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { saleProducts, extraSaleProducts } from "../Data/saleBottom";

const bottomCategories = [
  "ALL BOTTOMS",
  "SALE JEANS",
  "CARGO & PANTS",
  "SHORTS & SKORTS",
];

export default function SaleBottom({ initialCategory = "ALL BOTTOMS" }) {
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

  // Base list of all bottom wear
  const allBottomProducts = [...saleProducts, ...extraSaleProducts].filter(
    (item) =>
      item.category === "Sale Pants" ||
      item.title.toLowerCase().includes("jeans") ||
      item.title.toLowerCase().includes("pants") ||
      item.title.toLowerCase().includes("shorts") ||
      item.title.toLowerCase().includes("skort") ||
      item.title.toLowerCase().includes("trousers")
  );

  // Sub-filter handler
  const filteredProducts = allBottomProducts.filter((item) => {
    const title = item.title.toLowerCase();
    if (activeCategory === "ALL BOTTOMS") return true;
    if (activeCategory === "SALE JEANS") return title.includes("jeans");
    if (activeCategory === "CARGO & PANTS")
      return title.includes("pants") || title.includes("trousers") || title.includes("cargo");
    if (activeCategory === "SHORTS & SKORTS")
      return title.includes("shorts") || title.includes("skort") || title.includes("skirt");
    return true;
  });

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        allProducts={allBottomProducts}
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
      {/* Floating 50% OFF Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff2a5f] text-white py-4 px-1 rounded-l-md shadow-xl cursor-pointer hover:bg-[#e01d50] transition">
        <span className="text-[14px] font-black tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          50% OFF
        </span>
      </div>

      {/* Top Banner Notice */}
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

      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 py-8">
        {/* Header Title & Subcategories */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 uppercase">
              SALE BOTTOMS
            </h1>
            <span className="text-xs text-neutral-500 font-medium">
              {filteredProducts.length} items
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {bottomCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 border uppercase transition-colors whitespace-nowrap cursor-pointer ${
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

        {/* Responsive Grid: Mobile 2, Tablet 3, Desktop 4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 sm:gap-x-3.5 gap-y-8">
          {filteredProducts.map((item) => (
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
    </main>
  );
}