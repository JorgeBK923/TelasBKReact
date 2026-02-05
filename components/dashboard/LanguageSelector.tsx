"use client";

import { Globe } from "lucide-react";

interface LanguageSelectorProps {
    language: string;
    onLanguageChange: (language: string) => void;
}

const languages = [
    { value: "pt-BR", label: "Português (Brasil)", flag: "🇧🇷" },
    { value: "en-US", label: "English (US)", flag: "🇺🇸" },
];

export function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <Globe className="size-4 inline mr-1" />
                Idioma
            </label>
            <div className="relative">
                <select
                    value={language}
                    onChange={(e) => onLanguageChange(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-slate-700 dark:text-slate-300 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none cursor-pointer"
                >
                    {languages.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                            {lang.flag} {lang.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
