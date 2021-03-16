import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

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

  return <div className={styles.container}>Write Page for {username}</div>;
};

export default Write;
