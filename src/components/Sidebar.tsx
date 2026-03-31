import { ITEM_HEIGHT, ITEM_WIDTH, TAB_MENU } from "@/constants/constants";
import { TabMenuItem } from "@/interfaces/tab";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { useMemo } from "react";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    activeTab: TabMenuItem;
    setActiveTab: React.Dispatch<React.SetStateAction<TabMenuItem>>;
    handleActiveTab: (index: TabMenuItem) => void;
};

export default function Sidebar({
    open,
    setOpen,
    activeTab,
    setActiveTab,
    handleActiveTab,
}: Props) {
    const highlightStyle = useMemo(
        () => ({ transform: `translateY(${activeTab.id * ITEM_HEIGHT}px)` }),
        [activeTab]
    );

    return (
        <div>
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="fixed right-4 top-4 z-40 inline-flex items-center justify-center rounded-md border border-white/15 bg-black/35 p-2 text-white/85 backdrop-blur-md transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 lg:hidden"
            >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <button
                type="button"
                aria-label="Close menu overlay"
                onClick={() => setOpen(false)}
                className={cn(
                    "fixed inset-0 z-30 bg-black/55 backdrop-blur-[1px] transition-opacity lg:hidden",
                    open ? "opacity-100" : "pointer-events-none opacity-0"
                )}
            />

            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-104 max-w-[85vw] transform-gpu transition-transform duration-300 ease-out lg:translate-x-0",
                    open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_25%,rgba(0,0,0,0.95),rgba(0,0,0,0)_62%)]" />

                <div className="relative h-full">
                    <div className="flex h-screen flex-col justify-center py-12 lg:py-6 pl-10 pr-8">
                        <div
                            style={{ width: ITEM_WIDTH }}
                            className="flex flex-col items-center gap-20"
                        >
                            <img
                                src="/assets/badge.png"
                                alt="Badge"
                                className="h-44 w-44 object-contain transition-transform duration-700 hover:transform-[perspective(1000px)_rotateY(180deg)] lg:h-56 lg:w-56"
                            />

                            <nav className="w-full">
                                <div
                                    className="relative mx-auto"
                                    style={{ width: ITEM_WIDTH }}
                                >
                                    <div
                                        className="absolute left-0 top-0 h-9.5 w-58.5 border border-white/20 bg-linear-to-r from-white/10 to-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-reduce:transition-none"
                                        style={highlightStyle}
                                    />

                                    <ul className="relative">
                                        {TAB_MENU.map((item) => (
                                            <li key={item.id} className="h-9.5 w-58.5">
                                                <button
                                                    onClick={() => handleActiveTab(item)}
                                                    className={cn(
                                                        "flex h-9.5 w-58.5 items-center pl-3 text-md font-medium uppercase tracking-[0.18em] outline-none motion-safe:transition-colors motion-safe:duration-200 motion-reduce:transition-none drop-shadow-lg",
                                                        activeTab === item
                                                            ? "text-gray-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                                            : "text-gray-400 hover:text-gray-200 hover:bg-white/10 hover:border hover:border-white/20"
                                                    )}
                                                >
                                                    {item.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}