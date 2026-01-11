"use client";

import Image from "next/image";
import { Gauge, Fuel, Settings, Calendar, Heart, Bell } from "lucide-react";
import { Car } from "../lib/types/car";

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
    <div className="w-full max-w-[1419px] bg-white rounded-[14px] shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4 border border-[#0000004D]">
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
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#413F4D] leading-tight mb-2">
              {car.title}
            </h3>
            <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-[#6C7280] leading-normal mb-3">
              {car.vin}
            </p>

            {/* Specs Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
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
            <div className="flex items-center w-[120px] h-[40px] border border-[#C4C4C4] rounded-xl overflow-hidden mb-4">
              <div className="flex items-center justify-center bg-[#4A5F8C] text-white font-bold w-[40%] h-full text-sm">
                {car.ratingLabel}
              </div>
              <div className="flex items-center justify-center bg-white font-semibold text-[#413F4D] w-[60%] h-full text-sm">
                {car.rating}/5
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 mt-auto lg:mt-0 mb-4 lg:mb-0">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Add to favorites"
            >
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Set notification"
            >
              <Bell className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right: Time + Pricing + Buttons */}
        <div className="w-full lg:w-[310px] flex-shrink-0 flex flex-col justify-between items-start lg:items-end py-1">
          {/* Time Remaining */}
          <div className="w-full text-left lg:text-right mb-4">
            <p className="text-xs text-gray-500 mb-0.5">Time Remaining</p>
            <p className="text-xl sm:text-2xl lg:text-[25px] font-semibold text-[#413F4D] leading-tight">
              Starts in <span className="text-[#413F4D]">{car.timeRemaining}</span>
            </p>
            <p className="text-xs text-gray-500">{car.startDate}</p>
          </div>

          {/* Adj MMR Pricing Box */}
          <div className="w-full mb-4">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#4F75B2] text-white text-center text-xs font-bold py-1.5 uppercase tracking-wider">
                Adj MMR
              </div>
              <div className="flex divide-x divide-gray-200 bg-white">
                <div className="flex-1 py-2 px-2 text-center">
                  <p className="text-[10px] text-gray-400 font-medium mb-0.5 uppercase">Range</p>
                  <p className="text-sm font-bold text-gray-800 whitespace-nowrap">
                    {formatPrice(car.priceRange.min)} - {formatPrice(car.priceRange.max)}
                  </p>
                </div>
                <div className="flex-1 py-2 px-2 text-center">
                  <p className="text-[10px] text-gray-400 font-medium mb-0.5 uppercase">Average</p>
                  <p className="text-sm font-bold text-gray-800">
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
              className="flex-1 lg:flex-none lg:w-[150px] h-[48px] flex items-center justify-center bg-[#C41E3A] hover:bg-[#A01829] text-white font-bold text-sm rounded-[13px] border border-black/10 transition-colors"
            >
              Bid Now
            </button>
            <button
              onClick={() => onViewMore?.(car.id)}
              className="flex-1 lg:flex-none lg:w-[150px] h-[48px] flex items-center justify-center bg-[#4A5F8C] hover:bg-[#3A4A6C] text-white font-bold text-sm rounded-[13px] border border-black/10 transition-colors"
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