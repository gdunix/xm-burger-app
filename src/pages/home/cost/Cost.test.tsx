import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import "@testing-library/jest-dom";
import useBurger from "@/store/useBurger";
import Cost from "./Cost";

jest.mock("@/store/useBurger");

describe("Cost component", () => {
  const mockGetCost = jest.fn().mockReturnValue(10);

  beforeEach(() => {
    (useBurger as any).mockReturnValue({
      getCost: mockGetCost,
    });
  });

  test("renders cost correctly", () => {
    renderWithTheme(<Cost />);

    const costElement = screen.getByText("Total cost: 10 EURO");
    expect(costElement).toBeInTheDocument();
  });
});
