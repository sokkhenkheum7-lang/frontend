import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { saleProducts, extraSaleProducts } from "../Data/SaleOuterware";

const outerwearCategories = [
  "ALL OUTERWEAR",
  "JACKETS & COATS",
  "HOODIES & FLEECE",
  "CROPPED OUTERWEAR",
  "TRENCH & BLAZERS",
];

export default function SaleOuterwear({ initialCategory = "ALL OUTERWEAR" }) {
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

  // Filter products for jackets, coats, hoodies, windbreakers, blazers
  const allOuterwearProducts = [...saleProducts, ...extraSaleProducts].filter(
    (item) => {
      const title = (item.title || "").toLowerCase();
      const cat = (item.category || "").toLowerCase();
      return (
        title.includes("jacket") ||
        title.includes("hoodie") ||
        title.includes("coat") ||
        title.includes("fleece") ||
        title.includes("blazer") ||
        title.includes("trench") ||
        title.includes("windbreaker") ||
        title.includes("moto") ||
        cat.includes("outerwear")
      );
    }
  );

  // Subcategory filters
  const filteredProducts = allOuterwearProducts.filter((item) => {
    const title = (item.title || "").toLowerCase();
    if (activeCategory === "ALL OUTERWEAR") return true;
    if (activeCategory === "JACKETS & COATS")
      return (
        title.includes("jacket") ||
        title.includes("coat") ||
        title.includes("moto")
      );
    if (activeCategory === "HOODIES & FLEECE")
      return title.includes("hoodie") || title.includes("fleece");
    if (activeCategory === "CROPPED OUTERWEAR")
      return title.includes("crop") || title.includes("bolero");
    if (activeCategory === "TRENCH & BLAZERS")
      return (
        title.includes("trench") ||
        title.includes("blazer") ||
        title.includes("buttoned")
      );
    return true;
  });

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        allProducts={allOuterwearProducts}
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
      {/* Floating 50% OFF Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff2a5f] text-white py-4 px-1 rounded-l-md shadow-xl cursor-pointer hover:bg-[#e01d50] transition">
        <span className="text-[14px] font-black tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          50% OFF
        </span>
      </div>

      {/* Top Banner Notice */}
      <div className="w-full bg-neutral-900 text-white text-center text-[13px] py-3.5 px-4 font-semibold tracking-wider uppercase">
        SALE OUTERWEAR & JACKETS • FREE COMPLIMENTARY SHIPPING OVER US $25
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 py-8">
        {/* Header Title & Subcategories */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                Seasonal Layers
              </span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 uppercase mt-0.5">
                SALE OUTERWEAR
              </h1>
            </div>
            <span className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              {filteredProducts.length} items
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {outerwearCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 border uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-black text-white border-black font-semibold shadow-sm"
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