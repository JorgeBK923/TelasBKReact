"use client";

import { X, CreditCard, PauseCircle, XCircle, ChevronRight } from "lucide-react";

interface ManageSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onChangePlan: () => void;
    onUpdateCard: () => void;
    onPause: () => void;
    onCancel: () => void;
}

export function ManageSubscriptionModal({
    isOpen,
    onClose,
    onChangePlan,
    onUpdateCard,
    onPause,
    onCancel,
}: ManageSubscriptionModalProps) {
    if (!isOpen) return null;

    const actions = [
        {
            id: "change-plan",
            icon: ChevronRight,
            title: "Mudar de Plano",
            description: "Upgrade ou downgrade da sua assinatura",
            onClick: () => {
                onClose();
                onChangePlan();
            },
            variant: "default" as const,
        },
        {
            id: "update-card",
            icon: CreditCard,
            title: "Alterar Cartão",
            description: "Atualizar método de pagamento",
            onClick: () => {
                onClose();
                onUpdateCard();
            },
            variant: "default" as const,
        },
        {
            id: "pause",
            icon: PauseCircle,
            title: "Pausar Assinatura",
            description: "Congele temporariamente sem perder dados",
            onClick: () => {
                onClose();
                onPause();
            },
            variant: "warning" as const,
        },
        {
            id: "cancel",
            icon: XCircle,
            title: "Cancelar Assinatura",
            description: "Encerre sua assinatura definitivamente",
            onClick: () => {
                onClose();
                onCancel();
            },
            variant: "danger" as const,
        },
    ];

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Gerenciar Assinatura
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                        <X className="size-5 text-slate-500" />
                    </button>
                </div>

                {/* Actions */}
                <div className="p-4">
                    <div className="space-y-2">
                        {actions.map((action) => (
                            <button
                                key={action.id}
                                onClick={action.onClick}
                                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left group ${
                                    action.variant === "danger"
                                        ? "border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/10"
                                        : action.variant === "warning"
                                        ? "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/10"
                                        : "border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5"
                                }`}
                            >
                                <div
                                    className={`size-10 rounded-lg flex items-center justify-center ${
                                        action.variant === "danger"
                                            ? "bg-red-100 dark:bg-red-900/20 text-red-600"
                                            : action.variant === "warning"
                                            ? "bg-amber-100 dark:bg-amber-900/20 text-amber-600"
                                            : "bg-slate-100 dark:bg-white/10 text-slate-600"
                                    }`}
                                >
                                    <action.icon className="size-5" />
                                </div>
                                <div className="flex-1">
                                    <h4
                                        className={`font-semibold ${
                                            action.variant === "danger"
                                                ? "text-red-700 dark:text-red-400"
                                                : action.variant === "warning"
                                                ? "text-amber-700 dark:text-amber-400"
                                                : "text-slate-900 dark:text-white"
                                        }`}
                                    >
                                        {action.title}
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        {action.description}
                                    </p>
                                </div>
                                <ChevronRight className="size-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Plano atual:</span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                            Enterprise
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-slate-500">Próxima cobrança:</span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                            01 Fev 2026
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
