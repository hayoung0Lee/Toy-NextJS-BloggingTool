import Head from "next/head";
import React, { useEffect } from "react";
import { ArticleType } from "../../utils/types";
import { GetStaticProps, GetStaticPaths } from "next";
import { selectData } from "../../utils/common";
import { ParsedUrlQuery } from "querystring";
import dynamic from "next/dynamic";
import styles from "../../styles/pages.module.css";
import Link from "next/link";
import { useStore } from "../../utils/store";

const DynamicComponentWithNoSSR = dynamic(
  () => import("hayoung-markdown").then((mod) => mod.Viewer),
  {
    ssr: false,
  }
);

// Incremental Static Site Regeneration - preview mode
interface Route extends ParsedUrlQuery {
  username: string;
  id: string;
}

interface PathType {
  params: Route;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // fetch current articles
  const selectResult: ArticleType[] = await selectData("articles");
  const staticPaths: PathType[] = [];
  for (const article of selectResult) {
    staticPaths.push({
      params: { username: article.author, id: article.articleId },
    });
  }

  return {
    paths: staticPaths,
    fallback: true, // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}) => {
  const username = params.username as string;
  const id = params.id as string;

  if (preview) {
    return {
      props: {
        data: previewData,
        username,
        id,
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  }

  const selectResult = await selectData("articles", {
    author: username,
    articleId: id,
  });

  return {
    props: {
      data: selectResult && selectResult[0],
      username,
      id,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
};

interface Props {
  data: ArticleType;
  username: string;
  id: string;
}

const UserPost: React.FC<Props> = ({ data, username, id }) => {
  // @ts-ignore
  const { token } = useStore();
  return (
    <div>
      <Head>
        <title>UserPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.menuWrapper}>
        <h1>
          {username}'s Post: {data?.title}
        </h1>
        {token === data.author && (
          <p className={styles.editButton}>
            <Link href={`/${username}/write?articleId=${id}`}>
              <button>edit</button>
            </Link>
          </p>
        )}
      </div>
      <div className={styles.viewerComponentWrapper}>
        {process.browser && data && data.contents ? (
          <DynamicComponentWithNoSSR convertedMarkDown={data.contents} />
        ) : null}
      </div>
    </div>
  );
};

export default UserPost;
