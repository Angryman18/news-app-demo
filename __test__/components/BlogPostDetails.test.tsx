import BlogPostDetails from "@/components/BlogPostDetails";
import { render, screen } from "@testing-library/react";

describe("BlogPostDetails", () => {
  test("Test for the Component Mount Properly", () => {
    expect(20).toBe(20);
    render(<BlogPostDetails />);
    const a = screen.queryByText("BlogPostDetails");
    expect(a).toBeVisible();
  });
});
