import { useState } from "react";
import image from "../assets/images/logo.png";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Sales Collection");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = ["Sales Collection", "New Arrivals", "Man", "Women"];

  return (
    <header className="w-full bg-white border-b border-gray-1relative z-50">
      <div className="w-full px-4 md:px-12 py-3 flex items-center justify-between">
        
        {/* Left: Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1 text-black cursor-pointer hover:opacity-70"
          >
            {isMobileMenuOpen ? (
              // Close "X" Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Left: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[15px] text-black">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActiveTab(link)}
              className={`pb-1 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === link
                  ? "border-b-2 border-black font-medium"
                  : "border-b-2 border-transparent text-gray-800 hover:text-black"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Center: Brand Logo */}
        <div className="flex items-center justify-center select-none">
          <a href="/">
            <img
              src={image}
              alt="ELÉVANCE"
              className="h-6 md:h-9 w-auto object-contain cursor-pointer"
            />
          </a>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-3 sm:space-x-5 md:space-x-6 text-black">
          {/* Flag (hidden on small mobile screens to prevent crowding) */}
          <button aria-label="Language selector" className="hidden sm:block cursor-pointer hover:opacity-75">
            <svg className="w-6 h-4" viewBox="0 0 60 30" fill="none">
              <clipPath id="uk-flag">
                <path d="M0 0v30h60V0z" />
              </clipPath>
              <path d="M0 0v30h60V0z" fill="#012169" />
              <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
              <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag)" stroke="#C8102E" strokeWidth="4" />
              <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
              <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
            </svg>
          </button>

          {/* Search */}
          <button aria-label="Search" className="cursor-pointer hover:opacity-70">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
          </button>

          {/* User Account */}
          <button aria-label="Account" className="cursor-pointer hover:opacity-70">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path strokeLinecap="round" d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" />
            </svg>
          </button>

          {/* Bag */}
          <button aria-label="Cart" className="cursor-pointer hover:opacity-70">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>

          {/* Heart / Wishlist (hidden on very compact screens to maintain clean spacing) */}
          <button aria-label="Wishlist" className="hidden sm:block cursor-pointer hover:opacity-70">
            <svg className="w-5 h-5 fill-black" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveTab(link);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-base py-1 transition-colors ${
                  activeTab === link
                    ? "font-semibold text-black border-l-2 border-black pl-2"
                    : "text-gray-700 hover:text-black pl-2"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Additional mobile-only controls */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs tracking-wider uppercase text-gray-400">Region & Wishlist</span>
            <div className="flex items-center space-x-4">
              <button aria-label="Language selector" className="cursor-pointer">
                <svg className="w-5 h-3.5" viewBox="0 0 60 30" fill="none">
                  <clipPath id="uk-flag-mobile">
                    <path d="M0 0v30h60V0z" />
                  </clipPath>
                  <path d="M0 0v30h60V0z" fill="#012169" />
                  <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
                  <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-mobile)" stroke="#C8102E" strokeWidth="4" />
                  <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
                </svg>
              </button>
              <button aria-label="Wishlist" className="cursor-pointer text-black">
                <svg className="w-5 h-5 fill-black" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}