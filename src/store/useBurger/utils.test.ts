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
      },
      {
        id: 2,
        src: "bacon.png",
        name: "bacon",
      },
      {
        id: 3,
        src: "egg.png",
        name: "egg",
      },
      {
        id: 1,
        src: "burger-patty.png",
        name: "burger patty",
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

      expect(updatedBurger.length).toBe(5);
      expect(updatedBurger[4].name).toBe("cheese");
    });

    it("should add another instance of an existing ingredient", () => {
      const existingIngredient: Ingredient = {
        id: 1,
        src: "burger-patty.png",
        name: "burger patty",
      };
      const updatedBurger = U.addIngredient(initialBurger, existingIngredient);

      expect(updatedBurger.length).toBe(5);
      expect(updatedBurger[3].name).toBe("burger patty");
    });
  });

  describe("removeIngredient", () => {
    it("should remove the specified ingredient from the burger", () => {
      const id = 2;
      const updatedBurger = U.removeIngredient(initialBurger, id);

      expect(updatedBurger.length).toBe(3);
      expect(
        updatedBurger.find((ing) => ing.id === id)
      ).toBeUndefined();
    });

    it("should remove the last occurence of an ingredient if it is already in the burger", () => {
      const id = 1;
      const updatedBurger = U.removeIngredient(initialBurger, id);

      expect(updatedBurger.length).toBe(3);
      expect(
        updatedBurger.find((ing) => ing.id === id)
      ).not.toBeUndefined();
    });

    it("should return the original burger if the id is not found", () => {
      const id = 100;
      const updatedBurger = U.removeIngredient(initialBurger, id);

      expect(updatedBurger.length).toBe(4);
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

      expect(countBurgerPatty).toBe(2);
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
        },
      ];
      expect(U.getCost(oneIngredientBurger)).toBe(2.5);
    });
  });
});
