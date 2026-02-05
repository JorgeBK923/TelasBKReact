"use client";

import { useState, useEffect } from "react";
import { Bell, CheckCircle2, AlertCircle, Info } from "lucide-react";

interface PushNotificationsManagerProps {
    enabled: boolean;
    onToggle: (enabled: boolean) => void;
}

export function PushNotificationsManager({ enabled, onToggle }: PushNotificationsManagerProps) {
    const [permission, setPermission] = useState<NotificationPermission | "unsupported">("default");
    const [isSupported, setIsSupported] = useState(true);

    useEffect(() => {
        // Check if push notifications are supported
        if (typeof window === "undefined" || !("Notification" in window)) {
            setIsSupported(false);
            setPermission("unsupported");
            return;
        }

        // Check current permission
        setPermission(Notification.permission);
    }, []);

    const handleToggle = async () => {
        if (!isSupported) return;

        if (enabled) {
            // Disable notifications
            onToggle(false);
        } else {
            // Enable notifications
            if (permission === "granted") {
                onToggle(true);
            } else if (permission === "default") {
                const result = await Notification.requestPermission();
                setPermission(result);
                if (result === "granted") {
                    onToggle(true);
                    // Show a test notification
                    new Notification("BugKillers", {
                        body: "Notificações ativadas com sucesso!",
                        icon: "/favicon.ico",
                    });
                }
            }
        }
    };

    if (!isSupported) {
        return (
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                    <Info className="size-5 text-slate-400" />
                    <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            Notificações push não são suportadas neste navegador
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex flex-col gap-1 pr-4">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Ativar notificações no navegador
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                        Receba alertas em tempo real mesmo com a aba fechada.
                    </span>
                </div>
                <button
                    onClick={handleToggle}
                    disabled={permission === "denied"}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        enabled && permission === "granted"
                            ? "bg-primary"
                            : "bg-slate-300 dark:bg-slate-600"
                    } ${permission === "denied" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                    <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform ${
                            enabled && permission === "granted" ? "translate-x-6" : "translate-x-1"
                        }`}
                    />
                </button>
            </div>

            {permission === "denied" && (
                <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="size-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-red-800 dark:text-red-300">
                                Permissão negada
                            </p>
                            <p className="text-xs text-red-700 dark:text-red-400 mt-1">
                                Você bloqueou as notificações. Para reativar, vá nas configurações do seu navegador e permita notificações para este site.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {permission === "granted" && enabled && (
                <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                        <div>
                            <p className="text-sm font-medium text-green-800 dark:text-green-300">
                                Notificações ativas
                            </p>
                            <p className="text-xs text-green-700 dark:text-green-400">
                                Você receberá alertas em tempo real.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {permission === "default" && (
                <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20">
                        Atenção
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 self-center">
                        Você precisará permitir permissões no navegador.
                    </p>
                </div>
            )}
        </div>
    );
}
