"use client";

import { useState } from "react";
import { Mail, Building2, ChevronDown, Send, Loader2, CheckCircle } from "lucide-react";

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
}

const subjectOptions = [
    "Quero conhecer a plataforma",
    "Suporte técnico",
    "Falar sobre preços",
    "Parcerias",
];

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        company: "",
        subject: subjectOptions[0],
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

    const handleSubmit = async () => {
        if (!isFormValid) return;
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: "", email: "", company: "", subject: subjectOptions[0], message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg border border-slate-200 dark:border-white/5 p-6 sm:p-10">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Envie uma mensagem</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">Nome</span>
                        <input
                            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                            placeholder="Seu nome completo"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">Email Corporativo</span>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                placeholder="voce@empresa.com"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">Empresa</span>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                placeholder="Nome da sua empresa"
                                type="text"
                                value={formData.company}
                                onChange={(e) => handleChange("company", e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">Assunto</span>
                        <div className="relative">
                            <select
                                className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-600 dark:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                value={formData.subject}
                                onChange={(e) => handleChange("subject", e.target.value)}
                            >
                                {subjectOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-5" />
                        </div>
                    </label>
                </div>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">Mensagem</span>
                    <textarea
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow resize-none"
                        placeholder="Como podemos te ajudar hoje?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                    />
                </label>
                <div className="pt-2">
                    <button
                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 transition-colors shadow-lg shadow-blue-500/20 ${isSubmitting ? "opacity-90 cursor-wait" : !isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
                        type="button"
                        disabled={isSubmitting || !isFormValid}
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="size-5 animate-spin" />
                                Enviando...
                            </>
                        ) : showSuccess ? (
                            <>
                                <CheckCircle className="size-5" />
                                Enviado!
                            </>
                        ) : (
                            <>
                                <span>Enviar Mensagem</span>
                                <Send className="size-5" />
                            </>
                        )}
                    </button>
                    <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
                        Normalmente respondemos em até 2 horas úteis.
                    </p>
                </div>
            </form>
        </div>
    );
}
