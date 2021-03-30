const { Client } = require("pg");

const repeatMultiple = (data, index) => {
  const result = [];

  for (let i = 0; i < index; i++) {
    for (const d of data) {
      result.push(d);
    }
  }

  return result;
};

const select = (client, text) => {
  if (!q) return;
  client
    .query(q)
    .then((res) => {
      // console.log(res.rows[0])
      return res.rows;
    })
    .catch((e) => console.error(e.stack));
};

const insert = (client, text, values) => {
  // const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
  // const values = ["brianc", "brian.m.carlson@gmail.com"];
  client
    .query(text, values)
    .then((res) => {
      return res.rows;
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    })
    .catch((e) => console.error(e.stack));
};

const connectToDB = async (command, text, values) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "blog",
    password: "1234",
    port: 5432,
  });

  client.connect();

  switch (command) {
    case "select":
      return select(client, text);
    case "insert":
      return insert(client, text, values);

    default:
      console.log("invalid command");
  }
};

export { repeatMultiple, connectToDB };
