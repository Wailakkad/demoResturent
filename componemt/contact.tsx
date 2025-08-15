'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, UtensilsCrossed, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <MessageCircle className="absolute top-32 left-20 w-6 h-6 text-rose-300 opacity-60 animate-pulse" />
        <Phone className="absolute top-48 right-32 w-5 h-5 text-pink-400 opacity-70 transform rotate-12" />
        <Mail className="absolute bottom-40 left-32 w-6 h-6 text-orange-300 opacity-50 animate-bounce" />
        <UtensilsCrossed className="absolute top-64 left-1/3 w-5 h-5 text-rose-400 opacity-60 transform -rotate-12" />
        <MessageCircle className="absolute bottom-32 right-48 w-4 h-4 text-pink-300 opacity-70" />
        <UtensilsCrossed className="absolute top-40 right-20 w-6 h-6 text-orange-400 opacity-50 transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Let's Create Your Perfect
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600"> Dining Experience</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether it's a special celebration or a casual evening out, we're here to make your visit unforgettable. 
                Reach out to us for reservations, private events, or simply to share your thoughts.
              </p>
            </div>

            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 text-lg bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-6 transition-all duration-300 text-gray-500 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? '-top-2 text-sm bg-white px-2 rounded-full text-rose-600'
                      : 'top-4 text-lg'
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 text-lg bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-6 transition-all duration-300 text-gray-500 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? '-top-2 text-sm bg-white px-2 rounded-full text-rose-600'
                      : 'top-4 text-lg'
                  }`}
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 text-lg bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300 resize-none placeholder-transparent"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-6 transition-all duration-300 text-gray-500 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? '-top-2 text-sm bg-white px-2 rounded-full text-rose-600'
                      : 'top-4 text-lg'
                  }`}
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/contact.jpeg"
                  alt="Gourmet dish"
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;