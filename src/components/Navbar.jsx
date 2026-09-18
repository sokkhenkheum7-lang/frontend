import { useState } from "react";
import image from "../assets/images/logo.png";
import { navLinks, menuData } from "./navigationData";
import NavIcons from "./NavIcons";
import MegaMenu from "./MegaMenu";
import LanguageModal from "./LanguageModal";
import SearchModal from "./SearchModal";
import AccountModal from "./AccountModal";
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";
import { useLanguage } from "./LanguageContext";

export default function Navbar({ activeTab, setActiveTab, isPopUpOpen = false }) {
  const { t } = useLanguage();
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  const handleTabClick = (linkKey) => {
    if (isPopUpOpen) return;
    if (setActiveTab) {
      setActiveTab(linkKey);
    }
    setHoveredTab(null);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isPopUpOpen) return;
    if (setActiveTab) {
      setActiveTab("Home");
    }
    setHoveredTab(null);
  };

  const openModal = (modalName) => {
    if (isPopUpOpen) return;
    setHoveredTab(null);
    setActiveModal((prev) => (prev === modalName ? null : modalName));
  };

  const isSearchOpen = activeModal === "search";

  return (
    <>
      <header
        onMouseLeave={() => setHoveredTab(null)}
        className={`w-full bg-white border-b border-neutral-200 sticky top-0 z-50 select-none ${isPopUpOpen ? "pointer-events-none opacity-50" : ""
          }`}
      >
        <div className="w-full px-5 md:px-12 py-3 flex items-center justify-between bg-white relative z-50">
          {/* Mobile Menu Icon */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              disabled={isPopUpOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="p-1 text-black cursor-pointer hover:opacity-70 disabled:pointer-events-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[14px] text-black">
            {navLinks.map((linkKey, index) => {
              const label = t?.navLinks?.[index] || linkKey;
              const isSelected = activeTab === linkKey;

              return (
                <button
                  key={linkKey}
                  type="button"
                  disabled={isPopUpOpen}
                  onMouseEnter={() => {
                    if (!isSearchOpen && !isPopUpOpen) setHoveredTab(linkKey);
                  }}
                  onClick={() => handleTabClick(linkKey)}
                  className={`pb-1 cursor-pointer transition-colors whitespace-nowrap disabled:pointer-events-none ${hoveredTab === linkKey || (!hoveredTab && isSelected)
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
            <button
              type="button"
              disabled={isPopUpOpen}
              onClick={handleLogoClick}
              aria-label="Go to Home"
              className="cursor-pointer disabled:pointer-events-none"
            >
              <img
                src={image}
                alt="ELÉVANCE"
                className="h-6 md:h-9 w-auto object-contain"
              />
            </button>
          </div>

          {/* Action Icons */}
          <NavIcons
            onOpenLanguage={() => openModal("language")}
            onOpenSearch={() => openModal("search")}
            onOpenAccount={() => openModal("account")}
            onOpenCart={() => openModal("cart")}
            onOpenWishlist={() => openModal("wishlist")}
            isSearchOpen={isSearchOpen}
          />
        </div>

        {/* MegaMenu Dropdown */}
        <MegaMenu
          currentMenu={
            hoveredTab && !isSearchOpen && !isPopUpOpen ? menuData[hoveredTab] : null
          }
          isOpen={Boolean(hoveredTab && !isSearchOpen && !isPopUpOpen)}
          onSelectFilter={(subLink, parentHeader) => {
            setHoveredTab(null);
            if (parentHeader === "MEN'S SALE") {
              if (subLink === "SALE BOTTOMS") {
                setActiveTab({ tab: "SaleBottomMan", category: "ALL" });
                return;
              }
              
              if (subLink === "SALE TOPS") {
                setActiveTab({
                  tab: "SaleTopMan",
                  category: "SALE TOPS",
                });
                return;
              }

              // Sublink Men (Bottoms, Outerwear, etc.)
              setActiveTab({
                tab: "ManSale",
                category: subLink === "ALL" ? "ALL" : subLink,
              });
              return;
            }

            // women Submenu
            if (subLink === "SALE TOPS") {
              setActiveTab({
                tab: "SaleTops",
                category: "Sale Top",
              });
              return;
            }
            if (subLink === "SALE ACCESSORIES") {
              setActiveTab({
                tab: "SaleAccessories",
                category: "ALL ACCESSORIES",
              });
              return;
            }
            if (subLink === "SALE OUTERWEAR") {
              setActiveTab({
                tab: "SaleOuterwear",
                category: "ALL OUTERWEAR",
              });
              return;
            }
            if (subLink === "SALE KNITWEAR") {
              setActiveTab({
                tab: "SaleKnitwear",
                category: "ALL KNITWEAR",
              });
              return;
            }
            if (subLink === "SALE JEANS") {
              setActiveTab({
                tab: "SaleJean",
                category: "ALL JEANS",
              });
              return;
            }
            if (subLink === "SALE BOTTOMS" || subLink === "SALE JEANS") {
              setActiveTab({
                tab: "SaleBottom",
                category: subLink === "SALE JEANS" ? "SALE JEANS" : "ALL BOTTOMS",
              });
              return;
            }
            if (
              parentHeader === "WOMEN'S SALE" ||
              parentHeader === "CLOTHING" ||
              (typeof subLink === "string" && subLink.toUpperCase().includes("WOMEN"))
            ) {
              setActiveTab({
                tab: "WomenSale",
                category: subLink === "ALL" ? "ALL" : subLink,
              });
              return;
            }

            setActiveTab(subLink || hoveredTab);
          }}
        />

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && !isPopUpOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((linkKey, index) => {
                const label = t?.navLinks?.[index] || linkKey;

                return (
                  <button
                    key={linkKey}
                    type="button"
                    onClick={() => handleTabClick(linkKey)}
                    className={`text-left text-base py-1 transition-colors ${activeTab === linkKey
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

      {/* Backdrop for MegaMenu */}
      <div
        onClick={() => setHoveredTab(null)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 pointer-events-none ${hoveredTab && !isSearchOpen && !isPopUpOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0"
          }`}
      />

      <SearchModal isOpen={activeModal === "search"} onClose={closeModal} />
      <LanguageModal isOpen={activeModal === "language"} onClose={closeModal} />
      <AccountModal isOpen={activeModal === "account"} onClose={closeModal} />
      <CartDrawer isOpen={activeModal === "cart"} onClose={closeModal} />
      <WishlistDrawer isOpen={activeModal === "wishlist"} onClose={closeModal} />
    </>
  );
}