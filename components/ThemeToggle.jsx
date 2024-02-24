"use client";
import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);
  return (
    <Switch
      size="lg"
      color="warning"
      isSelected={isDark}
      onValueChange={() => {
        setTheme(isDark ? "light" : "dark");
        setIsDark(!isDark);
      }}
      thumbIcon={({ isSelected, className }) => {

        return isDark ? (
          <Moon size={16} className={className} />
        ) : (
          <Sun size={16} className={className} />
        );
      }}
    />
  );
}
