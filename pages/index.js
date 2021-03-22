import Head from "next/head";
import dummy from "../dummy.json";
import Card from "../components/card";
import CardLayout from "../components/card-layout";
import { repeatMultiple } from "../utils/common";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>trending</h3>
      <CardLayout>
        {repeatMultiple(dummy, 10).map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </CardLayout>
    </>
  );
}
