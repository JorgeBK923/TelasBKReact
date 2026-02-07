'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form action="#" className="space-y-4" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700" htmlFor="email">E-mail</label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="text-slate-400 w-5 h-5" />
                    </div>
                    <input
                        className="block w-full rounded-lg border border-slate-300 bg-gray-50 py-3 pl-10 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        id="email"
                        name="email"
                        placeholder="nome@empresa.com"
                        type="email"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700" htmlFor="password">Senha</label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Lock className="text-slate-400 w-5 h-5" />
                    </div>
                    <input
                        className="block w-full rounded-lg border border-slate-300 bg-gray-50 py-3 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                    />
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Esqueceu a senha?</a>
            </div>
            <button className="flex w-full justify-center items-center rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white" type="submit">
                Acessar Conta
            </button>
        </form>
    );
}
