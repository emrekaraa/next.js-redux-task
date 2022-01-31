import Link from "next/link";
// Css
import styles from "../styles/components/Header.module.css";
// Icons
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Header = () => {
  const activeMenu = () => {
    document.querySelector("#mobileMenu").classList.remove(styles.closed);
  };

  const closeMenu = () => {
    document.querySelector("#mobileMenu").classList.add(styles.closed);
  };

  return (
    <header className={styles.header}>
      {/* Desktop Nav */}
      <nav className={styles.nav}>
        {/* Logo */}
        <div>
          <Link href="/">
            <a>
              <img src="/Logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        {/* Menu */}
        <ul className={styles.desktopMenu}>
          <li>
            <Link href="/hakkimda">
              <a>HAKKIMDA</a>
            </Link>
          </li>
          <li>
            <Link href="/calismalarimiz">
              <a>ÇALIŞMALARIMIZ</a>
            </Link>
          </li>
          <li>
            <Link href="/yolculuga-basla">
              <a>YOLCULUĞA BAŞLA</a>
            </Link>
          </li>
          <li>
            <Link href="/iletisim">
              <a>İLETİŞİM</a>
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <button onClick={activeMenu} className={styles.burgerMenu}>
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <nav id="mobileMenu" className={`${styles.mobile} ${styles.closed}`}>
        <button onClick={closeMenu} className={styles.closeBtn}>
          <AiOutlineCloseSquare />
        </button>
        <ul>
          <li className="border-y">
            <Link href="/hakkimda">
              <a>HAKKIMDA</a>
            </Link>
          </li>
          <li>
            <Link href="/yolculugum">
              <a>YOLCULUĞUM</a>
            </Link>
          </li>

          <li>
            <Link href="/seminerlerim">
              <a>SEMİNERLERİM</a>
            </Link>
          </li>
          <li>
            <Link href="/yolculuklarimiz">
              <a>YOLCULUKLARIMIZ</a>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/fotograflar">
              <a>FOTOĞRAFLAR</a>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/calismalarimiz">
              <a>ÇALIŞMALARIMIZ</a>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/yolculuga-basla">
              <a>YOLCULUĞA BAŞLA</a>
            </Link>
          </li>
          <li className="border-b">
            <Link href="/iletisim">
              <a>İLETİŞİM</a>
            </Link>
          </li>
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
  );
};

export default Header;
