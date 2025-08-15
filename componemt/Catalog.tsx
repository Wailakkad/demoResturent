'use client';

import React, { useState } from 'react';
import { Star, Clock, DollarSign, Zap, Truck, Award } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-red-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-6 py-3 rounded-full font-semibold text-sm mb-6 shadow-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            DISCOVER OUR EXCELLENCE
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">Categories</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Featured Product */}
          <div className="relative group">
            {/* Main Card */}
            <div className="relative bg-white rounded-[3rem] p-12 shadow-2xl transform transition-all duration-700 group-hover:scale-105">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-red-400/10 to-pink-400/10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Featured Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-6 py-3 rounded-full mb-8 shadow-xl">
                  <Zap className="w-4 h-4 mr-2" />
                  SIGNATURE DISH
                </div>

                {/* Title */}
                <div className="mb-10">
                  <h3 className="text-gray-800 text-6xl font-black mb-4 leading-none">
                    GOURMET
                  </h3>
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-7xl font-black leading-none">
                    BURGER
                  </h3>
                </div>

                {/* Image Container */}
                <div className="relative mb-10 group/image">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2rem] p-4 shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=320&fit=crop" 
                      alt="Gourmet Burger"
                      className="w-full h-72 object-cover rounded-[1.5rem] transform group-hover/image:scale-105 transition-transform duration-500 shadow-lg"
                    />
                    {/* Floating Labels */}
                    <div className="absolute top-8 right-8 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                      🔥 BESTSELLER
                    </div>
                    <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-semibold px-4 py-3 rounded-full shadow-lg flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                      4.9
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center items-center space-x-8 mb-10">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-2xl font-black text-orange-600 mb-1">
                      <Clock className="w-5 h-5 mr-1" />
                      25min
                    </div>
                    <div className="text-sm text-gray-500 font-medium">Delivery</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-2xl font-black text-green-600 mb-1">
                      <DollarSign className="w-5 h-5" />
                      12.99
                    </div>
                    <div className="text-sm text-gray-500 font-medium">Starting</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group/btn w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center space-x-3">
                    <span>ORDER NOW</span>
                    <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            {[
              {
                icon: Award,
                title: "Fresh & Quality Food",
                description: "We prepare delicious food with fresh ingredients. For you we are always ready with premium quality ingredients sourced daily.",
                gradient: "from-orange-500 to-red-500",
                hoverColor: "orange-600"
              },
              {
                icon: Truck,
                title: "Lightning Fast Delivery",
                description: "Quick and reliable delivery service. We ensure your food reaches you hot and fresh within 30 minutes or less.",
                gradient: "from-blue-500 to-purple-500",
                hoverColor: "blue-600"
              },
              {
                icon: Star,
                title: "Premium Experience",
                description: "Exceptional dining experience with carefully crafted meals. We create memorable moments with every single bite.",
                gradient: "from-green-500 to-teal-500",
                hoverColor: "green-600"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                    hoveredFeature === index ? 'scale-105' : ''
                  }`}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative flex items-start space-x-6">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
                    </div>
                    
                    <div className="flex-1 pt-2">
                      <h3 className={`font-bold text-2xl mb-4 text-gray-900 group-hover:text-${feature.hoverColor} transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;