'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { PlusCircle, Send, Sparkles, AlertCircle, Paperclip, X, FileText, FileCode, FileImage } from 'lucide-react';
import { ChatMessage } from '@/types/chat-types';

interface AttachedFile {
    file: File;
    id: string;
}

function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getFileIcon(fileName: string) {
    const ext = fileName.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext)) return <FileImage className="w-4 h-4" />;
    if (['js', 'ts', 'tsx', 'jsx', 'py', 'java', 'go', 'rs', 'c', 'cpp', 'html', 'css', 'json'].includes(ext)) return <FileCode className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
}

interface ChatWindowProps {
    messages: ChatMessage[];
    isLoading: boolean;
    error: string | null;
    onSendMessage: (text: string) => void;
    onResetChat: () => void;
}

export function ChatWindow({ messages, isLoading, error, onSendMessage, onResetChat }: ChatWindowProps) {
    const [inputValue, setInputValue] = useState('');
    const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll quando novas mensagens chegam
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Auto-resize do textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 128) + 'px';
        }
    }, [inputValue]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newFiles: AttachedFile[] = Array.from(files).map(file => ({
            file,
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        }));

        setAttachedFiles(prev => [...prev, ...newFiles]);

        // Reset input para permitir selecionar o mesmo arquivo novamente
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const removeFile = (id: string) => {
        setAttachedFiles(prev => prev.filter(f => f.id !== id));
    };

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        const hasContent = inputValue.trim() || attachedFiles.length > 0;
        if (!hasContent || isLoading) return;

        // Monta a mensagem com os nomes dos arquivos anexados
        let fullMessage = inputValue.trim();
        if (attachedFiles.length > 0) {
            const fileNames = attachedFiles.map(f => f.file.name).join(', ');
            if (fullMessage) {
                fullMessage += `\n\n📎 Arquivos anexados: ${fileNames}`;
            } else {
                fullMessage = `📎 Arquivos anexados: ${fileNames}`;
            }
        }

        onSendMessage(fullMessage);
        setInputValue('');
        setAttachedFiles([]);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const hasMessages = messages.length > 0;

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Scrollable Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-8 pb-20">

                    {/* Empty State */}
                    {!hasMessages && (
                        <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center animate-in fade-in duration-500">
                            <div className="relative mb-6">
                                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-xl shadow-primary/30">
                                    <Sparkles className="w-10 h-10" />
                                </div>
                                <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-white dark:border-[#0f172a] shadow-lg shadow-green-500/40" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">BugKillers AI</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
                                Cole trechos de código, logs de erro ou descreva um problema.
                                Vou identificar bugs, vulnerabilidades e sugerir correções.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                                {[
                                    { text: "Analise esse código para bugs", emoji: "🔍" },
                                    { text: "Gere cenários de teste BDD", emoji: "✅" },
                                    { text: "Verifique vulnerabilidades de segurança", emoji: "🛡️" },
                                    { text: "Analise a performance do meu app", emoji: "⚡" },
                                ].map((suggestion) => (
                                    <button
                                        key={suggestion.text}
                                        onClick={() => {
                                            setInputValue(suggestion.text);
                                            textareaRef.current?.focus();
                                        }}
                                        className="flex items-center gap-3 px-4 py-3 text-left text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 hover:border-primary/30 transition-all group"
                                    >
                                        <span className="text-lg">{suggestion.emoji}</span>
                                        <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{suggestion.text}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Timestamp */}
                    {hasMessages && (
                        <div className="flex justify-center">
                            <span className="bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] px-3 py-1 rounded-full text-xs font-medium text-slate-500">
                                {new Date().toLocaleDateString('pt-BR', { weekday: 'long', hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    )}

                    {/* Messages */}
                    {messages.map((msg) => (
                        <MessageBubble
                            key={msg.id}
                            type={msg.role === 'user' ? 'user' : 'bot'}
                            content={msg.content}
                            isStreaming={msg.isStreaming}
                        />
                    ))}

                    {/* Error */}
                    {error && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-xl text-red-600 dark:text-red-400 text-sm animate-in fade-in duration-200">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 bg-[#f8fafc] dark:bg-[#0f172a]/95 backdrop-blur-sm shrink-0">
                <div className="max-w-3xl mx-auto">
                    {/* Attached Files Preview */}
                    {attachedFiles.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
                            {attachedFiles.map((af) => (
                                <div
                                    key={af.id}
                                    className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] rounded-xl text-sm group"
                                >
                                    <span className="text-primary">{getFileIcon(af.file.name)}</span>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-[150px]">{af.file.name}</span>
                                        <span className="text-[10px] text-slate-400">{formatFileSize(af.file.size)}</span>
                                    </div>
                                    <button
                                        onClick={() => removeFile(af.id)}
                                        className="p-0.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors ml-1"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="relative group">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-2xl blur-md transition-opacity opacity-0 group-hover:opacity-100"></div>

                        {/* Hidden file input */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            className="hidden"
                            onChange={handleFileSelect}
                            accept=".js,.ts,.tsx,.jsx,.py,.java,.go,.rs,.c,.cpp,.html,.css,.json,.txt,.md,.log,.csv,.xml,.yaml,.yml,.sql,.sh,.bat,.env,.gitignore,.jpg,.jpeg,.png,.gif,.svg,.webp,.pdf,.zip"
                        />

                        <div className="relative bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] rounded-2xl shadow-lg flex items-end p-2 transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50">
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 relative"
                                title="Anexar arquivo"
                            >
                                <Paperclip className="w-6 h-6" />
                                {attachedFiles.length > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                                        {attachedFiles.length}
                                    </span>
                                )}
                            </button>
                            <textarea
                                ref={textareaRef}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full bg-transparent border-0 focus:ring-0 text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none py-3 max-h-32 focus:outline-none"
                                placeholder={isLoading ? "Aguarde a resposta..." : "Descreva o problema ou cole seu código..."}
                                rows={1}
                                disabled={isLoading}
                            ></textarea>
                            <button
                                type="submit"
                                disabled={(!inputValue.trim() && attachedFiles.length === 0) || isLoading}
                                className="p-2 bg-primary text-white rounded-xl hover:bg-[#041E96] transition-all shadow-md hover:shadow-lg active:scale-95 m-1 disabled:opacity-40 disabled:hover:bg-primary disabled:cursor-not-allowed disabled:active:scale-100"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                            Ambiente Seguro • BugKillers v2.4
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
