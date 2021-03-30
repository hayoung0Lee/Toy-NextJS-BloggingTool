// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../../utils/db";

export default async (req, res) => {
  // api/posts?title=1 이렇게 사용할 예정
  const username = process.env.NEXT_PUBLIC_USERNAME;

  const {
    method,
    query: { title },
    body,
  } = req;

  if (!title) {
    switch (method) {
      case "GET": // api/posts
        const get_result = await query(
          "select",
          "select username, contents from blog_post limit 10"
        );
        res.status(200).json({ data: get_result });
        break;
      case "POST": // api/posts
        const now = new Date();
        try {
          const post_result = await query(
            "insert",
            `insert into blog_post(created,modified,username,contents) 
            values($1, $2, $3, $4) returning *`,
            [now, now, username, body.contents]
          );
          res.status(200).json({ data: post_result[0] });
        } catch (err) {
          console.log(err);
          res.status(500).json({ data: "error" });
        }
        break;
      case "DELETE":
        res.status(200).json({ data: `delete every data` });
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } else {
    switch (method) {
      case "GET": // api/posts
        res.status(200).json({ data: "get single post" });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }

  // GET api/posts

  // GET	api/posts?title=[kw]

  // POST api/posts

  // DELETE api/posts : 전체 다 지우기... 과연 필요할까...

  // res.status(200).json({ name: "John Doe" });
};
