import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { CONTENT_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "../../constants/Routes";
import { Link } from "react-router-dom";

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
      const { data, error } = await supabase.auth.signUp({
        email: signinValue.email,
        password: signinValue.password,
      });
      signinValue.email = " ";
      signinValue.password = " ";

      if (data.user !== null) {
        if (data.user.aud === "authenticated") {
          navigate(SIGNIN_PAGE);
          alert("Please check your email ");
        } else {
          navigate(SIGNUP_PAGE);
          alert(error);
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

  useEffect(() => {
    if (loginGuest) {
      localStorage.setItem("loginGuest", loginGuest.toString());
      navigate(CONTENT_PAGE);
    }
  }, [loginGuest]);

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
          <button className={styles.guestButton} onClick={LoginGuest}>
            Sing in as a Guest.
          </button>
          <p>
            {" "}
            <Link to={SIGNIN_PAGE}> Already have account? Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
