import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./home";
import Gallery from "./gallery";

function App() {
  return (
    <div className="relative z-0 bg-retro_secondary text-black">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
