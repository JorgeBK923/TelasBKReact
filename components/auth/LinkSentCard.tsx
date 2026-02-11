'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { MailCheck, Timer, Hourglass, ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export function LinkSentCard() {
    const searchParams = useSearchParams();
    const maskedEmail = searchParams.get('email') || '***@***.com';
    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setInterval(() => {
            setCooldown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [cooldown]);

    const handleResend = useCallback(() => {
        if (cooldown > 0) return;
        setCooldown(60);
        // Simulate resend API call
    }, [cooldown]);

    return (
        <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10 mb-6">
                <MailCheck className="text-primary w-10 h-10" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Link enviado!</h1>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
                Enviamos um link de recuperação para{' '}
                <strong className="text-slate-700 dark:text-slate-200 font-semibold">{maskedEmail}</strong>.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Verifique sua caixa de entrada e spam.
            </p>

            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium bg-slate-50 dark:bg-slate-800 py-1.5 px-3 rounded-full inline-flex items-center gap-1 mb-8 border border-slate-100 dark:border-slate-700">
                <Timer className="w-3.5 h-3.5" />
                O link expira em 24 horas
            </p>

            <div className="space-y-6">
                <a
                    className="flex w-full justify-center items-center rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                    href="mailto:"
                >
                    Abrir e-mail
                </a>

                <button
                    className={`inline-flex items-center justify-center text-sm font-medium gap-2 group w-full transition-colors ${
                        cooldown > 0
                            ? 'text-slate-400 dark:text-slate-500 cursor-not-allowed'
                            : 'text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary'
                    }`}
                    type="button"
                    onClick={handleResend}
                    disabled={cooldown > 0}
                >
                    <span>Não recebeu?</span>
                    <span className="font-semibold underline decoration-2 decoration-transparent group-hover:decoration-primary/30 underline-offset-4 transition-all">
                        {cooldown > 0 ? `Reenviar em ${cooldown}s` : 'Reenviar link'}
                    </span>
                    <Hourglass className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-primary/70" />
                </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-700">
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
