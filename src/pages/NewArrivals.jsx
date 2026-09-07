export default function NewArrivals() {
  return (
    <section className="w-full bg-white text-neutral-400 py-16 sm:py-24 px-6 md:px-12 lg:px-20 select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        <div>
            <h2 className="text-2xl lg:text-4xl font-Regular tracking-wide text-neutral-900">
              New Collection
            </h2>
        </div>
        {/* Top Row: Description & Upper "VIEW ALL" */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs sm:text-sm font-light tracking-wide text-neutral-400 max-w-sm">
            Precision tailoring meets effortless drape. Discover the pieces defining the season.
          </p>
          <a
            href="#"
            className="px-5 py-2 text-[11px] font-medium tracking-[0.2em] text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-500 hover:text-white transition duration-200 uppercase"
          >
            VIEW ALL
          </a>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Large Card (Occupies 7 Columns on desktop) */}
          <div className="lg:col-span-7 relative group overflow-hidden bg-neutral-900 aspect-[4/3] sm:aspect-[16/11]">
            {/* "NEW ARRIVAL" Pill */}
            <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-xs text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white uppercase border border-neutral-700">
              NEW ARRIVAL
            </span>

            <img
              src="https://i.pinimg.com/1200x/dd/cd/70/ddcd70b0982c7818456f8a62dfe740c8.jpg"
              alt="Editorial Menswear"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Column (Occupies 5 Columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-10">
            {/* Small Landscape Image */}
            <div className="relative group overflow-hidden bg-neutral-900 aspect-[16/9] w-full">
              <img
                src="https://i.pinimg.com/1200x/1d/b4/50/1db4501c9908bee864697df6b53c7c6f.jpg"
                alt="Minimal Portrait"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Middle Description */}
            <p className="text-xs sm:text-sm font-light text-neutral-400 tracking-wide leading-relaxed">
              Reimagining classic comfort with architectural precision.
            </p>
          </div>
        </div>

        {/* Bottom Row: Three Cards */}
         <div>
            <h2 className="text-2xl lg:text-4xl font-Regular tracking-wide text-neutral-900">
              Featured Styles
            </h2>
         </div>
        {/* Bottom Row: Footer Subtext & Lower "VIEW ALL" */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10 pt-1">
          <p className="text-[11px] sm:text-xs font-light text-neutral-500 tracking-wide max-w-sm">
            refers to a fresh, newly released line of garments created by a fashion brand for an upcoming season, trend, or specific theme.
          </p>
          <a
            href="#"
            className="px-5 py-2 text-[11px] font-medium tracking-[0.2em] text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-500 hover:text-white transition duration-200 uppercase"
          >
            VIEW ALL
          </a>
        </div>

      </div>
    </section>
  );
}