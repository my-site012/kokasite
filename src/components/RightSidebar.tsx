import AdBanner from "./AdBanner";

const RightSidebar = () => {
    return (
        <aside className="hidden xl:flex flex-col w-[200px] shrink-0 font-body relative z-20 space-y-4">
            <div className="flex items-center gap-2 mb-4 px-2">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Sponsors</span>
                <div className="h-[1px] flex-1 bg-white/5"></div>
            </div>

            <AdBanner height="h-64" label="Premium Slot" />
            <AdBanner height="h-40" />
            <AdBanner height="h-40" />
            <AdBanner height="h-40" />
            <AdBanner height="h-40" />
            <AdBanner height="h-40" />
        </aside>
    );
};

export default RightSidebar;
