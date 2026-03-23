import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import UsersPage from "@/pages/UsersPage/UsersPage";

import { userService } from "@/services/userService";
import { mockUsers } from "@tests/__mocks__/users.mock";

jest.mock("@/services/userService");

const mockedUserService = userService as jest.Mocked<typeof userService>;

type RenderPage = {
  container: HTMLElement;
};

const renderPage = (): RenderPage => {
  const { container } = render(
    <MemoryRouter>
      <UsersPage />
    </MemoryRouter>
  );
  return { container };
};

describe("UsersPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the main element", async () => {
    mockedUserService.getAll.mockResolvedValueOnce(mockUsers);

    const { container } = renderPage();

    await waitFor(() => {
      expect(container.querySelector("main.users-page")).toBeInTheDocument();
    });
  });

  it("should render the Users Page title", async () => {
    mockedUserService.getAll.mockResolvedValueOnce(mockUsers);

    renderPage();

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Users Page");
    });
  });

  it("should show loading state while fetching users", () => {
    mockedUserService.getAll.mockReturnValueOnce(new Promise(() => undefined));

    renderPage();

    expect(screen.getByText("Loading users...")).toBeInTheDocument();
  });

  it("should render user cards after successful fetch", async () => {
    mockedUserService.getAll.mockResolvedValueOnce(mockUsers);

    renderPage();

    await waitFor(() => {
      expect(screen.getAllByRole("article")).toHaveLength(mockUsers.length);
    });
  });

  it("should show error message when fetch fails", async () => {
    mockedUserService.getAll.mockRejectedValueOnce(new Error("Network error"));

    renderPage();

    await waitFor(() => {
      expect(screen.getByText("Error loading users. Please try again.")).toBeInTheDocument();
    });
  });

  it("should not show loading state after fetch completes", async () => {
    mockedUserService.getAll.mockResolvedValueOnce(mockUsers);

    renderPage();

    await waitFor(() => {
      expect(screen.queryByText("Loading users...")).not.toBeInTheDocument();
    });
  });

  it("should not show error state on successful fetch", async () => {
    mockedUserService.getAll.mockResolvedValueOnce(mockUsers);

    renderPage();

    await waitFor(() => {
      expect(screen.queryByText("Error loading users. Please try again.")).not.toBeInTheDocument();
    });
  });

  it("should render the link to Home Page", async () => {
    mockedUserService.getAll.mockResolvedValueOnce(mockUsers);

    renderPage();

    await waitFor(() => {
      const link = screen.getByRole("link", { name: "link-home" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/home");
      expect(link).toHaveAttribute("target", "_self");
    });
  });

  it("should call userService.getAll exactly once on mount", async () => {
    mockedUserService.getAll.mockResolvedValueOnce(mockUsers);

    renderPage();

    await waitFor(() => {
      expect(mockedUserService.getAll).toHaveBeenCalledTimes(1);
    });
  });

  it("should render an empty list when the service returns no users", async () => {
    mockedUserService.getAll.mockResolvedValueOnce([]);

    renderPage();

    await waitFor(() => {
      expect(screen.queryAllByRole("article")).toHaveLength(0);
    });
  });
});
