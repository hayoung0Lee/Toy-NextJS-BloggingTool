import Head from "next/head";
import React from "react";
import CardViewer from "../components/CardViewer";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ToyBlog Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog Main - trending, latest</h1>
      <CardViewer data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
    </div>
  );
};

export default Home;
