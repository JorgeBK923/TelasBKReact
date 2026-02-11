'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function ResetSuccessCard() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (countdown <= 0) {
            router.push('/login');
            return;
        }
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [countdown, router]);

    return (
        <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600/10 mb-6 ring-8 ring-green-600/5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-600 shadow-lg shadow-green-600/30">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                    Senha redefinida!
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xs mx-auto">
                    Sua senha foi alterada com sucesso.<br />Você já pode fazer login.
                </p>
            </div>

            <div className="space-y-6">
                <Link
                    className="flex w-full justify-center items-center rounded-lg bg-primary py-3.5 px-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transform hover:-translate-y-0.5"
                    href="/login"
                >
                    Acessar BugKillers
                </Link>
                <p className="text-slate-400 dark:text-slate-500 text-sm italic">
                    Redirecionando em {countdown} segundos...
                </p>
            </div>
        </div>
    );
}
