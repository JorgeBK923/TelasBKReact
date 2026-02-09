"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="pt-BR">
            <body className="font-sans antialiased">
                <div className="min-h-screen flex items-center justify-center bg-white p-4">
                    <div className="text-center max-w-md">
                        <div className="size-20 rounded-full bg-red-50 flex items-center justify-center text-red-500 mx-auto mb-6">
                            <AlertTriangle className="size-10" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-3">
                            Erro Crítico
                        </h1>
                        <p className="text-slate-500 mb-8">
                            A aplicação encontrou um erro grave. Por favor,
                            tente recarregar a página.
                        </p>
                        <button
                            onClick={reset}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all active:scale-95 mx-auto"
                        >
                            <RefreshCw className="size-4" />
                            Recarregar
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
