import { render, screen } from "@testing-library/react";

import type { UserCardProps } from "@/types/props";

import UserCard from "@/components/UserCard/UserCard";

import { mockUser } from "@tests/__mocks__/users.mock";

type RenderComponent = {
  container: HTMLElement;
  props: UserCardProps;
};

const renderComponent = (overrides?: Partial<UserCardProps>): RenderComponent => {
  const props: UserCardProps = {
    name: mockUser.name,
    username: mockUser.username,
    email: mockUser.email,
    phone: mockUser.phone,
    website: mockUser.website,
    company: mockUser.company,
    ...overrides,
  };

  const { container } = render(<UserCard {...props} />);

  return { container, props };
};

describe("UserCard", () => {
  it("should render the user card article element", () => {
    const { container } = renderComponent();
    expect(container.querySelector("article.user-card")).toBeInTheDocument();
  });

  it("should render the user name", () => {
    renderComponent();
    expect(screen.getByText(`$${mockUser.name}`)).toBeInTheDocument();
  });

  it("should render the username with prefix", () => {
    renderComponent();
    expect(screen.getByText(`@$${mockUser.username}`)).toBeInTheDocument();
  });

  it("should render the email", () => {
    renderComponent();
    expect(screen.getByText(`📧 $${mockUser.email}`)).toBeInTheDocument();
  });

  it("should render the phone", () => {
    renderComponent();
    expect(screen.getByText(`📞 $${mockUser.phone}`)).toBeInTheDocument();
  });

  it("should render the website", () => {
    renderComponent();
    expect(screen.getByText(`🌐 $${mockUser.website}`)).toBeInTheDocument();
  });

  it("should render the company name", () => {
    renderComponent();
    expect(screen.getByText(`🏢 $${mockUser.company.name}`)).toBeInTheDocument();
  });

  it("should render with a custom name", () => {
    renderComponent({ name: "Jane Smith" });
    expect(screen.getByText("$Jane Smith")).toBeInTheDocument();
  });

  it("should apply the user-card__name class to the name heading", () => {
    const { container } = renderComponent();
    expect(container.querySelector(".user-card__name")).toBeInTheDocument();
  });

  it("should apply the user-card__username class", () => {
    const { container } = renderComponent();
    expect(container.querySelector(".user-card__username")).toBeInTheDocument();
  });
});
