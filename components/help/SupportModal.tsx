"use client";

import { X, Mail, User, MessageSquare, Loader2, CheckCircle2, ChevronDown, Headphones } from "lucide-react";
import { useState, useEffect } from "react";

interface SupportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const subjects = [
    "Suporte técnico",
    "Dúvida sobre a plataforma",
    "Problemas de faturamento",
    "Feedback ou sugestão",
];

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
    const [step, setStep] = useState<"form" | "success">("form");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: subjects[0],
        message: "",
    });

    useEffect(() => {
        if (isOpen) {
            setStep("form");
            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: subjects[0], message: "" });
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setStep("success");
        }, 1500);
    };

    const isFormValid = formData.name && formData.email && formData.message;

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            role="dialog"
            aria-modal="true"
            aria-label="Falar com Suporte"
        >
            <div className="bg-white dark:bg-card-dark w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                            <Headphones className="size-4" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Falar com Suporte
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 dark:text-slate-500 transition-colors"
                        aria-label="Fechar modal"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto flex-1">
                    {step === "form" && (
                        <div className="space-y-5 animate-in slide-in-from-bottom-4 duration-300">
                            {/* Form Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Nome</span>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
                                        <input
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                            placeholder="Seu nome"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                        />
                                    </div>
                                </label>
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email</span>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
                                        <input
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                            placeholder="voce@empresa.com"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                        />
                                    </div>
                                </label>
                            </div>

                            {/* Subject */}
                            <label className="flex flex-col gap-1.5">
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Assunto</span>
                                <div className="relative">
                                    <select
                                        className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                        value={formData.subject}
                                        onChange={(e) => handleChange("subject", e.target.value)}
                                    >
                                        {subjects.map((subject) => (
                                            <option key={subject} value={subject}>{subject}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-4" />
                                </div>
                            </label>

                            {/* Message */}
                            <label className="flex flex-col gap-1.5">
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Mensagem</span>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 text-slate-400 size-4" />
                                    <textarea
                                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow resize-none"
                                        placeholder="Descreva como podemos ajudar..."
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                    />
                                </div>
                            </label>

                            {/* Submit Button */}
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={!isFormValid || isSubmitting}
                                className={`w-full h-12 rounded-xl bg-primary text-white text-sm font-bold shadow-glow transition-all flex items-center justify-center gap-2 ${!isFormValid || isSubmitting
                                        ? "opacity-60 cursor-not-allowed"
                                        : "hover:bg-primary/90 active:scale-[0.98]"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <MessageSquare className="size-4" />
                                        Enviar Mensagem
                                    </>
                                )}
                            </button>

                            <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
                                Respondemos em até 2 horas úteis. Você também pode nos contatar por contato@bugkillers.com.
                            </p>
                        </div>
                    )}

                    {step === "success" && (
                        <div className="space-y-6 animate-in zoom-in-95 duration-300 py-4">
                            <div className="bg-green-50 dark:bg-green-500/10 rounded-xl p-6 border border-green-100 dark:border-green-500/20 text-center">
                                <CheckCircle2 className="size-12 text-green-500 mx-auto mb-3" />
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                    Mensagem Enviada!
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                    Enviamos uma confirmação para <span className="font-bold text-slate-700 dark:text-white">{formData.email || "seu email"}</span>.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 border border-slate-100 dark:border-white/5 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                                        <Mail className="size-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contato</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">contato@bugkillers.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                                        <Headphones className="size-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tempo de resposta</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Até 2 horas úteis</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full h-11 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:opacity-90 transition-all"
                            >
                                Fechar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
