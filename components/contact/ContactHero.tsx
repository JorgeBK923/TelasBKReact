import { MailOpen } from "lucide-react";

export function ContactHero() {
    return (
        <section className="relative pt-8 pb-6 sm:pt-16 sm:pb-12">
            <div className="max-w-[960px] mx-auto text-center">
                <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mb-8">
                    <MailOpen className="size-8" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                    Como podemos ajudar?
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Nossa equipe de especialistas em QA está pronta para escalar seus testes. Tire suas dúvidas, reporte problemas ou peça uma demonstração personalizada.
                </p>
            </div>
        </section>
    );
}
