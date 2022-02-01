import React from "react";
import Link from "next/link";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center">
        <Header />
        <div className=" h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">404 Not Found!</h1>
          <button className="p-4 mt-5 border border-black hover:bg-black hover:text-white">
            <Link href="/">
              <a>Return to Home Page</a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
