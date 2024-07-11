import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useAuth from "@/store/useAuth";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import Logout from "./Logout";

jest.mock("@/store/useAuth", () => jest.fn());

describe("Logout component", () => {
  const mockLogout = jest.fn();
  beforeEach(() => {
    (useAuth as unknown as jest.Mock).mockReturnValue({ logout: mockLogout });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test("calls logout function on click", async () => {
    renderWithTheme(<Logout />);

    const logoutLink = screen.getByText("Logout");
    await userEvent.click(logoutLink);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
