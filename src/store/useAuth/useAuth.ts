import { create } from "zustand";

type State = {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  gteIsAuthenticated: () => boolean;
  getToken: () => string | null;
};

const useAuthStore = create<State>()((set, get) => ({
  isAuthenticated: false,
  token: null,
  login: (token: string) => set({ isAuthenticated: true, token }),
  logout: () => set({ isAuthenticated: false, token: null }),
  gteIsAuthenticated: () => get().isAuthenticated,
  getToken: () => get().token,
}));

export default useAuthStore;
