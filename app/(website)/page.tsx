import dynamic from 'next/dynamic';
import { Navbar } from '@/components/home';
import { Hero } from '@/components/home';
import { Integrations } from '@/components/home';

const PainPoints = dynamic(() => import('@/components/home/PainPoints').then(mod => ({ default: mod.PainPoints })));
const CodeDemo = dynamic(() => import('@/components/home/CodeDemo').then(mod => ({ default: mod.CodeDemo })));
const HowItWorks = dynamic(() => import('@/components/home/HowItWorks').then(mod => ({ default: mod.HowItWorks })));
const Formats = dynamic(() => import('@/components/home/Formats').then(mod => ({ default: mod.Formats })));
const Comparison = dynamic(() => import('@/components/home/Comparison').then(mod => ({ default: mod.Comparison })));
const Roadmap = dynamic(() => import('@/components/home/Roadmap').then(mod => ({ default: mod.Roadmap })));
const FAQ = dynamic(() => import('@/components/home/FAQ').then(mod => ({ default: mod.FAQ })));
const Pricing = dynamic(() => import('@/components/home/Pricing').then(mod => ({ default: mod.Pricing })));
const CTA = dynamic(() => import('@/components/home/CTA').then(mod => ({ default: mod.CTA })));
const Footer = dynamic(() => import('@/components/home/Footer').then(mod => ({ default: mod.Footer })));

export default function HomePage() {
    return (
        <main className="antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white bg-white text-slate-900 dark:bg-[#0a0e1a] dark:text-white">
            <Navbar />
            <Hero />
            <Integrations />
            <PainPoints />
            <CodeDemo />
            <HowItWorks />
            <Formats />
            <Comparison />
            <Roadmap />
            <FAQ />
            <Pricing />
            <CTA />
            <Footer />
        </main>
    );
}
