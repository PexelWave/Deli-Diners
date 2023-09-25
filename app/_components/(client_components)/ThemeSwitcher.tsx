"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeSwitcher = () => {
  const themes = [
    "light", "cupcake", "lemonade", "lofi", "acid", "night"
  ];

  useEffect(() => {
    themeChange(false);
  });

  return (
    <select
      className="prose select select-ghost focus:outline-none focus:bourder-none bg-transparent"
      data-choose-theme
    >
      <option value="" disabled></option>
      {themes.map((theme) => (
        <option
          className="space-y-10"
          key={theme.toLocaleLowerCase()}
          value={theme.toLocaleLowerCase()}
        >
          {theme}
        </option>
      ))}
    </select>
  );
};

export default ThemeSwitcher;
