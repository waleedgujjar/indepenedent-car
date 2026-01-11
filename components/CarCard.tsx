"use client";

import Image from "next/image";
import { Gauge, Fuel, Settings, Calendar, Heart, Bell } from "lucide-react";
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
    <div className="card-auction p-4 w-full max-w-[1419px]">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Left: Car Image */}
        <div className="relative w-full lg:w-[439px] aspect-video lg:aspect-[439/264] flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src="/image.png"
            alt={car.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 439px"
            priority={false}
          />
        </div>

        {/* Middle: Car Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
          {/* Top Section */}
          <div className="min-w-0">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#413F4D] dark:text-foreground leading-tight mb-2 truncate" title={car.title}>
              {car.title}
            </h3>
            <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-[#6C7280] dark:text-muted-foreground leading-normal mb-3">
              {car.vin}
            </p>

            {/* Specs Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Gauge className="w-4 h-4" />
                {car.mileage} Miles
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Fuel className="w-4 h-4" />
                {car.fuel}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Settings className="w-4 h-4" />
                {car.transmission}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Calendar className="w-4 h-4" />
                {car.year}
              </span>
            </div>

            {/* Rating Badge */}
            <div className="flex items-center w-[120px] h-[40px] border border-border rounded-xl overflow-hidden mb-4">
              <div className="flex items-center justify-center bg-[#4A5F8C] text-white font-bold w-[40%] h-full text-sm">
                {car.ratingLabel}
              </div>
              <div className="flex items-center justify-center bg-card font-semibold text-foreground w-[60%] h-full text-sm">
                {car.rating}/5
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 mt-auto lg:mt-0 mb-4 lg:mb-0">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Add to favorites"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Set notification"
            >
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Time + Pricing + Buttons */}
        <div className="w-full lg:w-[310px] flex-shrink-0 flex flex-col justify-between items-start lg:items-end py-1">
          {/* Time Remaining */}
          <div className="w-full text-left lg:text-right mb-4">
            <p className="text-xs text-muted-foreground mb-0.5">Time Remaining</p>
            <p className="text-xl sm:text-2xl lg:text-[25px] font-semibold text-foreground leading-tight">
              Starts in <span className="text-[#413F4D]">{car.timeRemaining}</span>
            </p>
            <p className="text-xs text-muted-foreground">{car.startDate}</p>
          </div>

          {/* Adj MMR Pricing Box */}
          <div className="w-full mb-4">
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <div className="bg-[#4F75B2] text-white text-center text-xs font-bold py-1.5 uppercase tracking-wider">
                Adj MMR
              </div>
              <div className="flex divide-x divide-border bg-card">
                <div className="flex-1 py-2 px-2 text-center">
                  <p className="text-[10px] text-muted-foreground font-medium mb-0.5 uppercase">Range</p>
                  <p className="text-sm font-bold text-foreground whitespace-nowrap">
                    {formatPrice(car.priceRange.min)} - {formatPrice(car.priceRange.max)}
                  </p>
                </div>
                <div className="flex-1 py-2 px-2 text-center">
                  <p className="text-[10px] text-muted-foreground font-medium mb-0.5 uppercase">Average</p>
                  <p className="text-sm font-bold text-foreground">
                    {formatPrice(car.averagePrice)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-2 mt-auto">
            <button
              onClick={() => onBidNow?.(car.id)}
              className="btn-bid-now flex-1 lg:flex-none"
            >
              Bid Now
            </button>
            <button
              onClick={() => onViewMore?.(car.id)}
              className="btn-view-more flex-1 lg:flex-none"
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