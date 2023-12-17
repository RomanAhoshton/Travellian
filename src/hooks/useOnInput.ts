import { useEffect } from "react";


interface forInput{
  isFocused:boolean
  value:string
  inputRef:{
    current:null | HTMLInputElement
  };
  setValue:(arg:string)=>void;
  setFocused:(arg:boolean)=>void;

}
export const useOnInput=({isFocused,value,inputRef,setValue,setFocused}:forInput)=>{
  
    const handleDocumentClick = (event: MouseEvent) => {

      if(inputRef.current!==null){
        const target = event.target as HTMLInputElement;
        if (inputRef.current && !inputRef.current.contains(target)&&inputRef.current.value==="") {
          setFocused(false);
  
          inputRef.current.blur();
        } else {
          setFocused(true);
        }

      }
    };
    useEffect(() => {
      document.addEventListener("click", handleDocumentClick);
  
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }, []);

    return{isFocused,inputRef,value,setValue,setFocused}
}