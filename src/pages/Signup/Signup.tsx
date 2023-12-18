import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { SIGNIN_PAGE } from "../../constants/Routes";
import { Link } from "react-router-dom";
import { useGuestLogin } from "../../hooks/useLoginGuest";
import SighUpForm from "../../components/SighUpForm";

const Signup = () => {
  const { guestLogin } = useGuestLogin();

  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  return (
    <div className={styles.mainImage} style={backgroundImageStyle}>
      <div className={styles.mainContent}>
        <div className={styles.contentForm}>
          <SighUpForm />

          <p>
            {" "}
            <Link to={SIGNIN_PAGE}> Already have account? Sign in</Link>
          </p>
          <button className={styles.guestIn} onClick={guestLogin} >
            Sign in as a Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
