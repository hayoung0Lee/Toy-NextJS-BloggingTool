import { useRouter } from "next/router";
import MarkDownBody from "../../components/markdownbody";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { username: process.env.NEXT_PUBLIC_USERNAME, id: `1` } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const { query } = require("../../utils/db");

  const get_result = await query(
    "select",
    `select id, contents
    from blog_post
    where id='${params.id}'`
  );

  return {
    props: {
      post: get_result[0],
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 10, // In seconds
  };
}

const Title = ({ post }) => {
  const router = useRouter();
  const { username, id } = router.query;
  // const markDown = `# 안녕 \n
  // ## Writer \n
  // ${username} wrote it \n
  // ## title \n
  // title is ${title}
  // `; // TODO 나중에 이거 실제로 데이터 가져오는 구조로 바꾸기
  const markDown = post?.contents;

  return (
    <>
      <h2>
        Read Page for {username}, {id}
      </h2>
      <Link href={`/${process.env.NEXT_PUBLIC_USERNAME}/write?id=${id}`}>
        <button>edit</button>
      </Link>
      <MarkDownBody>{markDown}</MarkDownBody>
    </>
  );
};

export default Title;
