'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, Zap, History, AlertTriangle, Loader2, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export interface AgentCardProps {
    name: string;
    description: string;
    version: string;
    tags: string[];
    icon?: React.ReactNode;
    image?: string;
    status: 'available' | 'maintenance' | 'offline';
    lastRun?: string;
    isNew?: boolean;
    isHighPriority?: boolean;
}

type RestartState = 'idle' | 'loading' | 'success' | 'error';

export function AgentCard({ name, description, version, tags, icon, image, status: initialStatus, lastRun, isNew, isHighPriority }: AgentCardProps) {
    const [restartState, setRestartState] = useState<RestartState>('idle');
    const [status, setStatus] = useState(initialStatus);

    const handleRestart = async () => {
        setRestartState('loading');

        // Simula o reinício (1.5s)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 50% chance de sucesso ou erro
        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
            setRestartState('success');
            setTimeout(() => {
                setStatus('available');
                setRestartState('idle');
            }, 2000);
        } else {
            setRestartState('error');
            setTimeout(() => {
                setRestartState('idle');
            }, 3000);
        }
    };

    return (
        <div className="group relative flex flex-col bg-white dark:bg-[#1c2027] rounded-2xl border border-[#e2e8f0] dark:border-[#3b4554] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`p-6 flex-1 ${status === 'offline' ? 'opacity-70 group-hover:opacity-100 transition-opacity' : ''}`}>
                <div className="flex justify-between items-start mb-5">
                    {image ? (
                        <Image alt={`Avatar do Agente ${name}`} width={56} height={56} className={`h-14 w-14 rounded-xl object-cover shadow-md ring-1 ring-slate-900/5 ${status === 'offline' ? 'grayscale opacity-80' : ''}`} src={image} />
                    ) : (
                        <div className="h-14 w-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shadow-md">
                            {icon || <Brain className="w-8 h-8" />}
                        </div>
                    )}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                        {version}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-bold border border-slate-100 dark:border-[#3b4554]">{tag}</span>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    {isNew && (
                        <>
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span>Agente Recém-lançado</span>
                        </>
                    )}
                    {lastRun && (
                        <>
                            <History className="w-4 h-4" />
                            <span>{lastRun}</span>
                        </>
                    )}
                    {isHighPriority && (
                        <>
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span>Alta Prioridade</span>
                        </>
                    )}
                    {status === 'maintenance' && (
                        <>
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            <span className="text-red-400">Manutenção Programada</span>
                        </>
                    )}
                </div>
            </div>

            <div className={`px-6 py-4 border-t flex items-center justify-between gap-4 transition-colors duration-300 ${restartState === 'success'
                    ? 'bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-900/20'
                    : restartState === 'error'
                        ? 'bg-red-50/80 dark:bg-red-900/15 border-red-200 dark:border-red-900/30'
                        : status === 'offline'
                            ? 'bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20'
                            : 'bg-slate-50 dark:bg-[#15191f] border-[#e2e8f0] dark:border-[#3b4554]'
                }`}>
                <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${restartState === 'success'
                            ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                            : restartState === 'loading'
                                ? 'bg-yellow-500 animate-pulse'
                                : status === 'available'
                                    ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                                    : 'bg-red-500'
                        }`}></div>
                    <span className={`text-xs font-bold transition-colors duration-300 ${restartState === 'success'
                            ? 'text-green-600 dark:text-green-400'
                            : restartState === 'loading'
                                ? 'text-yellow-600 dark:text-yellow-400'
                                : restartState === 'error'
                                    ? 'text-red-600 dark:text-red-400'
                                    : status === 'offline'
                                        ? 'text-red-600 dark:text-red-400'
                                        : 'text-slate-700 dark:text-slate-300'
                        }`}>
                        {restartState === 'loading' && 'Reiniciando...'}
                        {restartState === 'success' && 'Agente Online!'}
                        {restartState === 'error' && 'Falha ao reiniciar'}
                        {restartState === 'idle' && (status === 'available' ? 'Disponível' : 'Offline')}
                    </span>
                </div>

                {/* Success State */}
                {restartState === 'success' && (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2.5 text-green-600 dark:text-green-400 animate-in fade-in zoom-in-95 duration-300">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm font-bold">Reiniciado com sucesso!</span>
                    </div>
                )}

                {/* Error State */}
                {restartState === 'error' && (
                    <div className="flex-1 flex items-center gap-2 animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex items-center gap-1.5 text-red-500">
                            <XCircle className="w-4 h-4" />
                        </div>
                        <button
                            onClick={handleRestart}
                            className="flex items-center gap-1.5 ml-auto py-2 px-3 text-xs font-bold rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            Tentar novamente
                        </button>
                    </div>
                )}

                {/* Loading State */}
                {restartState === 'loading' && (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2.5 text-yellow-600 dark:text-yellow-400 animate-in fade-in duration-200">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="text-sm font-bold">Reiniciando...</span>
                    </div>
                )}

                {/* Idle State */}
                {restartState === 'idle' && status === 'offline' && (
                    <button
                        onClick={handleRestart}
                        className="flex-1 py-2.5 px-4 text-sm font-bold rounded-lg transition-all bg-transparent border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                        Reiniciar Agente
                    </button>
                )}

                {restartState === 'idle' && status === 'available' && (
                    <Link href="/chat" className="flex-1">
                        <button className="w-full py-2.5 px-4 text-sm font-bold rounded-lg transition-all bg-primary hover:bg-[#0524a8] text-white shadow-lg shadow-primary/20 active:scale-95">
                            Iniciar Conversa
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
