"use client";

import {
    Calendar,
    Clock,
    Download,
    Bot,
    Wand2,
    Bug,
    Shield,
    Gauge,
    Info,
} from "lucide-react";
import Image from "next/image";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function DashboardPage() {
    const { user } = useUser();
    return (
        <DashboardLayout>
            {/* Mobile Navigation Pills */}
            <div className="md:hidden flex overflow-x-auto pb-2 gap-2 no-scrollbar mb-6 -mx-4 px-4">
                <Link
                    href="#"
                    className="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap"
                >
                    Dados
                </Link>
                <Link
                    href="/billing"
                    className="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap"
                >
                    Plano
                </Link>
                <Link
                    href="/dashboard"
                    className="flex-none px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap"
                >
                    Uso
                </Link>
                <Link
                    href="#"
                    className="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap"
                >
                    Segurança
                </Link>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col gap-6">
                {/* Profile Card */}
                <div className="w-full bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col md:flex-row gap-6 items-start md:items-start justify-between transition-colors">
                    <div className="flex flex-col sm:flex-row items-start gap-5">
                        <div className="flex flex-col items-center gap-3">
                            <div className="relative">
                                <div
                                    className="relative size-20 rounded-full overflow-hidden ring-4 ring-slate-50 dark:ring-white/5"
                                    aria-label={`Foto de perfil de ${user.name}`}
                                >
                                    <Image
                                        src={user.avatarUrl}
                                        alt={user.name}
                                        fill
                                        sizes="80px"
                                        className="object-cover"
                                    />
                                </div>
                                <div
                                    className="absolute bottom-0 right-0 bg-green-500 size-4 border-2 border-white dark:border-card-dark rounded-full"
                                    title="Online"
                                ></div>
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
                                    {user.name}
                                </h2>
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wide">
                                    Plano {user.plan}
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400">
                                {user.email}
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

                {/* Usage Header */}
                <div className="flex justify-between items-end gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            Uso &amp; Limites
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            Acompanhe o consumo de recursos e a performance dos seus agentes.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                        <Download className="size-4.5" />
                        Exportar Relatório CSV
                    </button>
                </div>

                {/* Usage Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Scenarios Card */}
                    <div className="col-span-1 lg:col-span-2 bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                    Cenários Gerados
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Consumo mensal do seu plano Enterprise
                                </p>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold uppercase tracking-wide">
                                Ciclo Atual
                            </span>
                        </div>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">
                                347
                            </span>
                            <span className="text-lg text-slate-400 mb-1 font-medium">
                                de ∞
                            </span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 mb-6">
                            <div
                                className="bg-primary h-3 rounded-full relative"
                                style={{ width: "25%" }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/50 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-white/5 pt-6">
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                    Agentes Ativos
                                </p>
                                <div className="flex items-center gap-2">
                                    <Bot className="size-5 text-green-500" />
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                                        8
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                    Execuções Hoje
                                </p>
                                <div className="text-xl font-bold text-slate-900 dark:text-white">
                                    42
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                    Tempo Médio
                                </p>
                                <div className="text-xl font-bold text-slate-900 dark:text-white">
                                    1.2s
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Savings Card */}
                    <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-xl shadow-lg p-6 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-4 -translate-y-4">
                            <span className="text-[140px]">💰</span>
                        </div>
                        <div className="relative z-10">
                            <h4 className="font-bold text-white text-lg mb-1 flex items-center gap-2">
                                💰 Economia Estimada
                            </h4>
                            <p className="text-indigo-200 text-xs mb-6">
                                Impacto gerado pela BugKillers este mês.
                            </p>
                            <div className="space-y-5">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">~58h</div>
                                    <p className="text-sm text-indigo-200 font-medium">
                                        Economizadas em QA manual
                                    </p>
                                </div>
                                <div className="w-full h-[1px] bg-white/10"></div>
                                <div>
                                    <div className="text-3xl font-bold text-green-400 mb-1">
                                        R$ 8.700
                                    </div>
                                    <p className="text-sm text-indigo-200 font-medium">
                                        Em custos operacionais evitados
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 text-xs text-indigo-200">
                                <Info className="size-4" />
                                Baseado na média de mercado
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Usage History Chart */}
                    <div className="lg:col-span-2 bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="font-bold text-slate-900 dark:text-white">
                                Histórico de Uso
                            </h4>
                            <select className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs rounded-lg px-2 py-1.5 focus:ring-primary focus:border-primary">
                                <option>Últimos 6 meses</option>
                                <option>Últimos 30 dias</option>
                                <option>Este ano</option>
                            </select>
                        </div>
                        <div className="relative h-64 w-full">
                            {/* Y-axis labels */}
                            <div className="absolute inset-0 top-0 bottom-6 flex flex-col justify-between">
                                {[400, 300, 200, 100, 0].map((value) => (
                                    <div key={value} className="flex items-center w-full">
                                        <span className="text-[10px] text-slate-400 w-6 text-right mr-3 font-medium">
                                            {value}
                                        </span>
                                        <div className="flex-1 h-px border-t border-dashed border-slate-200 dark:border-slate-700/50"></div>
                                    </div>
                                ))}
                            </div>
                            {/* Bars */}
                            <div className="absolute inset-0 pl-9 pb-6 pt-1.5 flex items-end justify-between gap-2 md:gap-4">
                                {[
                                    { month: "Ago", value: 58, height: "15%", opacity: "30" },
                                    { month: "Set", value: 124, height: "30%", opacity: "40" },
                                    { month: "Out", value: 176, height: "45%", opacity: "50" },
                                    { month: "Nov", value: 235, height: "60%", opacity: "60" },
                                    { month: "Dez", value: 290, height: "72%", opacity: "80" },
                                ].map((item) => (
                                    <div
                                        key={item.month}
                                        className="flex flex-col items-center justify-end h-full w-full group"
                                    >
                                        <div
                                            className={`w-full bg-primary/${item.opacity} hover:bg-primary transition-all duration-300 rounded-t-sm relative`}
                                            style={{ height: item.height }}
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none shadow-lg">
                                                {item.value} Cenários
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-medium text-slate-400 mt-3">
                                            {item.month}
                                        </span>
                                    </div>
                                ))}
                                {/* Current month */}
                                <div className="flex flex-col items-center justify-end h-full w-full relative">
                                    <div className="absolute bottom-[87%] mb-3 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up">
                                        <div className="bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl shadow-blue-900/20 whitespace-nowrap flex flex-col items-center">
                                            347 Cenários
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900"></div>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full bg-primary rounded-t-sm relative shadow-lg shadow-blue-500/20"
                                        style={{ height: "87%" }}
                                    ></div>
                                    <span className="text-[10px] font-bold text-slate-900 dark:text-white mt-3">
                                        Jan
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agent Performance */}
                    <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6 flex flex-col h-full">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">
                            Performance por Agente
                        </h4>
                        <div className="flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar flex-1">
                            {[
                                {
                                    name: "QA Criador de Cenários",
                                    value: 184,
                                    color: "indigo",
                                    width: "65%",
                                    icon: <Wand2 className="size-5" />,
                                },
                                {
                                    name: "QA Funcional Pro",
                                    value: 96,
                                    color: "emerald",
                                    width: "45%",
                                    icon: <Bug className="size-5" />,
                                },
                                {
                                    name: "Security Audit Bot",
                                    value: 45,
                                    color: "amber",
                                    width: "25%",
                                    icon: <Shield className="size-5" />,
                                },
                                {
                                    name: "Performance Monitor",
                                    value: 22,
                                    color: "pink",
                                    width: "12%",
                                    icon: <Gauge className="size-5" />,
                                },
                            ].map((agent) => (
                                <div key={agent.name} className="flex items-center gap-4">
                                    <div
                                        className={`size-10 rounded-lg bg-${agent.color}-100 dark:bg-${agent.color}-900/30 text-${agent.color}-600 dark:text-${agent.color}-400 flex items-center justify-center flex-none`}
                                    >
                                        {agent.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                                {agent.name}
                                            </p>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                                                {agent.value}
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                                            <div
                                                className={`bg-${agent.color}-500 h-1.5 rounded-full`}
                                                style={{ width: agent.width }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            Ver todos os agentes
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
        </DashboardLayout>
    );
}
