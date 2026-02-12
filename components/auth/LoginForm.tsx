'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CURRENT_USER } from '@/constants/user';

// Mock credentials
const MOCK_PASSWORD = "123456";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email.trim() || !password.trim()) {
            setError("Preencha todos os campos.");
            return;
        }

        if (!EMAIL_REGEX.test(email)) {
            setError("Por favor, insira um e-mail válido.");
            return;
        }

        setIsLoading(true);

        try {
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1200));

            if (email === CURRENT_USER.email && password === MOCK_PASSWORD) {
                // Success — redirect to dashboard
                router.push('/agents');
            } else {
                setIsLoading(false);
                setError("E-mail ou senha incorretos. Tente novamente.");
            }
        } catch {
            setIsLoading(false);
            setError("Erro de conexão. Verifique sua internet e tente novamente.");
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-xl border border-red-100 dark:border-red-500/20 animate-in slide-in-from-top-2 duration-200">
                    <AlertCircle className="size-4 flex-shrink-0" />
                    <span className="text-xs font-medium">{error}</span>
                </div>
            )}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">E-mail</label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className={`w-5 h-5 ${error ? 'text-red-400' : 'text-slate-400'}`} />
                    </div>
                    <input
                        className={`block w-full rounded-lg border ${error ? 'border-red-300 dark:border-red-500/50' : 'border-slate-300 dark:border-slate-600'} bg-gray-50 dark:bg-slate-800 py-3 pl-10 pr-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                        id="email"
                        name="email"
                        placeholder="ricardo@bugkillers.ai"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(null); }}
                        disabled={isLoading}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">Senha</label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Lock className={`w-5 h-5 ${error ? 'text-red-400' : 'text-slate-400'}`} />
                    </div>
                    <input
                        className={`block w-full rounded-lg border ${error ? 'border-red-300 dark:border-red-500/50' : 'border-slate-300 dark:border-slate-600'} bg-gray-50 dark:bg-slate-800 py-3 pl-10 pr-10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(null); }}
                        disabled={isLoading}
                    />
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <Link className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="/forgot-password">Esqueceu a senha?</Link>
            </div>
            <button
                className={`flex w-full justify-center items-center gap-2 rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white ${isLoading ? "opacity-90 cursor-wait" : "hover:brightness-110 hover:shadow-primary/40 active:scale-[0.98]"
                    }`}
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="size-4 animate-spin" />
                        Autenticando...
                    </>
                ) : (
                    "Acessar Conta"
                )}
            </button>
        </form>
    );
}
