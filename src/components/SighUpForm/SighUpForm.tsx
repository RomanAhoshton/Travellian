import React, { useState } from "react";
import styles from "./index.module.scss";
import { useSignUp } from "../../hooks/useSignUp";

const SighUpForm = () => {
  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [activeEmail, setActiveEmail] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<boolean>(false);
  const { createUser, signinValue, handleChange } = useSignUp();
  return (
    <form autoComplete="off" className={styles.form}>
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
          onFocus={() => setActiveName(!activeName)}
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
          onFocus={() => setActiveEmail(!activeEmail)}
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
          onFocus={() => setActivePassword(!activePassword)}
        />
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => createUser()}
      >
        Sing up
      </button>
    </form>
  );
};

export default SighUpForm;
