import React, { useState } from "react";
import styles from "./index.module.scss";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {
  const { handleChange, handleLogin, loginValue } = useLogin();

  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [activeEmail, setActiveEmail] = useState<boolean>(false);
  return (
    <form autoComplete="off" className={styles.form}>
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
      <button type="button" onClick={handleLogin}>
        {" "}
        Sign in{" "}
      </button>
    </form>
  );
};

export default LoginForm;
