import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import createSelectors from "../createSelectors";

type State = {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const useAuthStore = create<State>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      login: (token: string) => set({ isAuthenticated: true, token }),
      logout: () => set({ isAuthenticated: false, token: null }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default createSelectors(useAuthStore);
