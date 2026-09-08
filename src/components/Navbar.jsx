import { useState } from "react";
import image from "../assets/images/logo.png";
import { navLinks, menuData } from "./navigationData";
import NavIcons from "./NavIcons";
import MegaMenu from "./MegaMenu";
import LanguageModal from "./LanguageModal";
import SearchModal from "./SearchModal";
import AccountModal from "./AccountModal";
import CartDrawer from "./CartDrawer";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Sales Collection");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // Close all other overlays when opening a specific one
  const handleOpenLanguage = () => {
    setHoveredTab(null);
    setIsSearchModalOpen(false);
    setIsAccountModalOpen(false);
    setIsCartDrawerOpen(false);
    setIsLanguageModalOpen(true);
  };

  const handleOpenSearch = () => {
    setHoveredTab(null);
    setIsLanguageModalOpen(false);
    setIsAccountModalOpen(false);
    setIsCartDrawerOpen(false);
    setIsSearchModalOpen((prev) => !prev);
  };

  const handleOpenAccount = () => {
    setHoveredTab(null);
    setIsLanguageModalOpen(false);
    setIsSearchModalOpen(false);
    setIsCartDrawerOpen(false);
    setIsAccountModalOpen(true);
  };

  const handleOpenCart = () => {
    setHoveredTab(null);
    setIsLanguageModalOpen(false);
    setIsSearchModalOpen(false);
    setIsAccountModalOpen(false);
    setIsCartDrawerOpen(true);
  };

  return (
    <>
      <header
        onMouseLeave={() => setHoveredTab(null)}
        className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50 select-none relative"
      >
        {/* Main Navbar Bar */}
        <div className="w-full px-4 md:px-12 py-3 flex items-center justify-between bg-white relative z-50">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1 text-black cursor-pointer hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[14px] text-black">
            {navLinks.map((linkKey, index) => {
              const label = t?.navLinks?.[index] || linkKey;

              return (
                <button
                  key={linkKey}
                  onMouseEnter={() => {
                    if (!isSearchModalOpen) setHoveredTab(linkKey);
                  }}
                  onClick={() => setActiveTab(linkKey)}
                  className={`pb-1 cursor-pointer transition-colors whitespace-nowrap ${
                    hoveredTab === linkKey || (!hoveredTab && activeTab === linkKey)
                      ? "border-b-2 border-black font-semibold text-black"
                      : "border-b-2 border-transparent text-neutral-600 hover:text-black"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <a href="/">
              <img
                src={image}
                alt="ELÉVANCE"
                className="h-6 md:h-9 w-auto object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* Action Icons */}
          <NavIcons
            onOpenLanguage={handleOpenLanguage}
            onOpenSearch={handleOpenSearch}
            onOpenAccount={handleOpenAccount}
            onOpenCart={handleOpenCart}
            isSearchOpen={isSearchModalOpen}
          />
        </div>

        {/* Dropdown Mega Menu (Drops down below navbar) */}
        <MegaMenu
          currentMenu={hoveredTab && !isSearchModalOpen ? menuData[hoveredTab] : null}
          isOpen={Boolean(hoveredTab && !isSearchModalOpen)}
        />

        {/* Search Modal (Placed INSIDE header to drop down right below the navbar line) */}
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((linkKey, index) => {
                const label = t?.navLinks?.[index] || linkKey;

                return (
                  <button
                    key={linkKey}
                    onClick={() => {
                      setActiveTab(linkKey);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-base py-1 transition-colors ${
                      activeTab === linkKey
                        ? "font-semibold text-black border-l-2 border-black pl-2"
                        : "text-gray-700 hover:text-black pl-2"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Dimmed Backdrop for MegaMenu hover only */}
      <div
        onClick={() => setHoveredTab(null)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 z-40 pointer-events-none ${
          hoveredTab && !isSearchModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
      />

      {/* Slide-over Side Drawers */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
      />

      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
      />
    </>
  );
}