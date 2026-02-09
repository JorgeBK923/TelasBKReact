"use client";

import { PiggyBank } from "lucide-react";

export function UsageOverview() {
    return (
        <>
            <div className="flex flex-col gap-1 mt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Visao Geral de Uso
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-slate-900 dark:text-white">
                            Consumo de Janeiro 2026
                        </h4>
                        <span className="text-xs font-semibold bg-slate-100 dark:bg-white/10 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                            Mensal
                        </span>
                    </div>
                    <div className="flex items-end gap-1 mb-2">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">
                            347
                        </span>
                        <span className="text-sm text-slate-500 mb-1">
                            de &infin; execucoes
                        </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2.5 mb-2 overflow-hidden">
                        <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: "15%" }}
                        />
                    </div>
                    <p className="text-xs text-slate-500">
                        O ciclo renova em 3 dias.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#059669] to-[#10b981] rounded-xl shadow-sm border border-green-600 p-6 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                        <PiggyBank className="size-28" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="font-bold text-white/90 flex items-center gap-2">
                            Economia Estimada
                        </h4>
                        <p className="text-white/80 text-sm mt-1 mb-4">
                            Gracas a automacao BugKillers neste mes.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-white/70 uppercase font-semibold">
                                    Horas Salvas
                                </p>
                                <p className="text-2xl font-bold">124h</p>
                            </div>
                            <div>
                                <p className="text-xs text-white/70 uppercase font-semibold">
                                    Custo Evitado
                                </p>
                                <p className="text-2xl font-bold">R$ 12k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
