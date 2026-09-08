export default function MegaMenu({ currentMenu, isOpen }) {
  if (!currentMenu) return null;

  return (
    <div
      className={`hidden md:block absolute top-full left-0 w-full bg-white transition-all duration-300 ease-out z-40 overflow-hidden ${
        isOpen
          ? "opacity-100 max-h-[550px] shadow-xl pointer-events-auto"
          : "opacity-0 max-h-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 py-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Staggered Link Columns */}
          <div className="col-span-7 lg:col-span-8 grid grid-cols-3 gap-6">
            {currentMenu.columns.map((col, colIdx) => (
              <div
                key={col.title}
                style={{ transitionDelay: `${colIdx * 45}ms` }}
                className={`space-y-4 transition-all duration-300 ease-out ${
                  isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
              >
                <h4 className="text-[13px] font-bold tracking-wider text-black uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((item, itemIdx) => (
                    <li
                      key={item}
                      style={{ transitionDelay: `${colIdx * 40 + itemIdx * 20}ms` }}
                      className={`transition-all duration-300 ease-out ${
                        isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                      }`}
                    >
                      <a
                        href="#"
                        className="text-[12px] text-neutral-700 hover:text-black font-medium tracking-tight block transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promotional Photo Cards */}
          <div className="col-span-5 lg:col-span-4 flex items-center justify-end gap-5">
            {currentMenu.promos.map((promo, pIdx) => (
              <div
                key={pIdx}
                style={{ transitionDelay: `${120 + pIdx * 60}ms` }}
                className={`flex flex-col items-start w-[170px] lg:w-[190px] group cursor-pointer transition-all duration-400 ease-out ${
                  isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-3 opacity-0 scale-95"
                }`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={promo.image}
                    alt={promo.label}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {promo.badge && (
                    <div className="absolute top-2 left-2 bg-[#0284c7] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                      {promo.badge}
                    </div>
                  )}
                </div>
                <span className="mt-2.5 text-[12px] font-semibold text-neutral-900 group-hover:text-black flex items-center gap-1">
                  {promo.label}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}