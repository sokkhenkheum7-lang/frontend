import Navbar from "./components/Navbar";
import Slider from "./pages/Slider";
import NewArrivals from "./pages/NewArrivals";
import ManSection from "./pages/ManSection";
import WomenSection from "./pages/WomenSection";
import InstagramGrid from "./pages/InstagramGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider />
      <NewArrivals />
      <ManSection />
      <WomenSection />
      <InstagramGrid />
    </div>
  );
}