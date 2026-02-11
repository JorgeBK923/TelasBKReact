'use client';

import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';

function getPasswordStrength(password: string): number {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
}

const strengthColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
];

export function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const strength = password.length > 0 ? getPasswordStrength(password) : 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !password.trim() || !agreedToTerms) return;

        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="full-name">
                    Nome Completo
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User className="text-slate-400 w-5 h-5" />
                    </div>
                    <input
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 py-3 pl-10 pr-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        id="full-name"
                        name="full-name"
                        placeholder="João Silva"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="register-email">
                    E-mail Corporativo
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="text-slate-400 w-5 h-5" />
                    </div>
                    <input
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 py-3 pl-10 pr-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        id="register-email"
                        name="email"
                        placeholder="nome@empresa.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="register-password">
                    Senha
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Lock className="text-slate-400 w-5 h-5" />
                    </div>
                    <input
                        className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 py-3 pl-10 pr-10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        id="register-password"
                        name="password"
                        placeholder="••••••••"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </div>
                </div>
                <div className="flex gap-1 pt-1 h-1">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`w-1/4 rounded-full h-full transition-colors duration-300 ${
                                password.length > 0 && i < strength
                                    ? strengthColors[strength - 1]
                                    : 'bg-slate-200 dark:bg-slate-700'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-slate-900"
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        disabled={isLoading}
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label className="font-medium text-slate-600 dark:text-slate-300" htmlFor="terms">
                        Eu concordo com os{' '}
                        <a className="text-primary hover:underline" href="#">Termos</a> e a{' '}
                        <a className="text-primary hover:underline" href="#">Política de Privacidade</a>.
                    </label>
                </div>
            </div>

            <button
                className={`flex w-full justify-center items-center gap-2 rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 ${
                    isLoading ? 'opacity-90 cursor-wait' : 'hover:brightness-110 hover:shadow-primary/40 active:scale-[0.98]'
                }`}
                type="submit"
                disabled={isLoading || !agreedToTerms}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="size-4 animate-spin" />
                        Criando conta...
                    </>
                ) : (
                    'Cadastrar'
                )}
            </button>
        </form>
    );
}
