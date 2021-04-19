// https://nextjs.org/docs/advanced-features/preview-mode
import type { NextApiRequest, NextApiResponse } from "next";
// import { openJsonFile } from "../../../../../utils/common";

// http://localhost:3000/api/articles/hayoung/1/preview

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const jsonData = await openJsonFile();
  // const user = req.query.username as string;
  // const id = +(req.query.id as string);

  // const newOrUpdatedPost = jsonData.contents[user][id];

  // if (!newOrUpdatedPost) {
  //   return res.status(401).json({ message: "Invalid user or id" });
  // }

  // 이동안 다른곳에서도 다 preview mode로 동작한다
  // res.setPreviewData(newOrUpdatedPost, { maxAge: 5 });
  // res.redirect(`/${user}/${id}`);
  res.status(200).json({ message: "preview" });
}
