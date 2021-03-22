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

  if (!!id) {
    return <>Write Page for {username} - 수정중</>;
  } else {
    return <>Write Page for {username} - 새로작성</>;
  }
};

export default Write;
