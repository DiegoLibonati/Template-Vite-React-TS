import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { ActionProps } from "@/types/props";

import Action from "@/components/Action/Action";

type RenderComponent = {
  container: HTMLElement;
  props: ActionProps;
};

const renderComponent = (overrides?: Partial<ActionProps>): RenderComponent => {
  const onClick = jest.fn();

  const props: ActionProps = {
    id: "test-action",
    ariaLabel: "test action",
    onClick,
    ...overrides,
  };

  const { container } = render(<Action {...props} />);

  return { container, props };
};

describe("Action", () => {
  it("should render a button element", () => {
    renderComponent();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render with the correct id", () => {
    renderComponent();
    expect(screen.getByRole("button")).toHaveAttribute("id", "test-action");
  });

  it("should render with the correct aria-label", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: "test action" })).toBeInTheDocument();
  });

  it("should apply the action class by default", () => {
    renderComponent();
    expect(screen.getByRole("button")).toHaveClass("action");
  });

  it("should apply an additional className when provided", () => {
    renderComponent({ className: "extra-class" });
    expect(screen.getByRole("button")).toHaveClass("action", "extra-class");
  });

  it("should render children text", () => {
    renderComponent({ children: "Click me" });
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should render empty text when no children are provided", () => {
    renderComponent();
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  it("should call onClick when the button is clicked", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    renderComponent({ onClick });

    await user.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when not clicked", () => {
    const onClick = jest.fn();
    renderComponent({ onClick });
    expect(onClick).not.toHaveBeenCalled();
  });
});
