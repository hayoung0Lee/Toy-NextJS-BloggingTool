import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Para = () => {
  const router = useRouter();
  const { username, para } = router.query;
  console.log(para);
  return <Layout>Write/Para Page for {username}</Layout>;
};

export default Para;
