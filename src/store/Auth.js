import { create } from "zustand";

const useAuthStore = create((set) => ({
  authenticated: false,
  login: () => set({ authenticated: true }),
  logout: () => set({ authenticated: false }),
}));

export default useAuthStore;
