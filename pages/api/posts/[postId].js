export default (req, res) => {
  const { postId } = req.query;
  console.log("postId: ", postId);

  // GET api/posts/:postId

  // PUT api/posts/:postId

  // DELETE	api/posts/:postId
  res.status(200).json({ name: "John Doe" });
};
