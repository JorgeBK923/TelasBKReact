import {
    Navbar,
    Hero,
    Integrations,
    PainPoints,
    CodeDemo,
    HowItWorks,
    Formats,
    Comparison,
    Roadmap,
    FAQ,
    Pricing,
    CTA,
    Footer,
} from '@/components/home';

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
