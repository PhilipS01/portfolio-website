import { GalleryHero, Navbar } from "./components";

function Gallery() {
  return (
    <div>
      <Navbar isHome={false} />
      <GalleryHero />
    </div>
  );
}

export default Gallery;
