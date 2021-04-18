import Head from "next/head";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("hayoung-markdown").then((mod) => mod.App),
  {
    ssr: false,
  }
);

const UserWrite: React.FC = () => {
  const [contents, setContents] = useState<string>("");

  return (
    <div>
      <Head>
        <title>UserWrite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        // <App passedContents={contents} passedSetContents={setContents} />
        <DynamicComponentWithNoSSR
          passedContents={contents}
          passedSetContents={setContents}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UserWrite;
