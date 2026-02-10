import Link from "next/link";

export function HelpBreadcrumbs() {
    return (
        <nav className="flex text-sm text-slate-500 dark:text-slate-400">
            <Link className="hover:text-primary transition-colors" href="/profile">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Ajuda</span>
        </nav>
    );
}
