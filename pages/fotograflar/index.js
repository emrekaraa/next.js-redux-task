import Link from "next/link";
import { Router, useRouter } from "next/router";
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


const Photos = ({ images, page }) => {

  console.log(images);
  console.log(page);


  const router = useRouter();


  return (
    <>
      <Head title="Ferhan Cihaner" desc="Ferhan Cihaner, Sağlıklı yaşam koçu!" />

      <Header />

      <PageTitle title="Fotoğraflar" />

      <Layout>

        <div className="flex flex-wrap justify-center mt-14">
          {images.map((image) => (
            <div key={image.id} className="m-3 lg:w-3/12 lg:mx-4 lg:my-4">
              <p className="text-center">Resim: {image.id}</p>
              <Link href={`/fotograflar/${image.id}`}>
                <a>
                  <img src={image.url} alt={image.title} />
                </a>
              </Link>
            </div>
          ))}

          {/* Pagination */}
          <div className="mb-14 mt-5 w-full">
            <ReactPaginate
              className={styles.pagination}
              previousLabel={"PREV"}
              nextLabel={"NEXT"}
              pageCount={4}
              onPageChange={(page) => { router.push(`/fotograflar?page=${page.selected + 1}`), animateScroll.scrollToTop() }}
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

Photos.getInitialProps = async (ctx) => {
  const query = ctx.query;

  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${query.page}?&_limit=12`);
  const images = await res.json();

  return {
    images: images,
    page: query.page
  }
}

export default Photos;
