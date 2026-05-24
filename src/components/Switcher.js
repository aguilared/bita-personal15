"use client";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // 1. Agregamos este estado

  useEffect(() => {
    setIsMounted(true); // 2. Marcamos como montado solo cuando corre en el navegador
    setDarkSide(colorTheme === "light");
  }, [colorTheme]);

  // 3. Si no se ha montado, renderizamos un espacio vacío o un loading simple
  if (!isMounted) {
    return <div style={{ marginBottom: "2rem", width: 30, height: 30 }}></div>;
  }

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
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
