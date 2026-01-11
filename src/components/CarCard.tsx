import { Gauge, Fuel, Settings, Calendar, Heart, Bell } from "lucide-react";
import Image from "next/image";
import { Car } from "@/lib/types/car";

interface CarCardProps {
  car: Car;
  onBidNow?: (carId: string) => void;
  onViewMore?: (carId: string) => void;
}

const CarCard = ({ car, onBidNow, onViewMore }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="card-auction p-4" style={{ maxWidth: '1419px', minHeight: '302px' }}>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Car Image */}
        <div 
          className="relative rounded-lg overflow-hidden flex-shrink-0"
          style={{ width: '439px', height: '264px', maxWidth: '100%' }}
        >
          <Image
            src={car.image}
            alt={car.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 439px"
            priority
          />
          <div className="absolute bottom-2 left-2 badge-rating">
            {car.ratingLabel}
          </div>
        </div>

        {/* Car Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{car.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-muted-foreground">{car.vin}</span>
                <span className="text-sm font-medium text-foreground">{car.rating}/5</span>
              </div>
            </div>

            {/* Time Remaining */}
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Time Remaining</p>
              <p className="text-base font-semibold text-foreground flex items-center justify-end gap-1">
                <span>Starts in</span>
                <span className="text-primary">{car.timeRemaining}</span>
              </p>
              <p className="text-xs text-muted-foreground">{car.startDate}</p>
            </div>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Gauge className="w-4 h-4" />
              {car.mileage} Miles
            </span>
            <span className="flex items-center gap-1.5">
              <Fuel className="w-4 h-4" />
              {car.fuel}
            </span>
            <span className="flex items-center gap-1.5">
              <Settings className="w-4 h-4" />
              {car.transmission}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {car.year}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-3">
            <span className="badge-rating">{car.ratingLabel}</span>
            <span className="text-sm text-foreground">{car.rating}/5</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-3">
            <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
              <Heart className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
              <Bell className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex flex-col items-end justify-between lg:w-64 flex-shrink-0">
          {/* Pricing Box */}
          <div className="border border-gray-200 rounded-t-lg overflow-hidden w-full md:w-64">
            <div className="bg-[#4F75B2] text-white text-center text-xs font-bold py-1">
              Adj MMR
            </div>
            <div className="flex divide-x divide-gray-200">
              <div className="flex-1 p-2 text-center">
                <span className="block text-[10px] text-gray-400 font-medium">Range</span>
                <span className="block text-sm font-bold text-gray-700 whitespace-nowrap">
                  {formatPrice(car.priceRange.min)} - {formatPrice(car.priceRange.max)}
                </span>
              </div>
              <div className="flex-1 p-2 text-center">
                <span className="block text-[10px] text-gray-400 font-medium">Average</span>
                <span className="block text-sm font-bold text-gray-700">
                  {formatPrice(car.averagePrice)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 mt-3">
            <button
              onClick={() => onBidNow?.(car.id)}
              className="btn-bid-now"
            >
              Bid Now
            </button>
            <button
              onClick={() => onViewMore?.(car.id)}
              className="btn-view-more"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;