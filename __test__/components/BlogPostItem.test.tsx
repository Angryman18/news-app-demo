import BlogPostItem from "@/components/BlogPostItem";
import { NewsArticle } from "@/types/types";
import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => {
  return {
    useNavigate: jest.fn().mockImplementation(() => jest.fn()),
  };
});

describe("BlogPostItem", () => {
  test("Check if the news card is being rendered properly", () => {
    const item: NewsArticle = {
      title: "post title",
      content: "post content",
      publishedAt: new Date().toISOString(),
      author: "Shyam Mahanta",
      source: { name: "World News", id: "1" },
      description: "post desc",
      url: "https://abcd.com",
      urlToImage: "https://abcd.com/image.png",
    };
    render(<BlogPostItem item={item} />);
    expect(screen.queryByTestId("news-card")).toBeInTheDocument();
  });
  test("Check if redirection works properly on card click", () => {
    const naviagte = jest.fn();
    const naviagteFn = (useNavigate as jest.Mock).mockImplementation(() => naviagte);

    const item: NewsArticle = {
      title: "post title",
      content: "post content",
      publishedAt: new Date().toISOString(),
      author: "Shyam Mahanta",
      source: { name: "World News", id: "1" },
      description: "post desc",
      url: "https://abcd.com",
      urlToImage: "https://abcd.com/image.png",
    };
    render(<BlogPostItem item={item} />);
    fireEvent.click(screen.queryByTestId("news-card")!);
    expect(naviagteFn).toHaveBeenCalled();
    expect(naviagte).toHaveBeenCalledWith("/post/post title");
  });
});
