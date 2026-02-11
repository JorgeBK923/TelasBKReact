'use client';

import React, { useState } from 'react';
import { CreditCard, HelpCircle, Lock, ArrowRight, Loader2 } from 'lucide-react';

export function PaymentForm() {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formatCardNumber = (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 16);
        return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    };

    const formatExpiry = (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 4);
        if (digits.length > 2) {
            return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
        }
        return digits;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                    Informações do Cartão
                </h2>
                <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="card-name">
                                Nome no Cartão
                            </label>
                            <div className="mt-1">
                                <input
                                    autoComplete="cc-name"
                                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 pl-4"
                                    id="card-name"
                                    placeholder="Como impresso no cartão"
                                    type="text"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="card-number">
                                Número do Cartão
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    autoComplete="cc-number"
                                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 pl-10"
                                    id="card-number"
                                    placeholder="0000 0000 0000 0000"
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                    disabled={isLoading}
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <CreditCard className="text-slate-400 w-5 h-5" />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <div className="flex gap-1 opacity-60 grayscale">
                                        <div className="h-4 w-6 bg-slate-400 rounded-sm" />
                                        <div className="h-4 w-6 bg-slate-400 rounded-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="expiration-date">
                                Validade (MM/AA)
                            </label>
                            <div className="mt-1">
                                <input
                                    autoComplete="cc-exp"
                                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 text-center"
                                    id="expiration-date"
                                    placeholder="MM / AA"
                                    type="text"
                                    value={expiry}
                                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="cvc">
                                CVV
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    autoComplete="csc"
                                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 text-center"
                                    id="cvc"
                                    placeholder="123"
                                    type="text"
                                    maxLength={4}
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                    disabled={isLoading}
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <HelpCircle className="text-slate-400 w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
                <Lock className="text-slate-400 dark:text-slate-500 w-5 h-5 shrink-0" />
                <p className="text-xs text-slate-500 dark:text-slate-400">
                    Seus dados de pagamento são processados de forma segura com criptografia de 256 bits. Não armazenamos os dados completos do seu cartão.
                </p>
            </div>

            <div className="pt-6">
                <button
                    className={`w-full rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-sm transition-all flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark ${
                        isLoading ? 'opacity-90 cursor-wait' : 'hover:brightness-110 active:scale-[0.98]'
                    }`}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processando...
                        </>
                    ) : (
                        <>
                            <span>Finalizar Pagamento</span>
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
