// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { selectData, updateArticle } from "../../../../../utils/common";

// http://localhost:3000/api/articles/hayoung/1
// let r1 = await fetch("http://localhost:3000/api/articles/hayoung/21", { method: 'POST', body: JSON.stringify({ title: "21번글 업데이트", contents: "teststststs"}) }
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const username = req.query.username as string;
  const articleId = req.query.articleId as string;

  if (req.method === "GET") {
    // get every article by this user
    const selectResult = await selectData("articles", {
      author: req.query.username as string,
      articleId: req.query.articleId as string,
    });

    res.status(200).json({ message: selectResult });
    return;
  }

  if (req.method === "POST") {
    // updateArticle
    const reqData = JSON.parse(req.body);
    const updateResult = await updateArticle(username, articleId, reqData);
    res.status(200).json({ message: updateResult });
    return;
  }

  res.status(500).json({
    message:
      "Sorry, articles/username/articleId api only accepts GET or POST method",
  });
};
