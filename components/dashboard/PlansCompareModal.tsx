"use client";

import { X, Check, Minus } from "lucide-react";

interface PlansCompareModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const plans = [
    {
        name: "Free",
        price: "R$ 0",
        period: "/mês",
        features: {
            "Cenários": "3",
            "Membros": "1",
            "Execuções/mês": "100",
            "Suporte": "Email",
            "Retenção de dados": "7 dias",
            "API": false,
            "SSO": false,
            "Auditoria": false,
            "Prioridade": false,
        },
    },
    {
        name: "Startup",
        price: "R$ 97",
        period: "/mês",
        popular: true,
        features: {
            "Cenários": "10",
            "Membros": "5",
            "Execuções/mês": "1.000",
            "Suporte": "Chat",
            "Retenção de dados": "30 dias",
            "API": true,
            "SSO": false,
            "Auditoria": false,
            "Prioridade": false,
        },
    },
    {
        name: "Enterprise",
        price: "R$ 497",
        period: "/mês",
        current: true,
        features: {
            "Cenários": "Ilimitados",
            "Membros": "20",
            "Execuções/mês": "Ilimitadas",
            "Suporte": "24/7 Prioritário",
            "Retenção de dados": "1 ano",
            "API": true,
            "SSO": true,
            "Auditoria": true,
            "Prioridade": true,
        },
    },
];

const featureLabels: Record<string, string> = {
    "Cenários": "Cenários de teste",
    "Membros": "Membros da equipe",
    "Execuções/mês": "Execuções mensais",
    "Suporte": "Suporte",
    "Retenção de dados": "Retenção de dados",
    "API": "API dedicada",
    "SSO": "SSO/SAML",
    "Auditoria": "Logs de auditoria",
    "Prioridade": "Fila prioritária",
};

export function PlansCompareModal({ isOpen, onClose }: PlansCompareModalProps) {
    if (!isOpen) return null;

    const featureKeys = Object.keys(plans[0].features);

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            Comparar Planos
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                            Escolha o plano ideal para sua equipe
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                        <X className="size-5 text-slate-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10">
                                        Recurso
                                    </th>
                                    {plans.map((plan) => (
                                        <th
                                            key={plan.name}
                                            className={`p-4 text-center border-b border-slate-200 dark:border-white/10 ${
                                                plan.current
                                                    ? "bg-primary/5 dark:bg-primary/10"
                                                    : ""
                                            }`}
                                        >
                                            <div className="flex flex-col items-center">
                                                {plan.popular && (
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                                                        Popular
                                                    </span>
                                                )}
                                                {plan.current && (
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 mb-1">
                                                        Atual
                                                    </span>
                                                )}
                                                <span className="font-bold text-slate-900 dark:text-white">
                                                    {plan.name}
                                                </span>
                                                <div className="flex items-baseline gap-1 mt-1">
                                                    <span className="text-2xl font-bold text-slate-900 dark:text-white">
                                                        {plan.price}
                                                    </span>
                                                    <span className="text-sm text-slate-500">
                                                        {plan.period}
                                                    </span>
                                                </div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {featureKeys.map((key, index) => (
                                    <tr
                                        key={key}
                                        className={
                                            index % 2 === 0
                                                ? "bg-slate-50/50 dark:bg-white/5"
                                                : ""
                                        }
                                    >
                                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-white/5">
                                            {featureLabels[key]}
                                        </td>
                                        {plans.map((plan) => (
                                            <td
                                                key={`${plan.name}-${key}`}
                                                className={`p-4 text-center border-b border-slate-200 dark:border-white/5 ${
                                                    plan.current
                                                        ? "bg-primary/5 dark:bg-primary/10"
                                                        : ""
                                                }`}
                                            >
                                                {typeof plan.features[key as keyof typeof plan.features] ===
                                                "boolean" ? (
                                                    plan.features[key as keyof typeof plan.features] ? (
                                                        <Check className="size-5 text-green-500 mx-auto" />
                                                    ) : (
                                                        <Minus className="size-5 text-slate-300 mx-auto" />
                                                    )
                                                ) : (
                                                    <span className="text-sm text-slate-700 dark:text-slate-300">
                                                        {plan.features[key as keyof typeof plan.features]}
                                                    </span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
