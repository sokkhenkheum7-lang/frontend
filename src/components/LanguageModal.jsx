import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const countries = [
  { country: "Cambodia ( Riel )", language: "Khmer" },
  { country: "Vietnam ( Dong )", language: "English" },
  { country: "Singapore (USD)", language: "English" },
  { country: "Thailand ( THB )", language: "English" },
  { country: "Japan ( JPY )", language: "English" },
  { country: "South Korea ( KRW )", language: "English" },
];

const regionStores = [
  {
    name: "CAMBODIA",
    currency: "(USD)",
    language: "Khmer",
    flag: (
      <svg className="w-8 h-5 shadow-xs rounded-[1px]" viewBox="0 0 64 40">
        <rect width="64" height="40" fill="#032ea1" />
        <rect y="10" width="64" height="20" fill="#e00025" />
        <path d="M26 26h12v-2h-1v-4h-2v-2h-1v-3h-2v-2h-2v2h-2v3h-1v2h-2v4h-1v2h2z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "United Kingdom",
    currency: "$(USD)",
    language: "English",
    flag: (
      <svg className="w-8 h-5 shadow-xs rounded-[1px]" viewBox="0 0 60 30">
        <clipPath id="uk-flag-sidebar">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-sidebar)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    ),
  },
  {
    name: "Vietnam",
    currency: "$(Dong)",
    language: "English",
    flag: (
      <svg className="w-8 h-5 shadow-xs rounded-[1px]" viewBox="0 0 64 40">
        <rect width="64" height="40" fill="#da251d" />
        <polygon points="32,10 35,21 46,21 37,27 40,38 32,32 24,38 27,27 18,21 29,21" fill="#ff0" />
      </svg>
    ),
  },
  {
    name: "United Kingdom",
    currency: "$(Dong)",
    language: "English",
    flag: (
      <svg className="w-8 h-5 shadow-xs rounded-[1px]" viewBox="0 0 64 40">
        <rect width="64" height="40" fill="#b22234" />
        <path d="M0 4h64M0 10h64M0 16h64M0 22h64M0 28h64M0 34h64" stroke="#fff" strokeWidth="3.2" />
        <rect width="28" height="22" fill="#3c3b6e" />
      </svg>
    ),
  },
];

export default function LanguageModal({ isOpen, onClose }) {
  const [search, setSearch] = useState("");
  const { selectedCountry, setSelectedCountry, t } = useLanguage();

  if (!isOpen) return null;

  const filteredCountries = countries.filter((c) =>
    c.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-[440px] md:max-w-[480px] bg-white h-full shadow-2xl flex flex-col justify-between p-8 sm:p-10 overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close panel"
              className="text-neutral-800 hover:text-black transition-transform cursor-pointer p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h2 className="text-2xl sm:text-[26px] font-black tracking-tight text-neutral-900 leading-[1.15] uppercase mt-2 whitespace-pre-line">
            {t.selectCountryLang}
          </h2>

          <div className="mt-8 space-y-3">
            <h3 className="text-xs font-black tracking-wider text-neutral-900 uppercase">
              {t.currentCountryLang}
            </h3>

            <div className="flex items-center justify-between text-[13px] sm:text-[14px] font-medium text-neutral-900 pt-1">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{selectedCountry.country}</span>
              </div>

              <div className="flex items-center gap-1 text-neutral-600">
                <span>{selectedCountry.language}</span>
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-5 relative flex items-center">
            <svg className="w-4 h-4 text-neutral-400 absolute left-4 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#ebebeb] text-xs sm:text-[13px] text-neutral-800 placeholder-neutral-500 rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition"
            />
          </div>

          <div className="mt-6 space-y-4 text-xs sm:text-[13px]">
            {filteredCountries.map((item) => (
              <div
                key={item.country}
                onClick={() => {
                  setSelectedCountry(item);
                  onClose();
                }}
                className="flex items-center justify-between text-neutral-700 hover:text-black cursor-pointer py-0.5 transition-colors"
              >
                <span>{item.country}</span>
                <span className="text-neutral-500">{item.language}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200">
          <h3 className="text-xs font-black tracking-wider text-neutral-900 uppercase">
            {t.regionStore}
          </h3>
          <p className="mt-1.5 text-[11px] text-neutral-500 font-light leading-relaxed">
            {t.regionStoreDesc}
          </p>

          <div className="mt-6 grid grid-cols-4 gap-2 text-center items-start">
            {regionStores.map((store, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedCountry({
                    country: `${store.name} ${store.currency}`,
                    language: store.language,
                  });
                  onClose();
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="group-hover:scale-105 transition-transform duration-150">
                  {store.flag}
                </div>
                <span className="mt-2 text-[9px] font-semibold text-neutral-800 leading-tight uppercase">
                  {store.name}
                </span>
                <span className="text-[9px] text-neutral-500">
                  {store.currency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}