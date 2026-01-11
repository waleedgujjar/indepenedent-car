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
import { Card } from "@/components/ui/card";

interface SearchFilterHeaderProps {
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onFilterChange: (key: string, value: string) => void;
  resultsCount: number;
}

export default function SearchFilterHeader({
  onSearchChange,
  onSortChange,
  onFilterChange,
  resultsCount,
}: SearchFilterHeaderProps) {
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("soon-uploaded");

  const handleSearch = (val: string) => {
    setSearch(val);
    onSearchChange(val);
  };

  return (
    <div className="w-full max-w-[1472px] flex flex-col gap-4">

      {/* ───────────── TOP ROW ───────────── */}
      <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 w-full">

        {/* Search Input */}
        <div className="relative flex-1 sm:max-w-[420px] h-[44px] rounded-[10px] border border-black/20 bg-white flex items-center overflow-hidden">
          <Search className="absolute left-[14px] w-4 h-4 text-gray-500" />
          <Input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="VIN or Make"
            className="w-full h-full border-none bg-transparent pl-[40px] pr-[12px] text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Filter Button */}
        <Button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="w-full sm:w-[96px] h-[44px] rounded-[10px] bg-[#2B68AD] hover:bg-[#2B68AD]/90 text-white flex items-center justify-center gap-2 text-sm"
        >
          <Filter className="w-4 h-4" />
          Filter
        </Button>

        {/* Filter Popup */}
        {isFilterOpen && (
          <Card className="absolute top-[100px] sm:top-[54px] left-0 sm:left-auto right-0 z-50 w-full sm:w-[450px] md:w-[600px] lg:w-[980px] rounded-[12px] border border-[#0000004D] bg-white px-4 sm:px-[22px] py-4 sm:py-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[24px] shadow-[0px_7px_18px_#00000014]">
            {["Make", "Model", "Year", "Type"].map((label) => (
              <div key={label} className="flex flex-col gap-1 w-full">
                <label className="text-xs font-medium text-gray-500">
                  {label}
                </label>
                <Select onValueChange={(val) => onFilterChange(label.toLowerCase(), val)}>
                  <SelectTrigger className="h-[40px] sm:h-[36px] border text-sm w-full">
                    <SelectValue placeholder={`All ${label}s`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </Card>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10" />

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        <div className="px-4 py-1.5 rounded-full bg-[#EAF2FB] text-[#2B68AD] text-sm font-medium whitespace-nowrap">
          Showing {resultsCount} Results
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
          <Select value={sortBy} onValueChange={(val) => {
            setSortBy(val);
            onSortChange(val);
          }}>
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
