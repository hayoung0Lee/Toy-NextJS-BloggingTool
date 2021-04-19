import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { PostType } from "../../utils/types";
import { GetStaticProps, GetStaticPaths } from "next";
import { openJsonFile } from "../../utils/common";
import { ParsedUrlQuery } from "querystring";

// Incremental Static Site Regeneration - preview mode
interface Route extends ParsedUrlQuery {
  username: string;
  id: string;
}

interface PathType {
  params: Route;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const jsonData = await openJsonFile();
  const staticPaths: PathType[] = [];

  for (const [user, posts] of Object.entries(jsonData.contents)) {
    const postsData = posts as PostType[];

    for (const p of postsData) {
      staticPaths.push({ params: { username: user, id: p.id.toString() } });
    }
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
  if (preview) {
    console.log("preview");
    return {
      props: {
        data: previewData,
      }, // will be passed to the page component as props
      // revalidate: 1,
    };
  }

  const jsonData = await openJsonFile();
  const username = params.username as string;
  const id = +(params.id as string);
  const data: PostType[] = jsonData.contents[username][id] || [];

  return {
    props: {
      data,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
};

interface Props {
  data: PostType;
}
const UserPost: React.FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>UserPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {router.query.username}'s Post: {data?.title}
      </div>
      <div>Contents for Post: {data?.contents}</div>
    </div>
  );
};

export default UserPost;