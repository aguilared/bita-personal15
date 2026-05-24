"use client";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  // Inicializamos basado en si el tema actual es oscuro
  const [darkSide, setDarkSide] = useState(colorTheme === "light");

  useEffect(() => {
    setDarkSide(colorTheme === "light");
  }, [colorTheme]);

  const toggleDarkMode = (checked) => {
    // Si 'checked' es true, queremos el tema 'dark', si no, 'light'
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={darkSide}
      onChange={toggleDarkMode}
      size={30}
    />
  );
}
