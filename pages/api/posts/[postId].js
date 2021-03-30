import { query } from "../../../utils/db";

export default async (req, res) => {
  const { postId } = req.query;
  const username = process.env.NEXT_PUBLIC_USERNAME;

  const { method, body } = req;

  console.log("postId: ", postId);

  // GET api/posts/:postId

  // PUT api/posts/:postId

  // DELETE	api/posts/:postId

  switch (method) {
    case "DELETE":
      try {
        const delete_result = await query(
          "delete",
          `delete from blog_post where id='${postId}'`
        );
        console.log(delete_result);
        res.status(200).json({ data: delete_result });
      } catch (err) {
        console.log(err);
        res.status(500).json({ data: "error" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  // res.status(200).json({ name: "John Doe" });
};
