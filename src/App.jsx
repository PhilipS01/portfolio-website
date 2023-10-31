import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works } from "./components";

export const sm_windowWidth = 1200;

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary text-black">
        <Navbar />
        <Hero />
        <Works />
        <About />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
