import { useState } from "react";

const products = [
  {
    id: 1,
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/cache/catalog/products/2026-04/5232508027/STU_1664-cr-450x672.jpg",
    verticalText: "SKU: S294047",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#1e293b", "#e2d9cc", "#000000"],
  },
  {
    id: 2,
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/cache/catalog/products/2026-06/5262511018/STU_1716-cr-450x672.jpg",
    verticalText: "EXTRA 50% OFF SITEWIDE | CODE BTS50",
    price: "US $20.00",
    originalPrice: "US $15.50",
    colors: ["#f43f5e", "#1e293b", "#94a3b8"],
  },
  {
    id: 3,
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/products/2026-06/5252511013/PTAK0173.jpg",
    verticalText: "SKU: S285846",
    price: "US $27.00",
    originalPrice: "US $25.50",
    colors: [],
  },
  {
    id: 4,
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/products/2026-07/5582507131/STU_2460.jpg",
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
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col group">
            
            <div className="relative aspect-[3/4] w-full bg-[#f6f6f8] overflow-hidden">
              <div className="absolute top-2.5 left-2.5 z-20 flex items-center text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                <span className="bg-[#b38b7d] text-white px-2 py-0.5 font-bold">
                  NEW
                </span>
                <span className="bg-[#ff4d6d] text-white px-2.5 py-0.5 font-bold ml-[2px]">
                  DISCOUNT -10% OFF
                </span>
              </div>

              {product.verticalText && (
                <div className="absolute right-2 bottom-12 z-20 pointer-events-none origin-bottom-right rotate-90 translate-x-full">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono whitespace-nowrap">
                    {product.verticalText}
                  </span>
                </div>
              )}

              <img
                src={product.image}
                alt="Editorial look"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-[#ff334b] font-semibold tracking-wide">
                  {product.price}
                </span>
                <span className="text-neutral-500 line-through font-normal text-xs">
                  {product.originalPrice}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {product.colors.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelectedColors((prev) => ({ ...prev, [product.id]: idx }))
                        }
                        style={{ backgroundColor: color }}
                        aria-label={`Color ${color}`}
                        className={`w-3.5 h-3.5 rounded-none border border-neutral-700 transition-all ${
                          selectedColors[product.id] === idx ? "ring-1 ring-white" : ""
                        }`}
                      />
                    ))}
                  </div>
                )}

                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Save to Wishlist"
                  className="cursor-pointer text-white hover:opacity-80 transition-opacity"
                >
                  <svg
                    className={`w-4 h-4 transition-colors ${
                      wishlist.includes(product.id)
                        ? "fill-[#ff334b] text-[#ff334b]"
                        : "fill-white text-white"
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}