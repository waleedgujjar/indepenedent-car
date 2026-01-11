"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <TooltipProvider>
        {children}
        <Toaster />
        <Sonner richColors closeButton />
      </TooltipProvider>
    </ReactQueryProvider>
  );
}
