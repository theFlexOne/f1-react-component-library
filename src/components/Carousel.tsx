// TailwindCSS custom carousel React component
import { useEffect, useRef } from "react";
import pic1 from "/pic1.jpg";
import pic2 from "/pic2.jpg";
import pic3 from "/pic3.jpg";

const images = [pic1, pic2, pic3];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transform = `translateX(-${100}%)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex max-w-md">
      <div
        ref={carouselRef}
        className="carousel-inner relative overflow-hidden w-full flex"
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="block h-auto w-full transition-all"
            src={image}
            alt="carousel"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
