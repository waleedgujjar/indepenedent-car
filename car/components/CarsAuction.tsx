"use client";

import { useState } from "react";
import { cars } from "@/lib/data/cars";
import CarCard from "./CarCard";
import SearchFilterHeader from "./SearchFilterHeader";

const CarsAuction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("soon-uploaded");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    type: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleBidNow = (carId: string) => {
    console.log("Bid now clicked for car:", carId);
  };

  const handleViewMore = (carId: string) => {
    console.log("View more clicked for car:", carId);
  };

  // Filter cars based on search and filters
  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      !searchQuery ||
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.vin.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMake = !filters.make || car.title.toLowerCase().includes(filters.make);
    const matchesYear = !filters.year || car.year.toString() === filters.year;

    return matchesSearch && matchesMake && matchesYear;
  });

  return (
    <div className="flex-1 min-h-screen bg-background">
      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Cars Auction</h1>

        {/* Search and Filters */}
        <div className="mb-6">
          <SearchFilterHeader
            onSearchChange={setSearchQuery}
            onSortChange={setSortBy}
            onFilterChange={handleFilterChange}
            resultsCount={filteredCars.length}
          />
        </div>

        {/* Car Listings */}
        <div className="space-y-4">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CarCard
                car={car}
                onBidNow={handleBidNow}
                onViewMore={handleViewMore}
              />
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No cars found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsAuction;
