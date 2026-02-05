"use client";

import { X, Shield, Smartphone, Copy, CheckCircle2, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

interface TwoFactorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TwoFactorModal({ isOpen, onClose }: TwoFactorModalProps) {
    const [step, setStep] = useState<"setup" | "verify" | "recovery">("setup");
    const [code, setCode] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showCopied, setShowCopied] = useState(false);

    const backupCodes = [
        "8234-1920", "9912-8823", "1234-5678", "8823-1122",
        "7711-2233", "6655-4433", "3322-1100", "5544-3322",
        "1122-3344", "9988-7766"
    ];

    useEffect(() => {
        if (isOpen) {
            setStep("setup");
            setCode("");
            setError(null);
        }
    }, [isOpen]);

    const handleVerify = () => {
        if (code.length !== 6) {
            setError("O código deve ter 6 dígitos.");
            return;
        }

        setIsVerifying(true);
        setError(null);

        // Simulate verification
        setTimeout(() => {
            setIsVerifying(false);
            setStep("recovery");
        }, 1500);
    };

    const copyToClipboard = () => {
        const text = backupCodes.join("\n");
        navigator.clipboard.writeText(text);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-card-dark w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                            <Shield className="size-4" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Ativar 2FA
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 dark:text-slate-500 transition-colors"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {step === "setup" && (
                        <div className="space-y-6 text-center animate-in slide-in-from-right-4 duration-300">
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-white rounded-xl border-2 border-slate-100 shadow-inner">
                                    {/* Simulated QR Code */}
                                    <div className="size-40 bg-slate-100 rounded flex items-center justify-center border-4 border-slate-200">
                                        <div className="grid grid-cols-4 gap-1 opacity-20">
                                            {[...Array(16)].map((_, i) => (
                                                <div key={i} className={`size-6 ${i % 3 === 0 ? 'bg-black' : 'bg-transparent'}`} />
                                            ))}
                                        </div>
                                        <div className="absolute flex flex-col items-center">
                                            < स्मार्टफोन className="size-10 text-slate-300 mb-1" />
                                            <span className="text-[8px] font-bold text-slate-400">QR CODE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                        Escaneie o QR Code
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[280px]">
                                        Use o Google Authenticator ou Authy para escanear a imagem acima.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 text-left border border-slate-100 dark:border-white/5">
                                <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                                    Não consegue ler o código?
                                </p>
                                <div className="flex items-center justify-between gap-2">
                                    <code className="text-[10px] text-slate-500 font-mono tracking-widest bg-white dark:bg-black/20 p-1 rounded border border-slate-200 dark:border-white/10 uppercase">
                                        jbsr wk3n 2p4m lk89
                                    </code>
                                    <button className="text-[10px] font-bold text-primary hover:underline">
                                        Copiar chave
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => setStep("verify")}
                                className="w-full h-11 rounded-xl bg-primary text-white text-sm font-bold shadow-glow hover:bg-primary/90 transition-all"
                            >
                                Já escaneei o código
                            </button>
                        </div>
                    )}

                    {step === "verify" && (
                        <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                                    Verificação de Código
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Digite o código de 6 dígitos gerado pelo seu aplicativo.
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={code}
                                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                                    className="w-48 h-14 text-center text-2xl font-bold tracking-[0.5em] rounded-xl border-2 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white outline-none focus:border-primary transition-all"
                                    placeholder="000000"
                                    autoFocus
                                />
                            </div>

                            {error && (
                                <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-xl border border-red-100 dark:border-red-500/20">
                                    <AlertCircle className="size-4" />
                                    <span className="text-xs font-medium">{error}</span>
                                </div>
                            )}

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleVerify}
                                    disabled={isVerifying || code.length < 6}
                                    className={`w-full h-11 rounded-xl bg-primary text-white text-sm font-bold shadow-glow transition-all flex items-center justify-center gap-2 ${isVerifying || code.length < 6 ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 active:scale-95'
                                        }`}
                                >
                                    {isVerifying ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin" />
                                            Verificando...
                                        </>
                                    ) : (
                                        "Ativar 2FA agora"
                                    )}
                                </button>
                                <button
                                    onClick={() => setStep("setup")}
                                    className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                >
                                    Voltar para o QR Code
                                </button>
                            </div>
                        </div>
                    )}

                    {step === "recovery" && (
                        <div className="space-y-6 animate-in zoom-in-95 duration-300">
                            <div className="bg-green-50 dark:bg-green-500/10 rounded-xl p-4 border border-green-100 dark:border-green-500/20 text-center">
                                <CheckCircle2 className="size-10 text-green-500 mx-auto mb-2" />
                                <h4 className="text-md font-bold text-slate-900 dark:text-white">
                                    2FA Ativado com Sucesso!
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    Sua conta está muito mais protegida agora.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                        Códigos de Recuperação
                                    </p>
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                                    >
                                        {showCopied ? <><CheckCircle2 className="size-3" /> Copiado</> : <><Copy className="size-3" /> Copiar tudo</>}
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-2 p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-100 dark:border-white/5">
                                    {backupCodes.map((code, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-[8px] text-slate-400 font-bold">{idx + 1}.</span>
                                            <code className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold">
                                                {code}
                                            </code>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-500/10 p-3 rounded-lg border border-amber-100 dark:border-amber-500/20">
                                    <AlertCircle className="size-4 text-amber-600 flex-shrink-0" />
                                    <p className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">
                                        Salve estes códigos em um lugar seguro. Eles são a única forma de recuperar acesso se você perder o celular.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full h-11 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:opacity-90 transition-all"
                            >
                                Concluir ativação
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const स्मार्टफोन = Smartphone;
