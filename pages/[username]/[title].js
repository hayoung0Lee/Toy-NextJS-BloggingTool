import { useRouter } from "next/router";
import MarkDownBody from "../../components/markdownbody";

const Title = () => {
  const router = useRouter();
  const { username, title } = router.query;
  const markDown = `# 안녕 \n
  ## Writer \n 
  ${username} wrote it \n 
  ## title \n 
  title is ${title} 
  `; // TODO 나중에 이거 실제로 데이터 가져오는 구조로 바꾸기

  return (
    <>
      <h2>
        Title Page for {username}, {title}
      </h2>
      <MarkDownBody>{markDown}</MarkDownBody>
    </>
  );
};

export default Title;
