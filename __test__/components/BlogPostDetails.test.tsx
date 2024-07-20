import BlogPostDetails from "@/components/BlogPostDetails";
import { render, screen } from "@testing-library/react";
import * as useFetchPostFn from "@/hooks/useFetchPost";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

describe("BlogPostDetails", () => {
  test("Check if the data fetching is being done by the post title from the url", () => {
    const spyFetchFn = jest.fn();
    const useFetch = jest.spyOn(useFetchPostFn, "default").mockImplementation(() => {
      return {
        posts: [],
        loading: true,
        fetchNewsPost: spyFetchFn.mockResolvedValue({}),
        totalResult: 0,
      };
    });

    render(
      <MemoryRouter initialEntries={["/post/abcd-post-title"]}>
        <Routes>
          <Route path='/post/:id' element={<BlogPostDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(useFetch).toHaveBeenCalledWith(false);
    expect(spyFetchFn).toHaveBeenCalledWith({ title: "abcd-post-title" });
    const a = screen.queryByTestId("loading");
    expect(a).toBeVisible();
  });
  test("Check if the data is being rendered properly", () => {
    const spyFetchFn = jest.fn();
    const useFetch = jest.spyOn(useFetchPostFn, "default").mockImplementation(() => {
      return {
        posts: [
          {
            title: "post title",
            content: "post content",
            publishedAt: new Date().toISOString(),
            author: "Shyam Mahanta",
            source: { name: "World News", id: "1" },
            description: "post desc",
            url: "https://abcd.com",
            urlToImage: "https://abcd.com/image.png",
          },
        ],
        loading: false,
        fetchNewsPost: spyFetchFn.mockResolvedValue({}),
        totalResult: 0,
      };
    });
    render(<BlogPostDetails />, { wrapper: BrowserRouter });
    expect(useFetch).toHaveBeenCalledWith(false);
    expect(spyFetchFn).toHaveBeenCalled();

    expect(screen.queryByTestId("post-detail")).toBeVisible();
    expect(screen.queryByText(/post title/i)).toBeInTheDocument();
    expect(screen.queryByText(/post content/i)).toBeInTheDocument();
    expect(screen.queryByText(/Shyam Mahanta/i)).toBeInTheDocument();
    expect(screen.queryByText(/World News/i)).toBeInTheDocument();
  });
});
