<<<<<<< Updated upstream
=======

import { useEffect, useState } from "react";
>>>>>>> Stashed changes
import Logo from "../Logo";
import styles from "./index.module.scss";
import { menuLinks } from "../../constants/constants";
import Burger from "../Burger";
<<<<<<< Updated upstream
import { useHeader } from "../../hooks/useHeader";

const Header = () => {

  const {scroll,width,toggleMenu,handleScrollToSection,handlers,setToggleMenu}=useHeader()

=======
import { useScroll } from "../../hooks/useScroll";
import useNavigation from "../../hooks/useNavigaton";
import { useHeader } from "../../hooks/useHeader";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";

const Header = () => {
  const { scrollToElement } = useNavigation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const {scroll}=useScroll()
  const handleScrollToSection = (elementId:string) => {
    scrollToElement(elementId);

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

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
      navigate("/");
    } else {
      const { error } = await supabase.auth.signOut();
      if (error === null) {
        navigate("/");
      }
    }
  };
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
              </div>
            </nav>
=======
              </ul>
                <button
                  className={width > 768 ? styles.logOut : styles.mobileLogout}
                  onClick={LogOut}
                >
                  Sign out
                </button>
              </div>
            </nav>
            <div className={styles.buttons}>
              <OrangeButton
                text={"Login"}
                color={toggleMenu ? "#ff7757" : "white"}
                background={!toggleMenu ? "#ff7757" : "white"}
            
                padding="12px"
              />
              <OrangeButton
                text={"Sign up"}
                color={!toggleMenu ? "#ff7757" : "white"}
                background={!toggleMenu ? "white" : "#ff7757"}
           
                padding="12px"
              />
            </div>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
