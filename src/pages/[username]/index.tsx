import Head from "next/head";
import React from "react";
import { ArticleType } from "../../utils/types";
import { GetStaticProps, GetStaticPaths } from "next";
import { selectData } from "../../utils/common";
import Link from "next/link";
import styles from "../../styles/pages.module.css";

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
  const username = params.username as string;

  const data = await selectData("articles", {
    author: username,
  });

  return {
    props: {
      data,
      username,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
};

interface Props {
  data: ArticleType[];
  username: string;
}

const UserHome: React.FC<Props> = ({ data, username }) => {
  return (
    <div>
      <Head>
        <title>UserHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>UserHome</h1>
      <div className={styles.postList}>
        {data?.map((d, index: number) => {
          return (
            <Link key={index} href={`/${username}/${d.articleId}`}>
              <div>
                <h2>{d.title}</h2>
                <h5>{d.contents}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UserHome;
