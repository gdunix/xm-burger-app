import { create } from "zustand";
import { Ingredient } from "@/types";
import createSelectors from "../createSelectors";
import * as U from "./utils";

type State = {
  burger: Ingredient[];
  addIngredient: (ingredient: Ingredient) => void;
  removeIngredient: (uniqueId: string) => void;
  getBurger: () => Ingredient[];
  getIngredientCount: (id: number) => number;
};

const useBurgerStore = create<State>()((set, get) => ({
  burger: [],
  addIngredient: (ingredient: Ingredient) =>
    set((state) => ({ burger: U.addIngredient(state.burger, ingredient) })),
  removeIngredient: (uniqueId: string) =>
    set((state) => ({
      burger: U.removeIngredient(state.burger, uniqueId),
    })),
  getBurger: () => U.getUniqueIngredients(get().burger),
  getIngredientCount: (id: number) => U.getIngredientCount(get().burger, id),
}));

export const selectBurger = (state: State) => state.burger;
export default createSelectors(useBurgerStore);
