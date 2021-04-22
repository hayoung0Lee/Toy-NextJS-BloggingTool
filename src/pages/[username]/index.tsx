import Head from "next/head";
import React from "react";
import { ArticleType } from "../../utils/types";
import { GetStaticProps, GetStaticPaths } from "next";
import { selectData } from "../../utils/common";
import Link from "next/link";
import styles from "../../styles/pages.module.css";
import Tab from "../../components/Tab/Tab";
import TabContent from "../../components/Tab/TabContent";

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
  if (!data) {
    return <div>Page doesn't exist</div>;
  }

  return (
    <div>
      <Head>
        <title>UserHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.intro}>
        <div className={styles.logo}>{username.slice(0, 1)}</div>
        <div>
          <h2>{username}'s Toyblog</h2>
          <p>developer</p>
        </div>
      </div>
      <Tab>
        <TabContent title="My articles">
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
        </TabContent>
        <TabContent title="Series">시리즈 기능을 준비 중입니다</TabContent>
        <TabContent title="Introduction">Intro 기능을 준비 중입니다</TabContent>
      </Tab>
    </div>
  );
};

export default UserHome;
