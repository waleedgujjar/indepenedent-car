export interface Car {
  id: string;
  title: string;
  vin: string;
  mileage: number;
  fuel: string;
  transmission: string;
  year: number;
  image: string;
  rating: number;
  ratingLabel: string;
  timeRemaining: string;
  startDate: string;
  adjustedMMR: boolean;
  priceRange: {
    min: number;
    max: number;
  };
  averagePrice: number;
  seller: {
    name: string;
    avatar?: string;
  };
  watchers: number;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}
