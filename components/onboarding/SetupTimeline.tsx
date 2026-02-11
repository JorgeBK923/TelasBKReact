import React from 'react';
import { Check, Loader2, Circle, Flag } from 'lucide-react';

export type StepStatus = 'complete' | 'active' | 'pending';

export interface TimelineStep {
    title: string;
    description?: string;
    status: StepStatus;
    icon?: 'flag';
}

interface SetupTimelineProps {
    steps: TimelineStep[];
}

function StepIcon({ status, icon }: { status: StepStatus; icon?: string }) {
    if (status === 'complete') {
        return (
            <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center border-4 border-slate-100 dark:border-card-dark z-10">
                <Check className="text-green-600 dark:text-green-400 w-5 h-5" />
            </div>
        );
    }

    if (status === 'active') {
        return (
            <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center border-4 border-slate-100 dark:border-card-dark z-10 shadow-[0_0_0_4px_rgba(0,51,255,0.1)]">
                <Loader2 className="text-primary w-5 h-5 animate-spin" />
            </div>
        );
    }

    return (
        <div className="size-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center border-4 border-slate-100 dark:border-card-dark z-10">
            {icon === 'flag' ? (
                <Flag className="text-gray-400 w-5 h-5" />
            ) : (
                <Circle className="text-gray-400 w-5 h-5" />
            )}
        </div>
    );
}

export function SetupTimeline({ steps }: SetupTimelineProps) {
    return (
        <div className="flex flex-col gap-0 relative">
            <div className="absolute left-[19px] top-4 bottom-8 w-[2px] bg-gray-200 dark:bg-slate-700 -z-10" />

            {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                const isPending = step.status === 'pending';

                return (
                    <div
                        key={index}
                        className={`group flex gap-4 ${
                            isLast ? 'pt-6' : `pb-8 ${index > 0 && isPending ? '' : ''}`
                        } ${isPending ? 'opacity-50' : ''}`}
                    >
                        <div className="flex-shrink-0 relative">
                            <StepIcon status={step.status} icon={step.icon} />
                        </div>
                        <div className="flex flex-col pt-2">
                            <h3
                                className={`text-base leading-none mb-1 ${
                                    step.status === 'active'
                                        ? 'text-primary font-bold'
                                        : step.status === 'complete'
                                        ? 'text-slate-900 dark:text-white font-semibold'
                                        : 'text-slate-900 dark:text-white font-medium'
                                }`}
                            >
                                {step.title}
                            </h3>
                            {step.description && (
                                <p
                                    className={`text-gray-500 dark:text-gray-400 text-sm ${
                                        step.status === 'active' ? 'animate-pulse' : ''
                                    }`}
                                >
                                    {step.description}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
