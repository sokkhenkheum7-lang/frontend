import React, { useState } from "react";

export default function ProductDetail({
  product,
  onBack,
  onSelectProduct,
  allProducts = [],
}) {
  const thumbnails = [
    product.image,
    product.hoverImage || product.image,
    product.image,
    product.hoverImage || product.image,
  ];

  const [mainImage, setMainImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || "#0284c7"
  );
  const [detailsOpen, setDetailsOpen] = useState(true);

  const sizes = ["XS", "S", "M", "L"];

  const similarItems = allProducts
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="w-full bg-white text-neutral-900 select-none">
      {/* Top Navbar with Functional Back Button */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#ff334b] transition cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Sale Collection</span>
          </button>
        </div>
      </header>

      {/* Main Product Layout */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Thumbnails */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-3">
            {thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setMainImage(thumb)}
                className={`aspect-[3/4] w-full bg-neutral-100 overflow-hidden border transition ${
                  mainImage === thumb
                    ? "border-black"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumb ${idx}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/4] w-full bg-[#f6f6f8] overflow-hidden">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Product Details Info */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                {product.title}
              </h2>
              <button
                type="button"
                aria-label="Share"
                className="text-neutral-400 hover:text-black cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>

            {/* Pricing & Badges */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#ff334b] font-bold text-base">
                {product.price}
              </span>
              <span className="text-neutral-400 line-through text-xs">
                {product.originalPrice}
              </span>
            </div>

            <div className="flex items-center gap-1.5 mt-2 text-[10px] font-bold uppercase tracking-wider">
              <span className="bg-[#b38b7d] text-white px-2 py-0.5">NEW</span>
              <span className="bg-[#ff4d6d] text-white px-2.5 py-0.5">
                {product.discount || "DISCOUNT -50% OFF"}
              </span>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed mt-4">
              A masterclass in restraint. This tailored piece is constructed
              from lightweight, premium cotton-blend fabric, offering an easy
              structured silhouette that drapes gracefully. Sharp lines and
              minimal detailing provide an uncompromisingly clean aesthetic.
            </p>

            {/* Color Selector */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-wider block mb-2">
                Color
              </span>
              <div className="flex items-center gap-2">
                {(product.colors || ["#0284c7", "#1e293b", "#000000"]).map(
                  (c, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      style={{ backgroundColor: c }}
                      className={`w-5 h-5 border border-neutral-300 transition cursor-pointer ${
                        selectedColor === c
                          ? "ring-2 ring-offset-2 ring-black"
                          : ""
                      }`}
                    />
                  )
                )}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Size
                </span>
                <button
                  type="button"
                  className="text-[11px] underline text-neutral-500 hover:text-black cursor-pointer"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`py-2 text-xs font-semibold border transition cursor-pointer ${
                      selectedSize === s
                        ? "bg-black text-white border-black"
                        : "bg-white text-neutral-800 border-neutral-300 hover:border-black"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag */}
            <button
              type="button"
              className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 mt-6 hover:bg-neutral-800 transition cursor-pointer"
            >
              ADD TO BAG
            </button>

            {/* Details Accordion */}
            <div className="border-t border-neutral-200 mt-8 pt-4">
              <button
                type="button"
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider py-1 cursor-pointer"
              >
                <span>Details</span>
                <span>{detailsOpen ? "−" : "+"}</span>
              </button>
              {detailsOpen && (
                <ul className="text-xs text-neutral-600 space-y-1.5 mt-3 list-disc list-inside">
                  <li>100% Italian Virgin Wool / Compact Cotton</li>
                  <li>Viscose blend inner lining</li>
                  <li>Two internal pockets</li>
                  <li>Dry clean only</li>
                  <li>Made in Portugal</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Items Section */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-8 py-16 border-t border-neutral-200">
        <h3 className="text-base font-black tracking-tight uppercase mb-1">
          SIMILAR ITEMS
        </h3>
        <p className="text-xs text-neutral-500 mb-6">
          Order start 5 pcs over free delivery and get special price discount 10%
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {similarItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSelectProduct(item);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h4 className="text-xs font-semibold truncate">{item.title}</h4>
              <div className="flex items-center gap-1.5 mt-0.5 text-xs">
                <span className="text-[#ff334b] font-bold">{item.price}</span>
                <span className="text-neutral-400 line-through text-[11px]">
                  {item.originalPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}