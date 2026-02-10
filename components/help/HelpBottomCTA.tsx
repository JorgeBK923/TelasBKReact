import Link from "next/link";
import { MessageSquare, Calendar } from "lucide-react";

export function HelpBottomCTA() {
    return (
        <section className="mb-8">
            <div className="bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-white/5 p-8 sm:p-12 text-center shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Não encontrou o que procurava?</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                    Nossa equipe de suporte está pronta para ajudar você a resolver qualquer problema técnico ou dúvida sobre faturamento.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="h-12 px-8 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        <MessageSquare className="size-5" />
                        Falar com Suporte
                    </Link>
                    <button className="h-12 px-8 rounded-xl bg-white dark:bg-card-dark border-2 border-primary text-primary font-bold text-sm hover:bg-blue-50 dark:hover:bg-primary/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                        <Calendar className="size-5" />
                        Agendar Demo
                    </button>
                </div>
            </div>
        </section>
    );
}
