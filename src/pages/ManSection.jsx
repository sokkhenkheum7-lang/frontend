import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: 1,
    type: "minimal",
    tag: "GENZ",
    image: "https://i.pinimg.com/736x/71/6b/57/716b572ce572f90e53fb031f76301243.jpg",
    width: "w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]",
  },
  {
    id: 2,
    type: "button-only",
    buttonText: "EXPLORE COLLECTION",
    image: "https://i.pinimg.com/1200x/f2/c2/f8/f2c2f85a098d4db21d1bd88b8b8bfcba.jpg",
    width: "w-[360px] sm:w-[440px] md:w-[500px] lg:w-[560px]",
    marginLeft: "-ml-2 sm:-ml-6",
  },
  {
    id: 3,
    type: "editorial",
    title: "V CONFIDENT\nFOR WOMEN",
    subtitle: "a phrase used to describe deep-seated, self-assurance across every aspect of a woman's life.",
    buttonText: "EXPLORE COLLECTION",
    tag: "Exclusive",
    image: "https://i.pinimg.com/1200x/08/d8/df/08d8df5db7715ade14b54f2e2291cd54.jpg",
    width: "w-[420px] sm:w-[500px] md:w-[580px] lg:w-[640px]",
  },
  {
    id: 4,
    type: "editorial",
    title: "URBAN\nCHIC",
    subtitle: "Effortless silhouettes curated for high-street modern aesthetics.",
    buttonText: "EXPLORE COLLECTION",
    tag: "Trending",
    image: "https://i.pinimg.com/736x/ec/d5/ed/ecd5edcc0ea87b5a5d8f5efe8cb1241a.jpg",
    width: "w-[360px] sm:w-[440px] md:w-[500px] lg:w-[560px]",
  },
  {
    id: 5,
    type: "minimal",
    tag: "EDITION",
    image: "https://i.pinimg.com/1200x/21/d7/85/21d785024cdb91d76b38af30173f1fca.jpg",
    width: "w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]",
  },
  {
    id: 6,
    type: "editorial",
    title: "THE AUTUMN\nSTATEMENT",
    subtitle: "Understated tailoring crafted with architectural grace.",
    buttonText: "EXPLORE COLLECTION",
    tag: "Exclusive",
    image: "https://i.pinimg.com/736x/86/88/a6/8688a6bccc82af872dbbe895368a58ec.jpg",
    width: "w-[420px] sm:w-[500px] md:w-[580px] lg:w-[640px]",
  },
];

export default function ModelingSection() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll loop every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = sliderRef.current;
      if (!container) return;

      const cardWidth = container.firstElementChild?.offsetWidth || 400;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Loop back smoothly to the beginning if reaching the end
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full py-1 select-none">
      {/* Scrollable Track */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative shrink-0 snap-start h-[580px] sm:h-[620px] md:h-[660px] overflow-hidden group ${
              card.width
            } ${card.marginLeft || ""}`}
          >
            {/* Background / Main Image */}
            <img
              src={card.image}
              alt={card.title || card.tag}
              className={`w-full h-full ${
                card.type === "minimal"
                  ? "object-contain object-center p-6"
                  : "object-cover object-top"
              }`}
            />

            {/* Editorial Centered Content Overlay */}
            {card.type === "editorial" && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight drop-shadow-md whitespace-pre-line">
                  {card.title}
                </h2>

                {card.subtitle && (
                  <p className="mt-3 text-[11px] sm:text-xs text-neutral-200/90 max-w-xs font-light tracking-wide leading-relaxed drop-shadow-sm">
                    {card.subtitle}
                  </p>
                )}

                <a
                  href="#"
                  className="mt-5 px-6 py-2 bg-[#f43f5e] hover:bg-[#e11d48] text-white text-[11px] font-semibold tracking-widest uppercase transition-colors"
                >
                  {card.buttonText}
                </a>
              </div>
            )}

            {/* Button-only Centered Overlay */}
            {card.type === "button-only" && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                <a
                  href="#"
                  className="mt-6 px-6 py-2 bg-[#f43f5e] hover:bg-[#e11d48] text-white text-[11px] font-semibold tracking-widest uppercase transition-colors"
                >
                  {card.buttonText}
                </a>
              </div>
            )}

            {/* Bottom Left Corner Tag */}
            {card.tag && (
              <div className="absolute bottom-5 left-5 z-10">
                <span className="text-[#f43f5e] text-sm font-semibold tracking-wide uppercase">
                  {card.tag}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}