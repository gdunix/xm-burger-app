import { Ingredient } from "@/types";

export const addIngredient = (
  burger: Ingredient[],
  ingredient: Ingredient
): Ingredient[] => {
  const order =
    burger.filter(({ id }: { id: number }) => id === ingredient.id).length + 1;
  return [
    ...burger,
    {
      ...ingredient,
      uniqueId: `${ingredient.name.replace(" ", "-")}-${order}`,
    },
  ];
};

export const removeIngredient = (
  burger: Ingredient[],
  uniqueId: string
): Ingredient[] =>
  burger.filter((ingredient: Ingredient) => ingredient.uniqueId !== uniqueId);

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
