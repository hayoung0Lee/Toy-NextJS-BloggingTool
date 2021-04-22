import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";
import { IntroType } from "../utils/types";
import { selectData } from "../utils/common";
import styles from "../styles/pages.module.css";

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
      {introData.map((d, index) => {
        return (
          <div key={index} className={styles.introList}>
            <h2>{d.question}</h2>
            <h4>{d.answer}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Intro;
