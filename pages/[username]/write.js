import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/layout";

const Write = () => {
  const router = useRouter();
  const { username, id } = router.query;

  useEffect(() => {
    setTimeout(() => {
      console.log("id", id, typeof id, !!id);
      if (!!id) {
        alert("fetch contents");
      }
    }, 1000);
  }, [id]);

  return <Layout>Write Page for {username}</Layout>;
};

export default Write;
