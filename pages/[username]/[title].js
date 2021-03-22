import { useRouter } from "next/router";

const Title = () => {
  const router = useRouter();
  const { username, title } = router.query;
  return (
    <>
      Title Page for {username}, {title}
    </>
  );
};

export default Title;
