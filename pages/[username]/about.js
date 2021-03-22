import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const { username } = router.query;
  return <>about for {username}</>;
};

export default About;
