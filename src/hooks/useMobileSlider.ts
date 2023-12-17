
import { useState } from 'react';
import { Slider } from '../types';


export const useMobileSlider = (slider:Slider[]) => {
 
   const [activeSlide, setActiveSlide] = useState<number>(0);

   const handlePrevClick = () => {
    setActiveSlide((prev)=>prev-1);
    if(activeSlide>6){
        setActiveSlide(1)
    }
    if(activeSlide===1){
        setActiveSlide(6)
    }
  };

   const handleNextClick = () => {
    setActiveSlide((prev)=>prev+1);
    if(activeSlide>6){
        setActiveSlide(1)
    }

  };
    return { handleNextClick, handlePrevClick, slider,activeSlide};

  };
