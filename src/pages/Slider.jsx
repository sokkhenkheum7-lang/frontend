import { useState, useEffect, useRef } from "react";

// 1. Import your local images from assets/images
import slide1 from "../assets/images/Slide1.png";
import slide2 from "../assets/images/Slide2.png";
import slide3 from "../assets/images/Slide3.png"; // If you didn't rename it yet, change to Sile3.png

// 2. Use the imported variables in your slides array
const slides = [
  {
    id: 1,
    image: slide1,
  },
  {
    id: 2,
    image: slide2,
  },
  {
    id: 3,
    image: slide3,
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Mobile swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchStartX.current - touchEndX.current > threshold) {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
    if (touchStartX.current - touchEndX.current < -threshold) {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[65vh] sm:h-[80vh] lg:h-[92vh] overflow-hidden bg-neutral-900 select-none"
    >
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover object-center sm:object-top filter brightness-[0.95]"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-5 sm:bottom-8 md:bottom-10 inset-x-0 z-20 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="p-2 cursor-pointer flex items-center justify-center focus:outline-none"
          >
            <span
              className={`block transition-all duration-300 rounded-full h-1 sm:h-1.5 ${
                current === index
                  ? "w-6 sm:w-8 bg-neutral-900 shadow-xs"
                  : "w-1.5 bg-white/70 hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}