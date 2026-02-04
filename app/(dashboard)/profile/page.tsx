"use client";

import { UserProfileCard } from "@/components/dashboard/UserProfileCard";
import {
    Mail,
    Building2,
    Smartphone,
    CheckCircle,
    BadgeCheck,
    FileText,
    Check,
    PiggyBank,
    RefreshCw,
} from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {/* Profile Card */}
            <UserProfileCard />

            {/* Personal Data Section */}
            <div className="flex flex-col gap-1 mt-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Dados Pessoais
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Gerencie suas informações pessoais e detalhes da conta.
                </p>
            </div>

            <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 overflow-hidden transition-colors">
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Nome Completo
                        </label>
                        <input
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none"
                            type="text"
                            defaultValue="Ricardo Dev"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className="w-full h-12 pl-10 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none"
                                type="email"
                                defaultValue="ricardo@bugkillers.ai"
                            />
                            <CheckCircle
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 size-5"
                            />
                        </div>
                        <p className="text-xs text-green-600 dark:text-green-500 mt-1.5 font-medium flex items-center gap-1">
                            <BadgeCheck className="size-3.5" />
                            Email verificado
                        </p>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Empresa
                        </label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none"
                                type="text"
                                defaultValue="BugKillers Inc."
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Cargo
                        </label>
                        <input
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none"
                            type="text"
                            defaultValue="CTO & Co-Founder"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                            Telefone
                        </label>
                        <div className="relative">
                            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                            <input
                                className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none"
                                type="tel"
                                defaultValue="+55 11 99999-9999"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-6 md:px-8 py-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5 flex items-center justify-end gap-3">
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-500 text-sm font-semibold mr-2 animate-pulse">
                        <CheckCircle className="size-4" />
                        Perfil atualizado!
                    </div>
                    <button className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                        Cancelar
                    </button>
                    <button className="px-8 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold shadow-glow flex items-center gap-2 transition-all active:scale-95">
                        <RefreshCw className="size-5 animate-spin" />
                        Salvando...
                    </button>
                </div>
            </div>

            {/* Subscription Section */}
            <div className="flex flex-col gap-1 mt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Assinatura
                </h3>
            </div>

            <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                Plano Enterprise
                            </h4>
                            <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded uppercase flex items-center gap-1.5">
                                <span className="size-2 bg-green-500 rounded-full" />
                                🟢 ATIVO
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            Sua próxima cobrança será em{" "}
                            <span className="font-semibold text-slate-700 dark:text-white">
                                01 Fevereiro 2026
                            </span>
                        </p>
                    </div>
                    <div className="text-left md:text-right flex flex-col md:items-end gap-2">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                            R$ 497
                            <span className="text-sm font-normal text-slate-500">
                                /mês
                            </span>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            <FileText className="size-4" />
                            Ver histórico de faturas
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                            Inclui:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <Check className="text-green-500 size-5" />
                                Cenários ilimitados
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <Check className="text-green-500 size-5" />
                                Todos os agentes (atuais + futuros)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <Check className="text-green-500 size-5" />
                                Suporte prioritário
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-4 md:mt-0 content-end">
                        <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors">
                            Comparar Planos
                        </button>
                        <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                            Gerenciar Assinatura
                        </button>
                    </div>
                </div>
            </div>

            {/* Usage Overview Section */}
            <div className="flex flex-col gap-1 mt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Visão Geral de Uso
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-slate-900 dark:text-white">
                            Consumo de Janeiro 2026
                        </h4>
                        <span className="text-xs font-semibold bg-slate-100 dark:bg-white/10 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                            Mensal
                        </span>
                    </div>
                    <div className="flex items-end gap-1 mb-2">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">
                            347
                        </span>
                        <span className="text-sm text-slate-500 mb-1">
                            de ∞ execuções
                        </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2.5 mb-2 overflow-hidden">
                        <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: "15%" }}
                        />
                    </div>
                    <p className="text-xs text-slate-500">
                        O ciclo renova em 3 dias.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#059669] to-[#10b981] rounded-xl shadow-sm border border-green-600 p-6 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                        <PiggyBank className="size-28" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="font-bold text-white/90 flex items-center gap-2">
                            💰 Economia Estimada
                        </h4>
                        <p className="text-white/80 text-sm mt-1 mb-4">
                            Graças à automação BugKillers neste mês.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-white/70 uppercase font-semibold">
                                    Horas Salvas
                                </p>
                                <p className="text-2xl font-bold">124h</p>
                            </div>
                            <div>
                                <p className="text-xs text-white/70 uppercase font-semibold">
                                    Custo Evitado
                                </p>
                                <p className="text-2xl font-bold">R$ 12k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-red-600 dark:text-red-500 mb-4">
                    Zona de Perigo
                </h3>
                <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-white dark:bg-card-dark p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                            Deletar Conta
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
                            Ao deletar sua conta, todos os dados, configurações
                            e histórico de uso serão permanentemente removidos
                            dos nossos servidores. Esta ação acionará um modal
                            de confirmação e{" "}
                            <strong className="text-slate-700 dark:text-slate-300">
                                não pode ser desfeita
                            </strong>
                            .
                        </p>
                    </div>
                    <button className="shrink-0 px-5 py-2.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        Deletar Minha Conta
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto mt-6 mb-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    © 2026 BugKillers AI. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
