import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/helpers/renderWithProviders";
import "@testing-library/jest-dom";
import useBurger from "@/store/useBurger";
import { Ingredient as IngredientType } from "@/types";

import Burger from "./Burger";

jest.mock("@/store/useBurger/useBurger");

jest.mock("../components/buns", () => ({
  TopBun: () => <div data-testid="top-bun">Mock Top Bun</div>,
  BottomBun: () => <div data-testid="bottom-bun">Mock Bottom Bun</div>,
}));

jest.mock("./ingredient", () => ({ name }: IngredientType) => (
  <div data-testid={`ingredient-${name}`}>Mock Ingredient: {name}</div>
));

describe("Burger component", () => {
  const mockGetBurger = jest.fn().mockReturnValue([
    { id: 1, name: "test-1", src: "test-1.png" },
    { id: 2, name: "test-2", src: "test-2.png" },
  ] as IngredientType[]);

  beforeEach(() => {
    (useBurger as any).mockReturnValue({
      getBurger: mockGetBurger,
    });
  });

  test("renders top and bottom buns", () => {
    renderWithProviders(<Burger />);

    const topBunElement = screen.getByTestId("top-bun");
    const bottomBunElement = screen.getByTestId("bottom-bun");

    expect(topBunElement).toBeInTheDocument();
    expect(bottomBunElement).toBeInTheDocument();
  });

  test("renders ingredients correctly", () => {
    renderWithProviders(<Burger />);

    const firstElement = screen.getByTestId("ingredient-test-1");
    const secondElement = screen.getByTestId("ingredient-test-2");

    expect(firstElement).toBeInTheDocument();
    expect(secondElement).toBeInTheDocument();
  });
});
