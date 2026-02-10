"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "Como funciona o período de teste grátis?",
        answer: "Você tem 14 dias para testar todas as funcionalidades do plano Pro. Não pedimos cartão de crédito para iniciar o teste. Ao final, você pode escolher o plano que melhor se adapta à sua equipe.",
    },
    {
        question: "Possuem integrações com Jira e Slack?",
        answer: "Sim! O BugKillers se integra nativamente com Jira, Trello, Slack, GitHub e GitLab. Você pode configurar notificações automáticas e criar tickets diretamente da nossa plataforma.",
    },
    {
        question: "Meus dados estão seguros?",
        answer: "Segurança é nossa prioridade. Utilizamos criptografia AES-256 em repouso e TLS 1.3 em trânsito. Somos compatíveis com SOC 2 Tipo II e GDPR.",
    },
    {
        question: "Oferecem suporte técnico dedicado?",
        answer: "Todos os planos incluem suporte via email. Planos Enterprise contam com um Gerente de Sucesso do Cliente (CSM) dedicado e SLA de resposta prioritário.",
    },
    {
        question: "Qual é a política de cancelamento?",
        answer: "Você pode cancelar sua assinatura a qualquer momento através do painel de controle. Não há contratos de longo prazo ou multas para os planos mensais.",
    },
];

export function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-12 bg-white dark:bg-card-dark/50 border-t border-slate-200 dark:border-white/5 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Perguntas Frequentes</h2>
                    <p className="text-slate-500 dark:text-slate-400">Respostas rápidas para as dúvidas mais comuns.</p>
                </div>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                            <button
                                className="flex cursor-pointer items-center justify-between gap-1.5 p-5 w-full text-left text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-semibold text-base sm:text-lg">{item.question}</h3>
                                <ChevronDown className={`size-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} />
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5">
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
