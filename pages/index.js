// Css
import styles from "../styles/pages/Index.module.css";
// Components
import Header from "../components/Header";
import Layout from "../components/Layout";
// Icons
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />

        <section className={styles.section}>
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

          <div className={styles.image}>
            <img src="/Ferhan.png" alt="Ferhan-Cihaner" />
          </div>

          <div className={styles.textContent}>
            <h1>
              Merhaba,
              <br />
              Dünyama Hoş Geldin
            </h1>

            <p className="mb-5">
              Herkese Selam <br />
              <b>Ben Ferhan Cihaner,</b>
            </p>

            <p className="mb-8">
              Sporu çok seviyorum ve bir Triathletim! İnsanların da daha
              sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden
              gelen her şeyi yapmaya hazırım. <br />
              <br />
              Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu,
              huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere
              çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle
              birlikte hareket edebilmek. Web sitemi gezerken umarım
              istediklerini karşılarım!
              <br />
              <br />
              Benimle gel ve motive ol!
            </p>
          </div>
        </section>

        <p className={styles.copyright}>copyright ©ferhancihaner.com</p>
      </Layout>
    </>
  );
}
