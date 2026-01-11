"use client";

import { useState } from "react";
import { cars } from "@/lib/data/cars";
import CarCard from "./CarCard";
import SearchFilterHeader from "./SearchFilterHeader";
import FilterBar from "./FilterBar";

const CarsAuction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("soon-uploaded");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    make: "all",
    model: "all",
    year: "all",
    type: "all",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredCars = cars
    .filter((car) => {
      const matchesSearch =
        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.vin.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMake = !filters.make || filters.make === "all" || car.title.toLowerCase().includes(filters.make.toLowerCase());
      const matchesModel = !filters.model || filters.model === "all" || car.title.toLowerCase().includes(filters.model.toLowerCase());
      const matchesYear = !filters.year || filters.year === "all" || String(car.year) === filters.year;
      const matchesType = !filters.type || filters.type === "all" || car.fuel.toLowerCase() === filters.type.toLowerCase();

      return matchesSearch && matchesMake && matchesModel && matchesYear && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.averagePrice - b.averagePrice;
      if (sortBy === "price-high") return b.averagePrice - a.averagePrice;
      if (sortBy === "newest") return b.year - a.year;
      return 0;
    });

  return (
    <div className="flex flex-col gap-6 p-4 lg:p-8 max-w-[1472px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col gap-6 mb-2">
        <h1
          className="font-bold text-[30px] leading-none text-[#212937]"
          style={{
            fontFamily: "'PolySans', 'Inter', sans-serif",
            fontWeight: 700
          }}
        >
          Cars Auction
        </h1>

        <SearchFilterHeader
          onSearchChange={setSearchQuery}
          onSortChange={setSortBy}
          onFilterChange={handleFilterChange}
          resultsCount={filteredCars.length}
          isFilterOpen={isFilterOpen}
          onToggleFilter={() => setIsFilterOpen(!isFilterOpen)}
        />
      </div>

      {isFilterOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        {filteredCars.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <p className="text-lg font-medium">No results found</p>
            <p className="text-sm">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsAuction;