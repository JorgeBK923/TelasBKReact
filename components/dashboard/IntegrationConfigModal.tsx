"use client";

import { useState } from "react";
import { X, Check, RefreshCw, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Kanban, CircuitBoard, MessageSquare } from "lucide-react";

interface IntegrationConfigModalProps {
    isOpen: boolean;
    onClose: () => void;
    integration: "jira" | "azure" | "slack" | null;
}

interface Project {
    id: string;
    name: string;
    selected: boolean;
}

interface Channel {
    id: string;
    name: string;
    selected: boolean;
}

interface JiraAzureSettings {
    autoSync: boolean;
    notifyOnFail: boolean;
    syncInterval: string;
}

interface SlackSettings {
    notifyOnCritical: boolean;
    dailySummary: boolean;
    mentionOnFail: boolean;
}

interface JiraAzureData {
    name: string;
    icon: typeof Kanban;
    color: string;
    status: string;
    projects: Project[];
    settings: JiraAzureSettings;
}

interface SlackData {
    name: string;
    icon: typeof MessageSquare;
    color: string;
    status: string;
    channels: Channel[];
    settings: SlackSettings;
}

type IntegrationData = JiraAzureData | SlackData;

const integrationData: Record<string, IntegrationData> = {
    jira: {
        name: "Jira Cloud",
        icon: Kanban,
        color: "#0052CC",
        status: "connected",
        projects: [
            { id: "PROJ-1", name: "Website Redesign", selected: true },
            { id: "PROJ-2", name: "Mobile App", selected: true },
            { id: "PROJ-3", name: "API Development", selected: false },
            { id: "PROJ-4", name: "Internal Tools", selected: false },
        ],
        settings: {
            autoSync: true,
            notifyOnFail: true,
            syncInterval: "15min",
        },
    },
    azure: {
        name: "Azure DevOps",
        icon: CircuitBoard,
        color: "#0078D7",
        status: "connected",
        projects: [
            { id: "AZ-1", name: "Backend Services", selected: true },
            { id: "AZ-2", name: "Frontend App", selected: true },
            { id: "AZ-3", name: "DevOps Pipeline", selected: false },
        ],
        settings: {
            autoSync: true,
            notifyOnFail: true,
            syncInterval: "30min",
        },
    },
    slack: {
        name: "Slack",
        icon: MessageSquare,
        color: "#4A154B",
        status: "available",
        channels: [
            { id: "general", name: "#geral", selected: false },
            { id: "bugs", name: "#bugs", selected: false },
            { id: "dev", name: "#dev-team", selected: false },
        ],
        settings: {
            notifyOnCritical: true,
            dailySummary: false,
            mentionOnFail: true,
        },
    },
};

