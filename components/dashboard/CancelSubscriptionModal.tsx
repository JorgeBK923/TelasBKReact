"use client";

import { useState } from "react";
import { X, AlertTriangle, Loader2, CheckCircle, XCircle, Heart } from "lucide-react";

interface CancelSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CancelSubscriptionModal({ isOpen, onClose }: CancelSubscriptionModalProps) {
    const [step, setStep] = useState<"confirm" | "reason" | "processing" | "success">("confirm");
    const [selectedReason, setSelectedReason] = useState("");
    const [otherReason, setOtherReason] = useState("");

    const reasons = [
        { id: "expensive", label: "Está muito caro" },
        { id: "not-using", label: "Não estou usando o suficiente" },
        { id: "missing-features", label: "Faltam recursos que preciso" },
        { id: "switching", label: "Mudando para outra solução" },
        { id: "temporary", label: "Pausa temporária (volto depois)" },
        { id: "other", label: "Outro motivo" },
    ];

    const [error, setError] = useState<string | null>(null);

    const handleContinue = async () => {
        if (step === "confirm") {
            setStep("reason");
        } else if (step === "reason") {
            if (!selectedReason) {
                setError("Selecione um motivo para continuar.");
                return;
            }

            setStep("processing");
            setError(null);

            try {
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setStep("success");
            } catch {
                setStep("reason");
                setError("Erro ao processar o cancelamento. Tente novamente.");
            }
        }
    };

    const handleClose = () => {
        setStep("confirm");
        setSelectedReason("");
        setOtherReason("");
        onClose();
    };

    const whatYouWillLose = [
        "Cenários ilimitados de teste",
        "Suporte prioritário 24/7",
        "API dedicada com webhooks",
        "SSO e autenticação avançada",
        "Histórico de 1 ano de dados",
        "Fila prioritária de execução",
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {step === "success" ? "Confirmação" : "Cancelar Assinatura"}
                    </h3>
                    <button
                        onClick={handleClose}
                        disabled={step === "processing"}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
                    >
                        <X className="size-5 text-slate-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {step === "confirm" && (
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800">
                                <AlertTriangle className="size-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">
                                        Você perderá o acesso imediato
                                    </h4>
                                    <p className="text-sm text-red-700 dark:text-red-400">
                                        Ao cancelar, sua assinatura será encerrada ao final do ciclo atual
                                        (01 Fev 2026). Após essa data, você perderá:
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                                    O que você vai perder:
                                </h4>
                                <ul className="space-y-2">
                                    {whatYouWillLose.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                        >
                                            <XCircle className="size-4 text-red-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl">
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <Heart className="size-4 text-primary" />
                                    Que tal uma alternativa?
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    Em vez de cancelar, você pode pausar sua assinatura por 1, 2 ou 3 meses.
                                    Mantenha todos os dados e configurações intactos.
                                </p>
                                <button
                                    onClick={() => {
                                        handleClose();
                                        // Trigger pause modal would go here
                                    }}
                                    className="text-sm font-semibold text-primary hover:underline"
                                >
                                    Pausar assinatura em vez disso →
                                </button>
                            </div>
                        </div>
                    )}

                    {step === "reason" && (
                        <div className="space-y-4">
                            {error && (
                                <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-xl border border-red-100 dark:border-red-500/20">
                                    <AlertTriangle className="size-4 flex-shrink-0" />
                                    <span className="text-xs font-medium">{error}</span>
                                </div>
                            )}
                            <p className="text-slate-600 dark:text-slate-400">
                                Nos ajude a melhorar. Qual o principal motivo do cancelamento?
                            </p>

                            <div className="space-y-2">
                                {reasons.map((reason) => (
                                    <label
                                        key={reason.id}
                                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                            selectedReason === reason.id
                                                ? "border-primary bg-primary/5"
                                                : "border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="cancelReason"
                                            value={reason.id}
                                            checked={selectedReason === reason.id}
                                            onChange={(e) => setSelectedReason(e.target.value)}
                                            className="size-4 text-primary focus:ring-primary"
                                        />
                                        <span className="text-sm text-slate-700 dark:text-slate-300">
                                            {reason.label}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {selectedReason === "other" && (
                                <textarea
                                    value={otherReason}
                                    onChange={(e) => setOtherReason(e.target.value)}
                                    placeholder="Conte-nos mais..."
                                    rows={3}
                                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                />
                            )}
                        </div>
                    )}

                    {step === "processing" && (
                        <div className="py-12 flex flex-col items-center justify-center text-center">
                            <Loader2 className="size-12 text-primary animate-spin mb-4" />
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                                Processando cancelamento...
                            </h4>
                            <p className="text-sm text-slate-500">
                                Isso pode levar alguns segundos
                            </p>
                        </div>
                    )}

                    {step === "success" && (
                        <div className="py-8 flex flex-col items-center justify-center text-center">
                            <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <CheckCircle className="size-8 text-green-600" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                Assinatura cancelada
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                Sua assinatura foi marcada para cancelamento ao final do ciclo atual.
                            </p>
                            <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-lg text-sm">
                                <span className="text-slate-500">Acesso garantido até:</span>{" "}
                                <span className="font-semibold text-slate-900 dark:text-white">
                                    01 de Fevereiro de 2026
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {step !== "processing" && step !== "success" && (
                    <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Manter assinatura
                        </button>
                        <button
                            onClick={handleContinue}
                            className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors"
                        >
                            {step === "confirm" ? "Continuar" : "Confirmar Cancelamento"}
                        </button>
                    </div>
                )}

                {step === "success" && (
                    <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex justify-center">
                        <button
                            onClick={handleClose}
                            className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-colors"
                        >
                            Entendido
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
