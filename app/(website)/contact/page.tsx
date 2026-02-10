import dynamic from 'next/dynamic';
import { Navbar } from "@/components/home";
import { ContactHero, ContactForm, SupportChannels, ContactFAQ, DemoCTA } from "@/components/contact";

const Footer = dynamic(() => import('@/components/home/Footer').then(mod => ({ default: mod.Footer })));

export default function ContactPage() {
    return (
        <main className="antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white bg-white text-slate-900 dark:bg-[#0a0e1a] dark:text-white">
            <Navbar />
            <div className="max-w-[1120px] mx-auto px-4 pt-28 pb-12">
                <ContactHero />
                <section className="relative pb-12">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                        <div className="lg:col-span-1">
                            <SupportChannels />
                        </div>
                    </div>
                </section>
                <ContactFAQ />
                <DemoCTA />
            </div>
            <Footer />
        </main>
    );
}
