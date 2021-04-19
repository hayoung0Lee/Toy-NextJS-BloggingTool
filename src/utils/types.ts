interface PostType {
  id: number;
  title: string;
  contents: string;
  viewCount: number;
}

interface ContentsType {
  // varying key
  [author: string]: PostType[];
}

interface IntroType {
  question: string;
  answer: string;
}

interface UserType {
  userId: string;
  password: string;
}

interface ArticleType {
  articleId: string;
  title: string;
  contents: string;
  author: string;
  viewCount: string;
}

export type { PostType, IntroType, ContentsType, UserType, ArticleType };
