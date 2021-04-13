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

export type { PostType, IntroType, ContentsType };
