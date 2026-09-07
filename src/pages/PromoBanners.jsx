export default function PromoBanners() {
  const promos = [
    {
      id: 1,
      title: "10% off code: NEW10",
      buttonText: "10% OFF FIRST ORDER",
      icon: (
        <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M16 8V6a4 4 0 0 0-8 0v2M5 8h14l1 13H4L5 8z" />
          <line x1="9" y1="13" x2="15" y2="17" strokeLinecap="round" />
          <circle cx="10" cy="14" r="0.5" fill="currentColor" />
          <circle cx="14" cy="16" r="0.5" fill="currentColor" />
          <line x1="4.5" y1="19.5" x2="19.5" y2="19.5" strokeDasharray="1.5 1.5" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Give $20,Get $20",
      buttonText: "INVITE YOUR FRIEND",
      icon: (
        <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="m3 11 18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          <path d="M21 9a3 3 0 0 1 0 6" />
          <line x1="22" y1="6" x2="23" y2="5" strokeLinecap="round" />
          <line x1="22" y1="18" x2="23" y2="19" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "EARN POINTS",
      buttonText: "JOIN CLUB LEW KISS",
      icon: (
        <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="9.5" />
          <circle cx="12" cy="12" r="7.5" strokeDasharray="1.5 1.5" />
          <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="600" fill="currentColor" stroke="none" fontFamily="sans-serif">$</text>
        </svg>
      ),
    },
    {
      id: 4,
      title: "10% Off code: APP10",
      buttonText: "DOWNLOAD APP",
      icon: (
        <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 4h2M12 19h.01" strokeLinecap="round" />
          <path d="m14 12 3-3a1.5 1.5 0 0 1 2.1 2.1l-2.1 2.1a2 2 0 0 1 1.5 2v2a2 2 0 0 1-2 2h-1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {promos.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-between text-center group cursor-pointer">
            <div className="mb-4 text-black">
              <div className="mb-3 transform group-hover:-translate-y-1 transition-transform duration-200">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold tracking-tight text-black">
                {item.title}
              </h3>
            </div>

            <button
              type="button"
              className="w-full py-4 bg-black text-white text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors duration-150 cursor-pointer"
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}