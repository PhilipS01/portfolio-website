import { CV, Contact, Hero, Work, Navbar } from "./components";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <CV />
      <Contact />
    </div>
  );
}

export default Home;
