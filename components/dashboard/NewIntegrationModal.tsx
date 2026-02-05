"use client";

import { useState } from "react";
import { X, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { Kanban, CircuitBoard, MessageSquare, Rocket, Github, Gitlab, FileText, Bell, Database, Cloud, Code, Bug, Zap, Layout, Box } from "lucide-react";

interface NewIntegrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Integration {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    color: string;
    category: string;
    authType: "oauth" | "apikey";
}

const integrations: Integration[] = [
    { id: "github", name: "GitHub", description: "Sincronize repositórios e issues", icon: Github, color: "#181717", category: "Versionamento", authType: "oauth" },
    { id: "gitlab", name: "GitLab", description: "Integração com CI/CD", icon: Gitlab, color: "#FC6D26", category: "Versionamento", authType: "oauth" },
    { id: "notion", name: "Notion", description: "Documentação e wikis", icon: FileText, color: "#000000", category: "Produtividade", authType: "oauth" },
    { id: "discord", name: "Discord", description: "Notificações em canais", icon: MessageSquare, color: "#5865F2", category: "Comunicação", authType: "apikey" },
    { id: "webhook", name: "Webhook", description: "Integração customizada", icon: Zap, color: "#FF6D00", category: "Desenvolvimento", authType: "apikey" },
    { id: "datadog", name: "Datadog", description: "Monitoramento e métricas", icon: Bug, color: "#632CA6", category: "Monitoramento", authType: "apikey" },
    { id: "aws", name: "AWS", description: "Cloud e infraestrutura", icon: Cloud, color: "#FF9900", category: "Cloud", authType: "apikey" },
    { id: "figma", name: "Figma", description: "Design e prototipação", icon: Layout, color: "#F24E1E", category: "Design", authType: "oauth" },
    { id: "docker", name: "Docker", description: "Containers e deploy", icon: Box, color: "#2496ED", category: "DevOps", authType: "apikey" },
    { id: "vscode", name: "VS Code", description: "Extensão para IDE", icon: Code, color: "#007ACC", category: "Desenvolvimento", authType: "apikey" },
];

const categories = ["Todos", "Versionamento", "Comunicação", "Produtividade", "Monitoramento", "Cloud", "Design", "DevOps", "Desenvolvimento"];

export function NewIntegrationModal({ isOpen, onClose }: NewIntegrationModalProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);
    const [apiKey, setApiKey] = useState("");

    const filteredIntegrations = integrations.filter((integration) => {
        const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            integration.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "Todos" || integration.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleConnect = () => {
        if (!selectedIntegration) return;
        
        setIsConnecting(true);
        
        // Simulate connection
        setTimeout(() => {
            setIsConnecting(false);
            setSelectedIntegration(null);
            setApiKey("");
            onClose();
        }, 2000);
    };

    const handleClose = () => {
        setSearchQuery("");
        setSelectedCategory("Todos");
        setSelectedIntegration(null);
        setApiKey("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[85vh] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col">
                {!selectedIntegration ? (
                    <>
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Adicionar Nova Integração
                                </h3>
                                <p className="text-sm text-slate-500 mt-1">
                                    Conecte-se com suas ferramentas favoritas
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            >
                                <X className="size-5 text-slate-500" />
                            </button>
                        </div>

                        {/* Search and Filter */}
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 space-y-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Buscar integrações..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                                            selectedCategory === category
                                                ? "bg-primary text-white"
                                                : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/20"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Integrations Grid */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredIntegrations.map((integration) => (
                                    <button
                                        key={integration.id}
                                        onClick={() => setSelectedIntegration(integration)}
                                        className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left"
                                    >
                                        <div
                                            className="size-12 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: integration.color }}
                                        >
                                            <integration.icon className="size-6 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                                {integration.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                {integration.description}
                                            </p>
                                            <span className="inline-block mt-2 text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                                                {integration.category}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Integration Detail */}
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                            <button
                                onClick={() => setSelectedIntegration(null)}
                                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                            >
                                ← Voltar
                            </button>
                            <button
                                onClick={handleClose}
                                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            >
                                <X className="size-5 text-slate-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="text-center mb-8">
                                <div
                                    className="size-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                                    style={{ backgroundColor: selectedIntegration.color }}
                                >
                                    <selectedIntegration.icon className="size-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    {selectedIntegration.name}
                                </h3>
                                <p className="text-slate-500">
                                    {selectedIntegration.description}
                                </p>
                            </div>

                            {selectedIntegration.authType === "oauth" ? (
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
                                        Você será redirecionado para a página de autorização do{" "}
                                        {selectedIntegration.name} para conceder permissões.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            API Key
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Digite sua chave de API"
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        />
                                        <p className="text-xs text-slate-500 mt-1.5">
                                            Sua API key é criptografada e armazenada de forma segura.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
                            <button
                                onClick={() => setSelectedIntegration(null)}
                                className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConnect}
                                disabled={isConnecting || (selectedIntegration.authType === "apikey" && !apiKey)}
                                className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white text-sm font-semibold transition-colors flex items-center gap-2"
                            >
                                {isConnecting ? (
                                    <>
                                        <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Conectando...
                                    </>
                                ) : (
                                    <>
                                        Conectar
                                        <ArrowRight className="size-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
