import { createContext, useContext, useState } from "react";

export const translations = {
  English: {
    // Language Modal
    selectCountryLang: "SELECT YOUR\nCOUNTRY & LANGUAGE",
    currentCountryLang: "CURRENT COUNTRY & LANGUAGE",
    searchPlaceholder: "Search for Region",
    regionStore: "REGION STORE",
    regionStoreDesc:
      "Store tailored for each region, offering local currency shipping option, and region-specific promotions.",

    // Navbar
    navLinks: ["Sales Collection", "New Arrivals", "Man", "Women"],

    // General UI & Promos
    exploreCollection: "EXPLORE COLLECTION",
    viewAll: "VIEW ALL",
    subscribeNewsletter: "SUBSCRIBE TO OUR NEWSLETTER",
    enterEmail: "Enter your email",
  },
 
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState({
    country: "Cambodia ( Riel )",
    language: "Khmer",
  });

  const currentLang = translations[selectedCountry.language]
    ? selectedCountry.language
    : "English";
  const t = translations[currentLang];

  return (
    <LanguageContext.Provider
      value={{ selectedCountry, setSelectedCountry, t, currentLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}