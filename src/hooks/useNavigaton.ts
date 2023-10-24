
import { scroller } from "react-scroll";

const useNavigation = () => {
  const scrollToElement = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 800, 
      smooth: true, 
    });
  };

  return { scrollToElement };
};

export default useNavigation;
