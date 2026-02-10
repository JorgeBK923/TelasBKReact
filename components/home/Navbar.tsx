'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Bug, Sun, Moon } from 'lucide-react';

export function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const isDark = resolvedTheme === 'dark';

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-200 bg-white/80 dark:bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="size-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        <Bug className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                        BugKillers
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <a className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors" href="/#product">
                        Produto
                    </a>
                    <a className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors" href="/#agents">
                        Agentes
                    </a>
                    <a className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors" href="/#pricing">
                        Preços
                    </a>
                    <Link className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors" href="/contact">
                        Contato
                    </Link>

                    {/* Theme Toggle Button */}
                    <button
                        aria-label="Alternar tema escuro e claro"
                        className="relative w-10 h-6 rounded-full transition-colors duration-200 bg-slate-200 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        onClick={toggleTheme}
                    >
                        <div className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center shadow-sm ${mounted && isDark
                            ? 'translate-x-4 bg-slate-900'
                            : 'translate-x-0 bg-yellow-400'
                            }`}>
                            {mounted && (
                                isDark ? (
                                    <Moon className="w-3 h-3 text-white" />
                                ) : (
                                    <Sun className="w-3 h-3 text-yellow-800" />
                                )
                            )}
                        </div>
                    </button>

                    <Link className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors" href="/login">
                        Login
                    </Link>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                    Começar Grátis
                </button>
            </div>
        </nav>
    );
}
