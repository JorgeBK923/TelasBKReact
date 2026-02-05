"use client";

import { X, AlertTriangle, LogOut, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface LogoutAllSessionsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (keepCurrent: boolean) => void;
}

export function LogoutAllSessionsModal({ isOpen, onClose, onConfirm }: LogoutAllSessionsModalProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [keepCurrent, setKeepCurrent] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleConfirm = () => {
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setSuccess(true);
            onConfirm(keepCurrent);
            setTimeout(() => {
                onClose();
                setSuccess(false);
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-card-dark w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600">
                            <LogOut className="size-4" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Encerrar Sessões
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 dark:text-slate-500 transition-colors"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {success ? (
                        <div className="py-6 text-center animate-in zoom-in-95">
                            <div className="size-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-4">
                                <CheckCircle2 className="size-8" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                Sessões Encerradas!
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Todos os outros dispositivos foram desconectados.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-500/5 p-4 rounded-xl border border-amber-100 dark:border-amber-500/20 mb-6">
                                <div className="mt-0.5">
                                    <AlertTriangle className="size-5 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-amber-900 dark:text-amber-400">
                                        Aviso de Segurança
                                    </p>
                                    <p className="text-xs text-amber-700/80 dark:text-amber-400/70 leading-relaxed">
                                        Você será desconectado de todos os outros navegadores e dispositivos. Esta ação é recomendada se você suspeitar de acesso não autorizado.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                                    <div className="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            checked={keepCurrent}
                                            onChange={(e) => setKeepCurrent(e.target.checked)}
                                            className="size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold text-slate-800 dark:text-white leading-tight">Manter esta sessão ativa</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Não me desconectar deste dispositivo atual.</p>
                                    </div>
                                </label>
                            </div>

                            <div className="flex gap-3 mt-8">
                                <button
                                    onClick={onClose}
                                    className="flex-1 h-11 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    disabled={isProcessing}
                                    className={`flex-2 px-6 h-11 rounded-xl bg-red-600 text-white text-sm font-bold shadow-glow-red hover:bg-red-700 transition-all flex items-center justify-center gap-2 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'
                                        }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin" />
                                            Encerrando...
                                        </>
                                    ) : (
                                        "Encerrar Todas"
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
