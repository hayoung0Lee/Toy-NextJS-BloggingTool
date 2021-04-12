import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ToyBlog Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Blog Main - trending, latest</div>
    </div>
  );
};

export default Home;
