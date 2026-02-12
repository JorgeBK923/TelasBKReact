"use client";

import { useState, useCallback } from "react";
import { X, CreditCard, Loader2, CheckCircle } from "lucide-react";

interface UpdateCardModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function UpdateCardModal({ isOpen, onClose }: UpdateCardModalProps) {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Luhn algorithm for card validation
    const isValidCardNumber = (num: string): boolean => {
        const cleanNum = num.replace(/\s/g, "");
        if (cleanNum.length !== 16) return false;

        let sum = 0;
        let isEven = false;

        for (let i = cleanNum.length - 1; i >= 0; i--) {
            let digit = parseInt(cleanNum.charAt(i), 10);
            if (isEven) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            isEven = !isEven;
        }

        return sum % 10 === 0;
    };

    const isValidExpiry = (exp: string): boolean => {
        if (!/^\d{2}\/\d{2}$/.test(exp)) return false;
        const [month, year] = exp.split("/");
        const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
        const now = new Date();
        return expDate > now;
    };

    const formatCardNumber = (value: string): string => {
        const clean = value.replace(/\D/g, "");
        const parts = clean.match(/.{1,4}/g);
        return parts ? parts.join(" ") : clean;
    };

    const formatExpiry = (value: string): string => {
        const clean = value.replace(/\D/g, "");
        if (clean.length >= 2) {
            return `${clean.slice(0, 2)}/${clean.slice(2, 4)}`;
        }
        return clean;
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!cardNumber.trim() || !isValidCardNumber(cardNumber)) {
            newErrors.cardNumber = "Número de cartão inválido";
        }

        if (!cardName.trim()) {
            newErrors.cardName = "Nome obrigatório";
        }

        if (!expiry.trim() || !isValidExpiry(expiry)) {
            newErrors.expiry = "Data inválida ou expirada";
        }

        if (!cvv.trim() || cvv.length < 3) {
            newErrors.cvv = "CVV inválido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = useCallback(async () => {
        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // Simulate tokenization and API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setIsLoading(false);
            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setCardNumber("");
                setCardName("");
                setExpiry("");
                setCvv("");
                onClose();
            }, 1500);
        } catch {
            setIsLoading(false);
            setErrors({ cardNumber: "Erro ao processar o cartão. Tente novamente." });
        }
    }, [cardNumber, cardName, expiry, cvv, onClose]);

    const handleClose = () => {
        if (!isLoading) {
            setCardNumber("");
            setCardName("");
            setExpiry("");
            setCvv("");
            setErrors({});
            setIsSuccess(false);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <CreditCard className="size-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Alterar Cartão
                            </h3>
                            <p className="text-xs text-slate-500">
                                Seus dados são criptografados e seguros
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        disabled={isLoading}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
                    >
                        <X className="size-5 text-slate-500" />
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    {isSuccess ? (
                        <div className="py-8 flex flex-col items-center justify-center text-center">
                            <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <CheckCircle className="size-8 text-green-600" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                Cartão atualizado!
                            </h4>
                            <p className="text-sm text-slate-500">
                                Seu novo cartão foi salvo com sucesso.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Card Number */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                    Número do Cartão
                                </label>
                                <input
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardNumber}
                                    onChange={(e) =>
                                        setCardNumber(formatCardNumber(e.target.value))
                                    }
                                    maxLength={19}
                                    className={`w-full h-12 px-4 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                                        errors.cardNumber
                                            ? "border-red-500"
                                            : "border-slate-200 dark:border-slate-700"
                                    }`}
                                />
                                {errors.cardNumber && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.cardNumber}
                                    </p>
                                )}
                            </div>

                            {/* Card Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                    Nome no Cartão
                                </label>
                                <input
                                    type="text"
                                    placeholder="Como aparece no cartão"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value.toUpperCase())}
                                    className={`w-full h-12 px-4 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                                        errors.cardName
                                            ? "border-red-500"
                                            : "border-slate-200 dark:border-slate-700"
                                    }`}
                                />
                                {errors.cardName && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.cardName}
                                    </p>
                                )}
                            </div>

                            {/* Expiry and CVV */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                        Validade (MM/AA)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="MM/AA"
                                        value={expiry}
                                        onChange={(e) =>
                                            setExpiry(formatExpiry(e.target.value))
                                        }
                                        maxLength={5}
                                        className={`w-full h-12 px-4 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                                            errors.expiry
                                                ? "border-red-500"
                                                : "border-slate-200 dark:border-slate-700"
                                        }`}
                                    />
                                    {errors.expiry && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.expiry}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                        CVV
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={(e) =>
                                            setCvv(e.target.value.replace(/\D/g, ""))
                                        }
                                        maxLength={4}
                                        className={`w-full h-12 px-4 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                                            errors.cvv
                                                ? "border-red-500"
                                                : "border-slate-200 dark:border-slate-700"
                                        }`}
                                    />
                                    {errors.cvv && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.cvv}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                        <span className="font-semibold text-slate-900 dark:text-white">
                                            Segurança:
                                        </span>{" "}
                                        Os dados são enviados diretamente ao gateway de pagamento
                                        e tokenizados. Nunca armazenamos seus dados completos.
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                {!isSuccess && (
                    <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
                        <button
                            onClick={handleClose}
                            disabled={isLoading}
                            className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white text-sm font-semibold transition-colors disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Salvando...
                                </>
                            ) : (
                                "Salvar Cartão"
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
