import React, { EventHandler, useState } from "react";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CONTENT_PAGE, SIGNUP_PAGE } from "../../constants/Routes";
import useToast from "../../hooks/useToast";
import { toast } from "react-toastify";


interface loginInputs{
  email:string,
  password:string,
}

const Signin = () => {
  const { errorToast } = useToast();

  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [activeEmail, setActiveEmail] = useState<boolean>(false);

  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  const [loginValue, setLoginValue] = useState<loginInputs>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

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

      navigate(CONTENT_PAGE);
    } else {
      errorToast();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue((prev:loginInputs) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={styles.mainImage} id="Home" style={backgroundImageStyle}>
      <div className={styles.mainContent}>
        <div className={styles.formContent}>
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
              />
            </div>
            <button type="submit"> Sign in </button>
          </form>
          <p>
            {" "}
            <Link to={SIGNUP_PAGE}> Back to Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
