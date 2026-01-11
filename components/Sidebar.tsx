"use client";

import { FileText, Building, Shield, Car, LogOut } from "lucide-react";
import Logo from "./Logo";

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const navItems = [
  { id: "llc", icon: FileText, label: "LLC Applications", href: "#" },
  { id: "rental", icon: Building, label: "Rental Properties", href: "#" },
  { id: "documents", icon: FileText, label: "Documents", href: "#" },
  { id: "insurance", icon: Shield, label: "Insurance", href: "#" },
  { id: "cars", icon: Car, label: "Cars Auction", href: "#" },
];

const Sidebar = ({ activeItem = "cars", onItemClick }: SidebarProps) => {
  return (
    <aside className="flex flex-col w-64 h-full bg-card border-r border-border overflow-y-auto">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick?.(item.id)}
                  className={isActive ? "sidebar-link-active w-full" : "sidebar-link w-full"}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium text-muted-foreground">MB</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Munaisi Bozai</p>
            <p className="text-xs text-muted-foreground">USER</p>
          </div>
        </div>
        <button className="flex items-center gap-2 mt-3 text-sm text-destructive hover:text-destructive/80 transition-colors">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
