import React from 'react';
import { FilterBar } from '@/components/agents/FilterBar';
import { AgentCard } from '@/components/agents/AgentCard';
import { Brain, Zap, Box } from 'lucide-react';

export default function AgentsPage() {
    return (
        <div className="max-w-7xl mx-auto py-2">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Selecione seu Agente</h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">Escolha um dos nossos agentes especializados para te auxiliar na sua jornada de trabalho.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Sistema Operacional
                    </span>
                </div>
            </div>

            <FilterBar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AgentCard
                    name="QA Criador de Cenários de Testes"
                    description="Especialista em geração automática de casos de teste complexos e documentação BDD."
                    version="v1.0"
                    tags={['BDD', 'Gherkin']}
                    icon={<Brain className="w-8 h-8" />}
                    status="available"
                    isNew={true}
                />
                <AgentCard
                    name="QA Funcional Pro"
                    description="Especialista em testes de regressão e validação funcional ponta-a-ponta."
                    version="v2.4"
                    tags={['Selenium', 'Cypress']}
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuB7DJU_qa6KB5mIuPAy3TVmC81UzIM32ZTHAk8zAfRJQyD8yp17rQ62leql9jm2Ii3FknfdPgGY-ey8V_6_u-Duce3G7OwVcxql08gQdXA275tRGywU0eXi8F1cf1J6lxJ9TIhcdtFZ6-iMUxUWsos9CaaEh4eNm1ATFcweA2hGShOz8ZvU4LS0E9H3D_PqVtdiMzLXBnWg68B2MrDIETC7_rHOQ4WGbS_KAO3ZlUF2rORP9SoyeOuYkoO1QSxy9qRBvhrS9TrStqI-"
                    status="available"
                    lastRun="Última execução: 2h atrás"
                />
                <AgentCard
                    name="Security Sentinel"
                    description="Varredura profunda de vulnerabilidades OWASP e testes de penetração."
                    version="v1.8"
                    tags={['OWASP', 'Python']}
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBNbz9Iiao8WUlfXaGfxLuu7O4cN-dsMHO4kFjeChxq__WLjLqfFb0iQie2DA4PKKJfZuXirhXLmmPWGIDPsz6tKTs4VZSdUKIDIM7nuS5JCyhLQHgXZZjM7mK1IbswFqiFRymskJt2ohTMMrzuTM__LWjxev69JyNqwAa8yDskmPzSe8kbfd5YNZP-qQ0BuSDyG6sujaTKaEbJicqGDI9rEZolwCAi-p4opoDYe3R02aHq3kWFnS852F5aD2NSg5bS0DSJtPveElTt"
                    status="available"
                    isHighPriority={true}
                />
                <AgentCard
                    name="Load Master"
                    description="Testes de carga distribuídos para infraestrutura escalável."
                    version="v3.0 Beta"
                    tags={['K6', 'Docker']}
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAwmdBemacwJ3fNSMkEGjP94TjPS4hVCVXKqjvGX2ABKgyTHeMh4o4fR41T91nG3uJITU3jzCGlwy4ygDeEG7gBBfVylg41hwhvAjqp8yzKssT8gs1AJnihbQcFOHaiyiw7DDER6HLw4LGLVj04W1QYgaQfa7jN1IDfbxEdsR3IM2OcMN1VigwW7rScnnEBP1MOkmbq5N2DrwRsSdolEbngvUfotN76uIOW7nbbf7PvY0ZYyTWxrFGDFqgH0MtO0ovyOPlxR_eK2Pa5"
                    status="offline"
                />
            </div>
        </div>
    );
}
