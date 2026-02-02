export function CodeDemo() {
    return (
        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-200">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                        Veja a mágica acontecer
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400">
                        Uma interface familiar para desenvolvedores, com o poder da IA generativa.
                    </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-[#1e1e1e]">
                    {/* Window header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-slate-700">
                        <div className="flex items-center gap-6">
                            <div className="flex gap-1.5">
                                <div className="size-3 rounded-full bg-red-500" />
                                <div className="size-3 rounded-full bg-yellow-500" />
                                <div className="size-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex text-xs text-gray-400 font-medium gap-6 items-center">
                                <div className="cursor-pointer hover:text-white pb-1 border-b border-transparent">Input (Story)</div>
                                <div className="cursor-pointer hover:text-white pb-1 border-b border-transparent text-yellow-500">AI Analysis</div>
                                <div className="flex items-center gap-2 pb-1 border-b border-green-500 text-white cursor-pointer">
                                    <span>Output</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                        {/* Left panel - BDD */}
                        <div className="col-span-1 border-r border-slate-700 flex flex-col">
                            <div className="bg-[#2a2d2e] px-4 py-1 text-xs text-gray-400 font-mono border-b border-slate-700 flex justify-between">
                                <span>login.feature</span>
                                <span className="text-green-500">BDD View</span>
                            </div>
                            <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto flex-1 bg-[#1e1e1e]">
                                <div className="text-gray-300">
                                    <p><span className="text-green-600"># Generated BDD Scenario</span></p>
                                    <p><span className="text-blue-400">Feature:</span> User Authentication</p>
                                    <br />
                                    <p className="pl-4"><span className="text-blue-400">Scenario:</span> Valid login credentials</p>
                                    <p className="pl-8"><span className="text-blue-400">Given</span> user navigates to login page</p>
                                    <p className="pl-8"><span className="text-blue-400">When</span> user enters email <span className="text-orange-400">&quot;admin@bugkillers.io&quot;</span></p>
                                    <p className="pl-8"><span className="text-blue-400">And</span> user enters password <span className="text-orange-400">&quot;******&quot;</span></p>
                                    <p className="pl-8"><span className="text-blue-400">Then</span> user is redirected to dashboard</p>
                                    <br />
                                    <p className="pl-4"><span className="text-blue-400">Scenario:</span> Invalid password</p>
                                    <p className="pl-8"><span className="text-blue-400">Given</span> user is on login page</p>
                                    <p className="pl-8"><span className="text-blue-400">When</span> user enters wrong password</p>
                                    <p className="pl-8"><span className="text-blue-400">Then</span> error message is displayed</p>
                                </div>
                            </div>
                        </div>

                        {/* Right panel - Checklist */}
                        <div className="col-span-1 flex flex-col bg-[#1e1e1e]">
                            <div className="bg-[#2a2d2e] px-4 py-1 text-xs text-gray-400 font-mono border-b border-slate-700 flex justify-between">
                                <span>manual_test_plan.md</span>
                                <span className="text-blue-400">Checklist View</span>
                            </div>
                            <div className="p-4 font-sans text-sm leading-relaxed overflow-y-auto flex-1">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Main Flow</h4>
                                        <div className="flex items-start gap-2 mb-2">
                                            <input defaultChecked className="mt-1 bg-transparent border-gray-600 rounded text-blue-600 focus:ring-0" type="checkbox" />
                                            <span className="text-gray-300">Verify login with valid credentials redirects to dashboard.</span>
                                        </div>
                                        <div className="flex items-start gap-2 mb-2">
                                            <input className="mt-1 bg-transparent border-gray-600 rounded text-blue-600 focus:ring-0" type="checkbox" />
                                            <span className="text-gray-300">Verify &quot;Forgot Password&quot; link is clickable.</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">Error Cases</h4>
                                        <div className="flex items-start gap-2 mb-2">
                                            <input className="mt-1 bg-transparent border-gray-600 rounded text-blue-600 focus:ring-0" type="checkbox" />
                                            <span className="text-gray-300">Attempt login with empty fields triggers validation.</span>
                                        </div>
                                        <div className="flex items-start gap-2 mb-2">
                                            <input className="mt-1 bg-transparent border-gray-600 rounded text-blue-600 focus:ring-0" type="checkbox" />
                                            <span className="text-gray-300">Verify account lockout after 5 failed attempts.</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">Security &amp; Edge Cases</h4>
                                        <div className="flex items-start gap-2 mb-2">
                                            <input className="mt-1 bg-transparent border-gray-600 rounded text-blue-600 focus:ring-0" type="checkbox" />
                                            <span className="text-gray-300">Check for SQL Injection in username field.</span>
                                        </div>
                                        <div className="flex items-start gap-2 mb-2">
                                            <input className="mt-1 bg-transparent border-gray-600 rounded text-blue-600 focus:ring-0" type="checkbox" />
                                            <span className="text-gray-300">Verify session timeout after 30 mins inactivity.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
