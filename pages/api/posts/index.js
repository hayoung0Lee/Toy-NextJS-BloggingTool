// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

console.log("Hello API");
export default (req, res) => {
  // api/posts?title=1 이렇게 사용할 예정
  const {
    method,
    query: { title },
    body,
  } = req;
  if (!title) {
    switch (method) {
      case "GET": // api/posts
        res.status(200).json({ data: "get every post" });
        break;
      case "POST": // api/posts
        // TODO json객체 이어붙이기
        console.log("post body", body);
        res.status(200).json({ data: `post data` });
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
