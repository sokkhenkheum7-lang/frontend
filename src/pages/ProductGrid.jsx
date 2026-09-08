import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Wide Leg Jeans CL517",
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/cache/catalog/products/2026-04/5232508027/STU_1664-cr-450x672.jpg",
    verticalText: "SKU: S294047",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#1e293b", "#e2d9cc", "#000000"],
  },
  {
    id: 2,
    title: "Raglan Shirred 3/4 Top",
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/cache/catalog/products/2026-06/5262511018/STU_1716-cr-450x672.jpg",
    verticalText: "SKU: S294048",
    price: "US $20.00",
    originalPrice: "US $15.50",
    colors: ["#f43f5e", "#1e293b", "#94a3b8"],
  },
  {
    id: 3,
    title: "One-Shoulder Oversize Tee",
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/products/2026-06/5252511013/PTAK0173.jpg",
    verticalText: "SKU: S285846",
    price: "US $27.00",
    originalPrice: "US $25.50",
    colors: [],
  },
  {
    id: 4,
    title: "Short Sleeve Tee IL524",
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/products/2026-07/5582507131/STU_2460.jpg",
    verticalText: "SKU: S285846",
    price: "US $27.00",
    originalPrice: "US $25.50",
    colors: [],
  },
    {
    id: 5,
    title: "Vitamin C Booster Shot 30ml",
    image: "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/promotion/promotionpage17887507940576726002d5f73.jpg",
    verticalText: "SKU: S285846",
    price: "US $24.00",
    originalPrice: "US $12.00 ",
    colors: [],
  },
    {
    id: 6,
    title: "Short Sleeve Tee IL524",
    image: "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1787711636/thm_117877118373556dbc66a64b8d.jpg",
    verticalText: "SKU: S285846",
    price: "US $27.00",
    originalPrice: "US $25.50",
    colors: [],
  },
  {
    id: 7,
    title: "Short Sleeve Tee IL524",
    image: "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/promotion/promotion_page17887587342025b4620ec7b4f.jpg",
    verticalText: "SKU: S285846",
    price: "US $27.00",
    originalPrice: "US $25.50",
    colors: [],
  },
  {
    id: 8,
    title: "Short Sleeve Tee IL524",
    image: "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/promotion/promotion_page1788403270396fe0bf5a624d6.jpg",
    verticalText: "SKU: S285846",
    price: "US $27.00",
    originalPrice: "US $25.50",
    colors: [],
  },
  
  

];

export default function ProductGrid() {
  const [wishlist, setWishlist] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col group">
            
            {/* Product Image Card */}
            <div className="relative aspect-[3/4] w-full bg-[#f6f6f8] overflow-hidden">
              
              {/* Top Banner Tags (Flush to top-left) */}
              <div className="absolute top-2 left-2 z-20 flex items-center text-[10px] font-semibold uppercase tracking-wider">
                <span className="bg-[#b38b7d] text-white px-2 py-0.5">
                  NEW
                </span>
                <span className="bg-[#ff4d6d] text-white px-4 py-0.5 ml-[2px]">
                  DISCOUNT -10% OFF
                </span>
              </div>

              {/* Vertical Side Text (Rotated 90deg on right edge) */}
              {product.verticalText && (
                <div className="absolute right-1 bottom-24 z-20 pointer-events-none translate-x-[30%] rotate-90">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gray-60 font-mono whitespace-nowrap">
                    {product.verticalText}
                  </span>
                </div>
              )}

              {/* Main Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
              />
            </div>

            {/* Product Meta Section */}
            <div className="mt-3 flex flex-col gap-3">
              
              {/* Row 1: Title & Wishlist Heart */}
              <div className="flex items-center justify-between">
                <h3 className=" text-[16px] font-semibold text-black tracking-tight truncate pr-2">
                  {product.title}
                </h3>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Save to Wishlist"
                  className="cursor-pointer text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                      wishlist.includes(product.id)
                        ? "fill-[#ff4d6d] text-[#ff4d6d]"
                        : "fill-none text-neutral-400 stroke-current"
                    }`}
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>
              </div>

              {/* Row 2: Pricing & Color Swatches */}
              <div className="flex items-center justify-between">
                
                {/* Price Display */}
                <div className="flex items-center gap-1.5 text-[14px]">
                  <span className="text-[#ff334b] font-semibold tracking-tight">
                    {product.price}
                  </span>
                  <span className="text-neutral-400 line-through font-Regular ">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Color Swatches */}
                {product.colors.length > 0 ? (
                  <div className="flex items-center gap-1">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          setSelectedColors((prev) => ({ ...prev, [product.id]: idx }))
                        }
                        style={{ backgroundColor: color }}
                        aria-label={`Color ${color}`}
                        className={`w-3.5 h-3.5 border border-neutral-300 transition-all cursor-pointer ${
                          selectedColors[product.id] === idx
                            ? "ring-1 ring-black"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-3.5" />
                )}

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}