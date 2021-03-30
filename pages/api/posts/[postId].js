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
    case "GET":
      try {
        const get_result = await query(
          "select",
          `select contents from blog_post where id='${postId}'`
        );
        res.status(200).json({ data: get_result });
      } catch (err) {
        console.log(err);
        res.status(500).json({ data: "error" });
      }
      break;
    case "DELETE":
      try {
        const delete_result = await query(
          "delete",
          `delete from blog_post where id='${postId}'`
        );
        res.status(200).json({ data: delete_result });
      } catch (err) {
        console.log(err);
        res.status(500).json({ data: "error" });
      }
      break;
    case "PATCH":
      try {
        const update_result = await query(
          "update",
          `update blog_post
          set
          modified=current_timestamp,
          contents='${body.contents}'
          where id='${postId}'`
        );

        res.status(200).json({ data: update_result });
      } catch (err) {
        console.log(err);
        res.status(500).json({ data: "error" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE", "PATCH"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  // res.status(200).json({ name: "John Doe" });
};
