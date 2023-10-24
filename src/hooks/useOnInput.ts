import { useEffect, useRef, useState } from "react";

export const useOnInput=()=>{
    const [isFocused, setFocused] = useState<boolean>(false);
    const [value,setValue]=useState<string>("")

    const inputRef = useRef<null | HTMLInputElement>(null);
  
    const handleDocumentClick = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)&&inputRef.current.value==="") {
        setFocused(false);

        inputRef.current.blur();
      } else {
        setFocused(true);
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleDocumentClick);
  
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }, []);

    return{isFocused,inputRef,value,setValue}
}