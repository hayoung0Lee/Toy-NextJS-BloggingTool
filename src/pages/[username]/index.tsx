import Head from "next/head";
import React from "react";
import { PostType } from "../../utils/types";
import { GetStaticProps, GetStaticPaths } from "next";
import { openJsonFile } from "../../utils/common";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { username: "hayoung" } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
};

// Incremental Static Site Regeneration
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jsonData = await openJsonFile();
  const username = params.username as string;
  const data: PostType[] = jsonData.contents[username] || [];

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

const UserHome: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>UserHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>UserHome</div>
      <div>
        {data?.map((d, index: number) => {
          return (
            <div key={index}>
              <h2>{d.title}</h2>
              <h5>{d.contents}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserHome;
