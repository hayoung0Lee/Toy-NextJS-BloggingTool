import { UserType, ArticleType } from "./types";

const openJsonFile = async () => {
  const fs = require("fs").promises;
  const jsonFile = await fs.readFile("src/utils/DB.json");
  const jsonData = JSON.parse(jsonFile);
  return jsonData;
};

const writeJsonFile = async (jsonData: any) => {
  const fs = require("fs").promises;
  const data = JSON.stringify(jsonData);
  fs.writeFile("src/utils/DB.json", data, "utf8");
  return true;
};

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
function instanceOfArticle(data: any): data is ArticleType {
  return "author" in data;
}

function instanceOfArticleList(data: any): data is ArticleType[] {
  return "author" in data[0];
}

interface filterKeyForArticles {
  author: string;
  articleId?: string;
}

interface filterKeyForUsers {
  userId: string;
}

function instanceOfFilterDataForArticles(
  data: any
): data is filterKeyForArticles {
  return "author" in data;
}

const selectData = async (
  keyName: string,
  filterKey?: filterKeyForUsers | filterKeyForArticles
) => {
  const db = await openJsonFile();

  if (keyName === "intro") {
    return db[keyName];
  }

  if (keyName === "users") {
    if (!filterKey) {
      return db[keyName];
    }

    if (!instanceOfFilterDataForArticles(filterKey)) {
      const result = [];
      db[keyName].forEach((row: UserType) => {
        if (row.userId === filterKey.userId) {
          result.push(row);
        }
      });

      return result;
    }
  }

  if (keyName === "articles") {
    if (!filterKey) {
      let result = [];
      for (const [author, articles] of Object.entries(db[keyName])) {
        if (instanceOfArticleList(articles)) {
          result = [...result, ...articles];
        }
      }
      return result;
    }

    if (
      instanceOfFilterDataForArticles(filterKey) &&
      db[keyName][filterKey.author] &&
      !filterKey.articleId
    ) {
      const result = [];

      db[keyName][filterKey.author].forEach((row: ArticleType) => {
        result.push(row);
      });
      return result;
    }

    if (
      instanceOfFilterDataForArticles(filterKey) &&
      db[keyName][filterKey.author] &&
      filterKey.articleId
    ) {
      const result = [];
      db[keyName][filterKey.author].forEach((row: ArticleType) => {
        if (row.articleId === filterKey.articleId) {
          result.push(row);
        }
      });
      return result;
    }
  }

  return [];
};

const insertData = async (keyName: string, data: UserType | ArticleType) => {
  const db = await openJsonFile();
  if (keyName === "users" && !instanceOfArticle(data)) {
    db[keyName].push(data);
    await writeJsonFile(db);
    return true;
  }

  if (keyName === "articles" && instanceOfArticle(data)) {
    if (!db[keyName][data.author]) {
      db[keyName][data.author] = [];
    }
    // calc ArticleID
    let articleId =
      db[keyName][data.author].length === 0
        ? 1
        : +db[keyName][data.author][db[keyName][data.author].length - 1]
            .articleId + 1;
    data.articleId = "" + articleId;

    if (db[keyName][data.author]) {
      db[keyName][data.author] = [];
    }

    db[keyName][data.author].push(data);
    await writeJsonFile(db);
    return true;
  }

  return false;
};

const updateArticle = async (
  username: string,
  articleId: string,
  data: { title: string; contents: string }
) => {
  const db = await openJsonFile();
  db["articles"][username].forEach((row: ArticleType, index: number) => {
    if (row.articleId === articleId) {
      console.log("same!!", row, data);
      db["articles"][username][index]["title"] = data.title;
      db["articles"][username][index]["contents"] = data.contents;
    }
  });

  await writeJsonFile(db);
  return true;
};

const deleteData = () => {};

export { selectData, insertData, updateArticle, deleteData };
