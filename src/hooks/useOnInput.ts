import { useEffect } from "react";


interface forInput{
  isFocused:boolean
  value:string|any
  inputRef:{
    current:null | HTMLInputElement
  };
  setValue:(arg:string|any)=>void;
  setFocused:(arg:boolean)=>void;

  

}
export const useOnInput=({isFocused,value,inputRef,setValue,setFocused}:forInput)=>{
  
    const handleDocumentClick = (event: any) => {

      if(inputRef.current!==null){
        if (inputRef.current && !inputRef.current.contains(event.target)&&inputRef.current.value==="") {
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