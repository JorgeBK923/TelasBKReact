"use client";

import { useState } from "react";
import { X, Bell, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useUser } from "@/context/UserContext";

interface IntegrationNotifyModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
    serviceIcon?: React.ElementType;
    serviceColor?: string;
}

export function IntegrationNotifyModal({
    isOpen,
    onClose,
    serviceName,
    serviceIcon: Icon,
    serviceColor = "#FF6C37",
}: IntegrationNotifyModalProps) {
    const { user } = useUser();
    const [email, setEmail] = useState(user.email);
    const [selectedUseCase, setSelectedUseCase] = useState("");
    const [customUseCase, setCustomUseCase] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const useCases = [
        { id: "automated-tests", label: "Automatizar testes de API" },
        { id: "ci-cd", label: "Integrar com CI/CD pipeline" },
        { id: "monitoring", label: "Monitoramento de endpoints" },
        { id: "docs", label: "Sincronizar documentação" },
        { id: "other", label: "Outro (especificar)" },
    ];

    const handleSubmit = async () => {
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
            setEmail(user.email);
            setSelectedUseCase("");
            setCustomUseCase("");
            onClose();
        }, 2000);
    };

    const handleClose = () => {
        if (!isLoading) {
            setEmail(user.email);
            setSelectedUseCase("");
            setCustomUseCase("");
            setIsSuccess(false);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Me avise sobre {serviceName}
                    </h3>
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
                        <div className="py-6 flex flex-col items-center justify-center text-center">
                            <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <CheckCircle2 className="size-8 text-green-600" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                Você será notificado!
                            </h4>
                            <p className="text-sm text-slate-500">
                                Enviaremos um email quando {serviceName} estiver disponível.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-4 mb-6">
                                {Icon && (
                                    <div
                                        className="size-14 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: serviceColor }}
                                    >
                                        <Icon className="size-7 text-white" />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Deixe seu email para ser notificado assim que a integração com{" "}
                                        <span className="font-semibold text-slate-900 dark:text-white">
                                            {serviceName}
                                        </span>{" "}
                                        estiver disponível.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        <Mail className="size-4 inline mr-1" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    />
                                </div>

                                {/* Use Case */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        <Bell className="size-4 inline mr-1" />
                                        O que você pretende fazer com esta integração? (opcional)
                                    </label>
                                    <div className="space-y-2">
                                        {useCases.map((useCase) => (
                                            <label
                                                key={useCase.id}
                                                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                                    selectedUseCase === useCase.id
                                                        ? "border-primary bg-primary/5"
                                                        : "border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5"
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="useCase"
                                                    value={useCase.id}
                                                    checked={selectedUseCase === useCase.id}
                                                    onChange={(e) => setSelectedUseCase(e.target.value)}
                                                    className="size-4 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                                    {useCase.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>

                                    {selectedUseCase === "other" && (
                                        <textarea
                                            value={customUseCase}
                                            onChange={(e) => setCustomUseCase(e.target.value)}
                                            placeholder="Conte-nos mais sobre seu caso de uso..."
                                            rows={3}
                                            className="w-full mt-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        />
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                {!isSuccess && (
                    <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
                        <button
                            onClick={handleClose}
                            disabled={isLoading}
                            className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading || !email}
                            className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white text-sm font-semibold transition-colors flex items-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                "Me Notifique"
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
