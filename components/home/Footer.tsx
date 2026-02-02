import { Bug, Podcast, AtSign, Rss } from 'lucide-react';

const footerLinks = {
    produto: [
        { label: 'Agentes de IA', href: '#' },
        { label: 'Integrações', href: '#' },
        { label: 'Preços', href: '#pricing' },
        { label: 'Roadmap', href: '#' },
    ],
    recursos: [
        { label: 'Documentação', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Comunidade', href: '#' },
        { label: 'Status', href: '#' },
    ],
    legal: [
        { label: 'Privacidade', href: '#' },
        { label: 'Termos de Uso', href: '#' },
        { label: 'Segurança', href: '#' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-white dark:bg-[#05080f] py-16 px-4 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="size-6 bg-blue-600 rounded flex items-center justify-center text-white">
                            <Bug className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">BugKillers</span>
                    </div>
                    <p className="text-slate-500 dark:text-gray-500 mb-6">
                        A plataforma de QA Inteligente que transforma times de desenvolvimento.
                    </p>
                    <div className="flex gap-4">
                        <a className="text-slate-400 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors" href="#">
                            <Podcast className="w-5 h-5" />
                        </a>
                        <a className="text-slate-400 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors" href="#">
                            <AtSign className="w-5 h-5" />
                        </a>
                        <a className="text-slate-400 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors" href="#">
                            <Rss className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Produto */}
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6">Produto</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-gray-400">
                        {footerLinks.produto.map((link) => (
                            <li key={link.label}>
                                <a className="hover:text-blue-600 transition-colors" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recursos */}
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6">Recursos</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-gray-400">
                        {footerLinks.recursos.map((link) => (
                            <li key={link.label}>
                                <a className="hover:text-blue-600 transition-colors" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6">Legal</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-gray-400">
                        {footerLinks.legal.map((link) => (
                            <li key={link.label}>
                                <a className="hover:text-blue-600 transition-colors" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 dark:text-gray-600 text-xs">
                © 2023 BugKillers Inc. Todos os direitos reservados.
            </div>
        </footer>
    );
}
