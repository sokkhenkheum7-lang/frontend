export default function NavIcons({
  onOpenLanguage,
  onOpenSearch,
  onOpenAccount,
  onOpenCart,
  isSearchOpen,
}) {
  return (
    <div className="flex items-center space-x-3 sm:space-x-5 md:space-x-6 text-black">
      {/* UK Flag Language Toggle */}
      <button
        type="button"
        onClick={onOpenLanguage}
        aria-label="Language selector"
        className="cursor-pointer hover:opacity-75 transition-opacity"
      >
        <svg className="w-6 h-4" viewBox="0 0 60 30" fill="none">
          <clipPath id="uk-flag-nav">
            <path d="M0 0v30h60V0z" />
          </clipPath>
          <path d="M0 0v30h60V0z" fill="#012169" />
          <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0 0l60 30m0-30L0 30"
            clipPath="url(#uk-flag-nav)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      </button>

      {/* Search */}
      <button
        type="button"
        onClick={onOpenSearch}
        aria-label="Search"
        className={`cursor-pointer transition-colors p-0.5 rounded-sm ${
          isSearchOpen ? "text-neutral-500 scale-105" : "text-black hover:opacity-70"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.5-3.5" />
        </svg>
      </button>

      {/* Account */}
      <button
        type="button"
        onClick={onOpenAccount}
        aria-label="Account"
        className="cursor-pointer hover:opacity-70 transition-opacity"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" />
        </svg>
      </button>

      {/* Cart / Bag Button (Triggers Cart Drawer) */}
      <button
        type="button"
        onClick={onOpenCart}
        aria-label="Cart"
        className="cursor-pointer hover:opacity-70 transition-opacity relative"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center">
          1
        </span>
      </button>

      {/* Wishlist */}
      <button aria-label="Wishlist" className="hidden sm:block cursor-pointer hover:opacity-70">
        <svg className="w-5 h-5 fill-black" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
    </div>
  );
}