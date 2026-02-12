"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bug, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { SocialButtons } from '@/components/auth/SocialButtons';
import { RegisterForm } from '@/components/auth/RegisterForm';

export default function RegisterPage() {
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
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans antialiased h-screen overflow-hidden flex selection:bg-primary selection:text-white transition-colors duration-300">
            <div className="flex w-full h-full">
                {/* Left Panel - Hero */}
                <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-12 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqAewnHie5a4ZD-1iKSDhSHJDX4UdKJXrQ9JBayWPwnSRf-wAjnMZp6RVTdjU1nSgzNj7KbxlCQAlz9VcACsdIJJePl49i9loQo4R896-A6ofpeVPtf4xnAo0RN8yuvfKDsFpCWh7WeOqEfmjp_u1wc2YqqfYZ59nk6cGzLuXNoc7TZ-E5qcrEeCT3BEi7zAfzuDqA80QQCdFQFScCp3ZymhlafuYyqE-S82LCYsBz5zI1wc-ixSJ0WFSxvO0T4XeRXwxuR3cxgN6s")',
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101822] via-[#101822]/60 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-lg">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                            <Bug className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight text-white mb-4">
                            Entregue projetos com confiança total usando agentes de IA autônomos.
                        </h2>
                        <p className="text-lg text-slate-300 font-medium">
                            Chega de perder noites debugando. Nossa missão é devolver o tempo criativo aos desenvolvedores através de testes autônomos inteligentes.
                        </p>
                        <div className="mt-8 flex items-center gap-5">
                            <div className="flex items-center gap-3">
                                <TechIcon>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 48 48">
                                        <rect fill="#F7DF1E" height="48" rx="4" width="48" />
                                        <path d="M34 38C32.1 38 30.6 37.1 29.7 35.8L32.2 34.3C32.7 35.1 33.3 35.5 34.1 35.5C35.4 35.5 36.1 34.8 36.1 33.8V26H38.9V33.9C38.9 36.4 37 38 34 38ZM21.9 38C19 38 17.1 36.2 16.6 33.7L19.2 33.2C19.5 34.6 20.3 35.5 21.8 35.5C23.3 35.5 24.1 34.8 24.1 33.7C24.1 32.5 23.3 31.9 21.3 31L20.6 30.7C18.1 29.6 16.7 28.1 16.7 25.8C16.7 23.4 18.7 21.8 21.7 21.8C24 21.8 25.6 22.8 26.5 24.6L24.1 25.9C23.6 24.8 22.8 24.3 21.7 24.3C20.5 24.3 19.6 25 19.6 25.9C19.6 26.9 20.4 27.5 22.3 28.3L23 28.6C25.8 29.8 26.9 31.4 26.9 33.6C26.9 36.3 24.9 38 21.9 38Z" fill="#000" />
                                    </svg>
                                </TechIcon>
                                <TechIcon>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 128 128">
                                        <path d="M63.8 23.8C44.9 23.8 36.8 32.7 36.8 44.7v11h25.4v3.5H24.1C12 59.2 12 70 12 77.2c0 13.9 8.2 21.8 22.1 21.8H46V84c0-10.2 8.6-18.4 18.4-18.4h30.3V44.7c0-11.4-9.3-20.9-30.9-20.9zM49.4 32.4c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9z" fill="#3776AB" />
                                        <path d="M89.9 32.9v15c0 10.2-8.6 18.4-18.4 18.4H41.3v20.9c0 11.4 9.3 20.9 30.9 20.9 18.9 0 27-8.9 27-20.9v-11H73.8v-3.5h38.2c12.1 0 12.1-10.8 12.1-18 0-13.9-8.2-21.8-22.1-21.8H90.6l-.7.9zM79 86.1c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9z" fill="#FFD343" />
                                    </svg>
                                </TechIcon>
                                <TechIcon>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                                        <path d="M11.53 2C11.75 2.12 11.92 2.3 12.01 2.52L12.01 13.29L6.5 18.8L6.5 7.03C6.5 4.25 8.75 2 11.53 2Z" fill="#2684FF" />
                                        <path d="M17.5 7.97L17.5 18.74L12 24.25L12 12.48C12 9.71 14.25 7.46 17.03 7.46C17.25 7.58 17.42 7.75 17.5 7.97Z" fill="#0052CC" />
                                        <path d="M6.03 7.46L6.03 18.23L0.53 23.74L0.53 11.97C0.53 9.19 2.78 6.94 5.56 6.94C5.78 7.06 5.95 7.24 6.03 7.46Z" fill="#0052CC" />
                                    </svg>
                                </TechIcon>
                            </div>
                            <div className="h-8 w-px bg-slate-700/50" />
                            <span className="text-sm font-semibold text-slate-300 tracking-wide">
                                Compatível com qualquer stack moderna
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="w-full lg:w-1/2 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto relative transition-colors duration-300">
                    <button
                        aria-label="Alternar tema"
                        className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors z-30 focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-6 h-6" />
                        ) : (
                            <Moon className="w-6 h-6" />
                        )}
                    </button>

                    <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 xl:px-24">
                        <div className="w-full max-w-md mx-auto mb-10">
                            <div className="flex items-center gap-2 mb-8">
                                <Bug className="text-primary w-8 h-8" />
                                <span className="text-2xl font-black tracking-[-0.033em] text-slate-900 dark:text-white">
                                    BugKillers
                                </span>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                                Criar Conta
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400">
                                Implante seu primeiro agente de teste de IA em minutos.
                            </p>
                        </div>

                        <div className="w-full max-w-md mx-auto space-y-5">
                            <SocialButtons action="register" />

                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
                                <span className="flex-shrink-0 mx-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Ou cadastre-se com e-mail
                                </span>
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
                            </div>

                            <RegisterForm />

                            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
                                Já tem uma conta?{' '}
                                <Link className="font-bold text-primary hover:underline" href="/login">
                                    Entrar
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TechIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-lg shadow-black/20 hover:scale-110 transition-transform duration-200">
            {children}
        </div>
    );
}
