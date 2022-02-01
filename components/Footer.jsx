import styles from "../styles/Components/Footer.module.css";
import Layout from "./Helpers/Layout";
import { menus } from "./Helpers/Menus";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Layout>
          {/* NavBar */}
          <div className={styles.footerNav}>
            {/* Logo */}
            <div>
              <Link href="/">
                <a>
                  <img src="/LogoWhite.png" alt="logo" />
                </a>
              </Link>
            </div>

            {/* Menu */}
            <ul>
              {menus.map((menu) => {
                return (
                  <li key={menu.name}>
                    <Link href={menu.path}>
                      <a>{menu.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

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

            <p>copyright @ ferhancihaner.com</p>
          </div>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
