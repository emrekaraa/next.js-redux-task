import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/Helpers/PageTitle";

const fotograf = ({ data }) => {
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
      <PageTitle title="Fotoğraf Detay" />
      <div className="flex flex-col justify-center items-center my-24">
        <p>Resim {data.id}</p>
        <img src={data.url} />
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
