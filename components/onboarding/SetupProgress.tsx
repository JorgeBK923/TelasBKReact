import React from 'react';

interface SetupProgressProps {
    percentage: number;
}

export function SetupProgress({ percentage }: SetupProgressProps) {
    return (
        <div className="flex flex-col gap-3 mb-10">
            <div className="flex justify-between items-end">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    Status da Instalação
                </span>
                <span className="text-slate-900 dark:text-white font-bold text-xl">
                    {percentage}%
                </span>
            </div>
            <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary rounded-full relative shadow-[0_0_15px_rgba(0,51,255,0.5)] transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                >
                    <div
                        className="absolute inset-0 animate-shimmer"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
