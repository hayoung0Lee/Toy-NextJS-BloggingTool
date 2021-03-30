const repeatMultiple = (data, index) => {
  const result = [];

  for (let i = 0; i < index; i++) {
    for (const d of data) {
      result.push(d);
    }
  }

  return result;
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

const connectToDB = async (client, command, text, values) => {
  // client.connect();
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
