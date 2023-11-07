
import { scroller } from "react-scroll";

export const useNavigation = () => {
  const scrollToElement = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 800, 
      smooth: true, 
    });
  };

  return { scrollToElement };
};


