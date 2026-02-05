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
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
    const { theme: activeTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    // Preferences State
    const [language, setLanguage] = useState("pt-BR");
    const [pushEnabled, setPushEnabled] = useState(true);

    const [emailPreferences, setEmailPreferences] = useState({
        scenarios: true,
        agents: true,
        usage: true,
        newsletter: false,
        maintenance: true,
        updates: true
    });

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSave = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setShowSuccessToast(true);
            setTimeout(() => setShowSuccessToast(false), 3000);
        }, 1500);
    };

    const handleCancel = () => {
        // Reset to default (or last saved) values
        setLanguage("pt-BR");
        setPushEnabled(true);
        setEmailPreferences({
            scenarios: true,
            agents: true,
            usage: true,
            newsletter: false,
            maintenance: true,
            updates: true
        });
        setTheme("system");
    };

    if (!mounted) return null;

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
                                    {[
                                        { id: "light", icon: Sun, label: "Light" },
                                        { id: "dark", icon: Moon, label: "Dark" },
                                        { id: "system", icon: Monitor, label: "System" },
                                    ].map((t) => (
                                        <label key={t.id} className="cursor-pointer group">
                                            <input
                                                className="peer sr-only"
                                                name="theme"
                                                type="radio"
                                                checked={activeTheme === t.id}
                                                onChange={() => setTheme(t.id)}
                                            />
                                            <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                                <t.icon className={`size-5 mx-auto mb-1 ${activeTheme === t.id ? 'text-primary' : 'text-slate-500'}`} />
                                                <p className={`text-xs font-semibold ${activeTheme === t.id ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>
                                                    {t.label}
                                                </p>
                                            </div>
                                        </label>
                                    ))}
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
                                        className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-slate-700 dark:text-slate-300 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                        id="language"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
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
                            <button
                                onClick={() => setPushEnabled(!pushEnabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${pushEnabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pushEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${pushEnabled ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-yellow-50 text-yellow-800 ring-yellow-600/20'}`}>
                                {pushEnabled ? 'Notificações ativas' : 'Atenção'}
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 self-center">
                                {pushEnabled ? 'Você receberá alertas em tempo real.' : 'Você precisará permitir permissões no navegador.'}
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
                            {[
                                { id: "scenarios", title: "Cenários gerados", desc: "Receba um resumo quando um lote for concluído." },
                                { id: "agents", title: "Novos agentes lançados", desc: "Saiba quando novos modelos de IA estiverem disponíveis." },
                                { id: "usage", title: "Alertas de limite de uso", desc: "Quando você atingir 80% do seu plano mensal." },
                                { id: "newsletter", title: "Newsletter", desc: "Dicas de QA e atualizações da plataforma." }
                            ].map((item, idx) => (
                                <div key={item.id}>
                                    <div className="flex items-center justify-between py-1">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {item.title}
                                            </span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                {item.desc}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => setEmailPreferences(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof prev] }))}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${emailPreferences[item.id as keyof typeof emailPreferences] ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                                        >
                                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailPreferences[item.id as keyof typeof emailPreferences] ? 'translate-x-6' : 'translate-x-1'}`} />
                                        </button>
                                    </div>
                                    {idx < 3 && <hr className="border-slate-100 dark:border-white/5 mt-3" />}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                                Produto
                            </h5>
                            <div className="space-y-4">
                                {[
                                    { id: "maintenance", title: "Avisos de manutenção", desc: "Receba alertas sobre interrupções planejadas." },
                                    { id: "updates", title: "Atualizações importantes", desc: "Notificações sobre grandes mudanças no sistema." }
                                ].map((item, idx) => (
                                    <div key={item.id}>
                                        <div className="flex items-center justify-between py-1">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                    {item.title}
                                                </span>
                                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                                    {item.desc}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => setEmailPreferences(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof prev] }))}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${emailPreferences[item.id as keyof typeof emailPreferences] ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                                            >
                                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailPreferences[item.id as keyof typeof emailPreferences] ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                        </div>
                                        {idx === 0 && <hr className="border-slate-100 dark:border-white/5 mt-3" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10 mt-2">
                <button
                    onClick={handleCancel}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                    Cancelar
                </button>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-glow transition-all ${isSaving ? 'opacity-90 cursor-wait' : 'hover:bg-primary/90 active:scale-95'}`}
                >
                    {isSaving ? (
                        <>
                            <Loader2 className="size-4 animate-spin" />
                            Salvando...
                        </>
                    ) : (
                        "Salvar Preferências"
                    )}
                </button>
            </div>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto mt-6 mb-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    © 2026 BugKillers AI. All rights reserved.
                </p>
            </footer>

            {/* Toast Notification */}
            {showSuccessToast && (
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
