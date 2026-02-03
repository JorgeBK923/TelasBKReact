"use client";

import {
    User,
    CreditCard,
    BarChart3,
    Puzzle,
    Settings,
    Lock,
} from "lucide-react";
import Link from "next/link";

interface NavItem {
    href: string;
    label: string;
    icon: React.ReactNode;
    section?: string;
}

interface SidebarProps {
    activePage: "dados" | "plano" | "uso" | "integracoes" | "preferencias" | "seguranca";
}

const navItems: NavItem[] = [
    { href: "/dashboard", label: "Dados", icon: <User className="size-5" />, section: "Conta" },
    { href: "/billing", label: "Plano", icon: <CreditCard className="size-5" /> },
    { href: "/dashboard", label: "Uso", icon: <BarChart3 className="size-5" /> },
    { href: "#", label: "Integrações", icon: <Puzzle className="size-5" />, section: "Sistema" },
    { href: "#", label: "Preferências", icon: <Settings className="size-5" /> },
    { href: "#", label: "Segurança", icon: <Lock className="size-5" /> },
];

const pageToLabel: Record<SidebarProps["activePage"], string> = {
    dados: "Dados",
    plano: "Plano",
    uso: "Uso",
    integracoes: "Integrações",
    preferencias: "Preferências",
    seguranca: "Segurança",
};

export function Sidebar({ activePage }: SidebarProps) {
    const activeLabel = pageToLabel[activePage];

    return (
        <aside className="w-64 flex-none bg-white dark:bg-card-dark border-r border-slate-200 dark:border-white/10 flex flex-col justify-between py-6 hidden md:flex transition-colors duration-300">
            <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                    const isActive = item.label === activeLabel;
                    const showSection = item.section;

                    return (
                        <div key={item.label}>
                            {showSection && (
                                <p className={`px-8 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ${index > 0 ? 'mt-6' : ''}`}>
                                    {item.section}
                                </p>
                            )}
                            <Link
                                href={item.href}
                                className={
                                    isActive
                                        ? "flex items-center gap-3 pl-[20px] pr-4 py-3 bg-primary-light dark:bg-primary/20 border-l-[4px] border-primary text-slate-900 dark:text-white transition-colors"
                                        : "flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                                }
                            >
                                <span
                                    className={
                                        isActive
                                            ? "text-primary"
                                            : "group-hover:text-primary transition-colors"
                                    }
                                >
                                    {item.icon}
                                </span>
                                <span
                                    className={`text-sm ${isActive ? "font-semibold" : "font-medium"}`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}
