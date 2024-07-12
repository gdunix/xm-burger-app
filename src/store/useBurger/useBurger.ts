import { create } from "zustand";
import { Ingredient } from "@/types";
import * as U from "./utils";

type State = {
  burger: Ingredient[];
  addIngredient: (ingredient: Ingredient) => void;
  removeIngredient: (id: number) => void;
  getBurger: () => Ingredient[];
  getIngredientCount: (id: number) => number;
  getCost: () => number;
};

const useBurgerStore = create<State>()((set, get) => ({
  burger: [],
  addIngredient: (ingredient: Ingredient) =>
    set((state) => ({ burger: U.addIngredient(state.burger, ingredient) })),
  removeIngredient: (id: number) =>
    set((state) => ({
      burger: U.removeIngredient(state.burger, id),
    })),
  getBurger: () => U.getUniqueIngredients(get().burger),
  getIngredientCount: (id: number) => U.getIngredientCount(get().burger, id),
  getCost: () => U.getCost(get().burger),
}));


export default useBurgerStore;
