"use client";

import { useState } from "react";
import { X, PauseCircle, Loader2, CheckCircle, Calendar, AlertCircle } from "lucide-react";

interface PauseSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PauseSubscriptionModal({ isOpen, onClose }: PauseSubscriptionModalProps) {
    const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const durations = [
        { months: 1, label: "1 mês", description: "Pausa rápida para reagrupar" },
        { months: 2, label: "2 meses", description: "Tempo para novos projetos" },
        { months: 3, label: "3 meses", description: "Pausa prolongada" },
    ];

    const handlePause = async () => {
        if (!selectedDuration) {
            setError("Selecione um período de pausa.");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsLoading(false);
            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setSelectedDuration(null);
                onClose();
            }, 2000);
        } catch {
            setIsLoading(false);
            setError("Erro ao pausar a assinatura. Tente novamente.");
        }
    };

    const handleClose = () => {
        if (!isLoading) {
            setSelectedDuration(null);
            setIsSuccess(false);
            setError(null);
            onClose();
        }
    };

    const getResumeDate = (months: number): string => {
        const date = new Date();
        date.setMonth(date.getMonth() + months);
        return date.toLocaleDateString("pt-BR", {
            month: "long",
            year: "numeric",
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
                            <PauseCircle className="size-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Pausar Assinatura
                            </h3>
                            <p className="text-xs text-slate-500">
                                Mantenha seus dados seguros
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        disabled={isLoading}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
                    >
                        <X className="size-5 text-slate-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {isSuccess ? (
                        <div className="py-8 flex flex-col items-center justify-center text-center">
                            <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <CheckCircle className="size-8 text-green-600" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                Assinatura pausada!
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Sua assinatura será retomada automaticamente em {getResumeDate(selectedDuration || 1)}.
                            </p>
                        </div>
                    ) : isLoading ? (
                        <div className="py-12 flex flex-col items-center justify-center text-center">
                            <Loader2 className="size-12 text-primary animate-spin mb-4" />
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                                Processando...
                            </h4>
                            <p className="text-sm text-slate-500">
                                Isso pode levar alguns segundos
                            </p>
                        </div>
                    ) : (
                        <>
                            {error && (
                                <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-xl border border-red-100 dark:border-red-500/20 mb-4">
                                    <AlertCircle className="size-4 flex-shrink-0" />
                                    <span className="text-xs font-medium">{error}</span>
                                </div>
                            )}
                            <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800 mb-6">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">
                                            O que acontece durante a pausa?
                                        </h4>
                                        <ul className="text-sm text-amber-700 dark:text-amber-400 space-y-1">
                                            <li>• Você não será cobrado durante o período</li>
                                            <li>• Seus dados e configurações ficam intactos</li>
                                            <li>• Execuções são pausadas (não perdidas)</li>
                                            <li>• Retomada automática na data escolhida</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Por quanto tempo deseja pausar?
                                </label>
                                {durations.map((duration) => (
                                    <button
                                        key={duration.months}
                                        onClick={() => setSelectedDuration(duration.months)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                                            selectedDuration === duration.months
                                                ? "border-primary bg-primary/5"
                                                : "border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5"
                                        }`}
                                    >
                                        <div
                                            className={`size-10 rounded-lg flex items-center justify-center ${
                                                selectedDuration === duration.months
                                                    ? "bg-primary text-white"
                                                    : "bg-slate-100 dark:bg-white/10 text-slate-600"
                                            }`}
                                        >
                                            <Calendar className="size-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={`font-semibold ${
                                                        selectedDuration === duration.months
                                                            ? "text-primary"
                                                            : "text-slate-900 dark:text-white"
                                                    }`}
                                                >
                                                    {duration.label}
                                                </span>
                                                {selectedDuration === duration.months && (
                                                    <span className="text-xs text-slate-500">
                                                        (Retoma em {getResumeDate(duration.months)})
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-slate-500">
                                                {duration.description}
                                            </p>
                                        </div>
                                        <div
                                            className={`size-5 rounded-full border-2 flex items-center justify-center ${
                                                selectedDuration === duration.months
                                                    ? "border-primary bg-primary"
                                                    : "border-slate-300 dark:border-slate-600"
                                            }`}
                                        >
                                            {selectedDuration === duration.months && (
                                                <div className="size-2 rounded-full bg-white" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                {!isSuccess && !isLoading && (
                    <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
                        <button
                            onClick={handleClose}
                            className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handlePause}
                            className="px-6 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-colors"
                        >
                            Pausar Assinatura
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
