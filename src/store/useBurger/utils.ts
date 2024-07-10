import { Ingredient } from "@/types";

export const addIngredient = (burger: Ingredient[], ingredient: Ingredient) => {
  const order =
    burger.filter(({ id }: { id: number }) => id === ingredient.id).length + 1;
  return [
    {
      ...ingredient,
      uniqueId: `${ingredient.name.replace(" ", "-")}-${order}`,
    },
    ...burger,
  ];
};

export const removeIngredient = (burger: Ingredient[], uniqueId: string) =>
  burger.filter((ingredient: Ingredient) => ingredient.uniqueId !== uniqueId);
