import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
// Components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/Helpers/PageTitle";
// Css
import styles from "../../styles/pages/Yolculugabasla.module.css";
// Helpers
import { countryList } from "../../components/Helpers/Countries";
import Layout from "../../components/Helpers/Layout";
// Redux
import { connect } from "react-redux";
import { setReduxForm } from "../../redux/actions/main";

const YolculugaBasla = ({ formInfo, setReduxForm }) => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    country: "Turkey",
    isProductUse: false,
    isMember: false,
    bodySize: "",
    about: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form });
    setReduxForm({ ...form });
  };

  const stepValidation = () => {
    if (
      form.name.length &&
      form.email.length &&
      form.phone.length &&
      form.instagram.length &&
      form.bodySize.length
    ) {
      setStep(step + 1);
    } else {
      alert("Lütfen tüm alanları doldurunuz.");
    }
  };

  return (
    <>
      <Head>
        <title>Ferhan Cihaner</title>
        <meta
          name="description"
          content="Ferhan Cihaner, Sağlıklı yaşam koçu!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <PageTitle title="Yolculuğa Başla" />
      <Layout>
        {/* Step 1 */}
        {step === 1 && (
          <div className={styles.container}>
            <form>
              <h2>Adım 1</h2>

              {/* Input group 1*/}
              <h3>Kişisel Bilgiler</h3>

              <div className="flex flex-wrap gap-5">
                <input
                  value={form.name}
                  onChange={handleForm}
                  name="name"
                  placeholder="İsim"
                />
                <input
                  value={form.email}
                  onChange={handleForm}
                  name="email"
                  placeholder="E-Posta Adresi"
                />
                <input
                  value={form.phone}
                  onChange={handleForm}
                  name="phone"
                  placeholder="Telefon"
                />
                <input
                  value={form.instagram}
                  onChange={handleForm}
                  name="instagram"
                  placeholder="Instagram Kullanıcı Adınız"
                />
              </div>

              {/* Input group 2*/}
              <h3>Hangi Ülkede Yaşıyorsun?</h3>
              <div className="flex">
                <select
                  value={form.country}
                  onChange={handleForm}
                  name="country"
                >
                  {countryList.map((country) => {
                    return (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Input group 3*/}
              <h3>Daha önce Herbalife ürünü kullandın mı?</h3>
              <div className="text-lg">
                <input
                  value={true}
                  onChange={handleForm}
                  name="isProductUse"
                  id="1"
                  type="radio"
                />
                <label htmlFor="1" className="mr-7">
                  Evet
                </label>

                <input
                  id="2"
                  type="radio"
                  value={false}
                  defaultChecked
                  onChange={handleForm}
                  name="isProductUse"
                />
                <label htmlFor="2" className="mr-7">
                  Hayır
                </label>
              </div>

              {/* Input group 4*/}
              <h3>Daha önce Herbalife üyesi oldun mu?</h3>
              <div className="text-lg">
                <input
                  value={true}
                  onChange={handleForm}
                  id="3"
                  type="radio"
                  name="isMember"
                />
                <label htmlFor="3" className="mr-7">
                  Evet
                </label>

                <input
                  value={false}
                  onChange={handleForm}
                  id="4"
                  type="radio"
                  name="isMember"
                  defaultChecked
                />
                <label htmlFor="4" className="mr-7">
                  Hayır
                </label>
              </div>

              {/* Input group 5*/}
              <h3>İdeal vücut ölçün nedir?</h3>
              <div className="flex">
                <input
                  value={form.bodySize}
                  onChange={handleForm}
                  name="bodySize"
                  placeholder="Ölçünüzü Yazınız"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  stepValidation();
                }}
              >
                Gönder
              </button>
            </form>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className={styles.container}>
            <form>
              <h2>Adım 2</h2>
              <h3>Bize biraz kendinden bahsedermisin ?</h3>
              <textarea
                value={form.about}
                onChange={handleForm}
                name="about"
                className="w-full"
                rows="10"
              ></textarea>
              {/* Submit Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit(e);
                  setStep(step + 1);
                }}
              >
                Gönder
              </button>
            </form>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className={styles.container}>
            <div>
              <h2>Tamamlandı</h2>
              <Link href="/">
                <a className={styles.btn}>Anasayfaya dön</a>
              </Link>
            </div>
          </div>
        )}
      </Layout>

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  formInfo: state.main,
});

const mapDispatchToProps = {
  setReduxForm: setReduxForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(YolculugaBasla);
