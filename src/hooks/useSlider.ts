import { useRef, useState } from "react";
import { useWindowWidth } from "./useWindowWidth";
import { Slider } from "../types";



export const useSlider = (slider: Slider [])  => {
  const { width } = useWindowWidth();
  const totalSlides = slider.length;
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const handleNext = () => {
    if (sliderRef.current) {

      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }
  };
  const handlePrev = () => {
    if (sliderRef.current) {
   
      setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const slideWidth = width < 860 ? width : 300;

  const duplicatedSlides = [...slider, ...slider, ...slider];

  return {
    handlePrev,
    handleNext,
    sliderRef,
    activeSlide,
    slideWidth,
    totalSlides,
    duplicatedSlides,
  };
};
