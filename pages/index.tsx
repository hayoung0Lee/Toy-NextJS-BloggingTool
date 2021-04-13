import Head from "next/head";
import React from "react";
import CardViewer from "../components/CardViewer";
import { PostType, ContentsType } from "../utils/types";
import { GetStaticProps } from "next";
import { openJsonFile } from "../utils/common";

const getOnlyContentsAndSort = (data: ContentsType): PostType[] => {
  let result: PostType[] = [];

  // console.log(Object.entries(data));
  for (const [author, post] of Object.entries(data)) {
    // console.log(author, post);
    result = [...result, ...post];
  }

  result.sort(function (a: PostType, b: PostType) {
    return -(a.viewCount - b.viewCount); // 내림차순
  });

  return result;
};

// Incremental Static Regeneration
export const getStaticProps: GetStaticProps = async (context) => {
  const jsonData = await openJsonFile();
  const data: PostType[] = getOnlyContentsAndSort(jsonData["contents"]);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
};

interface Props {
  data: PostType[];
}

const Home: React.FC<Props> = ({ data }) => {
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
