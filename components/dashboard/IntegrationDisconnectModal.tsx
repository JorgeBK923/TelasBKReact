"use client";

import { useState } from "react";
import { X, AlertTriangle, Loader2, CheckCircle2 } from "lucide-react";
import { Kanban, CircuitBoard, MessageSquare } from "lucide-react";

interface IntegrationDisconnectModalProps {
    isOpen: boolean;
    onClose: () => void;
    integration: "jira" | "azure" | null;
    onDisconnect?: () => void;
}

const integrationData = {
    jira: {
        name: "Jira Cloud",
        icon: Kanban,
        color: "#0052CC",
        projectCount: 8,
        scenarioCount: 247,
        organization: "Tech Startup XYZ",
    },
    azure: {
        name: "Azure DevOps",
        icon: CircuitBoard,
        color: "#0078D7",
        projectCount: 4,
        scenarioCount: 100,
        organization: "mycompany",
    },
};

export function IntegrationDisconnectModal({
    isOpen,
    onClose,
    integration,
    onDisconnect,
}: IntegrationDisconnectModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [confirmText, setConfirmText] = useState("");

    const data = integration ? integrationData[integration] : null;
    const canDisconnect = confirmText.toLowerCase() === "desconectar";

    const handleDisconnect = async () => {
        if (!canDisconnect) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
            setConfirmText("");
            onDisconnect?.();
            onClose();
        }, 1500);
    };

    const handleClose = () => {
        if (!isLoading) {
            setConfirmText("");
            setIsSuccess(false);
            onClose();
        }
    };

    if (!isOpen || !data) return null;

    const Icon = data.icon;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Desconectar {data.name}
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
                                Desconectado com sucesso
                            </h4>
                            <p className="text-sm text-slate-500">
                                A integração com {data.name} foi removida.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="size-14 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: data.color }}
                                >
                                    <Icon className="size-7 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">
                                        {data.name}
                                    </h4>
                                    <p className="text-sm text-slate-500">{data.organization}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800 mb-6">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="size-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">
                                            Atenção: Esta ação não pode ser desfeita
                                        </h4>
                                        <p className="text-sm text-red-700 dark:text-red-400">
                                            Ao desconectar, você interromperá a sincronização de{" "}
                                            <strong>{data.projectCount} projetos</strong> e{" "}
                                            <strong>{data.scenarioCount} cenários</strong> vinculados.
                                            Os dados históricos serão mantidos, mas não haverá mais
                                            sincronização automática.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Para confirmar, digite <strong>DESCONECTAR</strong> abaixo:
                                    </label>
                                    <input
                                        type="text"
                                        value={confirmText}
                                        onChange={(e) => setConfirmText(e.target.value)}
                                        placeholder="DIGITE DESCONectar"
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase"
                                    />
                                </div>

                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                    <p className="mb-2">O que acontecerá:</p>
                                    <ul className="space-y-1 ml-4">
                                        <li>• Webhooks serão removidos</li>
                                        <li>• Tokens de acesso serão revogados</li>
                                        <li>• Sincronização automática será interrompida</li>
                                        <li>• Dados históricos permaneceram salvos</li>
                                    </ul>
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
                            onClick={handleDisconnect}
                            disabled={isLoading || !canDisconnect}
                            className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white text-sm font-semibold transition-colors flex items-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Desconectando...
                                </>
                            ) : (
                                "Desconectar"
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
