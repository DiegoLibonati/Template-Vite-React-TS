import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import type { LinkProps } from "@/types/props";

import Link from "@/components/Link/Link";

interface RenderComponent {
  container: HTMLElement;
  props: LinkProps;
}

const renderComponent = (overrides?: Partial<LinkProps>): RenderComponent => {
  const props: LinkProps = {
    id: "test-link",
    href: "/test",
    ariaLabel: "test link",
    ...overrides,
  };

  const { container } = render(
    <MemoryRouter>
      <Link {...props} />
    </MemoryRouter>
  );

  return { container, props };
};

describe("Link", () => {
  it("should render an anchor element", () => {
    renderComponent({ children: "Test" });
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should render with the correct id", () => {
    renderComponent();
    expect(screen.getByRole("link")).toHaveAttribute("id", "test-link");
  });

  it("should render with the correct aria-label", () => {
    renderComponent();
    expect(screen.getByRole("link", { name: "test link" })).toBeInTheDocument();
  });

  it("should apply the link class by default", () => {
    renderComponent();
    expect(screen.getByRole("link")).toHaveClass("link");
  });

  it("should apply an additional className when provided", () => {
    renderComponent({ className: "extra-class" });
    expect(screen.getByRole("link")).toHaveClass("link", "extra-class");
  });

  it("should not add a trailing space to className when no extra class is provided", () => {
    renderComponent();
    expect(screen.getByRole("link").className).toBe("link");
  });

  it("should render children text", () => {
    renderComponent({ children: "Go to page" });
    expect(screen.getByRole("link")).toHaveTextContent("Go to page");
  });

  it("should render empty when no children are provided", () => {
    renderComponent();
    expect(screen.getByRole("link")).toHaveTextContent("");
  });

  it("should default target to _blank", () => {
    renderComponent();
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("should use the provided target when specified", () => {
    renderComponent({ target: "_self" });
    expect(screen.getByRole("link")).toHaveAttribute("target", "_self");
  });

  it("should navigate to the correct href", () => {
    renderComponent({ href: "/about" });
    expect(screen.getByRole("link")).toHaveAttribute("href", "/about");
  });

  it("should add rel='noopener noreferrer' for external links (target _blank)", () => {
    renderComponent({ target: "_blank" });
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should not add rel attribute for internal links (target _self)", () => {
    renderComponent({ target: "_self" });
    expect(screen.getByRole("link")).not.toHaveAttribute("rel");
  });
});
