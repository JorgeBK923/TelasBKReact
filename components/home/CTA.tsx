export function CTA() {
    return (
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Pare de Queimar Budget.
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Libere seus QAs para fazerem o que realmente importa: garantir qualidade, não escrever documentação.
                </p>
                <button className="bg-white text-blue-600 text-lg font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    Começar Grátis Agora
                </button>
                <p className="mt-4 text-sm text-blue-200">
                    Sem cartão de crédito necessário.
                </p>
            </div>
        </section>
    );
}
