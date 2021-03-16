import { useRouter } from "next/router";
import { useEffect } from "react";

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

  return <div>Write Page for {username}</div>;
};

export default Write;
