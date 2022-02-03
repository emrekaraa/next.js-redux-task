//Components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
// Helpers
import Head from "../../components/Helpers/Head";

const fotograf = ({ data }) => {
  return (
    <>
      <Head title="Fotoğraf" desc="Ferhan Cihaner, Sağlıklı yaşam koçu!" />

      <Header />

      <PageTitle title="Fotoğraf Detay" />

      <div className="flex flex-col justify-center items-center my-24">
        <p>Resim {data.id}</p>
        <img src={data.url} alt={data.url} />
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default fotograf;
