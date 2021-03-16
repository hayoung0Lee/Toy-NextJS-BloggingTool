import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div>about for {username}</div>;
};

export default About;
