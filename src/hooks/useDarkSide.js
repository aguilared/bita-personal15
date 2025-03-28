// Filename - hooks/useDarkSide.js
"use client"
import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(true);
    const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (localStorage.theme == "dark") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme, theme];
}
