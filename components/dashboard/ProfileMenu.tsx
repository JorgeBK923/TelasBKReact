'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
    User,
    CreditCard,
    BarChart3,
    Puzzle,
    Settings,
    Lock,
    LogOut,
    ChevronDown,
    HelpCircle
} from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { useClickOutside } from '@/hooks/useClickOutside';

const menuItems = [
    { href: '/profile', label: 'Dados', icon: User },
    { href: '/billing', label: 'Plano', icon: CreditCard },
    { href: '/usage', label: 'Uso', icon: BarChart3 },
];

const systemItems = [
    { href: '/integrations', label: 'Integrações', icon: Puzzle },
    { href: '/settings', label: 'Preferências', icon: Settings },
    { href: '/security', label: 'Segurança', icon: Lock },
    { href: '/help', label: 'Ajuda', icon: HelpCircle },
];

export function ProfileMenu() {
    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    const closeMenu = useCallback(() => setIsOpen(false), []);

    useClickOutside(menuRef, closeMenu);

    // Close on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        router.push('/login');
    };

    return (
        <div className="relative" ref={menuRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 focus:outline-none group"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Menu do perfil"
            >
                <div className="relative">
                    <div
                        className={`relative size-9 rounded-full overflow-hidden border-2 transition-all duration-200 shadow-sm ${isOpen ? 'border-primary ring-2 ring-primary/20' : 'border-white/30 dark:border-white/10 group-hover:border-primary/50'}`}
                    >
                        <Image
                            src={user.avatarUrl}
                            alt={user.name}
                            fill
                            sizes="36px"
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-green-500 size-2.5 border border-primary dark:border-card-dark rounded-full absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 z-10"></div>
                </div>
                <ChevronDown className={`size-4 text-white/70 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'group-hover:text-white'}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Mobile Backdrop */}
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fade-in" onClick={() => setIsOpen(false)} />

                    <div className="absolute right-0 top-full mt-3 w-80 bg-white dark:bg-[#15191f] rounded-2xl shadow-2xl border border-slate-100 dark:border-white/5 z-50 overflow-hidden transform transition-all duration-200 animate-in fade-in zoom-in-95 slide-in-from-top-2 origin-top-right md:w-72 fixed md:absolute bottom-0 md:bottom-auto left-0 md:left-auto right-0 md:right-0 rounded-t-2xl md:rounded-2xl border-b-0 md:border-b">

                        {/* Header Section */}
                        <div className="p-5 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
                            <div className="flex items-center gap-4 mb-3">
                                <Image
                                    src={user.avatarUrl}
                                    alt={user.name}
                                    width={64}
                                    height={64}
                                    className="size-16 rounded-full object-cover border-4 border-white dark:border-[#15191f] shadow-md"
                                />
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{user.name}</h3>
                                    <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 tracking-wide uppercase">
                                        {user.plan}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 truncate pl-1">{user.email}</p>
                        </div>

                        {/* Navigation Links */}
                        <div className="p-2 space-y-1">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}`}
                                    >
                                        <Icon className={`size-4 ${isActive ? 'text-primary dark:text-blue-400' : 'text-slate-400'}`} />
                                        {item.label}
                                    </Link>
                                );
                            })}

                            <div className="h-px bg-slate-100 dark:bg-white/5 my-2 mx-4" />

                            <div className="px-4 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Sistema</div>

                            {systemItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}`}
                                    >
                                        <Icon className={`size-4 ${isActive ? 'text-primary dark:text-blue-400' : 'text-slate-400'}`} />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Logout Section */}
                        <div className="p-2 border-t border-slate-100 dark:border-white/5 mt-1">
                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            >
                                {isLoggingOut ? (
                                    <>
                                        <div className="size-4 border-2 border-red-600/30 border-t-red-600 rounded-full animate-spin" />
                                        <span>Saindo...</span>
                                    </>
                                ) : (
                                    <>
                                        <LogOut className="size-4" />
                                        <span>Sair da conta</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
