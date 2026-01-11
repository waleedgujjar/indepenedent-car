import { makes, models, years, types } from "@/lib/data/cars";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSelectProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

const FilterSelect = ({ label, options, value, onChange }: FilterSelectProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-muted-foreground">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full h-11 bg-background border-[#00000020] rounded-xl">
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-card rounded-2xl border border-[#00000020] shadow-sm w-full">
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
