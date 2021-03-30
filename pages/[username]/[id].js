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
      post: get_result.length <= 0 ? null : get_result[0],
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

  const handleDelete = async (event, id) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });

      if (res.status === 200) {
        // successfully posted
        // alert("delete");
        router.push(`/${username}`);
      } else {
        alert("retry");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) {
    return (
      <>
        <h2>not existing</h2>
      </>
    );
  }

  const markDown = post?.contents;

  return (
    <>
      <h2>
        Read Page for {username}, {id}
      </h2>
      <button onClick={(event) => handleDelete(event, id)}>delete</button>
      <Link href={`/${process.env.NEXT_PUBLIC_USERNAME}/write?id=${id}`}>
        <button>edit</button>
      </Link>
      <MarkDownBody>{markDown}</MarkDownBody>
    </>
  );
};

export default Title;
