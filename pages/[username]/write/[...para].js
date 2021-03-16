import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

const Para = () => {
  const router = useRouter();
  const { username, para } = router.query;
  console.log(para);
  return <div className={styles.container}>Write/Para Page for {username}</div>;
};

export default Para;
