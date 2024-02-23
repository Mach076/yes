import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  toggleTheme: () => {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      set({ theme: "dark" });
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      set({ theme: "light" });
    }
  },
}));

export default useThemeStore;
