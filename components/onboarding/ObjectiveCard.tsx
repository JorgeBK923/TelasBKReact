import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ObjectiveCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
    name: string;
    checked: boolean;
    onChange: (value: string) => void;
}

export function ObjectiveCard({ icon: Icon, label, value, name, checked, onChange }: ObjectiveCardProps) {
    return (
        <label className="relative cursor-pointer group">
            <input
                className="peer sr-only"
                name={name}
                type="radio"
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 transition-all hover:border-blue-300 dark:hover:border-slate-500 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 h-full text-center">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-slate-600 peer-checked:group-[]:bg-primary peer-checked:group-[]:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {label}
                </span>
            </div>
            <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                <CheckCircle className="w-5 h-5" />
            </div>
        </label>
    );
}
