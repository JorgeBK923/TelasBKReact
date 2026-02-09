"use client";

import { Palette, Sun, Moon, Monitor } from "lucide-react";

interface ThemeLanguageCardProps {
    activeTheme: string | undefined;
    setTheme: (theme: string) => void;
    language: string;
    setLanguage: (lang: string) => void;
}

const themeOptions = [
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
    { id: "system", icon: Monitor, label: "System" },
];

export function ThemeLanguageCard({
    activeTheme,
    setTheme,
    language,
    setLanguage,
}: ThemeLanguageCardProps) {
    return (
        <div
            className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-primary">
                    <Palette className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Interface &amp; Idioma
                </h4>
            </div>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                        Tema da Interface
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {themeOptions.map((t) => (
                            <label key={t.id} className="cursor-pointer group">
                                <input
                                    className="peer sr-only"
                                    name="theme"
                                    type="radio"
                                    checked={activeTheme === t.id}
                                    onChange={() => setTheme(t.id)}
                                />
                                <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                    <t.icon
                                        className={`size-5 mx-auto mb-1 ${activeTheme === t.id ? "text-primary" : "text-slate-500"}`}
                                    />
                                    <p
                                        className={`text-xs font-semibold ${activeTheme === t.id ? "text-primary" : "text-slate-600 dark:text-slate-300"}`}
                                    >
                                        {t.label}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        htmlFor="language"
                    >
                        Idioma
                    </label>
                    <div className="relative">
                        <select
                            className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-slate-700 dark:text-slate-300 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                            id="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="pt-BR">Portugues (Brasil)</option>
                            <option value="en-US">English (US)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
