import { useState } from "react";
import logo from "../assets/images/logo.png"; // Uses your logo asset

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#fbfbfb] text-black pt-16 pb-10 border-t border-neutral-200 select-none">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Column 1: Brand & Newsletter (Occupies 5 columns) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Logo */}
              <a href="/" className="inline-block">
                <img
                  src={logo}
                  alt="ELÉVANCE"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </a>

              {/* Customer Service Contact */}
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold tracking-[0.12em] text-neutral-800 uppercase leading-snug">
                  CUSTOMER SERVICE<br />EMAIL
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-light">
                  elevance123@gmal.com
                </p>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="space-y-2 max-w-sm">
              <label
                htmlFor="newsletter-input"
                className="block text-[11px] font-bold tracking-[0.15em] text-neutral-800 uppercase"
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </label>

              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  id="newsletter-input"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#d9d9d9] text-neutral-800 placeholder-neutral-500 text-xs sm:text-sm px-3.5 py-2.5 pr-10 border-b border-black focus:outline-none focus:bg-[#cfcfcf] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-black hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block md:col-span-1" />

          {/* Column 2: Help Links (Occupies 3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-black">
              Help
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-600 font-light">
              <li>
                <a href="#" className="hover:text-black transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Return/Refund policy</a>
              </li>
            </ul>
          </div>

          {/* Column 3: ABOUT US Links (Occupies 3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-base sm:text-lg font-bold tracking-wider text-black uppercase">
              ABOUT US
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-600 font-light">
              <li>
                <a href="#" className="hover:text-black transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Review</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Track Shipping</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Return Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Student Discount</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Download App</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">Collab | Lewkin Infruencer Program</a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">School Sponsorship Opportunity</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Horizontal Rule & Copyright Row */}
        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600">
          <p className="text-[10px] sm:text-[11px] tracking-[0.1em] text-neutral-500 uppercase font-light">
            © 2026 ELÉVANCE STUDIOS. ALL RIGHTS RESERVED.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3 text-black">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="hover:opacity-75 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.67 6.34 6.34 0 0 0 9.33 22a6.33 6.33 0 0 0 6.34-6.33V9.2a8.16 8.16 0 0 0 4.92 1.63v-3.5a4.78 4.78 0 0 1-1-.64z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}