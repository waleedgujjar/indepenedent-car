import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import CarsAuction from "@/components/CarsAuction";

const Index = () => {
  const [activeItem, setActiveItem] = useState("cars");

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Hidden on mobile, shown on lg+ */}
      <div className="hidden lg:block">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">ID</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-foreground tracking-tight">INDEPENDENT</span>
              <span className="text-xs font-semibold text-primary">DEALERS UNITED</span>
            </div>
          </div>
          <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
        <CarsAuction />
      </main>
    </div>
  );
};

export default Index;
