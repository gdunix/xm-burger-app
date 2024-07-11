import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import useBurger from "@/store/useBurger";
import { Ingredient as IngredientType } from "@/types";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import Ingredient from "./Ingredient";

jest.mock("@/store/useBurger");
jest.mock("../../components/burgerImg", () => () => (
  <div data-testid="burger-img" />
));
jest.mock("@/components/button", () => ({ children, onClick }: any) => (
  <button onClick={onClick}>{children}</button>
));
jest.mock("./styled", () => ({
  Card: ({ children, onClick }: any) => (
    <div data-testid="card" onClick={onClick}>{children}</div>
  ),
}));

describe("Ingredient component", () => {
  const mockAddIngredient = jest.fn();
  const mockIngredient: IngredientType = {
    id: 1,
    src: "test-1.png",
    name: "test-1",
  };

  beforeEach(() => {
    (useBurger as any).mockReturnValue({
      addIngredient: mockAddIngredient,
    });
  });

  test("renders ingredient with correct props", () => {
    renderWithTheme(<Ingredient {...mockIngredient} />);

    const cardElement = screen.getByTestId("card");
    const burgerImgElement = screen.getByTestId("burger-img");
    const addButtonElement = screen.getByText(`Add ${mockIngredient.name}`);

    expect(cardElement).toBeInTheDocument();
    expect(burgerImgElement).toBeInTheDocument();
    expect(addButtonElement).toBeInTheDocument();
  });

  test("calls addIngredient on button click", async () => {
    renderWithTheme(<Ingredient {...mockIngredient} />);

    const cardElement = screen.getByTestId("card");
    await userEvent.click(cardElement);

    expect(mockAddIngredient).toHaveBeenCalledTimes(1);
    expect(mockAddIngredient).toHaveBeenCalledWith(mockIngredient);
  });
});
