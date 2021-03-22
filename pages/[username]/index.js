import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  return <>index for {username}</>;
};

export default Index;
