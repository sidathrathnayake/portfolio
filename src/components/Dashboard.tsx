"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TAB_MENU } from "@/constants/constants";
import { TabMenuItem } from "@/interfaces/tab";
import { fetchActiveTabContent } from "@/helpers/common.helpers";
import Sidebar from "./Sidebar";
import TabHeader from "./TabHeader";

const Background = dynamic(() => import("./Background"), {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-0 bg-[#05050a]" />,
});

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<TabMenuItem>(TAB_MENU[0]);

    const activeTabComponent = useMemo(
        () => fetchActiveTabContent(activeTab.tab),
        [activeTab.tab]
    );

    const handleActiveTab = useCallback((item: TabMenuItem) => {
        setActiveTab(item);
        setOpen(false);
    }, []);

    useEffect(() => {
        if (!open) return;

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    return (
        <div className="relative min-h-dvh w-full bg-black text-white">
            <Background activeTab={activeTab} />

            <div className="pointer-events-none fixed inset-0 z-1 bg-[radial-gradient(circle_at_30%_25%,rgba(0,0,0,0.10),rgba(0,0,0,0.65)_50%,rgba(0,0,0,0.95))]" />

            <div className="relative z-20 min-h-dvh w-full">
                <Sidebar
                    open={open}
                    setOpen={setOpen}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    handleActiveTab={handleActiveTab}
                />

                <div className="flex min-h-dvh w-full flex-col lg:pl-104">
                    <TabHeader tabTitle={activeTab.label} />

                    <main className="flex-1">
                        {activeTabComponent}
                    </main>
                </div>
            </div>
        </div>
    );
}