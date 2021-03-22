import Head from "next/head";
import dummy from "../dummy.json";
import Card from "../components/card";
import CardLayout from "../components/card-layout";
import { repeatMultiple } from "../utils/common";
import Tab from "../components/tab";
import TabContent from "../components/tab-content";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tab>
        <TabContent title="trending">
          <CardLayout>
            {repeatMultiple(dummy, 10).map((data, index) => {
              return <Card key={index} data={data} index={index} />;
            })}
          </CardLayout>
        </TabContent>
        <TabContent title="newest">second tab</TabContent>
      </Tab>
    </>
  );
}
