import Head from "next/head";
import React from "react";
import CardViewer from "../components/CardViewer";
import { PostType } from "../utils/types";

const data: PostType[] = [
  { id: 1, title: "test", content: "content" },
  { id: 2, title: "test", content: "content" },
  { id: 3, title: "test", content: "content" },
  { id: 4, title: "test", content: "content" },
  { id: 5, title: "test", content: "content" },
  { id: 6, title: "test", content: "content" },
];

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ToyBlog Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog Main - trending, latest</h1>
      <CardViewer data={data} />
    </div>
  );
};

export default Home;
