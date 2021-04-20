// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { selectData, insertData } from "../../../../utils/common";

// http://localhost:3000/api/articles/hayoung
// let r1 = await fetch("http://localhost:3000/api/articles/hayoung", { method: 'POST', body: JSON.stringify({ title: "title!!!", contents: "teststststs", viewCount: 1 }) })
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const username = req.query.username;
  if (req.method === "GET") {
    // get every article by this user
    const selectResult = await selectData("articles", {
      author: username as string,
    });
    res.status(200).json({ message: selectResult });
    return;
  }

  if (req.method === "POST") {
    // create a new article by this use
    // const reqData = JSON.parse(req.body);
    const reqData = JSON.parse(req.body);
    const createdData = await insertData("articles", {
      ...reqData,
      author: username,
    });

    if (createdData.length > 0) {
      res.setPreviewData(createdData[0], { maxAge: 10 });
      res.status(200).json({ message: createdData[0] });
    } else {
      res.status(200).json({ message: "something went wrong" });
    }
    return;
  }

  res.status(500).json({
    message:
      "Sorry, articles/username/articleId api only accepts GET or POST method",
  });
};
