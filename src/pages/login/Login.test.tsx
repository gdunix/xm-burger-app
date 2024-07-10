import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Login from "./Login";
import useLogin from "./useLogin";

jest.mock("./useLogin");
jest.mock("@/components/title", () => () => <div>Title</div>);

const mockUseLogin = useLogin as jest.MockedFunction<typeof useLogin>;

describe("Login Component", () => {
  const mockSetForm = jest.fn();
  const mockMutate = jest.fn();
  const mockError = "";

  beforeEach(() => {
    mockUseLogin.mockReturnValue({
      error: mockError,
      form: { name: "", password: "" },
      setForm: mockSetForm,
      mutate: mockMutate,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the login form", () => {
    render(<Login />);

    const title = screen.getByText(/Login/i);
    const nameInput = screen.getByRole("input", { name: /name/i });
    const passwordInput = screen.getByRole("input", { name: /password/i });
    const button = screen.getByRole("button", { name: /Login/i });

    expect(title).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("handles input changes", async () => {
    render(<Login />);
    const user = userEvent.setup();
    const nameInput = screen.getByRole("input", { name: /name/i });
    const passwordInput = screen.getByRole("input", { name: /password/i });

    await user.type(nameInput, "name");
    await user.type(passwordInput, "password");

    expect(mockSetForm).toHaveBeenCalledTimes(
      "testname".length + "testpassword".length
    );
    expect(mockSetForm).toHaveBeenCalledWith(
      expect.objectContaining({ name: "testname" })
    );
    expect(mockSetForm).toHaveBeenCalledWith(
      expect.objectContaining({ password: "testpassword" })
    );
  });

  test("submits the form", async () => {
    render(<Login />);

    const submitButton = screen.getByRole("button", { name: /Login/i });

    userEvent.click(submitButton);

    expect(mockMutate).toHaveBeenCalled();
  });

  test("displays error message when error is present", () => {
    const mockError = "Invalid credentials";
    mockUseLogin.mockReturnValue({
      error: mockError,
      form: { name: "", password: "" },
      setForm: mockSetForm,
      mutate: mockMutate,
    });

    render(<Login />);

    const error = screen.getByRole("alert");
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(mockError);
  });
});
