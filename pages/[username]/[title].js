import { useRouter } from "next/router";
import Layout from "../components/layout";

const Title = () => {
  const router = useRouter();
  const { username, title } = router.query;
  return (
    <Layout>
      Title Page for {username}, {title}
    </Layout>
  );
};

export default Title;
