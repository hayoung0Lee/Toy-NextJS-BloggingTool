const openJsonFile = async () => {
  const fs = require("fs").promises;
  const jsonFile = await fs.readFile("./utils/testDB.json");
  const jsonData = JSON.parse(jsonFile);
  return jsonData;
};

export { openJsonFile };
