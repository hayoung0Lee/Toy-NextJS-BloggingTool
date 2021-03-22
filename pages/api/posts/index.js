// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

console.log("Hello API");
export default (req, res) => {
  // api/posts?title=1 이렇게 사용할 예정
  const { title } = req.query;
  console.log("title: ", title);

  // GET api/posts

  // GET	api/posts?title=[kw]

  // POST api/posts

  // DELETE api/posts : 전체 다 지우기... 과연 필요할까...

  res.status(200).json({ name: "John Doe" });
};
