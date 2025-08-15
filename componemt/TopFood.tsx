import Image from 'next/image'

export default function TopFoodsSection() {
  const foods = [
    { 
      name: "Pizza", 
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop&q=80",
      gradient: "from-red-500/80 to-orange-500/80"
    },
    { 
      name: "Pasta", 
      image: "/food.jpeg",
      gradient: "from-yellow-500/80 to-orange-500/80"
    },
    { 
      name: "Shakes", 
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop&q=80",
      gradient: "from-pink-500/80 to-purple-500/80"
    },
    { 
      name: "Burger", 
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop&q=80",
      gradient: "from-green-500/80 to-teal-500/80"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              TOP FOODS
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with passion and served with love
          </p>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foods.map((food, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-72 w-full">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${food.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Popular ⭐
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {food.name}
                  </h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-white/90 text-sm">4.9</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 animate-pulse"></div>
              </div>

              {/* External Label */}
              <div className="text-center mt-6">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  {food.name}
                </h4>
                <div className="w-8 h-0.5 bg-orange-400 mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>View All Menu</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  )
}