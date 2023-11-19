import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Gallery from "./gallery";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-retro_secondary text-black">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
