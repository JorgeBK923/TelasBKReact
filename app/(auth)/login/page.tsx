"use client";

import React, { useState, useEffect } from 'react';
import { Bug, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { SocialButtons } from '@/components/auth/SocialButtons';
import { LoginForm } from '@/components/auth/LoginForm';

// Import CSS if available/needed or assume Tailwind global styles are sufficient
// Attempting to match the draft's container structure

export default function LoginPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!mounted) return null;

    return (
        <div className="relative h-screen overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-white font-sans antialiased selection:bg-primary selection:text-white transition-colors duration-300">
            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 shadow-lg transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
                {theme === 'dark' ? (
                    <Sun className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                    <Moon className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" />
                )}
            </button>

            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqAewnHie5a4ZD-1iKSDhSHJDX4UdKJXrQ9JBayWPwnSRf-wAjnMZp6RVTdjU1nSgzNj7KbxlCQAlz9VcACsdIJJePl49i9loQo4R896-A6ofpeVPtf4xnAo0RN8yuvfKDsFpCWh7WeOqEfmjp_u1wc2YqqfYZ59nk6cGzLuXNoc7TZ-E5qcrEeCT3BEi7zAfzuDqA80QQCdFQFScCp3ZymhlafuYyqE-S82LCYsBz5zI1wc-ixSJ0WFSxvO0T4XeRXwxuR3cxgN6s")' }}
                ></div>
                <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm transition-colors duration-300"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
                <div className="w-full max-w-md bg-white dark:bg-[#1e293b] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 transition-all duration-300">
                    <div className="mb-10 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-8">
                            <Bug className="text-primary w-8 h-8" />
                            <span className="text-2xl font-black tracking-[-0.033em] text-slate-900 dark:text-white">BugKillers</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Entrar</h1>
                        <p className="text-slate-500 dark:text-slate-400">Acesse sua conta para continuar.</p>
                    </div>

                    <div className="space-y-5">
                        <SocialButtons />

                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                            <span className="flex-shrink-0 mx-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ou entre com e-mail</span>
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                        </div>

                        <LoginForm />

                        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
                            Não tem uma conta?{' '}
                            <a className="font-bold text-primary hover:text-blue-500 hover:underline" href="#">Cadastre-se</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
