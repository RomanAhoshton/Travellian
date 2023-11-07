import Logo from "../Logo";
import styles from "./index.module.scss";
import { menuLinks } from "../../constants/constants";
import Burger from "../Burger";
import { useHeader } from "../../hooks/useHeader";

const Header = () => {

  const {scroll,width,toggleMenu,handleScrollToSection,handlers,setToggleMenu}=useHeader()


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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
