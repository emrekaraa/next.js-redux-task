//Components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
// Helpers
import Head from "../../components/Helpers/Head";

const fotograf = ({ data, imageId }) => {

  return (
    <>
      <Head title="Fotoğraf" desc="Ferhan Cihaner, Sağlıklı yaşam koçu!" />

      <Header />

      <PageTitle title="Fotoğraf Detay" />

      <div className="flex flex-col justify-center items-center my-24">
        RESİM: {imageId}
        <img src={data.url} alt={data.url} />
      </div>

      <Footer />
    </>
  );
};

fotograf.getInitialProps = async (ctx) => {

  const query = ctx.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${query.id}`);
  const data = await res.json();

  return {
    data: data,
    imageId: query.id
  };
}

export default fotograf;
