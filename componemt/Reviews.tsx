import Image from 'next/image'

export default function MeetTeamSection() {
  const teamMembers = [
    { 
      name: "Fiona Anderson", 
      role: "Manager", 
      image: "https://i.pinimg.com/1200x/e4/8b/4a/e48b4a7c33811ea2d63a770780112f92.jpg", 
      gradient: "from-pink-400/80 to-purple-500/80",
      socialColor: "text-pink-500"
    },
    { 
      name: "Angelina Jore", 
      role: "Cook", 
      image: "https://i.pinimg.com/736x/24/15/fe/2415fe491ee7003dce8904afb36dd094.jpg",
      gradient: "from-orange-400/80 to-red-500/80",
      socialColor: "text-orange-500"
    },
    { 
      name: "Andre Smith", 
      role: "Designer", 
      image: "https://i.pinimg.com/736x/e5/05/35/e505359c53648701f21e9c9402df14a7.jpg",
      gradient: "from-blue-400/80 to-indigo-500/80",
      socialColor: "text-blue-500"
    },
    { 
      name: "Christine Ori", 
      role: "Manager", 
      image: "https://i.pinimg.com/736x/ce/8f/06/ce8f06602e68e052c18ac0f30c3ba913.jpg",
      gradient: "from-green-400/80 to-teal-500/80",
      socialColor: "text-green-500"
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-500 font-bold text-lg tracking-wider uppercase">foody</span>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Best Team
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Our talented professionals who make it all possible with passion and dedication
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                {/* Decorative Top Border */}
                <div className={`h-1 bg-gradient-to-r ${member.gradient.replace('/80', '')}`}></div>
                
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    ⭐ Expert
                  </div>

                  {/* Social Icons Overlay */}
                  <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <div className={`w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center ${member.socialColor} hover:scale-110 transition-transform cursor-pointer`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <div className={`w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center ${member.socialColor} hover:scale-110 transition-transform cursor-pointer`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-medium mb-4">
                    {member.role}
                  </p>
                  
                  {/* Skills or Achievement Badge */}
                  <div className="flex justify-center space-x-2">
                    <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                      5+ Years
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      Expert
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 animate-pulse"></div>
              </div>

              {/* External Rating */}
              <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="text-gray-500 text-sm ml-2">4.9</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to join our amazing team?</p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Join Our Team</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  )
}