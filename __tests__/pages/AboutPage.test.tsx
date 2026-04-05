import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AboutPage from "@/pages/AboutPage/AboutPage";

interface RenderPage {
  container: HTMLElement;
}

const renderPage = (): RenderPage => {
  const { container } = render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  );
  return { container };
};

describe("AboutPage", () => {
  it("should render the main element", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLElement>("main.about-page")).toBeInTheDocument();
  });

  it("should render the About Page title", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("About Page");
  });

  it("should render a navigation landmark", () => {
    renderPage();
    expect(screen.getByRole("navigation", { name: "Page navigation" })).toBeInTheDocument();
  });

  it("should render the link to Product Page 12", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "Go to Product Page 12" });
    expect(link).toHaveAttribute("href", "/products/12");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should render the link to Context Page", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "Go to Context Page" });
    expect(link).toHaveAttribute("href", "/context");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should render two navigation links", () => {
    renderPage();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
