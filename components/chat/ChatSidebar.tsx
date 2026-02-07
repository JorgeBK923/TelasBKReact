'use client';

import React from 'react';
import { Search, Plus, Bug, Moon, Sun, MessageSquare, Menu } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export function ChatSidebar() {
    const { user } = useUser();
    // Note: Dark mode logic and mobile menu toggle would typically be connected to context/state here.
    return (
        <>
            <aside className="w-80 bg-[#062BC9] flex-shrink-0 flex flex-col border-r border-blue-800 hidden md:flex h-full">
                <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-2 text-white">
                        <Bug className="text-white w-7 h-7" />
                        <span className="font-display font-bold text-lg tracking-tight">BugKillers</span>
                    </div>
                </div>
                <div className="p-4 space-y-4 shrink-0">
                    <div className="relative group">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300">
                            <Search className="w-4 h-4" />
                        </div>
                        <input className="w-full bg-white/10 border-white/10 focus:border-white/30 focus:ring-0 text-white placeholder-blue-200/60 rounded-lg pl-9 py-2 text-sm transition-all outline-none focus:outline-none ring-1 ring-transparent" placeholder="Buscar no histórico..." type="text" />
                    </div>
                    <button className="w-full bg-white hover:bg-blue-50 text-primary rounded-lg px-4 py-3 flex items-center justify-center gap-2 font-medium transition-all shadow-lg shadow-black/10">
                        <Plus className="w-5 h-5" />
                        Novo Teste
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
                    <div>
                        <h3 className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-300"></span> Esta semana
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="w-full text-left p-3 rounded-xl bg-white/15 text-white border border-white/10 hover:bg-white/20 transition-all group">
                                    <div className="flex justify-between items-start mb-1">
                                        <MessageSquare className="text-blue-300 w-4 h-4" />
                                        <span className="text-[10px] text-blue-200 font-mono">14:30</span>
                                    </div>
                                    <div className="text-sm font-semibold truncate mb-1">Erro de Autenticação OAuth</div>
                                    <div className="text-[11px] text-blue-100/70 line-clamp-1">Olá, Ana! Estou pronto para analisar seu...</div>
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left p-3 rounded-xl hover:bg-white/10 text-blue-100 transition-all group">
                                    <div className="flex justify-between items-start mb-1">
                                        <MessageSquare className="text-blue-300/50 w-4 h-4" />
                                        <span className="text-[10px] text-blue-300/70 font-mono">10:15</span>
                                    </div>
                                    <div className="text-sm font-semibold truncate mb-1">Refatoração API de Pagamentos</div>
                                    <div className="text-[11px] text-blue-100/50 line-clamp-1">A estrutura atual da API apresenta...</div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[10px] font-bold text-blue-300/70 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-300/50"></span> Este mês
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="w-full text-left p-3 rounded-xl hover:bg-white/10 text-blue-100 transition-all group">
                                    <div className="flex justify-between items-start mb-1">
                                        <MessageSquare className="text-blue-300/50 w-4 h-4" />
                                        <span className="text-[10px] text-blue-300/70 font-mono">08/10</span>
                                    </div>
                                    <div className="text-sm font-semibold truncate mb-1">Memory Leak no Worker</div>
                                    <div className="text-[11px] text-blue-100/50 line-clamp-1">Identifiquei um padrão de consumo...</div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[10px] font-bold text-blue-300/70 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-300/50"></span> Mais antigos
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="w-full text-left p-3 rounded-xl hover:bg-white/10 text-blue-100 transition-all group">
                                    <div className="flex justify-between items-start mb-1">
                                        <MessageSquare className="text-blue-300/50 w-4 h-4" />
                                        <span className="text-[10px] text-blue-300/70 font-mono">Set/23</span>
                                    </div>
                                    <div className="text-sm font-semibold truncate mb-1">Configuração de CI/CD</div>
                                    <div className="text-[11px] text-blue-100/50 line-clamp-1">O pipeline de deploy está falhando...</div>
                                </button>
                            </li>
                        </ul>
                    </div>
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
                        <button className="text-blue-200 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors" title="Alternar Tema">
                            <Moon className="w-5 h-5 dark:hidden" />
                            <Sun className="w-5 h-5 hidden dark:block" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="md:hidden h-16 bg-[#062BC9] flex items-center justify-between px-4 text-white shrink-0">
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
