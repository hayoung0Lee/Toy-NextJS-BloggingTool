import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const Title = () => {
  const router = useRouter();
  const { username, title } = router.query;
  return (
    <div className={styles.container}>
      Title Page for {username}, {title}
    </div>
  );
};

export default Title;
