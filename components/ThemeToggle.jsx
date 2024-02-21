"use client";
import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"

export default function ThemeToggle() {
    const { setTheme } = useTheme()
  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) => {
        isSelected ? setTheme("dark") : setTheme("light")
        return isSelected ? 
          <Moon size={16} className={className} />
         : (
          <Sun size={16} className={className} />
        );
      }}
    />
  );
}
