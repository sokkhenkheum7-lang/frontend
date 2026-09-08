import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./pages/Slider";
import NewArrivals from "./pages/NewArrivals";
import ManSection from "./pages/ManSection";
import WomenSection from "./pages/WomenSection";
import InstagramGrid from "./pages/InstagramGrid";
import PromoBanners from "./pages/PromoBanners";
import ProductGrid from "./pages/ProductGrid";
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider />
      <NewArrivals />
      <ManSection />
      <WomenSection />
      <InstagramGrid />
      <PromoBanners />
      <ProductGrid />
      <Footer />
    </div>
  );
}