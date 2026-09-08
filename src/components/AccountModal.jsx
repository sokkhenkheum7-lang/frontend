import { useState, useEffect } from "react";

export default function AccountModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isSignUp ? "Account Created" : "Signed In"}: ${formData.email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 select-none">
      {/* Dimmed Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Centered Modal Card */}
      <div className="relative z-10 w-full max-w-[460px] bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 text-neutral-500 hover:text-black hover:scale-110 transition p-1 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Heading */}
        <div className="text-center mt-2">
          <h2 className="text-2xl sm:text-[26px] font-black tracking-tight text-neutral-900 uppercase">
            {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
          </h2>
          <p className="text-xs text-neutral-500 font-light mt-2 max-w-xs mx-auto leading-relaxed">
            {isSignUp
              ? "Join ELÉVANCE for exclusive discounts, order tracking, and wishlist sync."
              : "Sign in to access your orders, saved addresses, and profile."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-neutral-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#f4f4f6] text-xs sm:text-sm text-neutral-900 px-3.5 py-3 rounded-lg border border-transparent focus:border-black focus:bg-white focus:outline-none transition"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-neutral-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#f4f4f6] text-xs sm:text-sm text-neutral-900 px-3.5 py-3 rounded-lg border border-transparent focus:border-black focus:bg-white focus:outline-none transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-[11px] font-bold tracking-wider uppercase text-neutral-700">
                Password
              </label>
              {!isSignUp && (
                <button
                  type="button"
                  className="text-[11px] text-neutral-500 hover:text-black transition"
                >
                  Forgot?
                </button>
              )}
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-[#f4f4f6] text-xs sm:text-sm text-neutral-900 px-3.5 py-3 rounded-lg border border-transparent focus:border-black focus:bg-white focus:outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 mt-3 bg-black text-white text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-neutral-800 transition cursor-pointer"
          >
            {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
          </button>
        </form>

        {/* Switch Mode Toggle */}
        <div className="mt-6 text-center text-xs text-neutral-600">
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="font-bold text-black hover:underline cursor-pointer ml-1"
              >
                Sign In
              </button>
            </span>
          ) : (
            <span>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="font-bold text-black hover:underline cursor-pointer ml-1"
              >
                Create one
              </button>
            </span>
          )}
        </div>

        {/* Footer Notice */}
        <p className="mt-6 pt-5 border-t border-neutral-100 text-center text-[10px] text-neutral-400 font-light leading-relaxed">
          By continuing, you agree to ELÉVANCE's{" "}
          <a href="#" className="underline hover:text-black">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-black">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}