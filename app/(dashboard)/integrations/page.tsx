"use client";

import { useState } from "react";
import { UserProfileCard } from "@/components/dashboard/UserProfileCard";
import { NewIntegrationModal } from "@/components/dashboard/NewIntegrationModal";
import { IntegrationNotifyModal } from "@/components/dashboard/IntegrationNotifyModal";
import { IntegrationConfigModal } from "@/components/dashboard/IntegrationConfigModal";
import { IntegrationDisconnectModal } from "@/components/dashboard/IntegrationDisconnectModal";
import { Kanban, CircuitBoard, MessageSquare, Rocket, Plus, Lock } from "lucide-react";

export default function IntegrationsPage() {
    const [isNewIntegrationModalOpen, setIsNewIntegrationModalOpen] = useState(false);
    const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
    const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
    const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
    const [selectedIntegration, setSelectedIntegration] = useState<"jira" | "azure" | "slack" | null>(null);

    const handleConfigure = (integration: "jira" | "azure" | "slack") => {
        setSelectedIntegration(integration);
        setIsConfigModalOpen(true);
    };

    const handleDisconnect = (integration: "jira" | "azure") => {
        setSelectedIntegration(integration);
        setIsDisconnectModalOpen(true);
    };

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {/* Profile Card */}
            <UserProfileCard />

            {/* Section Header */}
            <div className="flex justify-between items-end gap-4 mt-2">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Ferramentas Conectadas
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Gerencie suas integrações e sincronização de dados.
                    </p>
                </div>
            </div>

            {/* Integration Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Jira Card */}
                <div
                    className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: "0ms" }}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="size-12 rounded-lg bg-[#0052CC] flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                            <Kanban className="size-6" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20">
                            <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                                Conectado
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                            Jira Cloud
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Tech Startup XYZ
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-slate-100 dark:border-white/5">
                        <div>
                            <p className="text-xs text-slate-400 mb-1">Projetos</p>
                            <p className="font-bold text-slate-900 dark:text-white">8</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 mb-1">Cenários</p>
                            <p className="font-bold text-slate-900 dark:text-white">247</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <button 
                            onClick={() => handleConfigure("jira")}
                            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                            Configurar
                        </button>
                        <button 
                            onClick={() => handleDisconnect("jira")}
                            className="px-3 py-2 rounded-lg border border-transparent text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                            Desconectar
                        </button>
                    </div>
                </div>

                {/* Azure DevOps Card */}
                <div
                    className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: "100ms" }}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="size-12 rounded-lg bg-[#0078D7] flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                            <CircuitBoard className="size-6" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20">
                            <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                                Conectado
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                            Azure DevOps
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            mycompany
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-slate-100 dark:border-white/5">
                        <div>
                            <p className="text-xs text-slate-400 mb-1">Projetos</p>
                            <p className="font-bold text-slate-900 dark:text-white">4</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 mb-1">Planos Teste</p>
                            <p className="font-bold text-slate-900 dark:text-white">100</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <button 
                            onClick={() => handleConfigure("azure")}
                            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                            Configurar
                        </button>
                        <button 
                            onClick={() => handleDisconnect("azure")}
                            className="px-3 py-2 rounded-lg border border-transparent text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                            Desconectar
                        </button>
                    </div>
                </div>

                {/* Slack Card */}
                <div
                    className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: "200ms" }}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="size-12 rounded-lg bg-[#4A154B] flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
                            <MessageSquare className="size-6" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <div className="size-1.5 rounded-full bg-slate-400" />
                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                                Disponível
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                            Slack
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Notificações em tempo real
                        </p>
                    </div>
                    <div className="flex-1 flex items-center mb-6 pt-6 border-t border-slate-100 dark:border-white/5">
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Receba alertas de bugs críticos e atualizações de status
                            diretamente no canal da sua equipe.
                        </p>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <button 
                            onClick={() => handleConfigure("slack")}
                            className="w-full px-3 py-2 rounded-lg bg-primary hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm shadow-blue-500/20"
                        >
                            Conectar
                        </button>
                    </div>
                </div>

                {/* Postman Card (Coming Soon) */}
                <div
                    className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: "300ms" }}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="size-12 rounded-lg bg-[#FF6C37] flex items-center justify-center text-white shadow-lg shadow-orange-900/20 opacity-80 grayscale-[0.5]">
                            <Rocket className="size-6" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <Lock className="size-3 text-slate-500" />
                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                                Em Breve
                            </span>
                        </div>
                    </div>
                    <div className="mb-6 opacity-75">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                            Postman
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Sincronização de APIs
                        </p>
                    </div>
                    <div className="flex-1 flex items-center mb-6 pt-6 border-t border-slate-100 dark:border-white/5 opacity-75">
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Em breve você poderá importar coleções e gerar testes
                            automáticos a partir da documentação.
                        </p>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <button 
                            onClick={() => setIsNotifyModalOpen(true)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                            Me Notifique
                        </button>
                    </div>
                </div>

                {/* Add New Integration Card */}
                <button
                    onClick={() => setIsNewIntegrationModalOpen(true)}
                    className="group bg-slate-50 dark:bg-white/5 rounded-xl p-6 border-2 border-dashed border-slate-300 dark:border-white/10 flex flex-col items-center justify-center h-full min-h-[280px] hover:border-primary dark:hover:border-primary hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: "400ms" }}
                >
                    <div className="size-14 rounded-full bg-white dark:bg-white/10 group-hover:bg-primary group-hover:text-white border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 mb-4 transition-all duration-300 shadow-sm">
                        <Plus className="size-8" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                        Adicionar Nova Integração
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-[200px] group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                        Explore a galeria de plugins ou solicite uma conexão
                        customizada.
                    </p>
                </button>
            </div>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto mt-6 mb-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    © 2026 BugKillers AI. All rights reserved.
                </p>
            </footer>

            {/* Modals */}
            <NewIntegrationModal
                isOpen={isNewIntegrationModalOpen}
                onClose={() => setIsNewIntegrationModalOpen(false)}
            />
            <IntegrationNotifyModal
                isOpen={isNotifyModalOpen}
                onClose={() => setIsNotifyModalOpen(false)}
                serviceName="Postman"
                serviceIcon={Rocket}
                serviceColor="#FF6C37"
            />
            <IntegrationConfigModal
                isOpen={isConfigModalOpen}
                onClose={() => setIsConfigModalOpen(false)}
                integration={selectedIntegration}
            />
            <IntegrationDisconnectModal
                isOpen={isDisconnectModalOpen}
                onClose={() => setIsDisconnectModalOpen(false)}
                integration={selectedIntegration as "jira" | "azure"}
            />
        </div>
    );
}
