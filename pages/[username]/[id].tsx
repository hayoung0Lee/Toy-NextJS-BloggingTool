import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const UserPost: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>UserPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {router.query.username}'s Post: {router.query.id}
      </div>
      <div>Contents for Post: {router.query.id}</div>
    </div>
  );
};

export default UserPost;
