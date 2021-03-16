import Head from "next/head";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This is home
    </Layout>
  );
}
