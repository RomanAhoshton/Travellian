import styles from "./index.module.scss";

interface forProps {
  onClick: () => void;
}

const Prev = ({ onClick }: forProps) => {
  return (
    <button className={styles.customSwiperButtonPrev} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="22"
        viewBox="0 0 12 22"
        fill="none"
      >
        <path
          d="M11 1L1 11L11 21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Prev;
