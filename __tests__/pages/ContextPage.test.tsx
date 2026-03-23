import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import ContextPage from "@/pages/ContextPage/ContextPage";

import { CounterProvider } from "@/contexts/CounterContext/CounterProvider";

type RenderPage = {
  container: HTMLElement;
};

const renderPage = (): RenderPage => {
  const { container } = render(
    <MemoryRouter>
      <CounterProvider>
        <ContextPage />
      </CounterProvider>
    </MemoryRouter>
  );
  return { container };
};

describe("ContextPage", () => {
  it("should render the main element", () => {
    const { container } = renderPage();
    expect(container.querySelector("main.context-page")).toBeInTheDocument();
  });

  it("should render the Context Page title", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Context Page");
  });

  it("should render the counter starting at 0", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("0");
  });

  it("should render the subtract button", () => {
    renderPage();
    expect(screen.getByRole("button", { name: "counter minus 1" })).toBeInTheDocument();
  });

  it("should render the plus button", () => {
    renderPage();
    expect(screen.getByRole("button", { name: "counter plus 1" })).toBeInTheDocument();
  });

  it("should increment the counter when the plus button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "counter plus 1" }));

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("1");
  });

  it("should decrement the counter when the subtract button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "counter plus 1" }));
    await user.click(screen.getByRole("button", { name: "counter plus 1" }));
    await user.click(screen.getByRole("button", { name: "counter minus 1" }));

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("1");
  });

  it("should allow the counter to go negative", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "counter minus 1" }));

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("-1");
  });

  it("should render the link to Not Exists Page", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "link-not-exists" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/pasdasdasdasd");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should accumulate counter across multiple clicks", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "counter plus 1" }));
    await user.click(screen.getByRole("button", { name: "counter plus 1" }));
    await user.click(screen.getByRole("button", { name: "counter plus 1" }));

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("3");
  });
});
