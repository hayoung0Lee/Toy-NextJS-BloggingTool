// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import testDB from "../../utils/testDB.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res
      .status(500)
      .json({ message: "Sorry, login api only accepts POST method" });
    return;
  }

  const reqJson = JSON.parse(req.body); // req -> json

  if (
    testDB.user[reqJson.id] &&
    testDB.user[reqJson.id].password === reqJson.password
  ) {
    res.status(200).json({ message: "Login Success" });
  } else {
    res.status(200).json({ message: "Login Failed" });
  }
};

// const r1 = await fetch("http://localhost:3000/api/login", {method: 'POST', body: JSON.stringify({id: 'hayoung', password: 1234})})
