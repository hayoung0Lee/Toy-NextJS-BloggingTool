import { UserType, ArticleType } from "./types";

const jsonPath = "src/utils/DB.json";

const initialJsonState = {
  users: [],
  articles: {},
  intro: [
    { question: "What is this?", answer: "This is toy blog service" },
    {
      question: "Which framework is this service using?",
      answer: "This project uses Next.js",
    },
    { question: "Who are you?", answer: "I'm Hayoung Lee" },
  ],
};

const openJsonFile = async () => {
  const fs = require("fs").promises;
  try {
    await fs.access(jsonPath);
  } catch {
    await fs.writeFile(jsonPath, JSON.stringify(initialJsonState), "utf8");
  }
  const jsonFile = await fs.readFile(jsonPath);
  const jsonData = JSON.parse(jsonFile);
  return jsonData;
};

const writeJsonFile = async (jsonData: any) => {
  const fs = require("fs").promises;
  const data = JSON.stringify(jsonData);
  await fs.writeFile(jsonPath, data, "utf8");
  return true;
};

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
function instanceOfArticle(data: any): data is ArticleType {
  if (!data) {
    return false;
  }
  return "author" in data;
}

function instanceOfArticleList(data: any): data is ArticleType[] {
  if (data.length === 0) {
    console.log("undefineds");
    return false;
  }
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
    return [data];
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

    if (!db[keyName][data.author]) {
      db[keyName][data.author] = [];
    }

    db[keyName][data.author].push(data);
    await writeJsonFile(db);
    return [data];
  }

  return [];
};

const updateArticle = async (
  username: string,
  articleId: string,
  data: { title: string; contents: string }
) => {
  const db = await openJsonFile();
  const result = [];
  try {
    db["articles"][username].forEach((row: ArticleType, index: number) => {
      if (row.articleId === articleId) {
        db["articles"][username][index]["title"] = data.title;
        db["articles"][username][index]["contents"] = data.contents;
        result.push(db["articles"][username][index]);
      }
    });
    await writeJsonFile(db);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const deleteData = () => {};

export { selectData, insertData, updateArticle, deleteData };
