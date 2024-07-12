import { renderHook } from "@testing-library/react";
import useIngredients from "./useIngredients";
import ingredients from "@/reactQuery/ingredients";
import useAuth from "@/store/useAuth";

jest.mock("@/store/useAuth", () => jest.fn());

jest.mock("@/reactQuery/ingredients", () => ({
  useIngredients: jest.fn(),
}));

describe("useIngredients hook", () => {
  const mockGetToken = jest.fn();
  const mockLogout = jest.fn();
  const mockUseIngredients = jest.fn();

  beforeEach(() => {
    (useAuth as unknown as jest.Mock).mockReturnValue({
      getToken: mockGetToken,
      logout: mockLogout,
    });
    (ingredients.useIngredients as jest.Mock).mockImplementation(
      mockUseIngredients
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetches ingredients successfully", () => {
    const mockToken = "token";
    mockGetToken.mockReturnValueOnce(mockToken);

    const mockData = [{ id: 1, name: "test-1", src: "test-1.png" }];
    mockUseIngredients.mockReturnValueOnce({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useIngredients());

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(mockLogout).not.toHaveBeenCalled();
  });

  test("handles loading state correctly", () => {
    const mockToken = "token";
    mockGetToken.mockReturnValueOnce(mockToken);

    mockUseIngredients.mockReturnValueOnce({
      data: null,
      isLoading: true,
      isError: false,
    });

    const { result } = renderHook(() => useIngredients());

    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(true);
    expect(mockLogout).not.toHaveBeenCalled();
  });

  test("logs out user on error", () => {
    const mockToken = "token";
    mockGetToken.mockReturnValueOnce(mockToken);

    mockUseIngredients.mockReturnValueOnce({
      data: null,
      isLoading: false,
      isError: true,
    });

    const { result } = renderHook(() => useIngredients());

    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
