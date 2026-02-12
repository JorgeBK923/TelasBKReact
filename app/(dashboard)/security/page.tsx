"use client";

import { useState } from "react";
import { UserProfileCard } from "@/components/dashboard/UserProfileCard";
import { DeleteAccountModal } from "@/components/dashboard/DeleteAccountModal";
import {
    Key,
    Shield,
    Monitor,
    AlertTriangle,
    Laptop,
    Smartphone,
    LaptopMinimal,
    Loader2,
    CheckCircle,
} from "lucide-react";
import { ChangePasswordModal } from "@/components/dashboard/ChangePasswordModal";
import { TwoFactorModal } from "@/components/dashboard/TwoFactorModal";
import { LogoutAllSessionsModal } from "@/components/dashboard/LogoutAllSessionsModal";


export default function SecurityPage() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isTwoFactorModalOpen, setIsTwoFactorModalOpen] = useState(false);
    const [isLogoutAllModalOpen, setIsLogoutAllModalOpen] = useState(false);
    const [isSavingAlerts, setIsSavingAlerts] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const triggerToast = (message: string) => {
        setToastMessage(message);
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);
    };

    // Security Alerts State
    const [securityAlerts, setSecurityAlerts] = useState({
        newDevice: true,
        passwordChange: true,
        twoFactorDisabled: true,
    });

    const handleDeleteAccount = () => {
        // Aqui você implementaria a lógica de exclusão
        console.log("Conta excluída!");
        setIsDeleteModalOpen(false);
        triggerToast("Sua conta foi excluída permanentemente.");
    };

    const handleLogoutAllSesssions = (keepCurrent: boolean) => {
        console.log("Sessões encerradas. Manter atual:", keepCurrent);
        triggerToast("Todas as outras sessões foram encerradas.");
    };

    const handleSaveAlerts = async () => {
        setIsSavingAlerts(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsSavingAlerts(false);
            triggerToast("Configurações de alerta salvas com sucesso!");
        } catch {
            setIsSavingAlerts(false);
            triggerToast("Erro ao salvar configurações. Tente novamente.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {/* Profile Card */}
            <UserProfileCard />

            {/* Section Header */}
            <div className="flex justify-between items-end gap-4 mt-2">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Segurança da Conta
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Proteja seu acesso, gerencie sessões e autenticação em duas
                        etapas.
                    </p>
                </div>
            </div>

            {/* Security Cards */}
            <div className="flex flex-col gap-6">
                {/* Password and 2FA Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Password Card */}
                    <div
                        className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up flex flex-col justify-between"
                        style={{ animationDelay: "0ms" }}
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-primary">
                                    <Key className="size-5" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                    Senha
                                </h4>
                            </div>
                            <div className="mb-6">
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                                    Última alteração: há 45 dias
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    Sua senha nunca foi comprometida em violações de
                                    dados conhecidas.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setIsPasswordModalOpen(true)}
                                className="w-full px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Alterar senha
                            </button>
                            <p className="text-xs text-slate-400 text-center">
                                Use uma senha forte e exclusiva.
                            </p>
                        </div>
                    </div>

                    {/* 2FA Card */}
                    <div
                        className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up flex flex-col justify-between"
                        style={{ animationDelay: "50ms" }}
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <Shield className="size-5" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                        Autenticação em Dois Fatores (2FA)
                                    </h4>
                                </div>
                                <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wide">
                                    Desativado
                                </span>
                            </div>
                            <div className="mb-6">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Adicione uma camada extra de segurança à sua
                                    conta exigindo um código do seu smartphone ao
                                    fazer login.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsTwoFactorModalOpen(true)}
                            className="w-full px-4 py-2.5 rounded-lg border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white! transition-colors"
                        >
                            Ativar 2FA
                        </button>
                    </div>
                </div>

                {/* Active Sessions Card */}
                <div
                    className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
                    style={{ animationDelay: "100ms" }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <Monitor className="size-5" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                Sessões Ativas
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Gerencie e saia de suas sessões ativas em outros
                                navegadores e dispositivos.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {/* Current Session */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-primary/20 dark:border-primary/20">
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <Laptop className="size-6 text-slate-500 dark:text-slate-400" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                                            Chrome no Windows
                                        </span>
                                        <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase">
                                            Este dispositivo
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                        <span>São Paulo, BR</span>
                                        <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                        <span className="text-green-600 dark:text-green-400 font-medium">
                                            Ativo agora
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* iPhone Session */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <Smartphone className="size-6 text-slate-400" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                                        Safari no iPhone 14
                                    </span>
                                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                        <span>Rio de Janeiro, BR</span>
                                        <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                        <span>Última atividade: há 2 horas</span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/20 rounded-lg hover:bg-white dark:hover:bg-white/10 hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap">
                                Encerrar sessão
                            </button>
                        </div>

                        {/* MacOS Session */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <LaptopMinimal className="size-6 text-slate-400" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                                        Chrome no MacOS
                                    </span>
                                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                        <span>Lisboa, PT</span>
                                        <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                        <span>Última atividade: 22 de Out</span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/20 rounded-lg hover:bg-white dark:hover:bg-white/10 hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap">
                                Encerrar sessão
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 flex justify-end">
                        <button
                            onClick={() => setIsLogoutAllModalOpen(true)}
                            className="px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
                        >
                            Encerrar todas as sessões
                        </button>
                    </div>
                </div>

                {/* Security Alerts Card */}
                <div
                    className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
                    style={{ animationDelay: "150ms" }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                            <AlertTriangle className="size-5" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            Alertas de Segurança
                        </h4>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex items-center h-5">
                                <input
                                    checked={securityAlerts.newDevice}
                                    onChange={(e) => setSecurityAlerts(prev => ({ ...prev, newDevice: e.target.checked }))}
                                    className="size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                                    id="alert-new-device"
                                    name="alert-new-device"
                                    type="checkbox"
                                />
                            </div>
                            <div className="text-sm">
                                <label
                                    className="font-medium text-slate-900 dark:text-white cursor-pointer"
                                    htmlFor="alert-new-device"
                                >
                                    Login em novo dispositivo
                                </label>
                                <p className="text-slate-500 dark:text-slate-400 text-xs">
                                    Receba um email sempre que sua conta for
                                    acessada de um dispositivo não reconhecido.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex items-center h-5">
                                <input
                                    checked={securityAlerts.passwordChange}
                                    onChange={(e) => setSecurityAlerts(prev => ({ ...prev, passwordChange: e.target.checked }))}
                                    className="size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                                    id="alert-password"
                                    name="alert-password"
                                    type="checkbox"
                                />
                            </div>
                            <div className="text-sm">
                                <label
                                    className="font-medium text-slate-900 dark:text-white cursor-pointer"
                                    htmlFor="alert-password"
                                >
                                    Alteração de senha
                                </label>
                                <p className="text-slate-500 dark:text-slate-400 text-xs">
                                    Notificação imediata se sua senha for
                                    alterada.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex items-center h-5">
                                <input
                                    checked={securityAlerts.twoFactorDisabled}
                                    onChange={(e) => setSecurityAlerts(prev => ({ ...prev, twoFactorDisabled: e.target.checked }))}
                                    className="size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                                    id="alert-2fa"
                                    name="alert-2fa"
                                    type="checkbox"
                                />
                            </div>
                            <div className="text-sm">
                                <label
                                    className="font-medium text-slate-900 dark:text-white cursor-pointer"
                                    htmlFor="alert-2fa"
                                >
                                    Desativação de 2FA
                                </label>
                                <p className="text-slate-500 dark:text-slate-400 text-xs">
                                    Alerta crítico se a autenticação de dois
                                    fatores for removida.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex justify-end">
                        <button
                            onClick={handleSaveAlerts}
                            disabled={isSavingAlerts}
                            className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                        >
                            {isSavingAlerts ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Salvando...
                                </>
                            ) : (
                                "Salvar"
                            )}
                        </button>
                    </div>
                </div>

                {/* Danger Zone */}
                <div
                    className="bg-red-50/50 dark:bg-red-900/10 rounded-xl p-6 shadow-sm border border-red-200 dark:border-red-900/50 animate-fade-in-up"
                    style={{ animationDelay: "200ms" }}
                >
                    <h4 className="text-lg font-bold text-red-700 dark:text-red-400 mb-2">
                        Zona de Perigo
                    </h4>
                    <p className="text-sm text-red-600/80 dark:text-red-400/70 mb-6">
                        Ações irreversíveis ou que afetam o acesso à sua conta.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setIsDeleteModalOpen(true)}
                            className="px-4 py-2.5 rounded-lg text-red-600 dark:text-red-400 text-sm font-semibold hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
                        >
                            Excluir conta permanentemente
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto mt-6 mb-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    © 2026 BugKillers AI. All rights reserved.
                </p>
            </footer>

            {/* Security Modals */}
            <ChangePasswordModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
            />
            <TwoFactorModal
                isOpen={isTwoFactorModalOpen}
                onClose={() => setIsTwoFactorModalOpen(false)}
            />
            <LogoutAllSessionsModal
                isOpen={isLogoutAllModalOpen}
                onClose={() => setIsLogoutAllModalOpen(false)}
                onConfirm={handleLogoutAllSesssions}
            />
            {/* Delete Account Modal */}
            <DeleteAccountModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteAccount}
            />

            {/* Toast Notification */}
            {showSuccessToast && (
                <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
                    <div className="flex items-center gap-3 bg-white dark:bg-[#1C1C1E] border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-4 pr-6">
                        <div className="flex-none text-green-500">
                            <CheckCircle className="size-5" />
                        </div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                            {toastMessage}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
