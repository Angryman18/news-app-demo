export const genURL = (url: string, page: number = 1, pageSize: number = 10) => {
  return `${url}&pageSize=${pageSize}&page=${page}`;
};
