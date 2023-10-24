import styles from "./index.module.scss";
import OrangeButton from "../OrangeButton";

import { useOnInput } from "../../hooks/useOnInput";

const SubscribeForm = () => {
  const { value, isFocused, inputRef, setValue } = useOnInput();

  return (
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          <p>Our Newsletter</p>
        </div>
        <div className={styles.formActions}>
          <label
            htmlFor="email"
            className={!isFocused ? styles.labelFor : styles.labelFocused}
          >
            Enter your email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={!isFocused ? styles.input : styles.focusedInput}
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={styles.buttonWrapper}>

          <OrangeButton
            text="Subscribe"
            color="#FFF"
            background="#FF7757"
            toggleMenu
            padding="24px 40px"
          />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;
