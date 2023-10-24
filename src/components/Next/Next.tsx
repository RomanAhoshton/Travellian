import styles from "./index.module.scss"


interface forProps {
    onClick:()=>void;
}



const Next = ({onClick}:forProps) => {
  return (
    <button className={styles.customSwiperButtonNext} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="22"
        viewBox="0 0 12 22"
        fill="none"
      >
        <path
          d="M1 21L11 11L0.999999 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};


export default  Next;
