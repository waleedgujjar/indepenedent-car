"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import CarsAuction from "@/components/CarsAuction";
import Logo from "@/components/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Home() {
    const [activeItem, setActiveItem] = useState("cars");

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar - Hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block sticky top-0 h-screen shrink-0">
                <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
                <div className="flex items-center justify-between p-4 px-6">
                    <Logo />

                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2 -mr-2 rounded-lg border border-border hover:bg-muted transition-colors">
                                <Menu className="w-6 h-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64 border-none">
                            <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 pt-16 lg:pt-0">
                <CarsAuction />
            </main>
        </div>
    );
}
