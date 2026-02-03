"use client";

import { Bug, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className="flex-none h-16 bg-primary dark:bg-card-dark border-b border-primary dark:border-white/10 px-4 lg:px-8 flex items-center justify-between z-20 transition-colors duration-300">
            <div className="flex items-center gap-3">
                <div className="size-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    <Bug className="size-6" />
                </div>
                <h1 className="text-xl font-bold tracking-tight text-white dark:text-white">
                    BugKillers
                </h1>
            </div>
            <div className="flex items-center gap-6">
                <button
                    className="flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 dark:text-slate-400 dark:hover:bg-white/5 transition-colors"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {mounted && (
                        <>
                            {theme === "dark" ? (
                                <Sun className="size-5" />
                            ) : (
                                <Moon className="size-5" />
                            )}
                        </>
                    )}
                </button>
                <div className="h-8 w-[1px] bg-white/20 dark:bg-white/10"></div>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                        <div
                            className="size-9 rounded-full bg-cover bg-center border-2 border-white/30 dark:border-white/10 shadow-sm"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUaP6h1-QAx14fZulD0gmZpcE5tBE_cCO_eZzXnb3utyw7O7nrHiQfQXmMUvnjfFbS8V-vGEMBE8-4BQ4smsOh0WYKExzBXa6-HFINUz8PNPvQjqFH5BVh-j1jb1Nkwn0ZxFImqfkcgotWkqj8k_7uV3di_d9x0NjKVqfUXOIeO7gU5giKmPt6kojOXrsDs7gOLWNeaTGV7RlCsOJFFDbolz7O6Ev8yVLaENQv0gShTMhSyPWIGdK6L6-lhWlq8N6U3jq4ciGFd2U')",
                            }}
                            aria-label="Portrait of Ricardo Dev user"
                        >
                            <div className="bg-green-500 size-2.5 border border-primary dark:border-card-dark rounded-full absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
