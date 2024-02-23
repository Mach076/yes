import { useState } from "react";
import { Switch } from "@headlessui/react";
import useThemeStore from "../store/Theme";
export default function SwitchButton() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <div className="py-16">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        className={`${theme === "dark" ? "bg-indigo-600" : "bg-gray-400"}
          relative inline-flex h-[28px] w-[59px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use darkmode</span>
        <span
          aria-hidden="true"
          className={`${
            theme === "dark" ? "translate-x-[120%]" : "translate-x-0"
          }
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {theme === "dark" ? "🌜" : "🌞"}
        </span>
      </Switch>
    </div>
  );
}
