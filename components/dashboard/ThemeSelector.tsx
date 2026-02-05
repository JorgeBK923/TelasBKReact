"use client";

import { Sun, Moon, Monitor } from "lucide-react";

interface ThemeSelectorProps {
    theme: "light" | "dark" | "system";
    onThemeChange: (theme: "light" | "dark" | "system") => void;
}

export function ThemeSelector({ theme, onThemeChange }: ThemeSelectorProps) {
    const options = [
        { id: "light" as const, icon: Sun, label: "Light" },
        { id: "dark" as const, icon: Moon, label: "Dark" },
        { id: "system" as const, icon: Monitor, label: "System" },
    ];

    return (
        <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                Tema da Interface
            </label>
            <div className="grid grid-cols-3 gap-3">
                {options.map((option) => (
                    <label key={option.id} className="cursor-pointer group">
                        <input
                            className="peer sr-only"
                            name="theme"
                            type="radio"
                            checked={theme === option.id}
                            onChange={() => onThemeChange(option.id)}
                        />
                        <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                            <option.icon className="size-5 text-slate-500 mx-auto mb-1" />
                            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                {option.label}
                            </p>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}
