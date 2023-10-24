import styles from "./index.module.scss";

interface forProps {
  text: string;
  color: string;
  background: string;
  toggleMenu: boolean;
  padding: string;
}

const OrangeButton = ({ text, color, background, toggleMenu,padding }: forProps) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: background,
        color: color,
        fontSize: toggleMenu ? 18 : "inherit",
        fontWeight: toggleMenu ? 500 : 400,
        padding:padding,
      }}
    >
      {text}
    </button>
  );
};

export default OrangeButton;
