import { useState, useEffect } from "react";

export default function CartDrawer({ isOpen, onClose }) {
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("White/SM");

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

      {/* Right Slide-over Cart Drawer */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-[440px] sm:max-w-[480px] bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header Row: Title & Close Button */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
              CART
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="text-neutral-700 hover:text-black transition-transform hover:scale-110 p-1 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="text-center my-4">
            <p className="text-[11px] sm:text-xs font-bold text-neutral-800 tracking-wide uppercase">
              YOU ARE ONLY <span className="text-black font-extrabold">$37</span> AWAY FROM <span className="font-extrabold">FREE SHIPPING!</span>
            </p>
            <div className="w-full h-2.5 bg-neutral-100 rounded-full border border-neutral-300 mt-2 p-[1px] overflow-hidden">
              <div className="h-full bg-black rounded-full w-[55%]" />
            </div>
          </div>

          {/* Cart Item Row */}
          <div className="flex items-start gap-4 py-6 border-b border-neutral-200">
            <div className="w-20 h-24 sm:w-22 sm:h-28 bg-neutral-100 shrink-0 overflow-hidden">
              <img
                src="https://zand.sgp1.cdn.digitaloceanspaces.com/cache/catalog/products/2026-04/5232508027/STU_1664-cr-450x672.jpg"
                alt="STRIPED SLIIM TEEN IL521"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between self-stretch">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-xs sm:text-[13px] font-bold tracking-tight text-neutral-900 uppercase">
                    STRIPED SLIIM TEEN IL521
                  </h3>
                  <span className="text-xs sm:text-[13px] font-semibold text-neutral-900">
                    US $32.90
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-light mt-0.5">
                  White | S/M
                </p>
              </div>

              <div className="flex items-center gap-4 mt-3">
                {/* Quantity Input */}
                <div className="flex items-center border border-neutral-300 px-2.5 py-1 text-xs">
                  <span>{qty}</span>
                  <div className="flex flex-col ml-2.5 text-[8px] text-neutral-500">
                    <button
                      type="button"
                      onClick={() => setQty((prev) => prev + 1)}
                      className="hover:text-black cursor-pointer leading-none"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
                      className="hover:text-black cursor-pointer leading-none mt-0.5"
                    >
                      ▼
                    </button>
                  </div>
                </div>

                {/* Remove Item Button */}
                <button
                  type="button"
                  onClick={() => alert("Item removed")}
                  className="flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-700 transition cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>

          {/* YOU MAY ALSO LIKE Section */}
          <div className="py-6 border-b border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase mb-4">
              YOU MAY ALSO LIKE
            </h3>

            <div className="flex items-start gap-4">
              <div className="w-20 h-24 sm:w-22 sm:h-28 bg-neutral-100 shrink-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
                  alt="PINKY STRIPED PETER PAN"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between self-stretch">
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold tracking-tight text-neutral-900 uppercase">
                    PINKY STRIPED PETER PAN
                  </h4>
                  <p className="text-xs font-semibold text-neutral-800 mt-1">
                    US $32.90
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  {/* Variant Dropdown */}
                  <div className="relative flex-1">
                    <select
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="w-full appearance-none border border-neutral-300 text-xs px-3 py-2 pr-7 bg-white focus:outline-none focus:border-black cursor-pointer"
                    >
                      <option value="White/SM">White/SM</option>
                      <option value="Black/SM">Black/SM</option>
                      <option value="White/ML">White/ML</option>
                    </select>
                    <svg className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>

                  {/* Add to bag square icon button */}
                  <button
                    type="button"
                    onClick={() => alert("Added to cart")}
                    aria-label="Add to bag"
                    className="w-9 h-9 border border-black flex items-center justify-center hover:bg-neutral-100 transition cursor-pointer shrink-0"
                  >
                    <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="py-5 space-y-1.5 text-xs sm:text-[13px]">
            <div className="flex items-center justify-between text-neutral-600">
              <span>Total Products (1)</span>
              <span>US $32.90</span>
            </div>
            <div className="flex items-center justify-between text-neutral-900 font-bold">
              <span>Total excluding VAT</span>
              <span>US $32.90</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 mt-1">
            <button
              type="button"
              className="w-full py-3.5 bg-black text-white text-xs font-bold tracking-[0.18em] uppercase hover:bg-neutral-800 transition cursor-pointer"
            >
              VIEW CART
            </button>
            <button
              type="button"
              className="w-full py-3.5 bg-black text-white text-xs font-bold tracking-[0.18em] uppercase hover:bg-neutral-800 transition cursor-pointer"
            >
              CHECKOUT
            </button>
          </div>
        </div>

        {/* Bottom Secure Box & Payment Gateways */}
        <div className="mt-8 pt-4">
          {/* Secure Checkout Box with lock tag */}
          <div className="relative border border-neutral-300 px-4 py-3 text-xs text-neutral-700 flex items-center justify-between mb-4">
            <div className="absolute -top-3 left-3 bg-white px-1">
              <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <span>
              Let's to <strong className="text-black font-bold">secure & safe</strong> checkout.
            </span>
            <div className="w-7 h-5 bg-[#004f6e] text-white text-[8px] font-bold flex items-center justify-center tracking-tighter">
              ABA
            </div>
          </div>

          {/* Local Bank Logos Grid (ABA, Wing, ACLEDA, Canadia, Visa, Vattanac) */}
          <div className="grid grid-cols-3 gap-2 items-center">
            {/* ABA Bank */}
            <div className="h-10 bg-white border border-neutral-200 flex flex-col items-center justify-center p-1">
              <span className="text-[11px] font-black tracking-widest text-[#004f6e] leading-none">ABA</span>
              <span className="text-[5px] text-[#004f6e] tracking-tighter">BANK</span>
              <span className="text-[4px] text-neutral-400 leading-none">NATIONAL BANK OF CANADA GROUP</span>
            </div>

            {/* Wing Bank */}
            <div className="h-10 bg-[#9acd32] text-[#00a859] flex items-center justify-center px-2">
              <span className="text-[12px] font-black italic text-white drop-shadow-xs">Wing</span>
              <span className="text-[10px] font-bold text-[#005f73] ml-0.5">Bank</span>
            </div>

            {/* ACLEDA Bank */}
            <div className="h-10 bg-[#0f3b6c] text-white flex items-center justify-between px-2">
              <span className="text-[9px] font-bold font-serif leading-tight">អេស៊ីលីដា<br /><span className="text-[6px] font-sans">ACLEDA BANK</span></span>
              <svg className="w-4 h-4 text-[#eab308]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            {/* Canadia Bank */}
            <div className="h-9 bg-[#b91c1c] text-white flex items-center justify-center gap-1.5 px-2">
              <span className="w-3.5 h-3.5 rounded-full border border-yellow-300 flex items-center justify-center text-[7px] text-yellow-300">©</span>
              <span className="text-[8px] font-bold leading-none">ធនាគារ កាណាឌីយ៉ា<br /><span className="text-[5px] tracking-wider">CANADIA BANK</span></span>
            </div>

            {/* VISA */}
            <div className="h-9 bg-[#f4f4f6] text-[#1a1f71] flex items-center justify-center font-black italic text-sm tracking-widest">
              VISA
            </div>

            {/* Vattanac Bank */}
            <div className="h-9 bg-[#004098] text-white flex items-center justify-center gap-1 px-1">
              <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 21l9-18 9 18H3z" />
              </svg>
              <span className="text-[7px] font-bold leading-tight">ធនាគារ វឌ្ឍនៈ<br /><span className="text-[5px] font-light">Vattanac Bank</span></span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}