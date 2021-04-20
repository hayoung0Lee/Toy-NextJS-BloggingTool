// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { selectData } from "../../../utils/common";

// http://localhost:3000/api/users/login
// const r1 = await fetch("http://localhost:3000/api/users/login", { method: 'POST', body: JSON.stringify({ userId: 'hayoung', password: '1234' }) })
// let data = await r1.json();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res
      .status(500)
      .json({ message: "Sorry, login api only accepts POST method" });
    return;
  }

  const reqData = JSON.parse(req.body); // req -> json
  const userId = reqData["userId"];
  const password = reqData["password"];
  const selectResult = await selectData("users", { userId: userId });
  if (selectResult.length > 0 && password === selectResult[0]["password"]) {
    res.status(200).json({ message: "Login Success" });
  } else {
    res.status(200).json({ message: "Login Failed" });
  }

  // const jsonData = await openJsonFile();
  // if (
  //   jsonData.user[reqJson.id] &&
  //   jsonData.user[reqJson.id].password === reqJson.password
  // ) {
  //   res.status(200).json({ message: "Login Success" });
  // } else {
  //   res.status(200).json({ message: "Login Failed" });
  // }
  // const jsonData = await insertData("users", {
  //   userId: "jiyeon",
  //   password: "password",
  // });
  // const jsonData = await insertData("articles", {
  //   articleId: "3",
  //   title: "test",
  //   contents: "test",
  //   author: "hayoung",
  //   viewCount: "1",
  // });
  // const jsonData = await selectData("articles", "author", "hayoung");
  // console.log("jsonData", jsonData);
  // res.status(200).json({ message: "Login Success" });
};