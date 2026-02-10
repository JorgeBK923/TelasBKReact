'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Plus, Bug, Moon, Sun, MessageSquare, Menu, ArrowLeft, Bot } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { useTheme } from 'next-themes';
import { ChatMessage } from '@/types/chat-types';

interface SidebarChatItem {
    id: string;
    title: string;
    preview: string;
    time: string;
    isActive?: boolean;
}

// Histórico mock (conversas passadas)
const pastHistory: { label: string; items: SidebarChatItem[] }[] = [
    {
        label: "Este mês",
        items: [
            { id: "past-1", title: "Erro de Autenticação OAuth", preview: "Olá, Ana! Estou pronto para analisar seu...", time: "14:30" },
            { id: "past-2", title: "Refatoração API de Pagamentos", preview: "A estrutura atual da API apresenta...", time: "10:15" },
            { id: "past-3", title: "Memory Leak no Worker", preview: "Identifiquei um padrão de consumo...", time: "08/10" },
        ]
    },
    {
        label: "Mais antigos",
        items: [
            { id: "past-4", title: "Configuração de CI/CD", preview: "O pipeline de deploy está falhando...", time: "Set/23" },
        ]
    }
];

interface ChatSidebarProps {
    onNewChat?: () => void;
    messages?: ChatMessage[];
}

export function ChatSidebar({ onNewChat, messages = [] }: ChatSidebarProps) {
    const { user } = useUser();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Gera item da conversa atual a partir das mensagens
    const currentConversation = useMemo((): SidebarChatItem | null => {
        if (messages.length === 0) return null;

        const firstUserMsg = messages.find(m => m.role === 'user');
        const lastBotMsg = [...messages].reverse().find(m => m.role === 'assistant' && m.content);

        const title = firstUserMsg
            ? firstUserMsg.content.split('\n')[0].substring(0, 50) + (firstUserMsg.content.length > 50 ? '...' : '')
            : 'Nova conversa';

        const preview = lastBotMsg
            ? lastBotMsg.content.replace(/[*#`\n]/g, ' ').substring(0, 60) + '...'
            : 'Iniciando conversa...';

        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        return { id: 'current', title, preview, time, isActive: true };
    }, [messages]);

    // Monta o histórico completo (conversa atual + passadas)
    const fullHistory = useMemo(() => {
        const sections: { label: string; items: SidebarChatItem[] }[] = [];

        // Sessão "Agora" com a conversa ativa
        if (currentConversation) {
            sections.push({
                label: "Agora",
                items: [currentConversation]
            });
        }

        // Adiciona histórico passado
        sections.push(...pastHistory);

        return sections;
    }, [currentConversation]);

    // Filtra pelo search
    const filteredHistory = fullHistory.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.preview.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(section => section.items.length > 0);

    return (
        <>
            <aside className="w-80 bg-[#062BC9] dark:bg-[#0f172a] flex-shrink-0 flex flex-col border-r border-blue-800 dark:border-white/10 hidden md:flex h-full transition-colors duration-300">
                <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-2 text-white">
                        <Bug className="text-white w-7 h-7" />
                        <span className="font-display font-bold text-lg tracking-tight">BugKillers</span>
                    </div>
                </div>

                {/* Back to Agents */}
                <div className="px-4 pt-4">
                    <Link
                        href="/agents"
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white/90 hover:text-white transition-all group"
                    >
                        <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
                        <Bot className="size-4" />
                        <span className="text-sm font-semibold">Voltar para Agentes</span>
                    </Link>
                </div>

                <div className="p-4 space-y-4 shrink-0">
                    <div className="relative group">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300">
                            <Search className="w-4 h-4" />
                        </div>
                        <input
                            className="w-full bg-white/10 border-white/10 focus:border-white/30 focus:ring-0 text-white placeholder-blue-200/60 rounded-lg pl-9 py-2 text-sm transition-all outline-none focus:outline-none ring-1 ring-transparent"
                            placeholder="Buscar no histórico..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={onNewChat}
                        className="w-full bg-white hover:bg-blue-50 text-primary rounded-lg px-4 py-3 flex items-center justify-center gap-2 font-medium transition-all shadow-lg shadow-black/10"
                    >
                        <Plus className="w-5 h-5" />
                        Novo Bate-papo
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
                    {filteredHistory.length > 0 ? (
                        filteredHistory.map((section) => (
                            <div key={section.label}>
                                <h3 className="text-[10px] font-bold text-blue-300 dark:text-blue-400 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                                    <span className={`w-1 h-1 rounded-full ${section.label === 'Agora' ? 'bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]' : 'bg-blue-300'}`}></span> {section.label}
                                </h3>
                                <ul className="space-y-2">
                                    {section.items.map((item) => (
                                        <li key={item.id}>
                                            <button className={`w-full text-left p-3 rounded-xl transition-all group ${item.isActive
                                                ? "bg-white/15 text-white border border-white/10 hover:bg-white/20"
                                                : "hover:bg-white/10 text-blue-100"
                                                }`}>
                                                <div className="flex justify-between items-start mb-1">
                                                    <MessageSquare className={`w-4 h-4 ${item.isActive ? "text-blue-300" : "text-blue-300/50"}`} />
                                                    <span className={`text-[10px] font-mono ${item.isActive ? "text-blue-200" : "text-blue-300/70"}`}>{item.time}</span>
                                                </div>
                                                <div className="text-sm font-semibold truncate mb-1">{item.title}</div>
                                                <div className={`text-[11px] line-clamp-1 ${item.isActive ? "text-blue-100/70" : "text-blue-100/50"}`}>{item.preview}</div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <Search className="w-6 h-6 text-blue-300/40 mb-3" />
                            <p className="text-sm text-blue-200/60">Nenhuma conversa encontrada</p>
                            <p className="text-xs text-blue-200/40 mt-1">Tente usar termos diferentes</p>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-white/10 bg-black/10 shrink-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img alt={user.name} className="h-9 w-9 rounded-full object-cover ring-2 ring-white/30" src={user.avatarUrl} />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">{user.name}</span>
                                <span className="text-xs text-blue-200">{user.role}</span>
                            </div>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="text-blue-200 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                            title="Alternar Tema"
                        >
                            {mounted && (
                                theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="md:hidden h-16 bg-[#062BC9] dark:bg-[#0f172a] flex items-center justify-between px-4 text-white shrink-0 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <Bug className="text-white w-6 h-6" />
                    <span className="font-bold">BugKillers</span>
                </div>
                <button className="text-blue-100 hover:text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </header>
        </>
    );
}

