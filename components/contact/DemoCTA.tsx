"use client";

import { useState } from "react";
import { ScheduleDemoModal } from "./ScheduleDemoModal";

export function DemoCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative py-16 bg-blue-50/50 dark:bg-slate-900 overflow-hidden -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 rounded-xl">
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#0000ff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Prefere ver o produto em ação?</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                    Nossos especialistas podem te mostrar como o BugKillers se adapta ao workflow da sua equipe em uma demonstração ao vivo de 15 minutos.
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white! font-bold text-base transition-all"
                >
                    Agendar Demo
                </button>
            </div>

            <ScheduleDemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
