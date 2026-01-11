import { Search, Filter, X } from "lucide-react";

interface SearchHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
  onFilterClick: () => void;
  isFilterOpen: boolean;
}

const SearchHeader = ({ searchQuery, onSearchChange, resultCount, onFilterClick, isFilterOpen }: SearchHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-3">
        <span className="badge-teal whitespace-nowrap">
          Showing {resultCount.toLocaleString()} Result{resultCount !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-initial">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="VIN or Make Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input pl-10 w-full sm:w-64"
          />
        </div>

        <button
          onClick={onFilterClick}
          className={`btn-primary flex items-center justify-center gap-2 min-w-[44px] h-[44px] sm:px-4 sm:w-auto ${isFilterOpen ? 'bg-primary/80' : ''}`}
        >
          {isFilterOpen ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
          <span className="hidden xs:inline sm:inline">{isFilterOpen ? 'Close' : 'Filters'}</span>
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
