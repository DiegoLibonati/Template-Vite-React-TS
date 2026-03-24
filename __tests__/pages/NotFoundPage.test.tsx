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
    expect(container.querySelector<HTMLElement>("main.not-found-page")).toBeInTheDocument();
  });

  it("should render the Page Not Found title", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Page Not Found");
  });

  it("should apply the title class to the heading", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLHeadingElement>("h1.title")).toBeInTheDocument();
  });

  it("should render a description message", () => {
    renderPage();
    expect(
      screen.getByText("The page you're looking for doesn't exist or has been moved.")
    ).toBeInTheDocument();
  });
});
