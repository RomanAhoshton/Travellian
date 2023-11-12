import styles from "./index.module.scss";
import OrangeButton from "../OrangeButton";
import Input from "../Input";
import { useOnInput } from "../../hooks/useOnInput";
import { useRef, useState } from "react";

const SubscribeForm = () => {
  const [subscribeValue, setSubscribeValue] = useState<string>("");
  const [isSubscribeFocused, setSubscribeFocused] = useState<boolean>(false);
  const inputSubscribeRef = useRef<null | HTMLInputElement>(null);
  const { value, setValue, isFocused, inputRef } = useOnInput({
    isFocused: isSubscribeFocused,
    inputRef: inputSubscribeRef,
    setValue: setSubscribeValue,
    setFocused: setSubscribeFocused,
    value: subscribeValue,
  });

  return (
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          <p>Our Newsletter</p>
        </div>
        <div className={styles.formActions}>
          <div className={styles.inputContainer}>
            <Input
              value={value}
              isFocused={isFocused}
              inputRef={inputRef}
              setValue={setValue}
              type="text"
              id="email"
              forHtml="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.buttonWrapper}>
            <OrangeButton
              text="Subscribe"
              color="#FFF"
              background="#FF7757"
              padding="24px 40px"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;
