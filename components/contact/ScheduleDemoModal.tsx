"use client";

import { X, Calendar, Mail, Building2, User, Clock, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface ScheduleDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const timeSlots = [
    "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30",
];

const teamSizes = [
    "1-5 pessoas",
    "6-15 pessoas",
    "16-50 pessoas",
    "50+ pessoas",
];

export function ScheduleDemoModal({ isOpen, onClose }: ScheduleDemoModalProps) {
    const [step, setStep] = useState<"form" | "success">("form");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        teamSize: teamSizes[0],
    });

    useEffect(() => {
        if (isOpen) {
            setStep("form");
            setIsSubmitting(false);
            setSelectedTime(null);
            setFormData({ name: "", email: "", company: "", teamSize: teamSizes[0] });
        }
    }, [isOpen]);

    // Block body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !selectedTime) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setStep("success");
        }, 1800);
    };

    const isFormValid = formData.name && formData.email && selectedTime;

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="bg-white dark:bg-card-dark w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                            <Calendar className="size-4" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Agendar Demo
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
                <div className="p-6 overflow-y-auto flex-1">
                    {step === "form" && (
                        <div className="space-y-5 animate-in slide-in-from-bottom-4 duration-300">
                            {/* Description */}
                            <div className="bg-blue-50 dark:bg-blue-500/10 rounded-xl p-4 border border-blue-100 dark:border-blue-500/20">
                                <div className="flex items-start gap-3">
                                    <Clock className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                            Demonstração ao vivo de 15 minutos
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                            Um especialista vai te mostrar como o BugKillers se adapta ao workflow da sua equipe.
                                        </p>
                                    </div>
                                </div>
                            </div>

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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Empresa</span>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
                                        <input
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                            placeholder="Nome da empresa"
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => handleChange("company", e.target.value)}
                                        />
                                    </div>
                                </label>
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Tamanho do time</span>
                                    <div className="relative">
                                        <select
                                            className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                            value={formData.teamSize}
                                            onChange={(e) => handleChange("teamSize", e.target.value)}
                                        >
                                            {teamSizes.map((size) => (
                                                <option key={size} value={size}>{size}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-4" />
                                    </div>
                                </label>
                            </div>

                            {/* Time Slots */}
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Horário preferido</span>
                                <div className="grid grid-cols-4 gap-2">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${selectedTime === time
                                                    ? "bg-primary text-white border-primary shadow-glow scale-[1.02]"
                                                    : "bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-primary/50 hover:text-primary"
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

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
                                        Agendando...
                                    </>
                                ) : (
                                    <>
                                        <Calendar className="size-4" />
                                        Confirmar Agendamento
                                    </>
                                )}
                            </button>

                            <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
                                Horários no fuso BRT (Brasília). Nosso time entrará em contato para confirmar.
                            </p>
                        </div>
                    )}

                    {step === "success" && (
                        <div className="space-y-6 animate-in zoom-in-95 duration-300 py-4">
                            <div className="bg-green-50 dark:bg-green-500/10 rounded-xl p-6 border border-green-100 dark:border-green-500/20 text-center">
                                <CheckCircle2 className="size-12 text-green-500 mx-auto mb-3" />
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                    Demo Agendada!
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                    Enviamos um e-mail de confirmação para <span className="font-bold text-slate-700 dark:text-white">{formData.email || "seu email"}</span>.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 border border-slate-100 dark:border-white/5 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                                        <Clock className="size-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Horário</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{selectedTime} (BRT)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                                        <Calendar className="size-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Duração</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">15 minutos</p>
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
