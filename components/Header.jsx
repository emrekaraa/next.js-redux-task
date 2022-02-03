import Link from "next/link";
// Css
import styles from "../styles/components/Header.module.css";
// Icons
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
// Helpers
import { menus } from "./Helpers/Menus";
import Layout from "./Helpers/Layout";

const Header = () => {
  const activeMenu = () => {
    document.querySelector("#mobileMenu").classList.remove(styles.closed);
  };

  const closeMenu = () => {
    document.querySelector("#mobileMenu").classList.add(styles.closed);
  };

  return (
    <Layout>
      <header className={styles.header}>

        {/* NavBar */}
        <nav className={styles.nav}>
          <div>
            <Link href="/">
              <a><img src="/Logo.png" alt="logo" /></a>
            </Link>
          </div>
          <ul className={styles.desktopMenu}>
            {menus.map((menu) => (
                <li key={menu.name}>
                  <Link href={menu.path}>
                    <a>{menu.name}</a>
                    </Link>
                </li>
              ))}
          </ul>
          {/* Hamburger Menu Icon */}
          <button onClick={activeMenu} className={styles.burgerMenu}>
            <FiMenu />
          </button>
        </nav>

        {/* Mobile Menu */}
        <nav id="mobileMenu" className={`${styles.mobile} ${styles.closed}`}>
          <button onClick={closeMenu} className={styles.closeBtn}>
            <AiOutlineClose />
          </button>

          <ul>
            {menus.map((menu) => (
                <li key={menu.name} className="border-b">
                  <Link href={menu.path}>
                    <a>{menu.name}</a>
                  </Link>
                </li>
              ))}
          </ul>

          <div className={styles.icons}>
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
        </nav>
      </header>
    </Layout>
  );
};

export default Header;
