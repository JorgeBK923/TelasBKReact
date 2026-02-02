export function FAQ() {
    return (
        <section className="py-12 px-4 bg-white dark:bg-slate-900/20 transition-colors duration-200">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
                    Perguntas Frequentes
                </h3>
                <div className="space-y-4">
                    <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm dark:shadow-none">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                            Q: Preciso usar BDD obrigatoriamente?
                        </h4>
                        <p className="text-slate-600 dark:text-gray-400">
                            A: Não! Você escolhe entre BDD/Gherkin ou Checklist (manual). O agente gera ambos automaticamente para você decidir qual usar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
