import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { Link } from "react-router-dom";
import { SIGNUP_PAGE } from "../../constants/Routes";

import LoginForm from "../../components/LoginForm";

const Signin = () => {
  
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  return (
    <div className={styles.mainImage} id="Home" style={backgroundImageStyle}>
      <div className={styles.mainContent}>
        <div className={styles.formContent}>
          <LoginForm />
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
