'use client';

import React from 'react';
import { TimerOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function ResetExpiredCard() {
    return (
        <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-500/10 mb-6 ring-8 ring-amber-500/5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/30">
                        <TimerOff className="w-12 h-12 text-white" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                    Link expirado
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xs mx-auto">
                    Este link de recuperação expirou.<br />Solicite um novo link para redefinir sua senha.
                </p>
            </div>

            <div className="space-y-6">
                <Link
                    className="flex w-full justify-center items-center rounded-lg bg-primary py-3.5 px-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transform hover:-translate-y-0.5"
                    href="/forgot-password"
                >
                    Solicitar novo link
                </Link>
                <div>
                    <Link
                        className="inline-flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm font-medium gap-1 group"
                        href="/login"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        Voltar para o Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
