import axios from "@/config/axios-service";
import { genURL } from "@/utils/common-util";
import { useCallback } from "react";

export default function useFetchPost() {
  const fetchAllPost = useCallback(async (page?: number) => {
    try {
      const resp = await axios(genURL("/top-headlines?country=in", page));
      return resp.data;
    } catch (err: unknown) {
      return Promise.reject(err);
    }
  }, []);
  return { fetchAllPost };
}
