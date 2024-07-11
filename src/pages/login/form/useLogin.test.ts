import { renderHook, act } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/store/useAuth";
import users from "@/reactQuery/users";
import useLogin from "./useLogin";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("@/store/useAuth", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@/reactQuery/users", () => ({
  useLogin: jest.fn(),
}));

describe("useLogin", () => {
  const mockLogin = jest.fn();
  const mockNavigate = jest.fn();
  const mockMutate = jest.fn();

  beforeEach(() => {
    (useAuth as unknown as jest.Mock).mockReturnValue({ login: mockLogin });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (users.useLogin as jest.Mock).mockReturnValue({ mutate: mockMutate });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("initial state is correct", () => {
    const { result } = renderHook(() => useLogin());
    expect(result.current.form).toEqual({ name: "", password: "" });
    expect(result.current.error).toBe("");
  });

  test("sets form state correctly", () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.setForm({ name: "testname", password: "testpassword" });
    });

    expect(result.current.form).toEqual({
      name: "testname",
      password: "testpassword",
    });
  });
});
