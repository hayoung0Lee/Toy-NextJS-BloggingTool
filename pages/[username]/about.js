import { useRouter } from "next/router";
import Layout from "../components/layout";

const About = () => {
  const router = useRouter();
  const { username } = router.query;
  return <Layout>about for {username}</Layout>;
};

export default About;
