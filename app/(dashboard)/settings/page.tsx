"use client";

import { UserProfileCard } from "@/components/dashboard/UserProfileCard";
import { ThemeLanguageCard } from "@/components/dashboard/settings/ThemeLanguageCard";
import { PushNotificationsCard } from "@/components/dashboard/settings/PushNotificationsCard";
import { EmailNotificationsCard } from "@/components/dashboard/settings/EmailNotificationsCard";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface EmailPreferences {
    scenarios: boolean;
    agents: boolean;
    usage: boolean;
    newsletter: boolean;
    maintenance: boolean;
    updates: boolean;
}

const defaultEmailPreferences: EmailPreferences = {
    scenarios: true,
    agents: true,
    usage: true,
    newsletter: false,
    maintenance: true,
    updates: true,
};

export default function SettingsPage() {
    const { theme: activeTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [language, setLanguage] = useState("pt-BR");
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailPreferences, setEmailPreferences] = useState<EmailPreferences>(defaultEmailPreferences);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        setError(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSaving(false);
            setShowSuccessToast(true);
            setTimeout(() => setShowSuccessToast(false), 3000);
        } catch {
            setIsSaving(false);
            setError("Não foi possível salvar as preferências. Tente novamente.");
        }
    };

    const handleCancel = () => {
        setLanguage("pt-BR");
        setPushEnabled(true);
        setEmailPreferences(defaultEmailPreferences);
        setTheme("system");
    };

    const handleEmailToggle = (key: keyof EmailPreferences) => {
        setEmailPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    if (!mounted) return null;

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
            <UserProfileCard />

            <div className="flex justify-between items-end gap-4 mt-2">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Preferências da Conta
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Personalize sua experiência, notificações e configurações regionais.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                    <ThemeLanguageCard
                        activeTheme={activeTheme}
                        setTheme={setTheme}
                        language={language}
                        setLanguage={setLanguage}
                    />
                    <PushNotificationsCard
                        enabled={pushEnabled}
                        onToggle={setPushEnabled}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <EmailNotificationsCard
                        preferences={emailPreferences}
                        onToggle={handleEmailToggle}
                    />
                </div>
            </div>

            {error && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-xl border border-red-100 dark:border-red-500/20 animate-in slide-in-from-top-2 duration-200">
                    <AlertCircle className="size-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{error}</span>
                </div>
            )}

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
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-glow transition-all ${isSaving ? "opacity-90 cursor-wait" : "hover:bg-primary/90 active:scale-95"}`}
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

            <footer className="max-w-4xl mx-auto mt-6 mb-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    &copy; 2026 BugKillers AI. All rights reserved.
                </p>
            </footer>

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
