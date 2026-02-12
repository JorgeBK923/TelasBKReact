"use client";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function WorkspaceError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center max-w-md">
                <div className="size-20 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 mx-auto mb-6">
                    <AlertTriangle className="size-10" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Erro no workspace
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                    Ocorreu um erro inesperado no workspace. Tente novamente ou
                    volte para o dashboard.
                </p>
                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={reset}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-glow"
                    >
                        <RefreshCw className="size-4" />
                        Tentar Novamente
                    </button>
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                        <Home className="size-4" />
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
