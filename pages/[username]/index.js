import { useRouter } from "next/router";
import Layout from "../components/layout";

const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  return <Layout>index for {username}</Layout>;
};

export default Index;
