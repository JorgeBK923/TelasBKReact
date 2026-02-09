"use client";

import { Check } from "lucide-react";

export function SubscriptionCard() {
    return (
        <>
            <div className="flex flex-col gap-1 mt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Assinatura
                </h3>
            </div>

            <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                Plano Enterprise
                            </h4>
                            <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded uppercase flex items-center gap-1.5">
                                <span className="size-2 bg-green-500 rounded-full" />
                                ATIVO
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            Sua proxima cobranca sera em{" "}
                            <span className="font-semibold text-slate-700 dark:text-white">
                                01 Fevereiro 2026
                            </span>
                        </p>
                    </div>
                    <div className="text-left md:text-right">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                            R$ 497
                            <span className="text-sm font-normal text-slate-500">
                                /mes
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                            Inclui:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <Check className="text-green-500 size-5" />
                                Cenarios ilimitados
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <Check className="text-green-500 size-5" />
                                Todos os agentes (atuais + futuros)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <Check className="text-green-500 size-5" />
                                Suporte prioritario
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
