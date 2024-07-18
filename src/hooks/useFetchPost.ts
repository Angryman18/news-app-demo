import axios from "@/config/axios-service";
import { genURL } from "@/utils/common-util";
import { useCallback, useState } from "react";
import { PostResponse } from "@/types/types";

export default function useFetchPost() {
  const [posts, setPosts] = useState<PostResponse>();
  const [loading, setLoading] = useState(false);

  const fetchAllPost = useCallback(async (page?: number) => {
    try {
      setLoading(true);
      const resp = await axios(genURL("/top-headlines?country=in", page));
      setPosts(resp.data);
      return resp.data;
    } catch (err: unknown) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return { fetchAllPost, posts: posts?.articles, totalResult: posts?.totalResults, loading };
}
