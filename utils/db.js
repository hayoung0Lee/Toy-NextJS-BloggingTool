const { Client } = require("pg");

const connect = () => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "blog",
    password: "1234",
    port: 5432,
  });

  client.connect();

  return client;
};

const select = async (client, text) => {
  if (!text) return;
  try {
    const res = await client.query(text);
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }
};

const insert = async (client, text, values) => {
  // const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
  // const values = ["brianc", "brian.m.carlson@gmail.com"];
  try {
    const res = await client.query(text, values);
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }
};

const query = async (command, text, values) => {
  const client = connect();
  switch (command) {
    case "select":
      return select(client, text);
    case "insert":
      return insert(client, text, values);
    default:
      console.log("invalid command");
  }
};

export { query };
