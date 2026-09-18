import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";
import Slider from "./pages/Slider";
import NewArrivals from "./pages/NewArrivals";
import ManSection from "./pages/ManSection";
import WomenSection from "./pages/WomenSection";
import InstagramGrid from "./pages/InstagramGrid";
import PromoBanners from "./pages/PromoBanners";
import ProductGrid from "./pages/ProductGrid";
import SalesCollectionPage from "./pages/SalesCollectionPage";
import WomenSale from "./pages/WomenSale";
import SaleTops from "./pages/SaleTops";
import SaleBottom from "./pages/SaleBottom";
import SaleJean from "./pages/SaleJean";
import SaleKnitwear from "./pages/SaleKnitwear";
import SaleOuterwear from "./pages/SaleOuterwear";
import SaleAccessories from "./pages/SaleAccessories";
import ManSale from "./pages/ManSale";
import SaleTopMan from "./pages/saleTopMan";
import SaleBottomMan from "./pages/SaleBottomMan"; // Added import

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setShowPopUp(true);
  }, []);

  const handleSaveNow = () => {
    setShowPopUp(false);
    setActiveTab("Sales Collection");
  };

  const currentTabName =
    typeof activeTab === "object" ? activeTab.tab : activeTab;
  const initialCategory =
    typeof activeTab === "object" ? activeTab.category : "ALL";

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 flex flex-col justify-between relative">
      <PopUp
        isOpen={showPopUp}
        onClose={() => setShowPopUp(false)}
        onSaveNow={handleSaveNow}
      />

      <Navbar
        activeTab={currentTabName}
        setActiveTab={setActiveTab}
        isPopUpOpen={showPopUp}
      />

      <main className={`flex-1 ${showPopUp ? "pointer-events-none select-none" : ""}`}>
        {/* Men's Tops & Bottoms Pages */}
        {currentTabName === "SaleTopMan" ? (
          <SaleTopMan
            key={initialCategory}
            initialCategory={initialCategory}
            onBackToHome={() => setActiveTab("ManSale")}
          />
        ) : currentTabName === "SaleBottomMan" ? (
          <SaleBottomMan
            key={initialCategory}
            initialCategory={initialCategory}
            onBackToHome={() => setActiveTab("ManSale")}
          />
        ) : currentTabName === "ManSale" ? (
          <ManSale
            key={initialCategory}
            initialCategory={initialCategory}
            onBackToHome={() => setActiveTab("Home")}
          />
        ) : currentTabName === "WomenSale" ? (
          <WomenSale
            key={initialCategory}
            initialCategory={initialCategory}
            onBackToHome={() => setActiveTab("Home")}
          />
        ) : currentTabName === "SaleAccessories" ? (
          <SaleAccessories
            key={initialCategory}
            initialCategory={initialCategory}
          />
        ) : currentTabName === "SaleOuterwear" ? (
          <SaleOuterwear
            key={initialCategory}
            initialCategory={initialCategory}
          />
        ) : currentTabName === "SaleKnitwear" ? (
          <SaleKnitwear
            key={initialCategory}
            initialCategory={initialCategory}
          />
        ) : currentTabName === "SaleJean" ? (
          <SaleJean
            key={initialCategory}
            initialCategory={initialCategory}
          />
        ) : currentTabName === "SaleBottom" ? (
          <SaleBottom
            key={initialCategory}
            initialCategory={initialCategory}
          />
        ) : currentTabName === "SaleTops" ? (
          <SaleTops
            key={initialCategory}
            initialCategory={initialCategory}
          />
        ) : currentTabName === "Sales Collection" ? (
          <SalesCollectionPage activeTab={currentTabName} />
        ) : (
          <>
            <Slider />
            <NewArrivals />
            <ManSection />
            <WomenSection />
            <InstagramGrid />
            <PromoBanners />
            <ProductGrid />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}