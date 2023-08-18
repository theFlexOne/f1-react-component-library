// TailwindCSS custom carousel React component
import { useEffect, useRef, useState } from "react";
import pic1 from "/pic1.jpg";
import pic2 from "/pic2.jpg";
import pic3 from "/pic3.jpg";

const images = [pic1, pic2, pic3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    const nextImageIndex =
      currentIndex + 1 < images.length ? currentIndex + 1 : 0;
    const nextImage = document.getElementById(
      images[nextImageIndex]
    ) as HTMLImageElement;
    nextImage.style.opacity = "1";
  }

  function handlePrev() {
    const prevImageIndex =
      currentIndex - 1 >= 0 ? currentIndex - 1 : images.length - 1;
    const prevImage = document.getElementById(
      images[prevImageIndex]
    ) as HTMLImageElement;
    prevImage.style.opacity = "1";
    prevImage.style.transition = "transl";
  }

  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    if (target.id === images[0]) {
      const prevImage = document.getElementById(
        images[images.length - 1]
      ) as HTMLImageElement;
      prevImage.style.opacity = "0";
    }
    if (target.id === images[images.length - 1]) {
      const nextImage = document.getElementById(images[0]) as HTMLImageElement;
      nextImage.style.opacity = "0";
    }

    setCurrentIndex((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });
  }

  const displayImages = sliceCurrentImages(images, currentIndex);

  return (
    <div className="relative">
      <div onTransitionEnd={handleTransitionEnd} className="transition-all">
        <img
          id={displayImages[0]}
          src={displayImages[0]}
          className="opacity-0"
        />
        <img id={displayImages[1]} src={displayImages[1]} />
        <img
          id={displayImages[2]}
          src={displayImages[2]}
          className="opacity-0"
        />
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
        onClick={handlePrev}
      >
        prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={handleNext}
      >
        next
      </button>
    </div>
  );
};

function sliceCurrentImages(images: string[], currentIndex: number): string[] {
  if (currentIndex === 0) {
    return [
      images[images.length - 1],
      images[currentIndex],
      images[currentIndex + 1],
    ];
  }
  if (currentIndex === images.length - 1) {
    return [images[currentIndex - 1], images[currentIndex], images[0]];
  }
  return [
    images[currentIndex - 1],
    images[currentIndex],
    images[currentIndex + 1],
  ];
}

export default Carousel;
