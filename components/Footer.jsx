import Link from "next/link";
//Css
import styles from "../styles/Components/Footer.module.css";
//Helpers
import Layout from "./Helpers/Layout";
import { menus } from "./Helpers/Menus";
//Icons
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <Layout>

          {/* Footer Nav */}
          <div className={styles.footerNav}>
            <div>
              <Link href="/">
                <a>
                  <img src="/LogoWhite.png" alt="logo" />
                </a>
              </Link>
            </div>

            <ul>
              {menus.map((menu) => (
                  <li key={menu.name}>
                    <Link href={menu.path}>
                      <a>{menu.name}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Footer Icons */}
          <div className={styles.footerInfo}>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/">
                <BsFacebook />
              </a>
              <a href="https://www.twitter.com/">
                <BsTwitter />
              </a>
              <a href="https://www.instagram.com/">
                <BsInstagram />
              </a>
              <a href="https://www.youtube.com/">
                <BsYoutube />
              </a>
            </div>
            
            {/* Footer Copyright */}
            <p>copyright @ ferhancihaner.com</p>
          </div>
        </Layout>
      </footer>
    
  );
};

export default Footer;
