'use client';

import React from 'react';
import { Search, Megaphone, Truck, ChefHat, ExternalLink, Plus } from 'lucide-react';

const GetStartedSection: React.FC = () => {
  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                READY TO ORDER?
              </p>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Experience Culinary Excellence!
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Join thousands of food lovers who trust us for exceptional dining experiences delivered right to your door.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                From farm-fresh ingredients to expertly crafted dishes, we're committed to bringing you restaurant-quality meals with the convenience of home delivery. Our chefs work tirelessly to create memorable flavors that keep you coming back for more.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-3">
                  <Search className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Browse Menu</h3>
                <p className="text-xs text-gray-600 mt-1">Explore Our Delicious Options</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-3">
                  <Megaphone className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Special Offers</h3>
                <p className="text-xs text-gray-600 mt-1">Daily Deals & Discounts</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-3">
                  <Truck className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Fast Delivery</h3>
                <p className="text-xs text-gray-600 mt-1">Fresh Food In 30 Minutes</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-3">
                  <ChefHat className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Chef's Special</h3>
                <p className="text-xs text-gray-600 mt-1">Crafted With Love & Care</p>
              </div>
            </div>
            
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex items-center space-x-3">
                  <span>Order Now</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <div className="font-semibold text-sm">View Menu</div>
                    <div className="text-xs text-gray-500">Browse all dishes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <img
              src="/image.jpeg"
              alt="Happy woman eating"
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;