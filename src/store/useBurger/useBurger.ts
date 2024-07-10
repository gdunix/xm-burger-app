import { create } from "zustand";
import { Ingredient } from "@/types";
import createSelectors from "../createSelectors";
import * as U from "./utils";

type State = {
  burger: Ingredient[];
  addIngredient: (ingredient: Ingredient) => void;
  removeIngredient: (uniqueId: string) => void;
};

const useBurgerStore = create<State>()((set) => ({
  burger: [],
  addIngredient: (ingredient: Ingredient) =>
    set((state) => ({ burger: U.addIngredient(state.burger, ingredient) })),
  removeIngredient: (uniqueId: string) =>
    set((state) => ({
      burger: U.removeIngredient(state.burger, uniqueId),
    })),
}));

export default createSelectors(useBurgerStore);
