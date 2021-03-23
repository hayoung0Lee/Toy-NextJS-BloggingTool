import { useRouter } from "next/router";
import MarkDownBody from "../../components/markdownbody";
import Link from "next/link";
import dummy from "../../dummy.json";

const Title = () => {
  const router = useRouter();
  const { username, title } = router.query;
  // const markDown = `# 안녕 \n
  // ## Writer \n
  // ${username} wrote it \n
  // ## title \n
  // title is ${title}
  // `; // TODO 나중에 이거 실제로 데이터 가져오는 구조로 바꾸기
  const markDown = dummy[0].contents;

  return (
    <>
      <h2>
        Read Page for {username}, {title}
      </h2>
      <Link href={`/${process.env.NEXT_PUBLIC_USERNAME}/write?id=${title}`}>
        <button>edit</button>
      </Link>
      <MarkDownBody>{markDown}</MarkDownBody>
    </>
  );
};

export default Title;
