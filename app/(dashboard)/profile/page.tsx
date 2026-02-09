"use client";

import { useState } from "react";
import { UserProfileCard } from "@/components/dashboard/UserProfileCard";
import { SubscriptionCard } from "@/components/dashboard/profile/SubscriptionCard";
import { UsageOverview } from "@/components/dashboard/profile/UsageOverview";
import {
    Mail,
    Building2,
    Smartphone,
    CheckCircle,
    BadgeCheck,
    RefreshCw,
} from "lucide-react";

import { useUser } from "@/context/UserContext";

export default function ProfilePage() {
    const { user } = useUser();

    const initialData = {
        nome: user.name,
        email: user.email,
        empresa: user.company,
        cargo: user.role,
        telefone: user.phone,
    };

    const [formData, setFormData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.nome.trim()) {
            newErrors.nome = "Nome é obrigatório";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.empresa.trim()) {
            newErrors.empresa = "Empresa é obrigatória";
        }
        if (!formData.telefone.trim()) {
            newErrors.telefone = "Telefone é obrigatório";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        setShowSuccess(false);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    const handleCancel = () => {
        setFormData(initialData);
        setErrors({});
        setShowSuccess(false);
    };

    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <UserProfileCard />

            {/* Personal Data Section */}
            <div className="flex flex-col gap-1 mt-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Dados Pessoais
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Gerencie suas informações pessoais e detalhes da conta.
                </p>
            </div>

            <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 overflow-hidden transition-colors">
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Nome Completo
                        </label>
                        <input
                            className={`w-full h-12 px-4 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none ${errors.nome ? "border-red-500" : "border-slate-200 dark:border-slate-700"
                                }`}
                            type="text"
                            value={formData.nome}
                            onChange={(e) => handleChange("nome", e.target.value)}
                        />
                        {errors.nome && (
                            <p className="text-xs text-red-500 mt-1">{errors.nome}</p>
                        )}
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className={`w-full h-12 pl-10 pr-10 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none ${errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-700"
                                    }`}
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                            <CheckCircle
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 size-5"
                            />
                        </div>
                        {errors.email ? (
                            <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                        ) : (
                            <p className="text-xs text-green-600 dark:text-green-500 mt-1.5 font-medium flex items-center gap-1">
                                <BadgeCheck className="size-3.5" />
                                Email verificado
                            </p>
                        )}
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Empresa
                        </label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className={`w-full h-12 pl-10 pr-4 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none ${errors.empresa ? "border-red-500" : "border-slate-200 dark:border-slate-700"
                                    }`}
                                type="text"
                                value={formData.empresa}
                                onChange={(e) => handleChange("empresa", e.target.value)}
                            />
                        </div>
                        {errors.empresa && (
                            <p className="text-xs text-red-500 mt-1">{errors.empresa}</p>
                        )}
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Cargo
                        </label>
                        <input
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none"
                            type="text"
                            value={formData.cargo}
                            onChange={(e) => handleChange("cargo", e.target.value)}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Telefone
                        </label>
                        <div className="relative">
                            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className={`w-full h-12 pl-10 pr-4 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none ${errors.telefone ? "border-red-500" : "border-slate-200 dark:border-slate-700"
                                    }`}
                                type="tel"
                                value={formData.telefone}
                                onChange={(e) => handleChange("telefone", e.target.value)}
                            />
                        </div>
                        {errors.telefone && (
                            <p className="text-xs text-red-500 mt-1">{errors.telefone}</p>
                        )}
                    </div>
                </div>
                <div className="px-6 md:px-8 py-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5 flex items-center justify-end gap-3">
                    {showSuccess && (
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-500 text-sm font-semibold mr-2 animate-pulse">
                            <CheckCircle className="size-4" />
                            Perfil atualizado!
                        </div>
                    )}
                    <button
                        onClick={handleCancel}
                        disabled={isLoading}
                        className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="px-8 py-3 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white text-sm font-semibold shadow-glow flex items-center gap-2 transition-all active:scale-95 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <RefreshCw className="size-5 animate-spin" />
                                Salvando...
                            </>
                        ) : (
                            "Salvar Alterações"
                        )}
                    </button>
                </div>
            </div>

            <SubscriptionCard />
            <UsageOverview />

            <footer className="max-w-4xl mx-auto mt-6 mb-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    &copy; 2026 BugKillers AI. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
