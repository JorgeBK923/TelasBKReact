'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Check, Circle, Loader2 } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getPasswordStrength, strengthColors, strengthLabels } from '@/lib/password-utils';

export function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Redirect to expired if no token
    if (!token) {
        router.replace('/reset-password/expired');
        return null;
    }

    const strength = password.length > 0 ? getPasswordStrength(password) : 0;
    const hasMinLength = password.length >= 8;
    const passwordsMatch = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;
    const canSubmit = hasMinLength && passwordsMatch && strength >= 2;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        router.push('/reset-password/success');
    };

    return (
        <div>
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    Crie uma nova senha
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Sua nova senha deve ter pelo menos 8 caracteres.
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    {/* New Password */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="new-password">
                            Nova senha
                        </label>
                        <div className="relative">
                            <input
                                className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 py-3 pl-4 pr-12 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                id="new-password"
                                name="new-password"
                                placeholder="••••••••"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                            <button
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors focus:outline-none"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="confirm-password">
                            Confirmar senha
                        </label>
                        <div className="relative">
                            <input
                                className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 py-3 pl-4 pr-12 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="••••••••"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                disabled={isLoading}
                            />
                            <button
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors focus:outline-none"
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                aria-label={showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'}
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Strength Bar */}
                    <div className="pt-1">
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Força da senha</span>
                            {password.length > 0 && (
                                <span className={`text-xs font-bold ${
                                    strength <= 1 ? 'text-red-500' :
                                    strength === 2 ? 'text-yellow-600 dark:text-yellow-500' :
                                    strength === 3 ? 'text-orange-500' :
                                    'text-green-600 dark:text-green-500'
                                }`}>
                                    {strengthLabels[strength - 1] || ''}
                                </span>
                            )}
                        </div>
                        <div className="flex gap-1 h-1.5">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className={`w-1/4 rounded-full transition-colors duration-300 ${
                                        password.length > 0 && i < strength
                                            ? strengthColors[strength - 1]
                                            : 'bg-slate-200 dark:bg-slate-700'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-2 pt-2">
                        <div className={`flex items-center text-xs ${hasMinLength ? 'text-green-600 dark:text-green-500' : 'text-slate-400 dark:text-slate-500'}`}>
                            {hasMinLength ? (
                                <Check className="w-4 h-4 mr-1.5 font-bold" />
                            ) : (
                                <Circle className="w-4 h-4 mr-1.5" />
                            )}
                            <span>Mínimo 8 caracteres</span>
                        </div>
                        <div className={`flex items-center text-xs ${passwordsMatch ? 'text-green-600 dark:text-green-500' : 'text-slate-400 dark:text-slate-500'}`}>
                            {passwordsMatch ? (
                                <Check className="w-4 h-4 mr-1.5 font-bold" />
                            ) : (
                                <Circle className="w-4 h-4 mr-1.5" />
                            )}
                            <span>Senhas coincidem</span>
                        </div>
                    </div>
                </div>

                <button
                    className={`flex w-full justify-center items-center gap-2 rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 mt-8 ${
                        isLoading ? 'opacity-90 cursor-wait' :
                        canSubmit ? 'hover:brightness-110 hover:shadow-primary/40 active:scale-[0.98]' :
                        'opacity-50 cursor-not-allowed'
                    }`}
                    type="submit"
                    disabled={!canSubmit || isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="size-4 animate-spin" />
                            Redefinindo...
                        </>
                    ) : (
                        'Redefinir Senha'
                    )}
                </button>
            </form>
        </div>
    );
}
