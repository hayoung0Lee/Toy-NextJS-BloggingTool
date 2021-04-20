import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";
import { IntroType } from "../utils/types";
import { selectData } from "../utils/common";

export const getStaticProps: GetStaticProps = async (context) => {
  const introData: IntroType[] = await selectData("intro");

  return {
    props: {
      introData,
    }, // will be passed to the page component as props
  };
};

interface Props {
  introData: IntroType[];
}

// Static Generation
const Intro: React.FC<Props> = ({ introData }) => {
  return (
    <div>
      <Head>
        <title>Introducing ToyBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Introducting ToyBlog</h1>
      {introData.map((d, index) => {
        return (
          <div key={index}>
            <h2>{d.question}</h2>
            <h5>{d.answer}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Intro;
