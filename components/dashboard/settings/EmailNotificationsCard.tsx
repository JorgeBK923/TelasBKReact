"use client";

import { Mail } from "lucide-react";
import { Toggle } from "@/components/ui/Toggle";

interface EmailPreferences {
    scenarios: boolean;
    agents: boolean;
    usage: boolean;
    newsletter: boolean;
    maintenance: boolean;
    updates: boolean;
}

interface EmailNotificationsCardProps {
    preferences: EmailPreferences;
    onToggle: (key: keyof EmailPreferences) => void;
}

const notificationItems = [
    {
        id: "scenarios" as const,
        title: "Cenarios gerados",
        desc: "Receba um resumo quando um lote for concluido.",
    },
    {
        id: "agents" as const,
        title: "Novos agentes lancados",
        desc: "Saiba quando novos modelos de IA estiverem disponiveis.",
    },
    {
        id: "usage" as const,
        title: "Alertas de limite de uso",
        desc: "Quando voce atingir 80% do seu plano mensal.",
    },
    {
        id: "newsletter" as const,
        title: "Newsletter",
        desc: "Dicas de QA e atualizacoes da plataforma.",
    },
];

const productItems = [
    {
        id: "maintenance" as const,
        title: "Avisos de manutencao",
        desc: "Receba alertas sobre interrupcoes planejadas.",
    },
    {
        id: "updates" as const,
        title: "Atualizacoes importantes",
        desc: "Notificacoes sobre grandes mudancas no sistema.",
    },
];

export function EmailNotificationsCard({
    preferences,
    onToggle,
}: EmailNotificationsCardProps) {
    return (
        <div
            className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <Mail className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Notificacoes por Email
                </h4>
            </div>
            <div className="space-y-4">
                {notificationItems.map((item, idx) => (
                    <div key={item.id}>
                        <div className="flex items-center justify-between py-1">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    {item.title}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {item.desc}
                                </span>
                            </div>
                            <Toggle
                                checked={preferences[item.id]}
                                onChange={() => onToggle(item.id)}
                                ariaLabel={item.title}
                            />
                        </div>
                        {idx < notificationItems.length - 1 && (
                            <hr className="border-slate-100 dark:border-white/5 mt-3" />
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                    Produto
                </h5>
                <div className="space-y-4">
                    {productItems.map((item, idx) => (
                        <div key={item.id}>
                            <div className="flex items-center justify-between py-1">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {item.title}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        {item.desc}
                                    </span>
                                </div>
                                <Toggle
                                    checked={preferences[item.id]}
                                    onChange={() => onToggle(item.id)}
                                    ariaLabel={item.title}
                                />
                            </div>
                            {idx === 0 && (
                                <hr className="border-slate-100 dark:border-white/5 mt-3" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
