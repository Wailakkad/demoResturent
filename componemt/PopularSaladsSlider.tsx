'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const PopularSaladsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const salads = [
    {
      id: 1,
      name: "Berries Salad",
      price: "$5.00",
      colorClass: "bg-red-100",
      imageId: "photo-1512621776951-a57141f2eefd",
      rating: "4.5"
    },
    {
      id: 2,
      name: "Healthy Salad",
      price: "$3.00",
      colorClass: "bg-orange-100",
      imageId: "photo-1540420773420-3366772f4999",
      rating: "4.0"
    },
    {
      id: 3,
      name: "Berries Salad",
      price: "$4.00",
      colorClass: "bg-green-100",
      imageId: "photo-1511690743698-d9d85f2fbf38",
      rating: "4.8"
    },
    {
      id: 4,
      name: "Healthy Salad",
      price: "$5.00",
      colorClass: "bg-purple-100",
      imageId: "photo-1505576391880-b3f9d713dc4f",
      rating: "4.3"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === salads.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? salads.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white rounded-3xl p-8 mx-4 md:mx-8 lg:mx-16 my-12 shadow-lg">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Popular Salads</h2>
          <p className="text-gray-600">Fresh and healthy options for you</p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-gray-200 group"
            aria-label="Previous salad"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-gray-200 group"
            aria-label="Next salad"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
          </button>
        </div>
      </div>

      {/* Salads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {salads.map((salad, index) => (
          <div
            key={salad.id}
            className={`${salad.colorClass} rounded-2xl p-6 relative group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
          >
            {/* Decorative Circle */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
            
            {/* Salad Image */}
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/${salad.imageId}?w=200&h=200&fit=crop&crop=center`}
                  alt={salad.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <h3 className="font-bold text-gray-800 text-lg">
                #{salad.name}
              </h3>
              <p className="text-gray-600 text-sm">Other Items</p>
              <p className="text-2xl font-bold text-gray-800">
                {salad.price}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 text-yellow-500">
                <span className="text-sm font-medium">{salad.rating}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(parseFloat(salad.rating))
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Add Button */}
            <button
              className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn hover:bg-white"
              aria-label={`Add ${salad.name} to cart`}
            >
              <Plus className="w-5 h-5 text-gray-700 group-hover/btn:text-gray-900 group-hover/btn:scale-110 transition-all duration-200" />
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Slider Indicators */}
      <div className="flex justify-center gap-2 mt-8 lg:hidden">
        {salads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularSaladsSlider;