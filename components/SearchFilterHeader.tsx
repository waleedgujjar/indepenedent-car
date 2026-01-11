"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFilterHeaderProps {
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
  resultsCount: number;
  isFilterOpen: boolean;
  onToggleFilter: () => void;
}

export default function SearchFilterHeader({
  onSearchChange,
  onSortChange,
  resultsCount,
  isFilterOpen,
  onToggleFilter,
}: SearchFilterHeaderProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (val: string) => {
    setSearch(val);
    onSearchChange(val);
  };

  return (
    <div className="w-full max-w-[1472px] flex flex-col gap-4">
      {/* ───────────── TOP ROW ───────────── */}
      <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 w-full">
        {/* Search Input */}
        <div className="relative flex-1 sm:max-w-[420px] h-[44px] rounded-[10px] border border-black/20 bg-white dark:bg-card flex items-center overflow-hidden">
          <Search className="absolute left-[14px] w-4 h-4 text-gray-500" />
          <Input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="VIN or Make Search"
            className="w-full h-full border-none bg-transparent pl-[40px] pr-[12px] text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Filter Button */}
        <Button
          onClick={onToggleFilter}
          className={`w-full sm:w-[96px] h-[44px] rounded-[10px] flex items-center justify-center gap-2 text-sm transition-colors ${isFilterOpen
            ? "bg-[#2B68AD]/10 text-[#2B68AD] border border-[#2B68AD] hover:bg-[#2B68AD]/20"
            : "bg-[#2B68AD] hover:bg-[#2B68AD]/90 text-white"
            }`}
        >
          <Filter className="w-4 h-4" />
          {isFilterOpen ? "Close" : "Filter"}
        </Button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10" />

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="px-4 py-1.5 rounded-full bg-[#EAF2FB] text-[#2B68AD] text-sm font-medium whitespace-nowrap">
          Showing {resultsCount.toLocaleString()} Result{resultsCount !== 1 ? "s" : ""}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
          <Select defaultValue="soon-uploaded" onValueChange={onSortChange}>
            <SelectTrigger className="flex-1 sm:w-[170px] h-[40px] sm:h-[36px] border text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soon-uploaded">Soon Uploaded</SelectItem>
              <SelectItem value="ending-soon">Ending Soon</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
