import { Ingredient } from "@/types";
import { addIngredient, removeIngredient } from "./utils";

describe("Utils", () => {
  const ingredients: Ingredient[] = [
    { id: 1, name: "burger patty", src: "" },
    { id: 2, name: "egg", src: "" },
    { id: 3, name: "bacon", src: "" },
  ];
  describe("addIngredient", () => {
    test("adds new ingredient to empty burger", () => {
      const burger: Ingredient[] = [];
      const newIngredient: Ingredient = ingredients[0];

      const result = addIngredient(burger, newIngredient);

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        ...ingredients[0],
        uniqueId: "burger-patty-1",
      });
    });

    test("adds new ingredient to a burger with ingredients with correct order", () => {
      const burger: Ingredient[] = [
        { ...ingredients[0], uniqueId: "burger-patty-1" },
      ];
      const newIngredient: Ingredient = ingredients[1];

      const result = addIngredient(burger, newIngredient);

      expect(result).toHaveLength(2);
      expect(result[0]).toMatchObject({
        ...ingredients[1],
        uniqueId: "egg-1",
      });
      expect(result[1]).toMatchObject({
        ...ingredients[0],
        uniqueId: "burger-patty-1",
      });
    });

    test("adds an existing ingredient with a unique identifier", () => {
      const burger: Ingredient[] = [
        { ...ingredients[0], uniqueId: "burger-patty-1" },
      ];
      const newIngredient: Ingredient = ingredients[0];

      const result = addIngredient(burger, newIngredient);

      expect(result).toHaveLength(2);
      expect(result[0]).toMatchObject({
        ...ingredients[0],
        uniqueId: "burger-patty-2",
      });
    });
  });

  describe("removeIngredient", () => {
    test("removes an ingredient by uniqueId", () => {
      const burger: Ingredient[] = [
        { ...ingredients[0], uniqueId: "burger-patty-1" },
        { ...ingredients[1], uniqueId: "egg-1" },
      ];
      const uniqueIdToRemove = "burger-patty-1";

      const result = removeIngredient(burger, uniqueIdToRemove);

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        ...ingredients[1],
        uniqueId: "egg-1",
      });
    });

    test("does not remove any ingredient if uniqueId is not found", () => {
      const burger: Ingredient[] = [
        { ...ingredients[0], uniqueId: "burger-patty-1" },
        { ...ingredients[1], uniqueId: "egg-1" },
      ];
      const uniqueIdToRemove = "bacon-1";

      const result = removeIngredient(burger, uniqueIdToRemove);

      expect(result).toHaveLength(2);
      expect(result).toEqual(burger);
    });
  });
});
