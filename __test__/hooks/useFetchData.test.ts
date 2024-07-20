import useFetchPost, * as fetchHook from "@/hooks/useFetchPost";
import { renderHook } from "@testing-library/react";

describe("useFetchData", () => {
  test("Should return the appropriate object on call", () => {
    const spyHook = jest.spyOn(fetchHook, "default");
    const {
      result: { current },
    } = renderHook(() => useFetchPost(true));
    expect(spyHook).toHaveBeenCalledWith(true);
    expect(current).toHaveProperty("fetchNewsPost");
    expect(current).toHaveProperty("posts");
    expect(current).toHaveProperty("totalResult");
    expect(current).toHaveProperty("loading");
  });
});
