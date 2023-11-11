import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { CONTENT_PAGE, SIGNIN_PAGE } from "../../constants/Routes";
import { Link } from "react-router-dom";
import useToast from "../../hooks/useToast";


interface signInInputs{
  email:string,
  password:string,
  name:string,
}

const Signup = () => {
  const { successToast, errorToastRegister } = useToast();

  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [activeEmail, setActiveEmail] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<boolean>(false);

  const navigate = useNavigate();
  const [loginGuest, setLoginGuest] = useState<boolean>(false);

  const [signinValue, setSigninValue] = useState<signInInputs>({
    email: "",
    password: "",
    name:""
  });

  const handleSubmit = async (e: React.FormEvent) => {
 
    e.preventDefault();

    const { data } = await supabase.auth.signUp({
      email: signinValue.email,
      password: signinValue.password,
      options: {
        data: {
          first_name: signinValue.name,
         
        }
      }
      
    });
    signinValue.email = " ";
    signinValue.password = " ";
    signinValue.name=" "

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
          <button
            className={styles.guestButton}
            onClick={LoginGuest}
            style={{ marginTop: 30 }}
          >
            Sign in as a Guest.
          </button>
          <p>
            {" "}
            <Link to={SIGNIN_PAGE}> Already have account? Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
