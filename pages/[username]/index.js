import { useRouter } from "next/router";
import Tab from "../../components/tab";
import TabContent from "../../components/tab-content";
import Card from "../../components/card";
import CardLayout from "../../components/card-layout";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { username: process.env.NEXT_PUBLIC_USERNAME } }, // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const { query } = require("../../utils/db");

  const get_result = await query(
    "select",
    `select contents
    from blog_post
    where username='${params.username}'
    limit 20` // TODO: 최신 10개 보여주기
  );
  return {
    props: {
      posts: get_result,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 10, // In seconds
  };
}

const Index = ({ posts }) => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <h2>Hi, This is {username}' blog</h2>
      <Tab>
        <TabContent title="Posts">
          <CardLayout>
            {posts.map((data, index) => {
              return <Card key={index} data={data} index={index} />;
            })}
          </CardLayout>
        </TabContent>
        <TabContent title="Series">Show series</TabContent>
        <TabContent title="Intro">Intro</TabContent>
      </Tab>
    </>
  );
};

export default Index;
