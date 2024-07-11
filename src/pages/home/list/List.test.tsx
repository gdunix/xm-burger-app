import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import { Ingredient as IngredientType } from "@/types";
import "@testing-library/jest-dom";

import List from "./List";

const mockIngredients: IngredientType[] = [
  { id: 1, name: "test-1", src: "test-1.png" },
  { id: 2, name: "test-2", src: "test-2.png" },
  { id: 3, name: "test-3", src: "test-3.png" },
];

describe("List component", () => {
  test("renders list of ingredients", () => {
    renderWithTheme(<List ingredients={mockIngredients} />);

    mockIngredients.forEach((ingredient) => {
      const ingredientElement = screen.getByText(`Add ${ingredient.name}`);
      expect(ingredientElement).toBeInTheDocument();
    });
  });
});
