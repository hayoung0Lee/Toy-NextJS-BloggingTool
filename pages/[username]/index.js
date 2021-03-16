import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  console.log("index");
  return <div>index for {username}</div>;
};

export default Index;
