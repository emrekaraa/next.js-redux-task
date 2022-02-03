import Link from "next/link";
import { useEffect, useState } from "react";
// Packages
import ReactPaginate from "react-paginate";
import { animateScroll } from "react-scroll/modules";
// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
// Helpers
import Layout from "../../components/Helpers/Layout";
import Head from "../../components/Helpers/Head";
// Css
import styles from "../../styles/pages/Fotograflar.module.css";

const Photos = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchImage = async (pageCount) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageCount}&_limit=12`);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchImage(page);
  }, [page]);

  return (
    <>
      <Head title="Ferhan Cihaner" desc="Ferhan Cihaner, Sağlıklı yaşam koçu!" />

      <Header />

      <PageTitle title="Fotoğraflar" />

      <Layout>

        <div className="flex flex-wrap justify-center mt-14">
          {data.map((item) => (
            <div key={item.id} className="m-3 lg:w-3/12 lg:mx-4 lg:my-4">
              <div className="text-center">Resim: {item.id}</div>
              <Link href={`/fotograflar/${item.id}`}>
                <a>
                  <img src={item.url} alt={item.title} />
                </a>
              </Link>
            </div>
          ))}

          {/* Pagination */}
          <div className="mb-14 mt-5 w-full">
            <ReactPaginate
              className={styles.pagination}
              previousLabel={""}
              nextLabel={""}
              pageCount={4}
              onPageChange={(e) => { setPage(e.selected + 1); animateScroll.scrollToTop(); }}
              pageClassName={styles.page}
              pageLinkClassName={styles.pageLink}
              activeLinkClassName={styles.active}
            />
          </div>
        </div>

      </Layout>

      <Footer />
    </>
  );
};

export default Photos;
