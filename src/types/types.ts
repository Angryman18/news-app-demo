interface Source {
  id: string | null;
  name: string;
}

export interface NewsArticle {
  source: Source;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}
// every value can be null is coming from the api

export type PostResponse = {
  articles: NewsArticle[];
  totalResults: number;
  status: string;
};
