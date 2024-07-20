import axios from "@/config/axios-service";
import { genURL } from "@/utils/common-util";
import { useCallback, useState } from "react";
import { PostResponse } from "@/types/types";
import { GET_HOMEPAGE_NEWS, GET_SINGLE_POST } from "@/utils/const";

export default function useFetchPost(isAllPost: boolean) {
  const [posts, setPosts] = useState<PostResponse>({ articles: [], status: "ok", totalResults: 0 });
  const [loading, setLoading] = useState(false);

  const fetchNewsPost = useCallback(
    async ({ page, title }: { page?: number; title?: string }) => {
      try {
        setLoading(true);
        const query = isAllPost ? genURL(GET_HOMEPAGE_NEWS, page) : GET_SINGLE_POST(title!);
        const resp = await axios(query);
        setPosts(resp.data);
        return resp.data;
      } catch (err: unknown) {
        return Promise.reject(err);
      } finally {
        setLoading(false);
      }
    },
    [isAllPost]
  );

  return { fetchNewsPost, posts: posts?.articles, totalResult: posts?.totalResults, loading };
}
