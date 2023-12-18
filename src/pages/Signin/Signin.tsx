import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";
import { Link } from "react-router-dom";
import { SIGNUP} from "../../constants/Routes";

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
            <Link to={SIGNUP}> Back to Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
