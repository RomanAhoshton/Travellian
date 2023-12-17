import { useNavigate } from "react-router-dom";
import { useNavigation } from "./useNavigaton";
import { useScroll } from "./useScroll";
import { useWindowWidth } from "./useWindowWidth";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { supabase } from "../client";
import { SIGNUP_PAGE } from "../constants/Routes";

export const useHeader=()=>{
    const navigate=useNavigate()
    const { scrollToElement } = useNavigation();
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const { width } = useWindowWidth();
    const { scroll } = useScroll();


    const LogOut = async () => {
      const { error } = await supabase.auth.signOut();
      if (error === null) {
        navigate(SIGNUP_PAGE);
      }
    };
  
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
  

    return {scrollToElement,scroll,width,toggleMenu,handleScrollToSection,handlers,setToggleMenu,LogOut}

}