"use client";
import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || // Use default or localStorage value
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light") // Respect user preference
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    const handleThemeChange = () => {
      const newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(newTheme);
    };

    // Initial class application
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Local storage handling (consider removing for user preference priority)
    if (localStorage.getItem("theme") !== theme) {
      localStorage.setItem("theme", theme);
    }

    // Attach event listener for system preference changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return () => {
      // Clean up on unmount
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
