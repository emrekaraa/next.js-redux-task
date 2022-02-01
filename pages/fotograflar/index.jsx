import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Helpers
import Layout from "../../components/Helpers/Layout";
import PageTitle from "../../components/Helpers/PageTitle";
import ReactPaginate from "react-paginate";
// Css
import styles from "../../styles/pages/Fotograflar.module.css";

const Photos = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchImage = async (pageCount) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${pageCount}&_limit=12`
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchImage(page);
  }, [page]);

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

      <PageTitle title={"Fotoğraflar"} />

      <Layout>
        <div className="flex flex-wrap justify-center mt-14">
          {data.map((item) => {
            return (
              <div key={item.id} className="m-3 lg:w-3/12 lg:mx-4 lg:my-4 ">
                <Link href={`/fotograflar/${item.id}`}>
                  <a>
                    Resim {item.id}
                    <img src={item.url} alt={item.title} />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="mb-14">
          <ReactPaginate
            className={styles.pagination}
            previousLabel={""}
            nextLabel={""}
            pageCount={4}
            onPageChange={(e) => {
              setPage(e.selected + 1);
            }}
            pageClassName={styles.page}
            pageLinkClassName={styles.pageLink}
            activeLinkClassName={styles.active}
          />
        </div>
      </Layout>

      <Footer />
    </>
  );
};

export default Photos;
