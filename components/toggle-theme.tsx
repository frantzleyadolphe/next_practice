"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";
import { Sun } from "lucide-react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Toggle onClick={toggleTheme} className="flex justify-center">
      <Sun />
    </Toggle>
  );
}
