'use client';

import React, { useState } from 'react';
import { Mail, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function maskEmail(email: string): string {
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const visible = local.slice(0, 2);
    return `${visible}***@${domain}`;
}

export function ForgotPasswordForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email.trim()) {
            setError('Por favor, insira seu e-mail.');
            return;
        }

        if (!EMAIL_REGEX.test(email)) {
            setError('Por favor, insira um e-mail válido.');
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1200));

            const masked = maskEmail(email);
            router.push(`/forgot-password/link-sent?email=${encodeURIComponent(masked)}`);
        } catch {
            setError('Não foi possível enviar o link. Tente novamente.');
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="mb-8 text-center sm:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Esqueceu sua senha?</h1>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    Digite seu e-mail e enviaremos um link para redefinir sua senha.
                </p>
            </div>

            {error && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-xl border border-red-100 dark:border-red-500/20 animate-in slide-in-from-top-2 duration-200">
                    <AlertCircle className="size-4 flex-shrink-0" />
                    <span className="text-xs font-medium">{error}</span>
                </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                        E-mail
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Mail className={`w-5 h-5 ${error ? 'text-red-400' : 'text-slate-400'}`} />
                        </div>
                        <input
                            className={`block w-full rounded-lg border ${error ? 'border-red-300 dark:border-red-500/50' : 'border-slate-300 dark:border-slate-600'} bg-gray-50 dark:bg-slate-800 py-3 pl-10 pr-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                            id="email"
                            name="email"
                            placeholder="nome@empresa.com"
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(null); }}
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <button
                    className={`flex w-full justify-center items-center gap-2 rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 ${
                        isLoading ? 'opacity-90 cursor-wait' : 'hover:brightness-110 hover:shadow-primary/40 active:scale-[0.98]'
                    }`}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="size-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        'Enviar Link'
                    )}
                </button>
            </form>

            <div className="mt-8 text-center">
                <Link
                    className="inline-flex items-center justify-center text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group"
                    href="/login"
                >
                    <ArrowLeft className="w-[18px] h-[18px] mr-1.5 transition-transform duration-300 group-hover:-translate-x-1" />
                    Voltar para o Login
                </Link>
            </div>
        </div>
    );
}
