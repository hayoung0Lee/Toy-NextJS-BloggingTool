import { useRouter } from "next/router";
import Tab from "../../components/tab";
import TabContent from "../../components/tab-content";

const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <h2>Hi, This is {username}' blog</h2>
      <Tab>
        <TabContent title="Posts">Show posts</TabContent>
        <TabContent title="Series">Show series</TabContent>
        <TabContent title="Intro">Intro</TabContent>
      </Tab>
    </>
  );
};

export default Index;