export function IntegrationConfigModal({ isOpen, onClose, integration }: IntegrationConfigModalProps) {
    const [isTesting, setIsTesting] = useState(false);
    const [testResult, setTestResult] = useState<"success" | "error" | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);

    const data = integration ? integrationData[integration] : null;

    const handleTest = async () => {
        setIsTesting(true);
        setTestResult(null);

        try {
            // Simulate test
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsTesting(false);
            setTestResult("success");
            setTimeout(() => setTestResult(null), 3000);
        } catch {
            setIsTesting(false);
            setTestResult("error");
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        setSaveError(null);

        try {
            // Simulate save
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsSaving(false);
            setShowSaveSuccess(true);

            setTimeout(() => {
                setShowSaveSuccess(false);
                onClose();
            }, 1500);
        } catch {
            setIsSaving(false);
            setSaveError("Erro ao salvar configurações. Tente novamente.");
        }
    };

    const handleClose = () => {
        setTestResult(null);
        setShowSaveSuccess(false);
        onClose();
    };

    if (!isOpen || !data) return null;

    const Icon = data.icon;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="size-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: data.color }}
                        >
                            <Icon className="size-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Configurar {data.name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-slate-500">Conectado</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                        <X className="size-5 text-slate-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Connection Test */}
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                                    Testar Conexão
                                </h4>
                                <p className="text-sm text-slate-500">
                                    Verifique se a integração está funcionando corretamente
                                </p>
                            </div>
                            <button
                                onClick={handleTest}
                                disabled={isTesting}
                                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-white dark:hover:bg-white/5 transition-colors flex items-center gap-2 disabled:opacity-50"
                            >
                                {isTesting ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Testando...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="size-4" />
                                        Testar
                                    </>
                                )}
                            </button>
                        </div>

                        {testResult === "success" && (
                            <div className="mt-3 flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-sm">
                                <CheckCircle2 className="size-4" />
                                Conexão estabelecida com sucesso!
                            </div>
                        )}

                        {testResult === "error" && (
                            <div className="mt-3 flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm">
                                <AlertCircle className="size-4" />
                                Falha na conexão. Verifique suas credenciais.
                            </div>
                        )}
                    </div>

                    {/* Projects/Channels Selection */}
                    {integration !== "slack" && "projects" in data ? (
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                                Projetos Sincronizados
                            </h4>
                            <div className="space-y-2">
                                {data.projects.map((project: Project) => (
                                    <label
                                        key={project.id}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            defaultChecked={project.selected}
                                            className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                {project.name}
                                            </span>
                                            <span className="text-xs text-slate-500 ml-2">
                                                {project.id}
                                            </span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ) : integration === "slack" && "channels" in data ? (
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                                Canal de Notificações
                            </h4>
                            <div className="space-y-2">
                                {data.channels.map((channel: Channel) => (
                                    <label
                                        key={channel.id}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors"
                                    >
                                        <input
                                            type="radio"
                                            name="channel"
                                            defaultChecked={channel.selected}
                                            className="size-4 text-primary focus:ring-primary"
                                        />
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                                            {channel.name}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ) : null}

                    {/* Settings */}
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                            Configurações Avançadas
                        </h4>
                        <div className="space-y-3">
                            {integration !== "slack" && "projects" in data ? (
                                <>
                                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultChecked={(data.settings as JiraAzureSettings).autoSync}
                                            className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                Sincronização automática
                                            </span>
                                            <p className="text-xs text-slate-500">
                                                Manter dados atualizados automaticamente
                                            </p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultChecked={(data.settings as JiraAzureSettings).notifyOnFail}
                                            className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                Notificar falhas
                                            </span>
                                            <p className="text-xs text-slate-500">
                                                Alertar quando houver erro de sincronização
                                            </p>
                                        </div>
                                    </label>
                                </>
                            ) : integration === "slack" && "channels" in data ? (
                                <>
                                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultChecked={(data.settings as SlackSettings).notifyOnCritical}
                                            className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                Alertas críticos
                                            </span>
                                            <p className="text-xs text-slate-500">
                                                Notificar apenas bugs críticos
                                            </p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultChecked={(data.settings as SlackSettings).mentionOnFail}
                                            className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                Mencionar em falhas
                                            </span>
                                            <p className="text-xs text-slate-500">
                                                @mencionar usuário responsável nos alertas
                                            </p>
                                        </div>
                                    </label>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                    {saveError && (
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-lg border border-red-100 dark:border-red-500/20">
                            <AlertCircle className="size-4 flex-shrink-0" />
                            <span className="text-xs font-medium">{saveError}</span>
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                        Última sincronização: há 5 minutos
                    </div>
                    <div className="flex items-center gap-3">
                        {showSaveSuccess && (
                            <div className="flex items-center gap-1 text-green-600 text-sm">
                                <Check className="size-4" />
                                Salvo!
                            </div>
                        )}
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white text-sm font-semibold transition-colors flex items-center gap-2"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Salvando...
                                </>
                            ) : (
                                "Salvar Configurações"
                            )}
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
