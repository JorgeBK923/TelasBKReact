'use client';

import React, { useState, useEffect } from 'react';
import { Bug, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface OnboardingHeaderProps {
    sticky?: boolean;
    bordered?: boolean;
}

export function OnboardingHeader({ sticky = false, bordered = false }: OnboardingHeaderProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            className={`w-full px-6 py-5 lg:px-12 z-20 transition-colors duration-300 ${
                sticky ? 'sticky top-0 bg-white/80 dark:bg-card-dark/80 backdrop-blur-md' : ''
            } ${bordered ? 'border-b border-slate-200 dark:border-slate-800' : ''}`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2 select-none">
                    <Bug className="text-primary w-8 h-8" />
                    <span className="text-2xl font-black tracking-[-0.033em] text-slate-900 dark:text-white">
                        BugKillers
                    </span>
                </div>
                {mounted && (
                    <button
                        aria-label="Alternar tema"
                        className="p-2 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>
                )}
            </div>
        </header>
    );
}
