'use client';

import React from 'react';
import Image from 'next/image';
import { Bot } from 'lucide-react';
import { useUser } from '@/context/UserContext';

interface MessageBubbleProps {
    type: 'bot' | 'user';
    content: string;
    isStreaming?: boolean;
}

export function MessageBubble({ type, content, isStreaming }: MessageBubbleProps) {
    const { user } = useUser();

    // Indicador de digitação (sem conteúdo ainda)
    if (type === 'bot' && isStreaming && !content) {
        return (
            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-md">
                    <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">BugKillers AI</span>
                        <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Bot</span>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50/50 dark:bg-primary/5 border border-blue-100 dark:border-primary/20 rounded-xl px-4 py-3 w-fit animate-pulse">
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.5s]"></span>
                        </div>
                        <span className="text-xs font-semibold text-primary dark:text-blue-400 uppercase tracking-widest">Analisando...</span>
                    </div>
                </div>
            </div>
        );
    }

    // Mensagem do Usuário
    if (type === 'user') {
        return (
            <div className="flex flex-row-reverse gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <Image
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-[#334155] shadow-sm flex-shrink-0"
                    src={user.avatarUrl}
                    alt={user.name}
                />
                <div className="flex-1 max-w-2xl flex flex-col items-end">
                    <div className="bg-primary text-white p-5 rounded-2xl rounded-tr-none shadow-md">
                        <p className="leading-relaxed whitespace-pre-wrap">{content}</p>
                    </div>
                </div>
            </div>
        );
    }

    // Mensagem do Bot
    return (
        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">BugKillers AI</span>
                    <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Bot</span>
                </div>
                <div className="bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] rounded-2xl rounded-tl-none shadow-sm overflow-hidden text-slate-700 dark:text-slate-300">
                    <div className="p-5 leading-relaxed">
                        <FormattedContent content={content} />
                        {isStreaming && (
                            <span className="inline-block w-2 h-5 bg-primary/60 ml-1 animate-pulse rounded-sm" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Componente que renderiza markdown simplificado
function FormattedContent({ content }: { content: string }) {
    const lines = content.split('\n');

    return (
        <>
            {lines.map((line, i) => {
                // Bloco de código (```...```)
                if (line.startsWith('```')) {
                    return null; // Handled by code block logic below
                }

                // Cabeçalhos
                if (line.startsWith('## ')) {
                    return <h3 key={i} className="text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">{processInline(line.slice(3))}</h3>;
                }

                // Lista numerada
                if (/^\d+\.\s/.test(line)) {
                    return <p key={i} className="ml-4 mb-1">{processInline(line)}</p>;
                }

                // Lista com bullet
                if (line.startsWith('- ')) {
                    return <p key={i} className="ml-4 mb-1">• {processInline(line.slice(2))}</p>;
                }

                // Linha de tabela
                if (line.startsWith('|')) {
                    const cells = line.split('|').filter(c => c.trim() && !c.match(/^[-:]+$/));
                    if (cells.length === 0 || line.match(/^[\s|:-]+$/)) return null;
                    return (
                        <div key={i} className="flex gap-4 py-1 text-sm border-b border-slate-100 dark:border-white/5 last:border-0">
                            {cells.map((cell, j) => (
                                <span key={j} className="flex-1">{processInline(cell.trim())}</span>
                            ))}
                        </div>
                    );
                }

                // Linha vazia
                if (line.trim() === '') {
                    return <div key={i} className="h-2" />;
                }

                // Parágrafo normal
                return <p key={i} className="mb-1">{processInline(line)}</p>;
            })}
            {/* Blocos de código */}
            {renderCodeBlocks(content)}
        </>
    );
}

// Renderiza blocos de código
function renderCodeBlocks(content: string) {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const blocks: React.ReactNode[] = [];
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
        const lang = match[1] || 'code';
        const code = match[2].trim();
        blocks.push(
            <div key={match.index} className="my-3 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-white/5 text-xs text-slate-500 dark:text-slate-400">
                    <span>{lang}</span>
                </div>
                <pre className="p-4 bg-[#0f172a] text-slate-300 text-sm font-mono overflow-x-auto">
                    <code>{code}</code>
                </pre>
            </div>
        );
    }

    return blocks;
}

// Processa formatação inline (bold, code, emoji)
function processInline(text: string): React.ReactNode {
    // Regex para **bold** e `code`
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={i} className="bg-slate-100 dark:bg-white/10 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono">{part.slice(1, -1)}</code>;
        }
        return part;
    });
}
