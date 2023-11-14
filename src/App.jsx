import { BrowserRouter } from "react-router-dom";
import { CV, Contact, Hero, Navbar, Work } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-retro_secondary text-black">
        <Navbar />
        <Hero />
        <Work />
        <CV />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
