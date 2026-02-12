'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutGrid, ChevronDown, Bot, Bug, Gauge, Lock, ArrowRight } from 'lucide-react';
import { ObjectiveCard } from './ObjectiveCard';
import { useOnboarding } from '@/context/OnboardingContext';

const objectives = [
    { icon: Bot, label: 'Automação de Testes', value: 'automation' },
    { icon: Bug, label: 'Gestão de Bugs', value: 'management' },
    { icon: Gauge, label: 'Monitoramento', value: 'monitoring' },
] as const;

const roles = [
    { value: '', label: 'Selecione uma opção', disabled: true },
    { value: 'qa_engineer', label: 'Engenheiro(a) de QA', disabled: false },
    { value: 'developer', label: 'Desenvolvedor(a)', disabled: false },
    { value: 'product_manager', label: 'Gerente de Produto', disabled: false },
    { value: 'cto', label: 'CTO / Tech Lead', disabled: false },
];

export function PersonalizationForm() {
    const router = useRouter();
    const { setPersonalization } = useOnboarding();
    const [workspace, setWorkspace] = useState('');
    const [role, setRole] = useState('');
    const [objective, setObjective] = useState('automation');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        if (!workspace.trim()) newErrors.workspace = 'Informe o nome do workspace.';
        if (!role) newErrors.role = 'Selecione seu papel.';
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;
        setPersonalization({ workspaceName: workspace, role, objective });
        router.push('/setup');
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label
                    className="text-slate-900 dark:text-slate-200 text-sm font-semibold uppercase tracking-wide"
                    htmlFor="workspace"
                >
                    Nome do seu Workspace
                </label>
                <div className="relative">
                    <input
                        className={`w-full rounded-xl border ${errors.workspace ? 'border-red-500 dark:border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-slate-50 dark:bg-slate-800/50 px-4 h-14 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base outline-none`}
                        id="workspace"
                        placeholder="Ex: Time de QA Alpha"
                        type="text"
                        value={workspace}
                        onChange={(e) => { setWorkspace(e.target.value); setErrors((prev) => ({ ...prev, workspace: '' })); }}
                    />
                    <LayoutGrid className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
                </div>
                {errors.workspace && <p className="text-xs text-red-500 mt-1">{errors.workspace}</p>}
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="text-slate-900 dark:text-slate-200 text-sm font-semibold uppercase tracking-wide"
                    htmlFor="role"
                >
                    Qual seu papel principal?
                </label>
                <div className="relative">
                    <select
                        className={`w-full rounded-xl border ${errors.role ? 'border-red-500 dark:border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-slate-50 dark:bg-slate-800/50 px-4 h-14 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base outline-none appearance-none cursor-pointer`}
                        id="role"
                        value={role}
                        onChange={(e) => { setRole(e.target.value); setErrors((prev) => ({ ...prev, role: '' })); }}
                    >
                        {roles.map((r) => (
                            <option key={r.value} value={r.value} disabled={r.disabled}>
                                {r.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
                </div>
                {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role}</p>}
            </div>

            <div className="flex flex-col gap-3">
                <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold uppercase tracking-wide">
                    Qual seu objetivo principal?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {objectives.map((obj) => (
                        <ObjectiveCard
                            key={obj.value}
                            icon={obj.icon}
                            label={obj.label}
                            value={obj.value}
                            name="objective"
                            checked={objective === obj.value}
                            onChange={setObjective}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <div className="hidden sm:flex items-center gap-2 text-slate-400 text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Seus dados estão seguros</span>
                </div>
                <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:brightness-110 text-white font-bold text-base h-12 px-8 rounded-lg transition-all active:scale-95 shadow-md shadow-primary/20"
                >
                    <span>Configurar Ambiente</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </form>
    );
}
