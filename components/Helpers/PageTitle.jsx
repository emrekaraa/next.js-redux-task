import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="bg-black text-white text-center font-bold py-12 text-5xl">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
