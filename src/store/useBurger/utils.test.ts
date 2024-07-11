import { Ingredient } from "@/types";
import * as U from "./utils";

describe("Burger functions", () => {
  let initialBurger: Ingredient[];

  beforeEach(() => {
    initialBurger = [
      {
        id: 1,
        src: "burger-patty.png",
        name: "burger patty",
        uniqueId: "burger-patty-1",
      },
      {
        id: 2,
        src: "bacon.png",
        name: "bacon",
        uniqueId: "bacon-1",
      },
      {
        id: 3,
        src: "egg.png",
        name: "egg",
        uniqueId: "egg-1",
      },
    ];
  });

  describe("addIngredient", () => {
    it("should add an ingredient to the burger", () => {
      const newIngredient: Ingredient = {
        id: 4,
        src: "cheese.png",
        name: "cheese",
      };
      const updatedBurger = U.addIngredient(initialBurger, newIngredient);

      expect(updatedBurger.length).toBe(4);
      expect(updatedBurger[3].name).toBe("cheese");
      expect(updatedBurger[3].uniqueId).toBe("cheese-1");
    });

    it("should add another instance of an existing ingredient with a unique ID", () => {
      const existingIngredient: Ingredient = {
        id: 1,
        src: "burger-patty.png",
        name: "burger patty",
      };
      const updatedBurger = U.addIngredient(initialBurger, existingIngredient);

      expect(updatedBurger.length).toBe(4);
      expect(updatedBurger[3].name).toBe("burger patty");
      expect(updatedBurger[3].uniqueId).toBe("burger-patty-2");
    });
  });

  describe("removeIngredient", () => {
    it("should remove the specified ingredient from the burger", () => {
      const uniqueIdToRemove = "bacon-1";
      const updatedBurger = U.removeIngredient(initialBurger, uniqueIdToRemove);

      expect(updatedBurger.length).toBe(2);
      expect(
        updatedBurger.find((ing) => ing.uniqueId === uniqueIdToRemove)
      ).toBeUndefined();
    });

    it("should return the original burger if the uniqueId is not found", () => {
      const uniqueIdToRemove = "unknown-unique-id";
      const updatedBurger = U.removeIngredient(initialBurger, uniqueIdToRemove);

      expect(updatedBurger.length).toBe(3);
    });
  });

  describe("getUniqueIngredients", () => {
    it("should return unique ingredients in the burger", () => {
      const uniqueIngredients = U.getUniqueIngredients(initialBurger);

      expect(uniqueIngredients.length).toBe(3);
      expect(uniqueIngredients.some((ing) => ing.name === "burger patty")).toBe(
        true
      );
      expect(uniqueIngredients.some((ing) => ing.name === "bacon")).toBe(true);
      expect(uniqueIngredients.some((ing) => ing.name === "egg")).toBe(true);
    });
  });

  describe("getIngredientCount", () => {
    it("should return the count of a specific ingredient in the burger", () => {
      const countBurgerPatty = U.getIngredientCount(initialBurger, 1);
      const countBacon = U.getIngredientCount(initialBurger, 2);
      const countEgg = U.getIngredientCount(initialBurger, 3);

      expect(countBurgerPatty).toBe(1);
      expect(countBacon).toBe(1);
      expect(countEgg).toBe(1);
    });

    it("should return zero if the ingredient is not in the burger", () => {
      const countUnknownIngredient = U.getIngredientCount(initialBurger, 4);

      expect(countUnknownIngredient).toBe(0);
    });
  });

  describe("getCost", () => {
    it("should return 0 when the burger is empty", () => {
      const emptyBurger: Ingredient[] = [];
      expect(U.getCost(emptyBurger)).toBe(0);
    });

    it("should return 2.5 for a burger with one ingredient", () => {
      const oneIngredientBurger: Ingredient[] = [
        {
          id: 1,
          src: "burger-patty.png",
          name: "burger patty",
          uniqueId: "burger-patty-1",
        },
      ];
      expect(U.getCost(oneIngredientBurger)).toBe(2.5);
    });
  });
});
