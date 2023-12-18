import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import {  SIGNIN} from "../constants/Routes";
import useToasts from "./useToasts";
import { signInInputs } from "../types/index";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { successToast, errorToastRegister } = useToasts();

  const [signinValue, setSigninValue] = useState<signInInputs>({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninValue((prev: signInInputs) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const createUser = async () => {
    const { data } = await supabase.auth.signUp({
      email: signinValue.email,
      password: signinValue.password,
      options: {
        data: {
          first_name: signinValue.name,
        },
      },
    });

    setSigninValue({
      email: "",
      password: "",
      name: "",
    });

    if (data.user !== null) {
      if (data.user.aud === "authenticated") {
        navigate(SIGNIN)
        successToast();
      }
    } else {
      errorToastRegister();
    }
  };

  return {
    createUser,
    signinValue,
    handleChange,
  };
};
