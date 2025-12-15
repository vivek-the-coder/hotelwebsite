'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      // Scroll event listener for future parallax effects
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rooms = [
    {
      id: 1,
      title: 'Budget Room',
      nonAc: 1199,
      ac: 1700,
      description: 'Carefully crafted comfort for the discerning guest',
      features: ['Premium Bedding', 'Free WiFi', 'Attached Bath', 'Daily Housekeeping'],
    },
    {
      id: 2,
      title: 'Semi Deluxe Room',
      nonAc: 1599,
      ac: 2099,
      description: 'Where refined comfort meets thoughtful design',
      features: ['Luxury Bedding', 'AC/Cooler', 'Modern Furnishings', 'Premium Toiletries'],
    },
    {
      id: 3,
      title: 'Deluxe Room',
      nonAc: 2099,
      ac: 2599,
      description: 'An exceptional experience in elevated hospitality',
      features: ['Premium Linens', 'Climate Control AC', '24/7 Hot Water', 'Smart TV'],
    },
  ];

  const amenities = [
    { icon: '✨', label: 'Immaculate Spaces', desc: 'Attention to every detail' },
    { icon: '📡', label: 'Seamless Connectivity', desc: 'High-speed WiFi throughout' },
    { icon: '🅿️', label: 'Secure Parking', desc: 'Protected vehicle storage' },
    { icon: '👥', label: 'Welcoming Hosts', desc: '24/7 dedicated assistance' },
  ];

  const whatsappClick = () => {
    window.open('https://wa.me/919712227011?text=I%20would%20like%20to%20reserve%20a%20room%20at%20Hotel%20Sai%20Darshan', '_blank');
  };

  const callClick = () => {
    window.location.href = 'tel:+919712227011';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-stone-950 text-stone-100">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: 'Hotel Sai Darshan',
          description: 'Luxury boutique hotel experience',
          address: { '@type': 'PostalAddress', addressCountry: 'IN' },
          telephone: '+919712227011',
          priceRange: '₹₹',
          starRating: { '@type': 'Rating', ratingValue: '4.5' },
        })}
      </script>

      {/* Soft Light Cursor */}
      <div
        className="pointer-events-none fixed w-12 h-12 rounded-full mix-blend-screen z-50 hidden lg:block"
        style={{
          left: `${mousePos.x - 24}px`,
          top: `${mousePos.y - 24}px`,
          background: 'radial-gradient(circle, rgba(217,179,102,0.15) 0%, transparent 70%)',
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Hero Section - Cinematic Opening */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* Subtle Background Depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-950 to-black" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at ${50 + (typeof window !== 'undefined' ? mousePos.x / window.innerWidth * 10 : 0)}% ${50 + (typeof window !== 'undefined' ? mousePos.y / window.innerHeight * 10 : 0)}%, rgba(217,179,102,0.1) 0%, transparent 50%)`,
              transition: 'background 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
        </div>

        {/* Slow Floating Accent */}
        <div
          className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, rgba(217,179,102,0.5) 0%, transparent 70%)',
            animation: 'slowFloat 20s ease-in-out infinite',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-amber-200 text-sm font-light tracking-widest uppercase opacity-80">
              Experience Luxury
            </p>

            <h1 className="text-6xl md:text-8xl font-serif text-stone-50 font-light leading-tight tracking-tight">
              Hotel Sai Darshan
            </h1>

            <p className="text-xl md:text-2xl text-amber-100 font-light tracking-wide">
              A Refined Stay Experience
            </p>

            <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
              Where thoughtful design meets affordable luxury
            </p>
          </div>

          {/* Heavy Luxury Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <button
              onClick={whatsappClick}
              className="group px-12 py-4 bg-amber-700 text-stone-950 font-semibold rounded-sm hover:shadow-2xl transition-all duration-700 relative"
              style={{
                boxShadow: '0 20px 40px rgba(217, 119, 6, 0.2)',
              }}
            >
              <span className="flex items-center gap-2">Reserve a Room</span>
            </button>

            <button
              onClick={callClick}
              className="px-12 py-4 border-2 border-amber-700 text-amber-200 font-semibold rounded-sm hover:bg-amber-900/20 transition-all duration-700"
            >
              <span className="flex items-center gap-2">Call Us</span>
            </button>
          </div>

          <p className="text-stone-500 text-sm font-light">+91 9712227011 • Available 24/7</p>
        </div>
      </section>

      {/* Rooms Section - Experiential */}
      <section id="rooms" className="relative py-32 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-32 space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif text-stone-50 font-light tracking-tight">
              Rooms
            </h2>
            <div className="w-16 h-1 bg-amber-700/50 mx-auto" />
            <p className="text-lg text-amber-100/70 font-light max-w-2xl mx-auto">
              Each room is designed to deliver an experience
            </p>
          </div>

          {/* Room Cards - Large & Experiential */}
          <div className="space-y-20">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                style={{
                  transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {/* Image Section */}
                <div
                  className="group relative h-96 bg-gradient-to-br from-stone-800 to-stone-900 rounded-sm overflow-hidden"
                  onMouseEnter={() => setHoveredRoom(room.id)}
                  onMouseLeave={() => setHoveredRoom(null)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-40 h-40 text-stone-700 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z" />
                    </svg>
                  </div>

                  {/* Subtle Hover Light Reflection */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-amber-700/0 via-amber-600/0 to-amber-700/0 transition-all duration-700"
                    style={{
                      background:
                        hoveredRoom === room.id
                          ? 'radial-gradient(ellipse at 30% 30%, rgba(217,119,6,0.15) 0%, transparent 50%)'
                          : 'radial-gradient(ellipse at 30% 30%, rgba(217,119,6,0) 0%, transparent 50%)',
                    }}
                  />

                  {/* Subtle Tilt on Hover */}
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: hoveredRoom === room.id ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                      transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                  />
                </div>

                {/* Text Section */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-4xl font-serif text-stone-50 font-light">
                      {room.title}
                    </h3>
                    <p className="text-amber-100/70 font-light text-base leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Pricing - Appears After */}
                  <div className="space-y-6 pt-6 border-t border-amber-700/30">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
                          Non-AC
                        </p>
                        <p className="text-4xl font-serif text-amber-200 font-light">
                          ₹{room.nonAc}
                        </p>
                        <p className="text-xs text-stone-500 font-light">per night</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
                          AC
                        </p>
                        <p className="text-4xl font-serif text-amber-200 font-light">
                          ₹{room.ac}
                        </p>
                        <p className="text-xs text-stone-500 font-light">per night</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-4">
                    {room.features.map((feature, i) => (
                      <p key={i} className="text-sm text-stone-300 font-light flex items-center gap-3">
                        <span className="text-amber-600">→</span> {feature}
                      </p>
                    ))}
                  </div>

                  {/* Reserve Button */}
                  <button
                    onClick={whatsappClick}
                    className="mt-8 px-10 py-4 bg-amber-700 text-stone-950 font-semibold rounded-sm hover:shadow-2xl transition-all duration-700 text-sm"
                    style={{
                      boxShadow: hoveredRoom === room.id ? '0 25px 50px rgba(217, 119, 6, 0.25)' : '0 10px 25px rgba(217, 119, 6, 0.1)',
                    }}
                  >
                    Reserve This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section - Restrained */}
      <section className="relative py-32 bg-stone-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif text-stone-50 font-light tracking-tight">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-amber-700/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="text-4xl transition-transform duration-700 group-hover:scale-110">
                  {amenity.icon}
                </div>
                <h3 className="text-2xl font-serif text-stone-50 font-light">
                  {amenity.label}
                </h3>
                <p className="text-stone-400 font-light">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Dignified */}
      <section id="location" className="relative py-32 bg-gradient-to-b from-stone-950 to-stone-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif text-stone-50 font-light tracking-tight">
              Location
            </h2>
            <div className="w-16 h-1 bg-amber-700/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map */}
            <div className="relative h-80 bg-stone-800 rounded-sm overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-stone-600 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-50" />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-stone-50 font-light">
                  Hotel Address
                </h3>
                <p className="text-lg text-amber-100/70 font-light leading-relaxed">
                  Hotel Sai Darshan<br />
                  <span className="text-stone-500">[Prime Location]</span><br />
                  India
                </p>
              </div>

              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="inline-block px-10 py-4 bg-amber-700 text-stone-950 font-semibold rounded-sm hover:shadow-xl transition-all duration-700 text-sm w-fit"
              >
                Get Directions
              </button>

              <div className="space-y-6 border-t border-amber-700/30 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-2">
                    Telephone
                  </p>
                  <a href="tel:+919712227011" className="text-2xl font-serif text-stone-50 font-light hover:text-amber-300 transition-colors duration-500">
                    +91 9712227011
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-2">
                    Available
                  </p>
                  <p className="text-stone-300 font-light">24 Hours, Every Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic Closer */}
      <section className="relative py-32 bg-black px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif text-stone-50 font-light tracking-tight">
            Begin Your Journey
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={whatsappClick}
              className="px-12 py-4 bg-amber-700 text-stone-950 font-semibold rounded-sm hover:shadow-2xl transition-all duration-700"
              style={{
                boxShadow: '0 20px 40px rgba(217, 119, 6, 0.2)',
              }}
            >
              Reserve Now
            </button>

            <button
              onClick={callClick}
              className="px-12 py-4 border-2 border-amber-700 text-amber-200 font-semibold rounded-sm hover:bg-amber-900/20 transition-all duration-700"
            >
              Call Hotel
            </button>
          </div>

          <p className="text-stone-400 text-sm font-light">+91 9712227011</p>
        </div>
      </section>

      {/* Floating Action Buttons - Mobile */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40 lg:hidden">
        <button
          onClick={whatsappClick}
          className="w-14 h-14 bg-amber-700 text-stone-950 rounded-full flex items-center justify-center text-xl font-bold shadow-xl hover:shadow-2xl transition-shadow duration-700"
        >
          💬
        </button>
        <button
          onClick={callClick}
          className="w-14 h-14 bg-amber-700 text-stone-950 rounded-full flex items-center justify-center text-xl font-bold shadow-xl hover:shadow-2xl transition-shadow duration-700"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-900/30 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-amber-200 font-light">
                Hotel Sai Darshan
              </h3>
              <p className="text-stone-400 text-sm font-light">
                A refined luxury experience
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-amber-600 text-xs uppercase tracking-widest font-semibold">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('rooms')}
                    className="text-stone-400 hover:text-amber-300 transition-colors duration-500 text-sm font-light"
                  >
                    Rooms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('location')}
                    className="text-stone-400 hover:text-amber-300 transition-colors duration-500 text-sm font-light"
                  >
                    Location
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-amber-600 text-xs uppercase tracking-widest font-semibold">
                Contact
              </h4>
              <p className="text-stone-400 text-sm font-light">+91 9712227011</p>
              <p className="text-stone-500 text-xs font-light">24/7 Available</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-amber-600 text-xs uppercase tracking-widest font-semibold">
                Reserve
              </h4>
              <button
                onClick={whatsappClick}
                className="text-stone-400 hover:text-amber-300 transition-colors duration-500 text-sm font-light"
              >
                WhatsApp Booking →
              </button>
            </div>
          </div>

          <div className="border-t border-amber-900/30 pt-8 text-center text-stone-500 text-xs font-light">
            <p>&copy; 2024 Hotel Sai Darshan. An Experience in Refined Luxury.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slowFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }

        /* Slow, deliberate animations */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
