'use client';

import React from 'react';
import Image from 'next/image';
import { Bot, AlertTriangle } from 'lucide-react';
import { useUser } from '@/context/UserContext';

interface MessageBubbleProps {
    type: 'bot' | 'user';
    content?: React.ReactNode;
    isAnalyzing?: boolean;
}

export function MessageBubble({ type, content, isAnalyzing }: MessageBubbleProps) {
    const { user } = useUser();

    if (isAnalyzing) {
        return (
            <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-400">
                    <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 bg-blue-50/50 dark:bg-primary/5 border border-blue-100 dark:border-primary/20 rounded-xl px-4 py-3 w-fit animate-pulse">
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.5s]"></span>
                        </div>
                        <span className="text-xs font-semibold text-primary dark:text-blue-400 uppercase tracking-widest">Analisando código...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'user') {
        return (
            <div className="flex flex-row-reverse gap-4">
                <Image width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-[#334155] shadow-sm" src={user.avatarUrl} alt={user.name} />
                <div className="flex-1 max-w-2xl flex flex-col items-end">
                    <div className="bg-primary text-white p-5 rounded-2xl rounded-tr-none shadow-md">
                        {/* We render content directly because it might be text or JSX */}
                        {typeof content === 'string' ? <p className="leading-relaxed">{content}</p> : content}
                    </div>
                </div>
            </div>
        );
    }

    // Bot message
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">BugKillers AI</span>
                    <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Bot</span>
                </div>
                <div className="bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] rounded-2xl rounded-tl-none shadow-sm overflow-hidden text-slate-700 dark:text-slate-300">
                    {content}
                </div>
            </div>
        </div>
    );
}

// Helper specific to the drafted design for rendering code blocks with errors
export function CodeBlockWithAnalysis() {
    return (
        <>
            <div className="p-5 text-slate-700 dark:text-slate-300 leading-relaxed border-b border-[#e2e8f0] dark:border-[#334155]">
                <p className="mb-3">Encontrei um <strong className="text-red-600 dark:text-red-400">Bug Crítico</strong> de referência nula. Se o token for inválido, <code>decode(token)</code> pode retornar <code>null</code> ou <code>undefined</code>, causando um crash ao tentar acessar <code>.isAdmin</code>.</p>
            </div>
            <div className="bg-[#0f172a] p-0 text-sm font-mono overflow-x-auto">
                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 text-slate-400 text-xs">
                    <span>auth_module.js</span>
                    <span>JavaScript</span>
                </div>
                <div className="p-4 text-slate-300 space-y-1">
                    <div className="opacity-50">const verifyUser = (token) =&gt; {'{'}</div>
                    <div className="opacity-50 pl-4">const user = decode(token);</div>
                    <div className="relative bg-[rgba(239,68,68,0.15)] border-l-2 border-red-500 pl-4 -ml-4 py-1">
                        <span className="text-red-400 font-bold">if (user.isAdmin) {'{'}</span>
                        <span className="absolute right-2 top-1.5 text-red-500 flex items-center gap-1 text-[10px] font-sans font-bold uppercase tracking-wider">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            Possível Crash
                        </span>
                    </div>
                    <div className="opacity-50 pl-8">return grantAccess();</div>
                    <div className="opacity-50 pl-4">{'}'}</div>
                    <div className="opacity-50 pl-4">return denyAccess();</div>
                    <div className="opacity-50">{'}'}</div>
                </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-white/5 flex gap-3">
                <button className="px-3 py-1.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-[#041E96] transition shadow-sm">
                    Aplicar Correção
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-transparent border border-[#e2e8f0] dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md hover:bg-slate-50 dark:hover:bg-white/5 transition">
                    Explicar Mais
                </button>
            </div>
        </>
    );
}

