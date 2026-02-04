"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

interface DeleteAccountModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function DeleteAccountModal({
    isOpen,
    onClose,
    onConfirm,
}: DeleteAccountModalProps) {
    const [confirmText, setConfirmText] = useState("");
    const isConfirmEnabled = confirmText === "EXCLUIR";

    // Reset input when modal closes
    useEffect(() => {
        if (!isOpen) {
            setConfirmText("");
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md mx-4 bg-white dark:bg-card-dark rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-900/30 p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                <AlertTriangle className="size-6 text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-red-700 dark:text-red-400">
                                    Excluir Conta Permanentemente
                                </h3>
                                <p className="text-sm text-red-600/80 dark:text-red-400/70">
                                    Ação crítica e irreversível
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                        >
                            <X className="size-5" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        Tem certeza de que deseja excluir sua conta?{" "}
                        <strong className="text-slate-900 dark:text-white">
                            Esta ação é irreversível
                        </strong>{" "}
                        e todos os seus dados de QA, integrações e histórico serão
                        apagados.
                    </p>

                    {/* Confirmation Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Para confirmar, digite{" "}
                            <span className="font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded">
                                EXCLUIR
                            </span>{" "}
                            abaixo:
                        </label>
                        <input
                            type="text"
                            value={confirmText}
                            onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
                            placeholder="Digite EXCLUIR para confirmar"
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-slate-400 transition-all outline-none"
                            autoComplete="off"
                            spellCheck={false}
                        />
                        {confirmText.length > 0 && !isConfirmEnabled && (
                            <p className="text-xs text-red-500 mt-2">
                                Digite exatamente "EXCLUIR" para habilitar a confirmação.
                            </p>
                        )}
                    </div>

                    {/* Warning List */}
                    <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 mb-6 border border-slate-100 dark:border-white/5">
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                            O que será excluído:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="size-1.5 rounded-full bg-red-500" />
                                Todos os cenários de teste e execuções
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="size-1.5 rounded-full bg-red-500" />
                                Integrações configuradas (Jira, Azure, Slack)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="size-1.5 rounded-full bg-red-500" />
                                Histórico e relatórios de QA
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="size-1.5 rounded-full bg-red-500" />
                                Configurações e preferências da conta
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer with Buttons */}
                <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                        Manter minha conta
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={!isConfirmEnabled}
                        className={`flex-1 px-5 py-3 rounded-xl text-sm font-bold transition-all ${isConfirmEnabled
                                ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25 active:scale-[0.98]"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                            }`}
                    >
                        Sim, excluir permanentemente
                    </button>
                </div>
            </div>
        </div>
    );
}
