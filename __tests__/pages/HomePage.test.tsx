import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage/HomePage";

interface RenderPage {
  container: HTMLElement;
}

const renderPage = (): RenderPage => {
  const { container } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  return { container };
};

describe("HomePage", () => {
  it("should render the main element", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLElement>("main.home-page")).toBeInTheDocument();
  });

  it("should render the Home Page title", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home Page");
  });

  it("should render a navigation landmark", () => {
    renderPage();
    expect(screen.getByRole("navigation", { name: "Page navigation" })).toBeInTheDocument();
  });

  it("should render the link to About Page (same window)", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "Go to About Page" });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should render the link to About Page (new window)", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "Go to About Page in a new window" });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should render the link to Users Page", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "Go to Users Page" });
    expect(link).toHaveAttribute("href", "/users");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should render three navigation links", () => {
    renderPage();
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
