import { Ingredient } from "@/types";

export const addIngredient = (
  burger: Ingredient[],
  ingredient: Ingredient
): Ingredient[] => [
  ...burger,
  {
    ...ingredient,
  },
];

export const removeIngredient = (
  burger: Ingredient[],
  id: number
): Ingredient[] => {
  const lastIndex = burger.findLastIndex(
    (ingredient: Ingredient) => ingredient.id === id
  );
  if (lastIndex === -1) return burger;
  return burger.filter((_, index) => index !== lastIndex);
};

export const getUniqueIngredients = (burger: Ingredient[]): Ingredient[] =>
  burger.reduce(
    (acc: Ingredient[], curr: Ingredient) =>
      !!acc.find(({ id }: { id: number }) => id === curr.id)
        ? acc
        : [curr, ...acc],
    []
  );

export const getIngredientCount = (burger: Ingredient[], id: number): number =>
  burger.filter((ingredient: Ingredient) => ingredient.id === id)?.length ?? 0;

export const getCost = (burger: Ingredient[]): number => burger.length * 2.5;
