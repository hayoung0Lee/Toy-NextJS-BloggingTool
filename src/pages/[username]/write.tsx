import Head from "next/head";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { selectData } from "../../utils/common";
import { useRouter } from "next/router";
import { useStore } from "../../utils/store";

const DynamicComponentWithNoSSR = dynamic(
  () => import("hayoung-markdown").then((mod) => mod.App),
  {
    ssr: false,
  }
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = (
    context.query.articleId ? context.query.articleId : "-1"
  ) as string;
  const username = context.query.username as string;

  if (articleId === "-1") {
    const data = "";
    return {
      props: {
        data,
        username,
        articleId,
      },
    };
  }

  const selectResult = await selectData("articles", {
    author: username,
    articleId: articleId,
  });

  const data = selectResult && selectResult[0].contents;

  return {
    props: {
      data,
      username,
      articleId,
    },
  };
};

interface Props {
  data: string;
  username: string;
  articleId: string;
}

const UserWrite: React.FC<Props> = ({ data, username, articleId }) => {
  const [contents, setContents] = useState<string>(data);
  const router = useRouter();
  // @ts-ignore
  const { reset, setReset } = useStore();

  const handleTrigger = (str: string) => {
    setContents(str);
    return str;
  };

  const handleSave = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    let temp = window.confirm;
    window.confirm = (str) => {
      return true;
    };

    try {
      if (articleId === "-1") {
        const response = await fetch(`/api/articles/${username}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify({ title: "new data", contents: contents }), // body data type must match "Content-Type" header
        });
        const result = await response.json();

        router.push(`/${username}/${result.message.articleId}`);
      } else {
        const response = await fetch(`/api/articles/${username}/${articleId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify({ title: "new data", contents: contents }), // body data type must match "Content-Type" header
        });
        const result = await response.json();
        router.push(`/${username}/${result.message.articleId}`);
      }
    } catch (err) {
      console.error("submit", err);
    } finally {
      // FIXME: setTimeout 0를 통해서 window confirm 메시지 조정
      setTimeout(() => {
        window.confirm = temp;
      }, 0);
    }
  };

  // FIXEME: textarea defaultvalue가업데이트가 안된다
  useEffect(() => {
    if (reset) {
      setReset(false);
      setContents("");
    }
  }, [reset]);

  return (
    <div>
      <Head>
        <title>UserWrite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>This Package is still under development(hayoung-markdown)</div>
      {process.browser ? (
        <DynamicComponentWithNoSSR
          passedContents={contents}
          handleTrigger={handleTrigger}
        />
      ) : null}
      <button onClick={(e) => handleSave(e)}>저장하기</button>
    </div>
  );
};

export default UserWrite;
