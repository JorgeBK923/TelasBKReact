"use client";

import Link from 'next/link';
import { AuthCardShell } from '@/components/auth/AuthCardShell';
import { SocialButtons } from '@/components/auth/SocialButtons';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
    return (
        <AuthCardShell>
            <div className="mb-10 text-center sm:text-left">
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
                    <Link className="font-bold text-primary hover:text-blue-500 hover:underline" href="/register">Cadastre-se</Link>
                </p>
            </div>
        </AuthCardShell>
    );
}
