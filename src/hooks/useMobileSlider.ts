
import { useState } from 'react';
import { Slider } from '../types';


export const useMobileSlider = (slider:Slider[],count:number) => {
 
   const [activeSlide, setActiveSlide] = useState<number>(0);

   const handlePrevClick = () => {
    setActiveSlide((prev)=>prev-1);
    if(activeSlide>count){
        setActiveSlide(1)
    }
    if(activeSlide===1){
        setActiveSlide(count)
    }
  };

   const handleNextClick = () => {
    setActiveSlide((prev)=>prev+1);
    if(activeSlide>count){
        setActiveSlide(1)
    }

  };
    return { handleNextClick, handlePrevClick, slider,activeSlide};

  };
