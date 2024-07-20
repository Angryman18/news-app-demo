import { genURL } from "@/utils/common-util";

describe("genURL", () => {
  test("Check if the url is being generated correctly", () => {
    const text = genURL("/abcd", 1, 10);
    expect(text).toContain("10");
    expect(text).toContain("abcd");
    expect(text).toContain("1");
    expect(text).toBe("/abcd&pageSize=10&page=1");
  });
});
