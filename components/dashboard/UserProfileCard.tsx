"use client";

import { Calendar, Clock } from "lucide-react";

export function UserProfileCard() {
    return (
        <div className="w-full bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col md:flex-row gap-6 items-start md:items-start justify-between transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                        <div
                            className="size-20 rounded-full bg-cover bg-center ring-4 ring-slate-50 dark:ring-white/5"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrzo0FcvIunHSpnEoPZ8JbTeyUACHHixGsutFCzHk5sHWyA9u5blbx8Dz6Nn9tZcU9w3rnrU0pYXoLtsXxhHW3zJT7wW1IVym5fOKisUZwh4M-ppc3f7RHZlsufb5BjepVXMn08hUkUPSqSmRXNru5FyUi6feECZjTv-ML92XcvkSojBtITpKIDnrNxj0n5TUiGN4R8SghPXOjrN7pJlklAUEjISeh7l8lgs7Hu54swag2xMgIJVujvL8DbqZsMAq6zeFtwzDeCLI')",
                            }}
                            aria-label="Foto de perfil de Ricardo Dev"
                        />
                        <div
                            className="absolute bottom-0 right-0 bg-green-500 size-4 border-2 border-white dark:border-card-dark rounded-full"
                            title="Online"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary/5 text-xs font-semibold transition-colors">
                            Alterar Foto
                        </button>
                        <button className="px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 text-xs font-semibold transition-colors">
                            Remover
                        </button>
                    </div>
                    <p className="text-[10px] text-slate-400 text-center leading-tight w-24">
                        JPG, PNG até 5MB
                    </p>
                </div>
                <div className="flex flex-col mt-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Ricardo Dev
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wide">
                            Plano Enterprise
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400">
                        ricardo@bugkillers.ai
                    </p>
                    <div className="flex flex-col gap-1 mt-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <Calendar className="size-3.5" />
                            Membro desde Janeiro 2026
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="size-3.5" />
                            Última atividade: há 5 minutos
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto mt-2 md:mt-0">
                <button className="flex-1 md:flex-none px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    Ver Perfil Público
                </button>
            </div>
        </div>
    );
}
