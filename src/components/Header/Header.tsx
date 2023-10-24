import { useState } from "react";
import Logo from "../Logo";
import styles from "./index.module.scss";
import { menuLinks } from "../../constants/constants";
import OrangeButton from "../OrangeButton";
import Burger from "../Burger";
import { useScroll } from "../../hooks/useScroll";
import useNavigation from "../../hooks/useNavigaton";

const Header = () => {
  const { scrollToElement } = useNavigation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const {scroll}=useScroll()
  const handleScrollToSection = (elementId:string) => {
    scrollToElement(elementId);
  };

  return (
    <header
      className={`${
        scroll > 50 && !toggleMenu ? styles.scrollHeader : styles.header
      }`}
    >
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.headerActions}>
          <Burger toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <div
            className={`${styles.menu} ${
              toggleMenu ? styles.activeMenu : styles.notActive
            }`}
          >
            <nav>
              <ul>
                {menuLinks.map((item,index) => (
                  <li key={index}>
                    <button onClick={()=>handleScrollToSection(item.link)}>{item.link}</button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.buttons}>
              <OrangeButton
                text={"Login"}
                color={toggleMenu ? "#ff7757" : "white"}
                background={!toggleMenu ? "#ff7757" : "white"}
                toggleMenu={toggleMenu}
                padding="12px"
              />
              <OrangeButton
                text={"Sign up"}
                color={!toggleMenu ? "#ff7757" : "white"}
                background={!toggleMenu ? "white" : "#ff7757"}
                toggleMenu={toggleMenu}
                padding="12px"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
