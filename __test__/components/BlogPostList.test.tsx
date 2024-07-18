import { fireEvent, render, screen } from "@testing-library/react";
import BlogPostList from "@/components/BlogPostList";
import * as methods from "@/hooks/useFetchPost";
import { PostResponse } from "@/types/types";

jest.mock("@/hooks/useFetchPost", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    fetchAllPost: jest.fn().mockResolvedValue({}),
    posts: [],
    totalResult: 10,
    loading: false,
  })),
}));

const spyFetch = jest.fn();

describe("BlogPostList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Testing if the component is being mounted properly", () => {
    render(<BlogPostList />);
    const getNoPostText = screen.queryByText("No Post Available");
    expect(getNoPostText).toBeInTheDocument();
  });

  test("is the loading state is working properly", () => {
    const spyData = jest.spyOn(methods, "default").mockImplementation(() => ({
      fetchAllPost: spyFetch.mockResolvedValue({}),
      posts: [],
      totalResult: 10,
      loading: true,
    }));
    render(<BlogPostList />);
    expect(spyData).toHaveBeenCalled();
    expect(spyFetch).toHaveBeenCalled();
    expect(screen.queryByTestId("loading")).toBeInTheDocument();
  });

  test("Check if the prev and next button are displayed and workng properly", () => {
    const spyData = jest.spyOn(methods, "default").mockImplementation(() => ({
      fetchAllPost: spyFetch.mockResolvedValue({}),
      posts: [],
      totalResult: 20,
      loading: false,
    }));
    render(<BlogPostList />);
    expect(spyData).toHaveBeenCalled();
    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("next-page-btn"));
    expect(spyFetch).toHaveBeenCalledWith(2);
    fireEvent.click(screen.getByTestId("prev-page-btn"));
    expect(spyFetch).toHaveBeenCalledWith(1);
  });

  test("Check if API data is being rendered properly", () => {
    const dummyData: PostResponse = {
      articles: [
        {
          title: "Shyam",
          description: "Desc",
          author: "The Mint",
          content: "Hello World",
          publishedAt: "Today",
          source: { id: "1", name: "Abcd" },
          url: "https://abcd.com",
          urlToImage: "https://abcd.com",
        },
      ],
      totalResults: 30,
      status: "ok",
    };
    const spyData = jest.spyOn(methods, "default").mockImplementation(() => ({
      fetchAllPost: spyFetch.mockResolvedValue({}),
      posts: dummyData.articles,
      totalResult: dummyData.totalResults,
      loading: false,
    }));
    render(<BlogPostList />);
    expect(spyData).toHaveBeenCalled();
    expect(spyFetch).toHaveBeenCalled();
    const getAllCards = screen.queryAllByTestId("news-card");
    getAllCards.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    expect(getAllCards.length).toBe(1);
  });
});
