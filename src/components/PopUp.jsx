import { useState, useEffect } from "react";

export default function PopUp({ isOpen, onClose, onSaveNow }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 19,
    minutes: 55,
    seconds: 29,
  });

  // បិទ Scroll នៅលើ Page ទាំងមូលពេល Pop-up កំពុងបើក
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

  // Countdown timer logic
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const pad = (n) => String(n).padStart(2, "0");

  return (
    /* z-[9999] ធានាថា Overlay នេះនៅពីលើ Navbar និង Components ទាំងអស់ */
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 select-none pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* ផ្ទាំង Pop-up Card */}
      <div
        className="relative flex flex-col md:flex-row w-full max-w-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ប៊ូតុងបិទ (X) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-3 right-4 z-20 text-neutral-500 hover:text-black cursor-pointer transition-colors p-1"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ផ្នែករូបភាពខាងឆ្វេង */}
        <div className="md:w-1/2 w-full bg-neutral-100 relative min-h-72 md:min-h-full">
          <img
            src="https://lewkin.com/cdn/shop/files/002_7fcffe8f-b574-475f-a712-737443d6fe09.webp?height=903&v=1767140206"
            alt="Flash sale promo"
            className="w-full h-full object-cover object-top pointer-events-none"
          />
        </div>

        {/* ផ្នែកមាតិកាខាងស្តាំ */}
        <div className="md:w-1/2 w-full p-8 flex flex-col items-center justify-center text-center">
          <div className="bg-black text-white px-3 py-1 text-xs font-black tracking-wider uppercase transform -rotate-2 mb-4">
            FLASH SALE
            <span className="block text-[9px] font-normal tracking-normal">WEEKEND ONLY!</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 uppercase mb-5">
            60% OFF SITEWIDE*
          </h2>

          {/* នាឡិការាប់ថយក្រោយ */}
          <div className="flex gap-2 mb-4 text-center">
            {[
              { label: "days", val: timeLeft.days },
              { label: "hrs", val: timeLeft.hours },
              { label: "mins", val: timeLeft.minutes },
              { label: "secs", val: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="w-10 h-10 bg-black text-white font-mono font-bold text-lg flex items-center justify-center rounded-xs shadow-inner">
                  {pad(unit.val)}
                </span>
                <span className="text-[10px] text-neutral-500 uppercase mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Coupon Code */}
          <div className="mb-6">
            <span className="bg-cyan-100 text-neutral-900 font-mono font-bold text-sm tracking-wider px-2 py-0.5">
              CODE: FLASH60
            </span>
          </div>

          {/* ប៊ូតុង Action */}
          <button
            type="button"
            onClick={onSaveNow}
            className="w-full bg-black hover:bg-neutral-800 text-white font-bold py-3 uppercase tracking-widest text-sm transition-colors cursor-pointer"
          >
            SAVE NOW
          </button>

          <p className="text-[10px] text-neutral-400 italic mt-3 self-end">
            *Exclusions apply
          </p>
        </div>
      </div>
    </div>
  );
}