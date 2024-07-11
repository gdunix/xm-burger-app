import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Ingredient from "./Ingredient";
import useBurger from "@/store/useBurger";
import { Ingredient as IngredientType } from "@/types";

jest.mock("@/store/useBurger");
jest.mock(
  "@/components/tooltip",
  () =>
    ({ children, text }: { children: React.ReactNode; text: string }) =>
      (
        <div data-testid="tooltip" title={text}>
          {children}
        </div>
      )
);
jest.mock(
  "../../components/burgerImg",
  () =>
    ({ src, name }: { src: string; name: string }) =>
      (
        <div data-testid="burger-img">
          <img src={src} alt={name} />
        </div>
      )
);

describe("Ingredient component", () => {
  const mockRemoveIngredient = jest.fn();
  const mockGetIngredientCount = jest.fn().mockReturnValue(2);

  const mockIngredient: IngredientType = {
    id: 1,
    uniqueId: "unique-id-1",
    name: "Bacon",
    src: "bacon.png",
  };

  beforeEach(() => {
    (useBurger as any).mockReturnValue({
      removeIngredient: mockRemoveIngredient,
      getIngredientCount: mockGetIngredientCount,
    });
  });

  test("renders ingredient correctly", () => {
    renderWithTheme(<Ingredient {...mockIngredient} />);

    const tooltipElement = screen.getByTestId("tooltip");
    const buttonElement = screen.getByRole("button");
    const burgerImgElement = screen.getByTestId("burger-img");
    const infoElement = screen.getByText("x 2");

    expect(tooltipElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(burgerImgElement).toBeInTheDocument();
    expect(infoElement).toBeInTheDocument();
  });

  test("clicking button calls removeIngredient", async () => {
    renderWithTheme(<Ingredient {...mockIngredient} />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    expect(mockRemoveIngredient).toHaveBeenCalledWith("unique-id-1");
  });
});
