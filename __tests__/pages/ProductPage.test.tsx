import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import ProductPage from "@/pages/ProductPage/ProductPage";

type RenderPage = {
  container: HTMLElement;
};

const renderPage = (productId: string = "42"): RenderPage => {
  const { container } = render(
    <MemoryRouter initialEntries={[`/products/${productId}`]}>
      <Routes>
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </MemoryRouter>
  );
  return { container };
};

describe("ProductPage", () => {
  it("should render the main element", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLElement>("main.product-page")).toBeInTheDocument();
  });

  it("should render the Product Page title with the productId", () => {
    renderPage("42");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Product Page: 42");
  });

  it("should render 'Unknown' in the title when productId is not in the route", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/products/"]}>
        <Routes>
          <Route path="/products/" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(container.querySelector<HTMLHeadingElement>("h1")).toHaveTextContent(
      "Product Page: Unknown"
    );
  });

  it("should render a navigation landmark", () => {
    renderPage();
    expect(screen.getByRole("navigation", { name: "Page navigation" })).toBeInTheDocument();
  });

  it("should render the link to the unknown page", () => {
    renderPage();
    const link = screen.getByRole("link", { name: "Go to an unknown page" });
    expect(link).toHaveAttribute("href", "/pasdasdasdasd");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should render the Show Product Id button", () => {
    renderPage("42");
    expect(screen.getByRole("button", { name: "Show product ID 42" })).toBeInTheDocument();
  });

  it("should call alert with the productId when the button is clicked", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => undefined);
    const user = userEvent.setup();

    renderPage("99");

    await user.click(screen.getByRole("button", { name: "Show product ID 99" }));

    expect(alertSpy).toHaveBeenCalledWith("Product ID: 99");
  });

  it("should render with a different productId", () => {
    renderPage("123");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Product Page: 123");
  });
});
