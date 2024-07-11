import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useAuth from "@/store/useAuth";
import { renderWithProviders } from "@/helpers/renderWithProviders";
import Header from "./Header";

jest.mock("@/store/useAuth", () => jest.fn());
jest.mock("./logout", () => () => <div>Logout</div>);

describe("Header component", () => {
  beforeEach(() => {
    (useAuth as any).mockReturnValue({
      isAuthenticated: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the title", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Burger App")).toBeInTheDocument();
  });

  test("renders Logout button when authenticated", () => {
    (useAuth as any).mockReturnValue({
      isAuthenticated: true,
    });
    renderWithProviders(<Header />);
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("does not render Logout button when not authenticated", () => {
    (useAuth as any).mockReturnValue({
      isAuthenticated: false,
    });
    renderWithProviders(<Header />);
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });
});
