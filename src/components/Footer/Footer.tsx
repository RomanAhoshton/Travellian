import styles from "./index.module.scss";
import { footerLinks } from "../../constants/constants";
import FooterSocial from "../FooterSocial";
import Logo from "../Logo";
import LazyLoad from "react-lazy-load";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerCopyRights}>
          <LazyLoad offset={200}>
            <Logo color="white" />
          </LazyLoad>
          <p>Copyright © Travellian 2023 All rights reserved</p>
        </div>
        <nav className={styles.footerNav}>
          <ul>
            {footerLinks.map((item, index) => (
              <div className={styles.linksContainer} key={index}>
                <div>{item.title}</div>

                <div>
                  {item.links?.map((link, index) => (
                    <li key={index}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {link.link}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </nav>
        <div className={styles.footerSocial}>
          <p>Follow us on</p>
          <LazyLoad offset={200}>
            <FooterSocial />
          </LazyLoad>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
