import Link from "next/link";
// Css
import styles from "../styles/components/Header.module.css";
// Icons
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <Link href="/">
            <a>
              <img src="/Logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <ul>
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

        <button className={styles.burgerMenu}>
          <FiMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
