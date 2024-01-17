
import { useNavigation } from "./useNavigaton";
import { useScroll } from "./useScroll";
import { useWindowWidth } from "./useWindowWidth";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";




export const useHeader=()=>{


    const { scrollToElement } = useNavigation();
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const { width } = useWindowWidth();
    const { scroll } = useScroll();


  
    const handleScrollToSection = (elementId: string) => {
      scrollToElement(elementId);
      setToggleMenu(false);
    };
  
    useEffect(() => {
      if (toggleMenu) {
        document.body.style.overflow = "hidden";
      }
      else{
        document.body.style.overflow = 'unset';
      }
    }, [toggleMenu]);
  
    const handlers = useSwipeable({
      onSwipedRight: () =>   setToggleMenu(false)
    });
  

    return {scrollToElement,scroll,width,toggleMenu,handleScrollToSection,handlers,setToggleMenu}

}