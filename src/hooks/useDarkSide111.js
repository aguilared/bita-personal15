// Filename - hooks/useDarkSide.js
"use client"
import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(true ? "light" : "dark");
  console.log("Theme",theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  console.log("colorTheme", colorTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = globalThis.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (localStorage.theme == "dark") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme, theme];
}
