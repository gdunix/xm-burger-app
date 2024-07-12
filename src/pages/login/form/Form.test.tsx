import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithTheme } from "@/helpers/renderWithProviders";

import Form from "./Form";
import useLogin from "./useLogin";

jest.mock("./useLogin", () => jest.fn());
jest.mock(
  "@/components/input",
  () =>
    ({ id, label, ...rest }: { id: string; label: string }) =>
      (
        <div>
          <label htmlFor={id}>{label}</label>
          <input id={id} {...rest} />
        </div>
      )
);
jest.mock("@/components/button", () => ({ children }: { children: any }) => (
  <button type="submit">{children}</button>
));
jest.mock("@/components/loader", () => () => <div data-testid="loader" />);

describe("Form component", () => {
  const mockSetForm = jest.fn();
  const mockSetError = jest.fn();
  const mockLogin = jest.fn();

  beforeEach(() => {
    (useLogin as jest.Mock).mockReturnValue({
      error: "",
      setError: mockSetError,
      form: { name: "", password: "" },
      setForm: mockSetForm,
      login: mockLogin,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders form elements", () => {
    renderWithTheme(<Form />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("displays loader when isPending", () => {
    (useLogin as jest.Mock).mockReturnValue({
      isPending: true,
      form: { name: "", password: "" },
      login: mockLogin,
    });

    renderWithTheme(<Form />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();;
  });

  test("displays error message when error exists", () => {
    (useLogin as jest.Mock).mockReturnValue({
      error: "Invalid credentials",
      setError: mockSetError,
      form: { name: "", password: "" },
      setForm: mockSetForm,
      login: mockLogin,
    });

    renderWithTheme(<Form />);

    expect(screen.getByRole("alert")).toHaveTextContent("Invalid credentials");
  });
});
