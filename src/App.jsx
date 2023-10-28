import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works } from "./components";

export const sm_windowWidth = 1200;

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary text-black">
        <div className="bg-offwhite bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
