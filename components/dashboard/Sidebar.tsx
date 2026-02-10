"use client";

import {
    User,
    CreditCard,
    BarChart3,
    Puzzle,
    Settings,
    Lock,
    HelpCircle,
    ArrowLeft,
    Bot,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    href: string;
    label: string;
    icon: React.ReactNode;
    section?: string;
}

const navItems: NavItem[] = [
    { href: "/profile", label: "Dados", icon: <User className="size-5" />, section: "Conta" },
    { href: "/billing", label: "Plano", icon: <CreditCard className="size-5" /> },
    { href: "/usage", label: "Uso", icon: <BarChart3 className="size-5" /> },
    { href: "/integrations", label: "Integrações", icon: <Puzzle className="size-5" />, section: "Sistema" },
    { href: "/settings", label: "Preferências", icon: <Settings className="size-5" /> },
    { href: "/security", label: "Segurança", icon: <Lock className="size-5" /> },
    { href: "/help", label: "Ajuda", icon: <HelpCircle className="size-5" />, section: "Suporte" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 flex-none bg-white dark:bg-card-dark border-r border-slate-200 dark:border-white/10 flex flex-col justify-between py-6 hidden md:flex transition-colors duration-300">
            {/* Back to Agents */}
            <div>
                <Link
                    href="/agents"
                    className="flex items-center gap-3 mx-4 mb-4 px-4 py-2.5 rounded-xl bg-primary/5 dark:bg-primary/10 text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors group"
                >
                    <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
                    <Bot className="size-4" />
                    <span className="text-sm font-bold">Agentes</span>
                </Link>
                <div className="h-px bg-slate-100 dark:bg-white/5 mx-4 mb-4" />

                <nav className="flex flex-col gap-1">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
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
            </div>
        </aside>
    );
}
