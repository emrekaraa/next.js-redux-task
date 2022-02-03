// Css
import styles from "../styles/pages/Index.module.css";
// Components
import Header from "../components/Header";
// Helpers
import Layout from "../components/Helpers/Layout";
import Head from "../components/Helpers/Head";
// Icons
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";



export default function Home() {
  return (
    <>
      <Head title="Ferhan Cihaner" desc="Ferhan Cihaner, Sağlıklı Yaşam Koçu!" />

      <Header />

      <Layout>
        <section className={styles.section}>
          {/* Desktop Icons */}
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

          {/* Image */}
          <img src="/Ferhan.png" alt="Ferhan-Cihaner" />



          {/* Text Content */}
          <div className={styles.textContent}>
            <h1>Merhaba,<br />Dünyama Hoş Geldin</h1>

            <p className="mb-5">Herkese Selam <br /> <b>Ben Ferhan Cihaner,</b></p>

            <p className="mb-8"> Sporu çok seviyorum ve bir Triathletim! İnsanların da daha sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden gelen her şeyi yapmaya hazırım. <br /> <br /> Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle birlikte hareket edebilmek. Web sitemi gezerken umarım istediklerini karşılarım! <br /> <br /> Benimle gel ve motive ol!
            </p>
          </div>
        </section>

        {/* Copyright */}
        <p className={styles.copyright}>copyright ©ferhancihaner.com</p>

        {/* Mobile Icons */}
        <div className={styles.mobileIcons}>
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
      </Layout>
    </>
  );
}
