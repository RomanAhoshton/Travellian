import { useEffect,useState } from "react";


export const useScroll=()=>{
    const [scroll, setScroll] = useState<number>(0);


    useEffect(() => {
        const handleScroll = () => {
          // const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
          setScroll(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return {scroll}
}