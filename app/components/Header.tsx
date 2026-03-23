"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const Header = ({toggleSidebar}:{toggleSidebar: ()=> void}) => {
  const { setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-black/10 dark:border-white/5 bg-background">
      <button onClick={toggleSidebar}>
        <span>Menu</span>
      </button>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-light tracking-[0.2em] uppercase dark:text-slate-100">
          <span className="font-bold text-[#C5A059]">AI</span>
        </h2>
      </div>

      <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center rounded-full w-10 h-10 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all outline-none relative shrink-0">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    </header>
  );
};