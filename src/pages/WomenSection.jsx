import { useEffect, useRef, useState } from "react";

const menCards = [
  {
    id: 1,
    type: "center-btn",
    image: "https://i.pinimg.com/736x/a2/9d/1b/a29d1bac68e9fcdc4338d620dada5ae8.jpg",
    width: "w-[340px] sm:w-[400px] md:w-[460px] lg:w-[500px]",
    buttonText: "EXPLORE COLLECTION",
  },
  {
    id: 2,
    type: "framed",
    image: "https://i.pinimg.com/736x/e3/62/1b/e3621b7008a2d341ade6ae5ec8aa4a2e.jpg",
    width: "w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px]",
    subtitle: "a phrase used to describe deep-seated poise in every aspect of life.",
    title: "MEN\nCLOTHING",
  },
  {
    id: 3,
    type: "left-btn",
    image: "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/promotion/promotionpage17887507940576726002d5f73.jpg",
    width: "w-[480px] sm:w-[580px] md:w-[680px] lg:w-[760px]",
    buttonText: "EXPLORE COLLECTION",
    tag: "MEN CLOTHING",
  },
  {
    id: 4,
    type: "center-btn",
    image: "https://i.pinimg.com/1200x/db/29/26/db292624dbf9a938998b4b69ac999b3d.jpg",
    width: "w-[340px] sm:w-[400px] md:w-[460px] lg:w-[500px]",
    buttonText: "EXPLORE COLLECTION",
  },
  {
    id: 5,
    type: "framed",
    image: "https://i.pinimg.com/736x/b6/3e/cb/b63ecb65520d8f611459d0deeb03677f.jpg",
    width: "w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px]",
    subtitle: "architectural lines tailored for effortless modern styling.",
    title: "SUMMER\nEDITION",
  },
  {
    id: 6,
    type: "left-btn",
    image: "https://i.pinimg.com/736x/3b/b3/bd/3bb3bd67aaade8c55abe7b84c93d93e2.jpg",
    width: "w-[480px] sm:w-[580px] md:w-[680px] lg:w-[760px]",
    buttonText: "EXPLORE COLLECTION",
    tag: "NEW RELEASES",
  },
];

export default function MenSection() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic (every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = sliderRef.current;
      if (!container) return;

      const cardWidth = container.firstElementChild?.offsetWidth || 400;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Loop back to start if at the end
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full select-none py-4">
      {/* Scrollable track */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {menCards.map((card) => (
          <div
            key={card.id}
            className={`relative shrink-0 snap-start h-[580px] sm:h-[620px] md:h-[660px] overflow-hidden group ${card.width}`}
          >
            {/* 1. Center Button Card */}
            {card.type === "center-btn" && (
              <div className="w-full h-full relative flex items-center justify-center">
                <img
                  src={card.image}
                  alt="Men Style"
                  className="w-full h-full object-cover object-center filter contrast-[1.03]"
                />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                  <a
                    href="#"
                    className="mt-6 px-6 py-3 bg-[#ff2d55] hover:bg-[#e02447] text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors"
                  >
                    {card.buttonText}
                  </a>
                </div>
              </div>
            )}

            {/* 2. Framed Card */}
            {card.type === "framed" && (
              <div className="w-full h-full p-4 sm:p-6 md:p-8 flex items-center justify-center ">
                <div className="relative w-full h-full bg-[#f4f4f6] flex flex-col justify-end p-6 overflow-hidden">
                  <img
                    src={card.image}
                    alt="Men Clothing Frame"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="relative z-10 space-y-1">
                    <p className="text-[10px] text-neutral-400 font-light max-w-[200px] leading-tight">
                      {card.subtitle}
                    </p>
                    <h3 className="text-sm font-semibold text-[#ff2d55] uppercase tracking-wide whitespace-pre-line">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Left Button / Editorial Card */}
            {card.type === "left-btn" && (
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={card.image}
                  alt="Editorial Men Portrait"
                  className="w-full h-full object-cover object-top filter brightness-90"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-8 sm:px-14 md:px-16 text-left">
                  <a
                    href="#"
                    className="mt-6 px-6 py-2 bg-[#ff2d55] hover:bg-[#e02447] text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors"
                  >
                    {card.buttonText}
                  </a>
                </div>
                {card.tag && (
                  <div className="absolute bottom-5 left-8 z-10">
                    <span className="text-[#ff2d55] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                      {card.tag}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}