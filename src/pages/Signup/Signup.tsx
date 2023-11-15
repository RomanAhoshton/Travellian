import React, { useState } from "react";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { CONTENT_PAGE, SIGNIN_PAGE } from "../../constants/Routes";
import { Link } from "react-router-dom";
import useToast from "../../hooks/useToast";

import { toast } from "react-toastify";

interface signInInputs {
  email: string;
  password: string;
  name: string;
}

const Signup = () => {
  const { successToast, errorToastRegister,errorToast } = useToast();

  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [activeEmail, setActiveEmail] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<boolean>(false);

  const navigate = useNavigate();

  const [signinValue, setSigninValue] = useState<signInInputs>({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data } = await supabase.auth.signUp({
      email: signinValue.email,
      password: signinValue.password,
      options: {
        data: {
          first_name: signinValue.name,
        },
      },
    });
    signinValue.email = " ";
    signinValue.password = " ";
    signinValue.name = " ";

    if (data.user !== null) {
      if (data.user.aud === "authenticated") {
        navigate(SIGNIN_PAGE);
        successToast();
      }
    } else {
      errorToastRegister();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninValue((prev: signInInputs) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

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

      navigate(CONTENT_PAGE);
    } else {
      errorToast();
    }
  };

  return (
    <div className={styles.mainImage} style={backgroundImageStyle}>
      <div className={styles.mainContent}>
        <div className={styles.contentForm}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <h2>Sign up</h2>
            <div className={styles.inputContainer}>
              <label
                htmlFor="name"
                className={
                  !activeName && signinValue.name === ""
                    ? styles.label
                    : styles.labelFocused
                }
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={signinValue.name}
                onChange={handleChange}
                className={styles.input}
                onFocus={(e) => setActiveName(!activeName)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label
                htmlFor="email"
                className={
                  !activeEmail && signinValue.email === ""
                    ? styles.label
                    : styles.labelFocused
                }
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={signinValue.email}
                onChange={handleChange}
                className={styles.input}
                onFocus={(e) => setActiveEmail(!activeEmail)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label
                htmlFor="password"
                className={
                  !activePassword && signinValue.password === ""
                    ? styles.label
                    : styles.labelFocused
                }
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={signinValue.password}
                onChange={handleChange}
                className={styles.input}
                onFocus={(e) => setActivePassword(!activePassword)}
              />
            </div>
            <button type="submit" className={styles.button}>
              Sing up
            </button>
          </form>

          <p>
            {" "}
            <Link to={SIGNIN_PAGE}> Already have account? Sign in</Link>
          </p>
          <button className={styles.guestIn} onClick={(e)=>handleLogin(e)}>Sign in as a Guest</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
