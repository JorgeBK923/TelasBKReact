import {
    HelpBreadcrumbs,
    HelpHero,
    CategoryGrid,
    PopularArticles,
    WhatsNew,
    VideoTutorials,
    HelpBottomCTA,
} from "@/components/help";

export default function HelpPage() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <HelpBreadcrumbs />
            <HelpHero />
            <CategoryGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <PopularArticles />
                </div>
                <WhatsNew />
            </div>
            <VideoTutorials />
            <HelpBottomCTA />
        </div>
    );
}
