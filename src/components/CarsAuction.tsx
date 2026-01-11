import { useState } from "react";
import { cars } from "@/data/cars";
import CarCard from "./CarCard";
import SearchHeader from "./SearchHeader";
import SortDropdown from "./SortDropdown";
import FilterBar from "./FilterBar";

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

        {/* Search and Sort */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          <SearchHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredCars.length}
            onFilterClick={() => setIsFilterOpen(!isFilterOpen)}
            isFilterOpen={isFilterOpen}
          />
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        {/* Collapsible Filter Bar */}
        {isFilterOpen && (
          <div className="mb-6 p-4 bg-card border border-border rounded-xl animate-fade-in">
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
          </div>
        )}

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
