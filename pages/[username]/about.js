import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const About = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div className={styles.container}>about for {username}</div>;
};

export default About;
