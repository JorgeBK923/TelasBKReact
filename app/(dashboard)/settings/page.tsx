"use client";

import { UserProfileCard } from "@/components/dashboard/UserProfileCard";
import {
    Palette,
    Sun,
    Moon,
    Monitor,
    Bell,
    Mail,
    CheckCircle,
    Loader2,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
    const [showToast, setShowToast] = useState(true);

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {/* Profile Card */}
            <UserProfileCard />

            {/* Section Header */}
            <div className="flex justify-between items-end gap-4 mt-2">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Preferências da Conta
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Personalize sua experiência, notificações e configurações
                        regionais.
                    </p>
                </div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    {/* Interface & Language Card */}
                    <div
                        className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
                        style={{ animationDelay: "0ms" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-primary">
                                <Palette className="size-5" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                Interface &amp; Idioma
                            </h4>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                                    Tema da Interface
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    <label className="cursor-pointer group">
                                        <input
                                            className="peer sr-only"
                                            name="theme"
                                            type="radio"
                                            checked={theme === "light"}
                                            onChange={() => setTheme("light")}
                                        />
                                        <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary-light/50 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                            <Sun className="size-5 text-slate-500 mx-auto mb-1" />
                                            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                                Light
                                            </p>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input
                                            className="peer sr-only"
                                            name="theme"
                                            type="radio"
                                            checked={theme === "dark"}
                                            onChange={() => setTheme("dark")}
                                        />
                                        <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary-light/50 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                            <Moon className="size-5 text-slate-500 mx-auto mb-1" />
                                            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                                Dark
                                            </p>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input
                                            className="peer sr-only"
                                            name="theme"
                                            type="radio"
                                            checked={theme === "system"}
                                            onChange={() => setTheme("system")}
                                        />
                                        <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary-light/50 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                            <Monitor className="size-5 text-slate-500 mx-auto mb-1" />
                                            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                                System
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                    htmlFor="language"
                                >
                                    Idioma
                                </label>
                                <div className="relative">
                                    <select
                                        className="w-full rounded-lg border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-slate-700 dark:text-slate-300 text-sm focus:ring-primary focus:border-primary"
                                        id="language"
                                    >
                                        <option value="pt-BR">Português (Brasil)</option>
                                        <option value="en-US">English (US)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Push Notifications Card */}
                    <div
                        className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
                        style={{ animationDelay: "200ms" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                                <Bell className="size-5" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                Notificações Push
                            </h4>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                            <div className="flex flex-col gap-1 pr-4">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                    Ativar notificações no navegador
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                    Receba alertas em tempo real mesmo com a aba
                                    fechada.
                                </span>
                            </div>
                            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input
                                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300"
                                    id="push-toggle"
                                    name="toggle"
                                    type="checkbox"
                                />
                                <label
                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer"
                                    htmlFor="push-toggle"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <span className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20">
                                Atenção
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 self-center">
                                Você precisará permitir permissões no navegador.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    {/* Email Notifications Card */}
                    <div
                        className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up"
                        style={{ animationDelay: "100ms" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                <Mail className="size-5" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                Notificações por Email
                            </h4>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Cenários gerados
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        Receba um resumo quando um lote for concluído.
                                    </span>
                                </div>
                                <input
                                    defaultChecked
                                    className="rounded border-slate-300 text-primary focus:ring-primary size-5"
                                    type="checkbox"
                                />
                            </div>
                            <hr className="border-slate-100 dark:border-white/5" />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Novos agentes lançados
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        Saiba quando novos modelos de IA estiverem
                                        disponíveis.
                                    </span>
                                </div>
                                <input
                                    defaultChecked
                                    className="rounded border-slate-300 text-primary focus:ring-primary size-5"
                                    type="checkbox"
                                />
                            </div>
                            <hr className="border-slate-100 dark:border-white/5" />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Alertas de limite de uso
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        Quando você atingir 80% do seu plano mensal.
                                    </span>
                                </div>
                                <input
                                    defaultChecked
                                    className="rounded border-slate-300 text-primary focus:ring-primary size-5"
                                    type="checkbox"
                                />
                            </div>
                            <hr className="border-slate-100 dark:border-white/5" />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Newsletter
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        Dicas de QA e atualizações da plataforma.
                                    </span>
                                </div>
                                <input
                                    className="rounded border-slate-300 text-primary focus:ring-primary size-5"
                                    type="checkbox"
                                />
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                                Produto
                            </h5>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Avisos de manutenção
                                        </span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            Receba alertas sobre interrupções planejadas.
                                        </span>
                                    </div>
                                    <input
                                        defaultChecked
                                        className="rounded border-slate-300 text-primary focus:ring-primary size-5"
                                        type="checkbox"
                                    />
                                </div>
                                <hr className="border-slate-100 dark:border-white/5" />
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Atualizações importantes
                                        </span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            Notificações sobre grandes mudanças no sistema.
                                        </span>
                                    </div>
                                    <input
                                        defaultChecked
                                        className="rounded border-slate-300 text-primary focus:ring-primary size-5"
                                        type="checkbox"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10 mt-2">
                <button className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    Cancelar
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-glow opacity-90 cursor-wait transition-all">
                    <Loader2 className="size-4 animate-spin" />
                    Salvando...
                </button>
            </div>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto mt-6 mb-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    © 2026 BugKillers AI. All rights reserved.
                </p>
            </footer>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
                    <div className="flex items-center gap-3 bg-white dark:bg-[#1C1C1E] border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-4 pr-6">
                        <div className="flex-none text-green-500">
                            <CheckCircle className="size-5" />
                        </div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                            Preferências salvas com sucesso
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
