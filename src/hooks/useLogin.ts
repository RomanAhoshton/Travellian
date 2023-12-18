import { useNavigate } from "react-router-dom";
import { CONTENT } from "../constants/Routes";
import { toast } from "react-toastify";
import useToasts from "./useToasts";
import { supabase } from "../client";
import { useState } from "react";
import { loginInputs } from "../types";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const { auth } = useAuth();
  const [loginValue, setLoginValue] = useState<loginInputs>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue((prev: loginInputs) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const navigate = useNavigate();

  const { errorToast } = useToasts();
  const handleLogin = async () => {
    const { data } = await supabase.auth.signInWithPassword({
      email: loginValue.email,
      password: loginValue.password,
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

      auth(true);
      navigate(CONTENT);
    } else {
      errorToast();
    }
  };

  return { handleLogin, handleChange, loginValue };
};
