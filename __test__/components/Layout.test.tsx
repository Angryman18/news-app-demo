import Layout from "@/Layout/layout";
import { render, screen } from "@testing-library/react";

describe("Layout", () => {
  test("Check if the Layout is being Rendered properly", () => {
    render(
      <Layout>
        <div>Hello World</div>
      </Layout>
    );
    expect(screen.queryByText(/News Station/i)).toBeInTheDocument();
    expect(screen.queryByText(/Today/i)).toBeInTheDocument();
    expect(screen.queryByText(/Hello World/i)).toBeInTheDocument();
  });
});
