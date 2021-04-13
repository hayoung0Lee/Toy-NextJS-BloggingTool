import Head from "next/head";
import React from "react";

// Static Generation
const Intro: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Introducting ToyBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Introducting ToyBlog</h1>
    </div>
  );
};

export default Intro;
