import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'


interface token{
  setToken:(arg:object)=>void
}

const Signin = ({setToken}:token) => {
  const [activePassword, setActivePassword] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);

  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginValue.email,
      password: loginValue.password,
    });

    if (data.user && data.session !== null) {
      setToken(data)
      navigate("/travellian");
    } else {
      alert("The user with the following data is not registered or check your email or password");

    }
  };

  const handleChange = (e: any) => {
    setLoginValue((prev: any) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleDocumentClick = () => {
    setActivePassword(false);
    setActiveEmail(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles.mainImage} id="Home" style={backgroundImageStyle}>
      <div className={styles.mainContent}>
        <form onSubmit={handleLogin} autoComplete="off">
          <h2> Sign in</h2>
          <div className={styles.inputContainer}>
            <label
              htmlFor="email"
              className={
                !activeEmail && loginValue.email === ""
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
              value={loginValue.email}
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
                !activePassword && loginValue.password === ""
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
              value={loginValue.password}
              onChange={handleChange}
              className={styles.input}
              onFocus={(e) => setActivePassword(!activePassword)}
              // placeholder="type your password"
            />
          </div>
          <button type="submit"> Sign in </button>
          <p> <Link to="/"> Back to Sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
