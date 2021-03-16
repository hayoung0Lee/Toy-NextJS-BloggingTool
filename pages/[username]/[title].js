import { useRouter } from "next/router";

const Title = () => {
  const router = useRouter();
  const { username, title } = router.query;
  return (
    <div>
      Title Page for {username}, {title}
    </div>
  );
};

export default Title;
