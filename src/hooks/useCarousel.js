import { useState } from "react";

export const useCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = (maxLength) => {
    if (carouselIndex < maxLength - 8) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const prevSlide = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const resetCarousel = () => {
    setCarouselIndex(0);
  };

  return {
    carouselIndex,
    nextSlide,
    prevSlide,
    resetCarousel,
  };
};
