import Head from "next/head";
import React from "react";
import CardViewer from "../components/CardViewer";
import { ArticleType } from "../utils/types";
import { GetStaticProps } from "next";
import { selectData } from "../utils/common";

// Incremental Static Regeneration
export const getStaticProps: GetStaticProps = async (context) => {
  const selectResult = await selectData("articles");
  // sort
  selectResult.sort(function (a: ArticleType, b: ArticleType) {
    return -(+a.viewCount - +b.viewCount); // 내림차순
  });

  return {
    props: {
      data: selectResult,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
};

interface Props {
  data: ArticleType[];
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>ToyBlog Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardViewer data={data} />
    </div>
  );
};

export default Home;
