// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { selectData, insertData } from "../../../utils/common";
import { UserType } from "../../../utils/types";
// http://localhost:3000/api/users/signUp
// let r1 = await fetch("http://localhost:3000/api/users/signUp", { method: 'POST', body: JSON.stringify({ userId: 'newData', password: '1234' }) })
// let data = await r1.json();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res
      .status(500)
      .json({ message: "Sorry, login api only accepts POST method" });
    return;
  }
  const reqData = req.body;
  const userId = reqData["userId"];
  const password = reqData["password"];
  console.log(userId, password);
  const selectResult = await selectData("users", { userId: userId });
  if (selectResult.length > 0) {
    res.status(200).json({
      message: "Sign Up Failed, userID already exists",
    });
    return;
  }

  const jsonData = (await insertData("users", {
    userId: userId,
    password: password,
  })) as UserType[];

  res.status(200).json({
    token: jsonData[0].userId,
    message: "Sign Up Success",
  });
  return;
};
