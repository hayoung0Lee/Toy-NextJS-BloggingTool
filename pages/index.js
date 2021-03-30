import Head from "next/head";
import dummy from "../dummy.json";
import Card from "../components/card";
import CardLayout from "../components/card-layout";
import { repeatMultiple } from "../utils/common";
import Tab from "../components/tab";
import TabContent from "../components/tab-content";
import Link from "next/link";

export async function getStaticProps() {
  // 이부분은 서버에서만 동작한다
  const { query } = require("../utils/db");

  const get_result = await query(
    "select",
    "select username, contents from blog_post limit 20" // TODO: 최신 10개 보여주기
  );

  if (!get_result) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: get_result }, // will be passed to the page component as props
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tab>
        <TabContent title="trending">
          {/* 20개 정도 순서대로 보여주기 */}
          <CardLayout>
            {posts.map((data, index) => {
              return <Card key={index} data={data} index={index} />;
            })}
          </CardLayout>
        </TabContent>
        <TabContent title="newest">second tab</TabContent>
      </Tab>
    </>
  );
}
