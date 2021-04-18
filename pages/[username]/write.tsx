import Head from "next/head";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

const DynamicComponentWithNoSSR = dynamic(
  () => import("hayoung-markdown").then((mod) => mod.App),
  {
    ssr: false,
  }
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.query.id ? context.query.id : undefined;

  if (!articleId) {
    const data = "";
    return {
      props: {
        data,
      },
    };
  }

  const data = `Update Article ${articleId}`;
  return {
    props: {
      data,
    },
  };
};

interface Props {
  data: string;
}

const UserWrite: React.FC<Props> = ({ data }) => {
  const contents = data;

  const handleTrigger = (str: string) => {
    return str;
  };

  return (
    <div>
      <Head>
        <title>UserWrite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        <DynamicComponentWithNoSSR
          passedContents={contents}
          handleTrigger={handleTrigger}
        />
      ) : null}
    </div>
  );
};

export default UserWrite;
