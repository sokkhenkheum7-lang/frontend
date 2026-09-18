export default function MegaMenu({ currentMenu, isOpen, onSelectFilter }) {
  if (!currentMenu) return null;

  const columns = currentMenu.columns || [];
  const promos = currentMenu.promos || [];

  return (
    <div
      className={`hidden md:block absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-2xl transition-all duration-300 ease-out z-50 overflow-hidden select-none ${
        isOpen
          ? "opacity-100 max-h-[650px] pointer-events-auto"
          : "opacity-0 max-h-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 py-8">
        {/* Flash Sale Banner */}
        {currentMenu.featuredPromo && (
          <div className="mb-6 flex flex-wrap items-center justify-between bg-gradient-to-r from-[#0d3b66] via-[#00a896] to-[#028090] text-white px-5 py-2.5 rounded-xs text-xs font-bold tracking-widest uppercase">
            <span>
              {currentMenu.featuredPromo.title} • USE CODE:{" "}
              {currentMenu.featuredPromo.code}
            </span>
            <span className="underline cursor-pointer hover:opacity-85">
              {currentMenu.featuredPromo.bannerText} →
            </span>
          </div>
        )}

        {/* Sub Filters Header */}
        {(currentMenu.title || currentMenu.subFilters) && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-neutral-200 gap-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase">
              {currentMenu.title}
            </h3>

            {currentMenu.subFilters && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {currentMenu.subFilters.map((filter, index) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() =>
                      onSelectFilter && onSelectFilter(filter, currentMenu.title)
                    }
                    className={`text-[11px] font-semibold px-3 py-1.5 border transition-colors whitespace-nowrap cursor-pointer ${
                      index === 0
                        ? "bg-black text-white border-black"
                        : "bg-white text-neutral-700 border-neutral-300 hover:border-black hover:text-black"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Links and Promo Cards Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Columns */}
          <div
            className={`${
              promos.length > 0 ? "col-span-7 lg:col-span-8" : "col-span-12"
            } grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6`}
          >
            {columns.map((col, colIdx) => (
              <div
                key={col.title || col.heading || colIdx}
                style={{ transitionDelay: `${colIdx * 40}ms` }}
                className={`space-y-3.5 transition-all duration-300 ease-out ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                {/* Column Header Button */}
                <button
                  type="button"
                  onClick={() =>
                    onSelectFilter &&
                    onSelectFilter("ALL", col.title || col.heading)
                  }
                  className="text-[12px] font-bold tracking-wider text-black uppercase hover:text-[#ff334b] transition text-left cursor-pointer"
                >
                  {col.title || col.heading}
                </button>

                {/* Sub-links */}
                <ul className="space-y-2">
                  {col.links?.map((link, linkIdx) => (
                    <li
                      key={link}
                      style={{
                        transitionDelay: `${colIdx * 30 + linkIdx * 15}ms`,
                      }}
                      className={`transition-all duration-300 ease-out ${
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-1 opacity-0"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          onSelectFilter &&
                          onSelectFilter(link, col.title || col.heading)
                        }
                        className="text-[13px] text-neutral-600 hover:text-black hover:underline transition-colors block text-left cursor-pointer"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promotional Image Cards */}
          {promos.length > 0 && (
            <div className="col-span-5 lg:col-span-4 flex items-center justify-end gap-4">
              {promos.map((promo, pIdx) => (
                <div
                  key={pIdx}
                  style={{ transitionDelay: `${100 + pIdx * 50}ms` }}
                  className={`flex flex-col items-start w-[160px] lg:w-[185px] group cursor-pointer transition-all duration-400 ease-out ${
                    isOpen
                      ? "translate-y-0 opacity-100 scale-100"
                      : "-translate-y-2 opacity-0 scale-95"
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={promo.image}
                      alt={promo.label || "Promo"}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {promo.badge && (
                      <div className="absolute top-2 left-2 bg-[#ff4d6d] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
                        {promo.badge}
                      </div>
                    )}
                  </div>
                  <span className="mt-2 text-[12px] font-semibold text-neutral-900 group-hover:text-black flex items-center gap-1">
                    {promo.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      ›
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}