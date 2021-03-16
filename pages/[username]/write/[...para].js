import { useRouter } from "next/router";

const Para = () => {
  const router = useRouter();
  const { username, para } = router.query;
  console.log(para);
  return <div>Write/Para Page for {username}</div>;
};

export default Para;
