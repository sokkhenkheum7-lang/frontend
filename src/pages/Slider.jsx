import React from "react";

// Video & Image Assets
import promoVideo from "../assets/videos/update.mp4"; 
import promoVideo2 from "../assets/videos/boy.mp4";
import banner3 from "../assets/images/Slider3.png";

const collections = [
  {
    id: "base",
    brand: "ELÉVANCE SPECIAL EDITION",
    title: "THE BASE WITH RAKET",
    subtitle: "Essential silhouettes reimagined for timeless presence",
    video: promoVideo,
    banner: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80",
    products: [
      {
        id: "p1",
        name: "Ribbed Boat Neck Top",
        price: "$28.00",
        image:
          "https://i.pinimg.com/736x/31/9d/2e/319d2eee81be493c4ed4ec7545260019.jpg",
        url: "/products/ribbed-boat-neck-top",
      },
      {
        id: "p2",
        name: "Henley Long Sleeve",
        price: "$34.00",
        image:
          "https://i.pinimg.com/736x/5c/39/df/5c39dfb8250632d4518da528e8982f38.jpg",
        url: "/products/henley-long-sleeve",
      },
      {
        id: "p3",
        name: "Track Zip Jacket",
        price: "$65.00",
        image:
          "https://i.pinimg.com/1200x/f8/58/bc/f858bc9485efa812cee07817bf48dd29.jpg",
        url: "/products/track-zip-jacket",
      },
      {
        id: "p4",
        name: "Side Stripe Wide Pants",
        price: "$45.00",
        image:
          "https://i.pinimg.com/736x/43/ef/09/43ef099591b35482dff2cef5cb5bc240.jpg",
        url: "/products/side-stripe-wide-pants",
      },
    ],
  },
  {
    id: "basics",
    brand: "ELÉVANCE CASUAL STUDIO",
    title: "START WITH THE BASICS",
    subtitle: "Clean lines, effortless layers, and zero overthinking",
    video: promoVideo2, 
    banner: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&auto=format&fit=crop&q=80",
    products: [
      {
        id: "p5",
        name: "Seamed Oversized Hoodie - Black",
        price: "$52.00",
        image:
          "https://i.pinimg.com/736x/54/b4/27/54b427a0126124c7e8853b5aaa7ba4ef.jpg",
        url: "/products/seamed-oversized-hoodie-black",
      },
      {
        id: "p6",
        name: "Seamed Oversized Hoodie - Gray",
        price: "$52.00",
        image:
          "https://i.pinimg.com/736x/1e/4f/a6/1e4fa6b474c98820e2035c79dec43ea1.jpg",
        url: "/products/seamed-oversized-hoodie-gray",
      },
      {
        id: "p7",
        name: "Foldover Bermuda Sweatshorts - Pink",
        price: "$30.00",
        image:
          "https://i.pinimg.com/1200x/36/d9/0e/36d90eb045b8936c84c2b96fa747f5e8.jpg",
        url: "/products/foldover-bermuda-sweatshorts-pink",
      },
      {
        id: "p8",
        name: "Foldover Bermuda Sweatshorts - Black",
        price: "$30.00",
        image:
          "https://i.pinimg.com/1200x/0f/05/20/0f0520870c9bacd9ce9f1bec841f54dd.jpg",
        url: "/products/foldover-bermuda-sweatshorts-black",
      },
    ],
  },
  {
    id: "soft-spot",
    brand: "LOUNGE ARCHIVE",
    title: "THE SOFT SPOT",
    subtitle: "Comfortable enough to stay in. Good enough to step out",
    banner: banner3,
    products: [],
  },
];

export default function Slider() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-[#fcfcfc] text-neutral-900 min-h-screen pb-24 select-none overflow-x-hidden">
      {/* Marquee Animation Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 22s linear infinite;
        }
      `}</style>

      {/* Top Notice Marquee */}
      <div className="w-full bg-black text-white overflow-hidden py-3 tracking-[0.25em] text-[11px] font-semibold uppercase">
        <div className="animate-marquee whitespace-nowrap">
          <span className="w-1/2 text-center">
            ★ PROMOTION 15% OFF FOR STUDENTS • COMPLIMENTARY SHIPPING OVER US $25 IN CAMBODIA • AUTUMN/WINTER LOOKBOOK ★
          </span>
          <span className="w-1/2 text-center">
            ★ PROMOTION 15% OFF FOR STUDENTS • COMPLIMENTARY SHIPPING OVER US $25 IN CAMBODIA • AUTUMN/WINTER LOOKBOOK ★
          </span>
        </div>
      </div>

      {/* Grand Hero Promotional Banner */}
      <section className="relative w-full h-[45vh] sm:h-[62vh] md:h-[72vh] overflow-hidden bg-neutral-900">
        <img
          src="https://zand.sgp1.cdn.digitaloceanspaces.com/catalog/banner/Ten11%3E2026%3EJuly/Collection/Hero%20banner/Pchun_ben_web_Main_Banner(2160x798).jpg"
          alt="Seasonal Special Event"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Collections Feed */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 space-y-24 mt-7">
        {collections.map((section) => (
          <section key={section.id} className="w-full">
            {/* Editorial Header */}
            <header className="text-center max-w-2xl mx-auto mb-8 px-4">
              {section.brand && (
                <p className="text-[11px] tracking-[0.3em] font-bold text-neutral-400 uppercase mb-2">
                  {section.brand}
                </p>
              )}
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-neutral-900 mb-3">
                {section.title}
              </h2>
              <div className="h-[2px] w-10 bg-black mx-auto mb-3" />
              <p className="text-xs sm:text-sm text-neutral-500 font-normal tracking-wide">
                {section.subtitle}
              </p>
            </header>

            {/* Video / Image Cinema Banner */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-neutral-900 aspect-[16/9] sm:aspect-[21/9] mb-8 group">
              {section.video ? (
                <video
                  key={section.id}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                >
                  <source src={section.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={section.banner}
                  alt={section.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
              )}
            </div>

            {/* Curated Product Grid */}
            {section.products.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mt-2">
                {section.products.map((item) => (
                  <article key={item.id} className="group flex flex-col cursor-pointer">
                    <div className="relative aspect-[2/3] bg-neutral-100 overflow-hidden mb-3.5">
                      {item.tag && (
                        <span className="absolute top-2.5 left-2.5 z-10 bg-black/80 backdrop-blur-md text-white text-[10px] tracking-widest uppercase px-2 py-1 font-semibold">
                          {item.tag}
                        </span>
                      )}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-neutral-800 truncate tracking-tight group-hover:underline">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-neutral-950">
                        {item.price}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Floating Bottom Discount Pill */}
      <aside className="fixed bottom-6 left-6 z-40">
        <div className="bg-black/90 backdrop-blur-md text-white text-[11px] font-bold px-4 py-2.5 rounded-full shadow-2xl tracking-[0.15em] border border-white/10 uppercase">
          ★ EXTRA 10% OFF AUTO-APPLIED
        </div>
      </aside>

      {/* Scroll-to-Top Button */}
      <aside className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-11 h-11 rounded-full border border-neutral-200 bg-white/95 text-neutral-900 flex items-center justify-center hover:bg-black hover:text-white shadow-xl transition-all duration-300 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </aside>
    </main>
  );
}