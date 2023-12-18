
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { CONTENT_PAGE } from "../constants/Routes";
import { toast } from "react-toastify";
import useToasts from "./useToasts";
import { useAuth } from "./useAuth";

export const useGuestLogin = () => {

   const {errorToast}=useToasts()
   const navigate=useNavigate()
   const {setAuthenticated}=useAuth()
   
   const guestLogin = async () => {
    const { data } = await supabase.auth.signInWithPassword({
      email: "Guest@gmail.com",
      password: "1234567",
    });

    if (data.user && data.session !== null) {
      toast.info(`Welcome ${data.user.user_metadata.first_name || " "}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setAuthenticated(true)
      navigate(CONTENT_PAGE);
    } else {
      errorToast();
    }
  };

  return{
    guestLogin
  }
};
