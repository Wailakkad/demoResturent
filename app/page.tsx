"use client"

import { useState } from 'react'
import PopularSaladsSlider from '@/componemt/PopularSaladsSlider'
import TopFoodsSection from '@/componemt/TopFood'
import MeetTeamSection from '@/componemt/Reviews' 
import ContactSection from '@/componemt/contact'
import CategoriesSection from '@/componemt/Catalog'
import GetStartedSection from '@/componemt/Start'
import {  ShoppingCart, Search, Play, Truck, MapPin, Sparkles, Leaf } from 'lucide-react'

export default function Home() {
    const [cartCount] = useState(3); // Example cart count
  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">🍕</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">Foody</span>
        </div> */}

        <h1 className='text-4xl ml-5'>LOGO</h1>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-orange-500 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Menu</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Offers</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Foods</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Services</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Restaurants</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-orange-500 transition-colors" />
          
          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer group">
            <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </div>
          
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Leaf className="w-8 h-8 text-green-400/30 transform rotate-45" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Sparkles className="w-6 h-6 text-orange-400/40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-slow">
          <div className="w-3 h-3 bg-emerald-400/30 rounded-full"></div>
        </div>
        <div className="absolute top-60 left-1/3 animate-float">
          <div className="w-2 h-2 bg-orange-300/40 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-1/4 animate-pulse">
          <div className="w-4 h-4 bg-amber-400/30 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Healthy Eating is an
                </span>{' '}
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent animate-gradient-x">
                  Important
                </span>{' '}
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Part of Lifestyle
                </span>
              </h1>
              
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                We prepare delicious food with fresh, organic ingredients.
                <br />
                <span className="text-emerald-600 font-medium">Always ready to serve you better.</span>
              </p>
            </div>

            {/* CTA Button with Enhanced Design */}
            <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
              <span className="text-lg font-semibold">Explore Now</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/50 to-orange-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>

            {/* Feature Cards with Glass Morphism */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <div className="group backdrop-blur-xl bg-white/30 border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4 hover:bg-white/40 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                  <Truck className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Fast Delivery</p>
                  <p className="text-gray-600 font-medium">Within 30 minutes</p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="group backdrop-blur-xl bg-white/30 border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4 hover:bg-white/40 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Pick Up</p>
                  <p className="text-gray-600 font-medium">Order on the way</p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative animate-fade-in-right">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-emerald-400/20 rounded-full blur-3xl scale-110 animate-pulse-slow"></div>
            
            {/* Main Image Container */}
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative group">
                {/* Image with Enhanced Styling */}
                <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] mx-auto relative">
                  <img
                    src="https://i.pinimg.com/1200x/05/b1/3f/05b13fb0bc9697230ede7a0d135d924c.jpg"
                    alt="Fresh Healthy Salad Bowl"
                    className="w-full h-full rounded-full object-cover shadow-2xl border-8 border-white/50 backdrop-blur-sm group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Floating Food Elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 animate-float">
                    <img
                      src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=100&h=100&fit=crop&crop=center"
                      alt="Cherry Tomato"
                      className="w-full h-full rounded-full object-cover shadow-lg border-2 border-white"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 animate-float-delayed">
                    <img
                      src="https://i.pinimg.com/736x/e3/e6/3d/e3e63d1a3eee528e587aabb7d8ab1308.jpg"
                      alt="Fresh Lettuce"
                      className="w-full h-full rounded-full object-cover shadow-lg border-2 border-white"
                    />
                  </div>

                  <div className="absolute top-1/4 -right-8 w-12 h-12 animate-bounce-slow">
                    <img
                      src="https://i.pinimg.com/736x/e3/e6/3d/e3e63d1a3eee528e587aabb7d8ab1308.jpg"
                      alt="Fresh Herbs"
                      className="w-full h-full rounded-full object-cover shadow-lg border-2 border-white"
                    />
                  </div>
                </div>

                {/* Enhanced Discount Badge */}
                <div className="absolute -top-6 -right-6 group-discount">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-xl transform -rotate-12 hover:rotate-0 transition-all duration-300 border-4 border-white/50 backdrop-blur-sm">
                      <span className="relative z-10">20% OFF</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/50 to-emerald-600/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Sparkle Effects */}
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                    </div>
                    <div className="absolute -bottom-2 -left-2">
                      <Sparkles className="w-4 h-4 text-orange-400 animate-pulse-delayed" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 0.5s; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite 1s; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out 0.2s both; }
      `}</style>
    </section>

      {/* Popular Salads Slider */}
      <PopularSaladsSlider />
      {/* Categories Section */}
      <CategoriesSection /> 

      {/* Get Started Today */}
      <GetStartedSection />

      {/* Top Foods */}
      <TopFoodsSection/>
      {/* Meet Our Best Team */}
       <MeetTeamSection />
      {/* Contact Section */}
      <ContactSection />
      

      

    

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h1 className='text-4xl mb-25'>LOGO</h1>
              <p className="text-gray-400">
                We prepare delicious food for our customers
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">ABOUT US</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Our story</a></li>
                <li><a href="#" className="hover:text-orange-500">Benefits</a></li>
                <li><a href="#" className="hover:text-orange-500">Team</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">OUR MENU</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Healthy Salads</a></li>
                <li><a href="#" className="hover:text-orange-500">Burger</a></li>
                <li><a href="#" className="hover:text-orange-500">Pasta</a></li>
                <li><a href="#" className="hover:text-orange-500">Pizza</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">OUR LOCATION</h3>
              <p className="text-gray-400 mb-4">
                1234 Food Street<br />
                Restaurant City, RC 12345
              </p>
              <p className="text-gray-400">
                Phone: (555) 123-4567<br />
                Email: info@foody.com
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FOOD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}