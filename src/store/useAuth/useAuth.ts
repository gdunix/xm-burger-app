import { create } from "zustand";
import createSelectors from "../createSelectors";

type State = {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const useAuthStore = create<State>()((set) => ({
  isAuthenticated: false,
  token: null,
  login: (token: string) => set({ isAuthenticated: true, token }),
  logout: () => set({ isAuthenticated: false, token: null }),
}));

export default createSelectors(useAuthStore);
