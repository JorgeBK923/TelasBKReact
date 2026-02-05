"use client";

import { X, Lock, Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ChangePasswordModal({ isOpen, onClose }: ChangePasswordModalProps) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswords, setShowPasswords] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // Password strength indicators
    const hasMinLen = newPassword.length >= 8;
    const hasUpper = /[A-Z]/.test(newPassword);
    const hasLower = /[a-z]/.test(newPassword);
    const hasNumber = /[0-9]/.test(newPassword);
    const hasSymbol = /[^A-Za-z0-9]/.test(newPassword);

    const isStrongSelection = hasMinLen && hasUpper && hasLower && hasNumber && hasSymbol;

    useEffect(() => {
        if (isOpen) {
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setError(null);
            setSuccess(false);
        }
    }, [isOpen]);

    const handleConfirm = async () => {
        if (newPassword !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }
        if (!isStrongSelection) {
            setError("A senha não cumpre todos os requisitos de segurança.");
            return;
        }

        setIsSaving(true);
        setError(null);

        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setSuccess(true);
            setTimeout(() => {
                onClose();
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
                        <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-primary">
                            <Lock className="size-4" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Alterar Senha
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
                <div className="p-6 space-y-4">
                    {success ? (
                        <div className="py-8 text-center animate-in zoom-in-95">
                            <div className="size-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-4">
                                <CheckCircle2 className="size-8" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                Senha atualizada!
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Sua nova senha foi salva com sucesso.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                        Senha Atual
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPasswords ? "text" : "password"}
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            className="w-full h-11 px-4 pr-10 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="Digite sua senha atual"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPasswords(!showPasswords)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                        >
                                            {showPasswords ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                        </button>
                                    </div>
                                </div>

                                <hr className="border-slate-100 dark:border-white/5 my-2" />

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                        Nova Senha
                                    </label>
                                    <input
                                        type={showPasswords ? "text" : "password"}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="w-full h-11 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="Mínimo 8 caracteres"
                                    />

                                    {/* Strength Indicators */}
                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                        <p className={`flex items-center gap-1.5 text-[10px] ${hasMinLen ? 'text-green-500' : 'text-slate-400'}`}>
                                            <CheckCircle2 className="size-3" /> 8+ caracteres
                                        </p>
                                        <p className={`flex items-center gap-1.5 text-[10px] ${hasUpper && hasLower ? 'text-green-500' : 'text-slate-400'}`}>
                                            <CheckCircle2 className="size-3" /> A-z (Caps/Min)
                                        </p>
                                        <p className={`flex items-center gap-1.5 text-[10px] ${hasNumber ? 'text-green-500' : 'text-slate-400'}`}>
                                            <CheckCircle2 className="size-3" /> Números (0-9)
                                        </p>
                                        <p className={`flex items-center gap-1.5 text-[10px] ${hasSymbol ? 'text-green-500' : 'text-slate-400'}`}>
                                            <CheckCircle2 className="size-3" /> Símbolos (!@#)
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                        Confirmar Nova Senha
                                    </label>
                                    <input
                                        type={showPasswords ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full h-11 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="Repita a nova senha"
                                    />
                                </div>

                                {error && (
                                    <div className="bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-xl p-3 flex items-center gap-2">
                                        <AlertTriangle className="size-4 text-red-500 flex-shrink-0" />
                                        <p className="text-xs text-red-600 dark:text-red-400 font-medium">{error}</p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleConfirm}
                                disabled={isSaving || !currentPassword || !newPassword || !confirmPassword}
                                className={`w-full h-11 mt-4 rounded-xl bg-primary text-white text-sm font-bold shadow-glow transition-all flex items-center justify-center gap-2 ${isSaving || !currentPassword || !newPassword || !confirmPassword
                                        ? "opacity-70 cursor-not-allowed"
                                        : "hover:bg-primary/90 active:scale-95"
                                    }`}
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Atualizando...
                                    </>
                                ) : (
                                    "Confirmar Alteração"
                                )}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const AlertTriangle = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" />
    </svg>
);
