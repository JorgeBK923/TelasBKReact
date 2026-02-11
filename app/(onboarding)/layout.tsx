import React from 'react';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans antialiased selection:bg-primary selection:text-white transition-colors duration-300">
            {children}
        </div>
    );
}
