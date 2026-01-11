import { ChevronDown } from "lucide-react";
import { makes, models, years, types } from "@/lib/data/cars";
import { FilterOption } from "@/lib/types/car";

interface FilterSelectProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

const FilterSelect = ({ label, options, value, onChange }: FilterSelectProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="filter-select appearance-none w-full min-w-[140px] pr-10"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  );
};

interface FilterBarProps {
  filters: {
    make: string;
    model: string;
    year: string;
    type: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

const FilterBar = ({ filters, onFilterChange }: FilterBarProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-card rounded-xl border border-[#0000004D] w-full">
      <FilterSelect
        label="Make"
        options={makes}
        value={filters.make}
        onChange={(value) => onFilterChange("make", value)}
      />
      <FilterSelect
        label="Model"
        options={models}
        value={filters.model}
        onChange={(value) => onFilterChange("model", value)}
      />
      <FilterSelect
        label="Year"
        options={years}
        value={filters.year}
        onChange={(value) => onFilterChange("year", value)}
      />
      <FilterSelect
        label="Type"
        options={types}
        value={filters.type}
        onChange={(value) => onFilterChange("type", value)}
      />
    </div>
  );
};

export default FilterBar;
