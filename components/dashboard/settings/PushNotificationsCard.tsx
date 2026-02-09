"use client";

import { Bell } from "lucide-react";
import { Toggle } from "@/components/ui/Toggle";

interface PushNotificationsCardProps {
    enabled: boolean;
    onToggle: (enabled: boolean) => void;
}

export function PushNotificationsCard({
    enabled,
    onToggle,
}: PushNotificationsCardProps) {
    return (
        <div
            className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Bell className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Notificacoes Push
                </h4>
            </div>
            <div className="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex flex-col gap-1 pr-4">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Ativar notificacoes no navegador
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                        Receba alertas em tempo real mesmo com a aba fechada.
                    </span>
                </div>
                <Toggle
                    checked={enabled}
                    onChange={onToggle}
                    ariaLabel="Ativar notificacoes push"
                />
            </div>
            <div className="mt-4 flex gap-2">
                <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${enabled ? "bg-green-50 text-green-700 ring-green-600/20" : "bg-yellow-50 text-yellow-800 ring-yellow-600/20"}`}
                >
                    {enabled ? "Notificacoes ativas" : "Atencao"}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 self-center">
                    {enabled
                        ? "Voce recebera alertas em tempo real."
                        : "Voce precisara permitir permissoes no navegador."}
                </p>
            </div>
        </div>
    );
}
