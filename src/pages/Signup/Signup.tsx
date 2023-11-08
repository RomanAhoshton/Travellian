import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";

const Signup = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  const [activePassword, setActivePassword] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);

  const navigate = useNavigate();
  const [loginGuest, setLoginGuest] = useState(false);

  const [signinValue, setSigninValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await supabase.auth.signUp({
        email: signinValue.email,
        password: signinValue.password,
      });
      signinValue.email = " ";
      signinValue.password = " ";

      if (data.user !== null) {
        if (data.user.aud === "authenticated") {
          navigate("/signin");
          alert("Please check your email");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e: any) => {
    setSigninValue((prev: any) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const LoginGuest = () => {
    setLoginGuest(true);
  };
  const HaveAccount = () => {
    navigate("/signin");
  };

  useEffect(() => {
    if (loginGuest) {
      localStorage.setItem("loginGuest", loginGuest.toString());

      navigate("/travellian");
    }
  }, [loginGuest]);

  const handleDocumentClick = () => {
    setActivePassword(false);
    setActiveEmail(false)
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);


  return (
    <div className={styles.mainImage} style={backgroundImageStyle}>
      <div className={styles.mainContent}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h2>Sign up</h2>
          <div className={styles.inputContainer}>
            <label
              htmlFor="email"
              className={
                !activeEmail && signinValue.email === ""
                  ? styles.label
                  : styles.labelFocused
              }
            >
              type your email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={signinValue.email}
              onChange={handleChange}
              className={styles.input}
              onFocus={(e) => setActiveEmail(!activeEmail)}

              // placeholder="type your email"
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
              type your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={signinValue.password}
              onChange={handleChange}
              className={styles.input}
              onFocus={(e) => setActivePassword(!activePassword)}
              // placeholder="type your password"
            />
          </div>
          <button type="submit" className={styles.button}>
            Sing up
          </button>
          <button className={styles.guestButton} onClick={LoginGuest}>
            Sing in as a Guest.
          </button>
          <button className={styles.guestButton} onClick={HaveAccount}>
            Have already account?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
