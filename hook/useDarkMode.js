import React, { useState, useEffect } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState("dark");
  const colortheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colortheme);

    root.classList.add(theme);
  }, [theme, colortheme]);

  return [colortheme, setTheme];
}
