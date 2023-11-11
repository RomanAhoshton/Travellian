import { useEffect, useState, } from "react";
import Logo from "../Logo";
import styles from "./index.module.scss";
import { menuLinks } from "../../constants/constants";
import Burger from "../Burger";
import { useHeader } from "../../hooks/useHeader";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { SIGNUP_PAGE } from "../../constants/Routes";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<boolean>(false);

  const {
    scroll,
    width,
    toggleMenu,
    handleScrollToSection,
    handlers,
    setToggleMenu,
  } = useHeader();

  useEffect(() => {
    const getGuestUser = localStorage.getItem("loginGuest");

    if (getGuestUser) {
      const getUser = JSON.parse(getGuestUser);

      if (getUser) {
        setUser(true);
      }
    }
  }, []);

  const LogOut = async () => {
    if (user) {
      localStorage.removeItem("loginGuest");
      navigate(SIGNUP_PAGE);
    } else {
      const { error } = await supabase.auth.signOut();
      localStorage.removeItem("loginGuest");
      if (error === null) {
        navigate(SIGNUP_PAGE);
      }
    }
  };

  return (
    <header
      {...handlers}
      className={`${
        scroll > 50 && width > 768 ? styles.scrollHeader : styles.header
      }`}
    >
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          {width < 769 ? null : <Logo color="white" />}
        </div>
        <div className={styles.headerActions}>
          <Burger toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <div
            className={`${styles.menu} ${
              toggleMenu ? styles.activeMenu : styles.notActive
            }`}
          >
            <nav>
              {width < 769 && (
                <div style={{ display: "flex", alignSelf: "center" }}>
                  <Logo color="white" />
                </div>
              )}
              <div className={styles.menuWrapper}>
                {menuLinks.map((item, index) => (
                  <div key={index} className={styles.menuLink}>
                    <button onClick={() => handleScrollToSection(item.link)}>
                      {item.link}
                    </button>
                  </div>
                ))}
              </div>
            </nav>

            <button
              className={width > 768 ? styles.logOut : styles.mobileLogout}
              onClick={LogOut}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
