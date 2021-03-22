import { useRouter } from "next/router";
import Tab from "../../components/tab";
import TabContent from "../../components/tab-content";
import dummy from "../../dummy.json";
import Card from "../../components/card";
import CardLayout from "../../components/card-layout";
import { repeatMultiple } from "../../utils/common";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { username: process.env.NEXT_PUBLIC_USERNAME } }, // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps() {
  const posts = dummy;
  // const posts = await res.json();
  console.log("getStatic props");
  return {
    props: {
      posts,
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
  console.log("posts", posts);
  return (
    <>
      <h2>Hi, This is {username}' blog</h2>
      <Tab>
        <TabContent title="Posts">
          <CardLayout>
            {repeatMultiple(posts, 4).map((data, index) => {
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
