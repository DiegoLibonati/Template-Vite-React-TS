import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import ContextPage from "@/pages/ContextPage/ContextPage";

import { CounterProvider } from "@/contexts/CounterContext/CounterProvider";

interface RenderPage {
  container: HTMLElement;
}

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
    expect(container.querySelector<HTMLElement>("main.context-page")).toBeInTheDocument();
  });

  it("should render the Context Page title", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Context Page");
  });

  it("should render the counter output starting at 0", () => {
    renderPage();
    expect(screen.getByRole("status")).toHaveTextContent("0");
  });

  it("should render the counter output with aria-live='polite'", () => {
    renderPage();
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
  });

  it("should render the subtract button", () => {
    renderPage();
    expect(screen.getByRole("button", { name: "Subtract 1 from counter" })).toBeInTheDocument();
  });

  it("should render the add button", () => {
    renderPage();
    expect(screen.getByRole("button", { name: "Add 1 to counter" })).toBeInTheDocument();
  });

  it("should increment the counter when the add button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Add 1 to counter" }));

    expect(screen.getByRole("status")).toHaveTextContent("1");
  });

  it("should decrement the counter when the subtract button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Add 1 to counter" }));
    await user.click(screen.getByRole("button", { name: "Add 1 to counter" }));
    await user.click(screen.getByRole("button", { name: "Subtract 1 from counter" }));

    expect(screen.getByRole("status")).toHaveTextContent("1");
  });

  it("should allow the counter to go negative", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Subtract 1 from counter" }));

    expect(screen.getByRole("status")).toHaveTextContent("-1");
  });

  it("should accumulate counter across multiple clicks", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Add 1 to counter" }));
    await user.click(screen.getByRole("button", { name: "Add 1 to counter" }));
    await user.click(screen.getByRole("button", { name: "Add 1 to counter" }));

    expect(screen.getByRole("status")).toHaveTextContent("3");
  });

  it("should render the navigation landmark", () => {
    renderPage();
    expect(screen.getByRole("navigation", { name: "Page navigation" })).toBeInTheDocument();
  });

  it("should render the link to unknown page", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "Go to unknown page" });
    expect(link).toHaveAttribute("href", "/pasdasdasdasd");
    expect(link).toHaveAttribute("target", "_self");
  });
});
