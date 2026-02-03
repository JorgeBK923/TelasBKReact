import {
    Calendar,
    Clock,
    Download,
    CheckCircle,
    Check,
    Heart,
    Copy,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import Link from "next/link";

export default function BillingPage() {
    return (
        <DashboardLayout activePage="plano">
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
                    className="flex-none px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap"
                >
                    Plano
                </Link>
                <Link
                    href="/dashboard"
                    className="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap"
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
                                    className="size-20 rounded-full bg-cover bg-center ring-4 ring-slate-50 dark:ring-white/5"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrzo0FcvIunHSpnEoPZ8JbTeyUACHHixGsutFCzHk5sHWyA9u5blbx8Dz6Nn9tZcU9w3rnrU0pYXoLtsXxhHW3zJT7wW1IVym5fOKisUZwh4M-ppc3f7RHZlsufb5BjepVXMn08hUkUPSqSmRXNru5FyUi6feECZjTv-ML92XcvkSojBtITpKIDnrNxj0n5TUiGN4R8SghPXOjrN7pJlklAUEjISeh7l8lgs7Hu54swag2xMgIJVujvL8DbqZsMAq6zeFtwzDeCLI')",
                                    }}
                                    aria-label="Ricardo Dev profile picture"
                                ></div>
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

                {/* Billing Header */}
                <div className="flex flex-col gap-1 mt-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Plano &amp; Faturamento
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Gerencie seu nível de assinatura, métodos de pagamento e faturas.
                    </p>
                </div>

                {/* Current Plan Card */}
                <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-[0.02] pointer-events-none transform translate-x-10 -translate-y-10">
                        <CheckCircle className="size-[200px] text-primary" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    Plano Enterprise
                                </h4>
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded uppercase flex items-center gap-1.5">
                                    <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                                    ATIVO
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                                Renovação automática em{" "}
                                <span className="font-semibold text-slate-900 dark:text-white">
                                    01 Fev 2026
                                </span>
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 mb-6">
                                {[
                                    "Cenários Ilimitados",
                                    "Até 20 membros",
                                    "Suporte Prioritário 24/7",
                                    "API Dedicada",
                                    "Histórico de 1 ano",
                                    "SSO & Auditoria",
                                ].map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                                    >
                                        <CheckCircle className="size-4.5 text-green-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end justify-between min-w-[200px]">
                            <div className="text-right mb-4">
                                <div className="text-4xl font-bold text-slate-900 dark:text-white">
                                    R$ 497
                                    <span className="text-lg font-medium text-slate-500">
                                        /mês
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">
                                    Cobrado mensalmente
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <button className="flex-1 px-5 py-2.5 rounded-xl border border-primary text-primary hover:bg-primary/5 text-sm font-semibold transition-colors">
                                    Comparar Planos
                                </button>
                                <button className="flex-1 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-semibold shadow-lg transition-colors">
                                    Gerenciar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plan Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Free Plan */}
                    <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-slate-200 dark:border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            Free
                        </h4>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                            R$ 0
                            <span className="text-sm font-normal text-slate-500">/mês</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Para hobbyists.</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2">
                                <Check className="size-4" />5 Cenários
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="size-4" />
                                100 Execuções
                            </li>
                        </ul>
                    </div>

                    {/* Startup Plan */}
                    <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-slate-200 dark:border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            Startup
                        </h4>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                            R$ 97
                            <span className="text-sm font-normal text-slate-500">/mês</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                            Para pequenas equipes.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2">
                                <Check className="size-4" />
                                20 Cenários
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="size-4" />
                                10k Execuções
                            </li>
                        </ul>
                    </div>

                    {/* Enterprise Plan (Current) */}
                    <div className="bg-white dark:bg-card-dark rounded-xl p-6 border-2 border-primary relative shadow-glow">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Seu Plano
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white text-primary">
                            Enterprise
                        </h4>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                            R$ 497
                            <span className="text-sm font-normal text-slate-500">/mês</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Poder total.</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-primary" />
                                Ilimitado
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-primary" />
                                Suporte VIP
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Invoice History & Payment Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Invoice Table */}
                    <div className="lg:col-span-2 bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 flex flex-col">
                        <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900 dark:text-white">
                                Histórico de Faturas
                            </h3>
                            <button className="text-xs font-semibold text-primary hover:text-primary/80">
                                Baixar todas
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 bg-slate-50 dark:bg-white/5 uppercase">
                                    <tr>
                                        <th className="px-6 py-3 font-medium">Data</th>
                                        <th className="px-6 py-3 font-medium">Descrição</th>
                                        <th className="px-6 py-3 font-medium">Valor</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium text-right">Ação</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                    {[
                                        { date: "01 Jan 2026" },
                                        { date: "01 Dez 2025" },
                                        { date: "01 Nov 2025" },
                                    ].map((invoice, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                                                {invoice.date}
                                            </td>
                                            <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">
                                                Plano Enterprise
                                            </td>
                                            <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                                                R$ 497,00
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                                    Pago
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                    <Download className="size-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Payment Method & Referral */}
                    <div className="flex flex-col gap-6">
                        {/* Payment Method Card */}
                        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                                Método de Pagamento
                            </h4>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-8 bg-slate-100 dark:bg-white/10 rounded flex items-center justify-center border border-slate-200 dark:border-white/10">
                                    <span className="font-bold text-blue-800 dark:text-blue-400 italic text-xs">
                                        VISA
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                        Visa final 4532
                                    </p>
                                    <p className="text-xs text-slate-500">Expira em 12/2028</p>
                                </div>
                            </div>
                            <button className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                Alterar Cartão
                            </button>
                        </div>

                        {/* Referral Card */}
                        <div className="bg-gradient-to-br from-indigo-500 to-primary rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
                            <div className="absolute right-0 top-0 opacity-20 pointer-events-none">
                                <span className="text-[100px]">🎁</span>
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                    Indique e Ganhe <Heart className="size-4.5" />
                                </h4>
                                <p className="text-white/90 text-sm mb-4">
                                    Convide amigos e ganhe{" "}
                                    <strong className="text-white">R$ 50</strong> em crédito para
                                    cada nova assinatura.
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        className="w-full bg-white/20 border-transparent rounded text-xs text-white placeholder-white/50 px-3 py-2 focus:ring-0"
                                        readOnly
                                        value="bugkillers.ai/u/ricardo"
                                    />
                                    <button
                                        className="bg-white text-primary p-2 rounded hover:bg-white/90 transition-colors"
                                        title="Copiar link"
                                    >
                                        <Copy className="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center gap-6 mt-4">
                    <Link
                        href="#"
                        className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                        Pausar assinatura
                    </Link>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <Link
                        href="#"
                        className="text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                    >
                        Cancelar assinatura
                    </Link>
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
