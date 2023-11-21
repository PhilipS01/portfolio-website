import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./home";
import Gallery from "./gallery";

function App() {
  return (
    <div className="relative z-0 bg-retro_secondary text-black">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
