import { useEffect } from "react";

const initialWishlist = [
  {
    id: 1,
    title: "Structured Wool Blazer",
    image: "https://zand.sgp1.cdn.digitaloceanspaces.com/cache/catalog/products/2026-04/5232508027/STU_1664-cr-450x672.jpg",
    price: "US $32.70",
    color: "Black",
    size: "M",
  },
  {
    id: 2,
    title: "Pinky Striped Peter Pan",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    price: "US $32.90",
    color: "White",
    size: "S/M",
  },
];

export default function WishlistDrawer({ isOpen, onClose }) {
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
    <div className="fixed inset-0 z-[100] overflow-hidden select-none">
      {/* Dimmed Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Right Slide-over Wishlist Drawer */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-[420px] sm:max-w-[460px] bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black uppercase">
                WISHLIST
              </h2>
              <span className="text-xs font-bold text-neutral-400">
                ({initialWishlist.length})
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close wishlist"
              className="text-neutral-700 hover:text-black transition-transform hover:scale-110 p-1 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="divide-y divide-neutral-200">
            {initialWishlist.map((item) => (
              <div key={item.id} className="flex items-start gap-4 py-5 group">
                {/* Thumbnail */}
                <div className="w-20 h-26 bg-neutral-100 shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between self-stretch">
                  <div>
                    <div className="flex items-start justify-between">
                      <h3 className="text-xs sm:text-[13px] font-bold text-neutral-900 uppercase leading-snug">
                        {item.title}
                      </h3>
                      <button
                        type="button"
                        aria-label="Remove item"
                        className="text-neutral-400 hover:text-black transition cursor-pointer ml-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-[11px] text-neutral-500 font-light mt-0.5">
                      {item.color} | {item.size}
                    </p>
                    <p className="text-xs font-semibold text-neutral-900 mt-1">
                      {item.price}
                    </p>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    type="button"
                    className="w-full py-2 mt-3 bg-black text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase hover:bg-neutral-800 transition cursor-pointer"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Area */}
        <div className="pt-6 border-t border-neutral-200">
          <button
            type="button"
            className="w-full py-3.5 bg-neutral-100 text-neutral-900 text-xs font-bold tracking-[0.18em] uppercase hover:bg-neutral-200 transition cursor-pointer"
          >
            VIEW FULL WISHLIST
          </button>
        </div>
      </aside>
    </div>
  );
}