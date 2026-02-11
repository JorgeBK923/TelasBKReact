import React from 'react';
import { CheckCircle, Lock } from 'lucide-react';

const includedFeatures = [
    '5 Agentes de IA simultâneos',
    'Testes Ilimitados',
    'Depuração avançada (Debug Mode)',
    'Integração CI/CD Completa',
    'Suporte Prioritário',
];

export function OrderSummary() {
    return (
        <div className="bg-slate-100 dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-2xl p-6 lg:p-8 lg:sticky lg:top-28">
            <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-6">
                Resumo do Pedido
            </h2>

            <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-xl">
                        Plano Professional
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Cobrança mensal
                    </p>
                </div>
                <div className="text-right">
                    <span className="block text-2xl font-black text-slate-900 dark:text-white">R$ 80</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">/mês</span>
                </div>
            </div>

            <div className="space-y-4 mb-5">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    O que está incluído:
                </p>
                <ul className="space-y-3">
                    {includedFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-2 mb-8">
                <Lock className="text-primary w-5 h-5" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Cancele a qualquer momento direto no painel.
                </span>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Subtotal</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">R$ 80,00</span>
                </div>
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-dashed border-slate-300 dark:border-slate-600">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Impostos</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">R$ 0,00</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-slate-900 dark:text-white">Total a pagar</span>
                    <span className="text-xl font-black text-primary">R$ 80,00</span>
                </div>
            </div>

            <div className="mt-6 text-center">
                <a
                    className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors underline decoration-slate-300 underline-offset-4"
                    href="#"
                >
                    Alterar plano selecionado
                </a>
            </div>
        </div>
    );
}
