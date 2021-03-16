import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div className={styles.container}>index for {username}</div>;
};

export default Index;
