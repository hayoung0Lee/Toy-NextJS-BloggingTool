// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { selectData } from "../../../utils/common";
import { ArticleType } from "../../../utils/types";

// http://localhost:3000/api/articles
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Sorry, articles api only accepts GET method" });
    return;
  }

  const selectResult = await selectData("articles");
  // sort
  selectResult.sort(function (a: ArticleType, b: ArticleType) {
    return -(+a.viewCount - +b.viewCount); // 내림차순
  });

  res.status(200).json({ message: selectResult.slice(0, 12) });
};
