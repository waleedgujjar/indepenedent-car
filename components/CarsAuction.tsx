"use client";

import { Gauge, Fuel, Settings, Calendar, Heart, Bell } from "lucide-react";

interface Car {
  id: string;
  title: string;
  vin: string;
  image: string;
  mileage: string;
  fuel: string;
  transmission: string;
  year: string;
  rating: number;
  ratingLabel: string;
  timeRemaining: string;
  startDate: string;
  priceRange: { min: number; max: number };
  averagePrice: number;
}

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
    <div className="w-full max-w-[1400px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#00000014]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[400px_1fr_304px] gap-4 md:gap-6 p-4 md:p-5">
        
        {/* LEFT COLUMN: Image */}
        <div className="relative w-full lg:w-[400px] h-[200px] sm:h-[230px] flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-[#4A5F8C] text-white px-2.5 py-1 rounded-md text-xs font-bold">
            {car.ratingLabel}
          </div>
        </div>

        {/* MIDDLE COLUMN: Info */}
        <div className="flex flex-col justify-between min-w-0">
          
          {/* Title & VIN */}
          <div>
            <h3 className="font-bold text-2xl sm:text-3xl lg:text-[32px] leading-[1.1] tracking-tight text-[#413F4D] mb-1.5">
              {car.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {car.vin}
            </p>

            {/* Specs Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Gauge className="w-4 h-4" />
                {car.mileage} Mi
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
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-9 w-fit">
              <div className="bg-[#4A5F8C] text-white px-3 h-full flex items-center text-xs font-bold">
                {car.ratingLabel}
              </div>
              <div className="px-3 h-full flex items-center text-sm font-semibold text-[#413F4D]">
                {car.rating}/5
              </div>
            </div>
          </div>

          {/* Action Icons - Bottom Line */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <Bell className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Time + Pricing + Buttons */}
        <div className="w-full lg:w-[304px] flex flex-col gap-4">
          
          {/* Time Remaining */}
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Time Remaining</p>
            <p className="font-semibold text-base sm:text-lg text-[#413F4D]">
              Starts in <span className="text-[#C41E3A]">{car.timeRemaining}</span>
            </p>
            <p className="text-xs text-gray-500">{car.startDate}</p>
          </div>

          {/* Adj MMR Block */}
          <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-[#4F75B2] text-white text-center text-xs font-bold py-1.5">
              Adj MMR
            </div>
            <div className="flex bg-white">
              <div className="w-[70%] py-2.5 px-2 sm:px-3 text-center border-r border-gray-200">
                <p className="text-[10px] text-gray-400 font-medium mb-0.5">Range</p>
                <p className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">
                  {formatPrice(car.priceRange.min)}<br />– {formatPrice(car.priceRange.max)}
                </p>
              </div>
              <div className="w-[30%] py-2.5 px-1 sm:px-2 text-center">
                <p className="text-[10px] text-gray-400 font-medium mb-0.5">Avg</p>
                <p className="text-xs sm:text-sm font-bold text-gray-800">
                  {formatPrice(car.averagePrice)}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onBidNow?.(car.id)}
              className="bg-[#C41E3A] hover:bg-[#A01829] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-xl border border-black/10 transition-colors"
            >
              Bid Now
            </button>
            <button
              onClick={() => onViewMore?.(car.id)}
              className="bg-[#4A5F8C] hover:bg-[#3A4A6C] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-xl border border-black/10 transition-colors"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo Component
const DemoCarCard = () => {
  const sampleCar: Car = {
    id: "1",
    title: "2019 BMW 330i xDrive",
    vin: "WBA5R1C50KAJ12345",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    mileage: "45,230",
    fuel: "Gasoline",
    transmission: "Automatic",
    year: "2019",
    rating: 4.2,
    ratingLabel: "CR",
    timeRemaining: "2d 14h",
    startDate: "Jan 15, 2026",
    priceRange: { min: 28500, max: 31200 },
    averagePrice: 29800,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Premium Auction Listings</h1>
        
        <CarCard 
          car={sampleCar}
          onBidNow={(id) => console.log("Bid on:", id)}
          onViewMore={(id) => console.log("View:", id)}
        />
        
        <CarCard 
          car={{
            ...sampleCar,
            id: "2",
            title: "2021 Mercedes-Benz C300",
            vin: "55SWF8DB1MU123456",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
            mileage: "32,100",
            year: "2021",
            timeRemaining: "1d 8h",
            priceRange: { min: 35000, max: 38500 },
            averagePrice: 36700,
          }}
          onBidNow={(id) => console.log("Bid on:", id)}
          onViewMore={(id) => console.log("View:", id)}
        />

        <CarCard 
          car={{
            ...sampleCar,
            id: "3",
            title: "2020 Audi A4 Premium Plus",
            vin: "WAUFFAFL2LN234567",
            image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
            mileage: "28,450",
            year: "2020",
            timeRemaining: "3d 2h",
            priceRange: { min: 32000, max: 35800 },
            averagePrice: 33900,
          }}
          onBidNow={(id) => console.log("Bid on:", id)}
          onViewMore={(id) => console.log("View:", id)}
        />
      </div>
    </div>
  );
};

export default DemoCarCard;