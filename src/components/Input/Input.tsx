import styles from "./index.module.scss";

interface forInput {
  isFocused: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  value: string;
  setValue: (arg: string) => void;
  forHtml: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

const Input = ({
  isFocused,
  inputRef,
  value,
  setValue,
  forHtml,
  type,
  id,
  name,
  placeholder,
}: forInput) => {
  return (
    <>
      {" "}
      <label
        htmlFor={forHtml}
        className={!isFocused ? styles.labelFor : styles.labelFocused}
      >
        {placeholder}
      </label>
      <input
        defaultValue={value}
        type={type}
        id={id}
        name={name}
        className={!isFocused ? styles.input : styles.focusedInput}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
        autoCorrect="off"
        style={{ color: "#ff7757 !important" }}
        autoCapitalize="none"
      />
    </>
  );
};

export default Input;
