import { render, screen } from "@testing-library/react";

import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

type RenderPage = {
  container: HTMLElement;
};

const renderPage = (): RenderPage => {
  const { container } = render(<NotFoundPage />);
  return { container };
};

describe("NotFoundPage", () => {
  it("should render the main element", () => {
    const { container } = renderPage();
    expect(container.querySelector("main.not-found-page")).toBeInTheDocument();
  });

  it("should render the Not Found Page title", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Not Found Page");
  });

  it("should apply the title class to the heading", () => {
    const { container } = renderPage();
    expect(container.querySelector("h1.title")).toBeInTheDocument();
  });
});
