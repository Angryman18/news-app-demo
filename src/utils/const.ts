export const GET_HOMEPAGE_NEWS =
  "/everything?sources=google-news&sortBy=publishedAt&domains=bbc.co.uk";

export const GET_SINGLE_POST = (query: string) => `/everything?q=${query}&searchIn=title`;
