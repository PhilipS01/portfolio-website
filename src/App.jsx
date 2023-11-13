import { BrowserRouter } from "react-router-dom";

import { CV, Contact, Hero, Navbar, Tech, Works } from "./components";

export const sm_windowWidth = 1200;

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-retro_secondary text-black">
        <Navbar />
        <Hero />
        <Works />
        <CV />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
