'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
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
      tagline: 'Comfort Refined',
      nonAc: 1199,
      ac: 1700,
      description: 'Thoughtfully curated for the discerning traveler',
      features: ['Premium Bedding', 'Free Wi-Fi', 'Attached Bath', 'Daily Service'],
    },
    {
      id: 2,
      title: 'Semi Deluxe',
      tagline: 'Elevated Living',
      nonAc: 1599,
      ac: 2099,
      description: 'Where comfort meets sophisticated design',
      features: ['Luxury Bedding', 'AC/Cooler', 'Modern Furnishings', '24/7 Support'],
    },
    {
      id: 3,
      title: 'Deluxe Room',
      tagline: 'Pure Luxury',
      nonAc: 2099,
      ac: 2599,
      description: 'The pinnacle of refined hospitality',
      features: ['Premium Linens', 'Climate AC', '24/7 Hot Water', 'Smart TV'],
    },
  ];

  const amenities = [
    { icon: '✨', label: 'Immaculate Cleanliness', desc: 'Premium hygiene standards' },
    { icon: '📡', label: 'High-Speed WiFi', desc: 'Seamless connectivity' },
    { icon: '🅿️', label: 'Secure Parking', desc: 'Protected spaces' },
    { icon: '👥', label: 'Family Friendly', desc: 'Perfect for all guests' },
    { icon: '🛎️', label: 'Concierge Service', desc: '24/7 assistance' },
    { icon: '🌟', label: 'Premium Experience', desc: 'Luxury at its finest' },
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

  const parallaxStyle = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-stone-950">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: 'Hotel Sai Darshan',
          description: 'Ultra-luxury boutique hotel experience',
          address: { '@type': 'PostalAddress', addressCountry: 'IN' },
          telephone: '+919712227011',
          priceRange: '₹₹',
          starRating: { '@type': 'Rating', ratingValue: '4.5' },
        })}
      </script>

      {/* Custom Cursor Glow */}
      <div
        className="pointer-events-none fixed w-8 h-8 rounded-full mix-blend-screen z-50 hidden lg:block"
        style={{
          left: `${mousePos.x - 16}px`,
          top: `${mousePos.y - 16}px`,
          background: 'radial-gradient(circle, rgba(217,179,102,0.4) 0%, transparent 70%)',
          transform: 'translate(0, 0)',
          transition: 'none',
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 flex items-center justify-center">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-stone-900 to-stone-950"
            style={parallaxStyle(0.05)}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, rgba(217,179,102,${0.3 - i * 0.05}) 0%, transparent 70%)`,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-900/20 to-amber-800/20 border border-amber-700/40 rounded-full backdrop-blur-sm">
              <span className="text-amber-200 text-sm font-light tracking-widest uppercase">
                Luxury Hospitality Redefined
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-serif text-stone-50 font-light leading-tight tracking-tight">
              Hotel Sai Darshan
            </h1>

            <p className="text-2xl md:text-3xl text-amber-100 font-light tracking-wide">
              A Refined Stay Experience
            </p>

            <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto">
              Where luxury meets affordability. Experience premium comfort in every detail.
            </p>
          </div>

          {/* CTA Buttons with Glow */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={whatsappClick}
              className="group relative px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                💬 Book via WhatsApp
              </span>
            </button>

            <button
              onClick={callClick}
              className="group relative px-10 py-4 border-2 border-amber-600 text-amber-100 font-semibold rounded-lg hover:bg-amber-900/20 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative flex items-center gap-2">
                📞 Call Now
              </span>
            </button>
          </div>

          <p className="text-stone-400 text-sm font-light">+91 9712227011 • 24/7 Available</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-pulse-slow text-amber-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="relative py-32 bg-gradient-to-b from-stone-950 to-stone-900 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-6xl font-serif text-stone-50 font-light tracking-tight">
              Curated Rooms
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto" />
            <p className="text-xl text-amber-100 font-light max-w-2xl mx-auto">
              Each room tells a story of refined comfort and luxury
            </p>
          </div>

          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
                className="group relative"
              >
                {/* Card with 3D effect */}
                <div className="relative bg-gradient-to-b from-stone-800 to-stone-900 rounded-2xl overflow-hidden border border-amber-900/40 transition-all duration-500"
                  style={{
                    transform: hoveredRoom === room.id ? 'translateY(-12px) rotateX(5deg)' : 'translateY(0)',
                    boxShadow: hoveredRoom === room.id
                      ? '0 25px 50px rgba(217, 119, 6, 0.3), 0 0 40px rgba(217, 119, 6, 0.15)'
                      : '0 10px 30px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Room Image Placeholder with Overlay */}
                  <div className="relative h-64 bg-gradient-to-br from-amber-900/40 to-stone-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                    <svg className="w-full h-full opacity-20 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z" />
                    </svg>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Card Content */}
                  <div className="relative p-8 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-3xl font-serif text-stone-50 font-light">
                          {room.title}
                        </h3>
                        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                          {room.tagline}
                        </span>
                      </div>
                      <p className="text-amber-100/80 text-sm font-light">
                        {room.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-4 pt-4 border-t border-amber-900/30">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
                            Non-AC
                          </p>
                          <p className="text-3xl font-serif text-amber-400 font-light">
                            ₹{room.nonAc}
                          </p>
                          <p className="text-xs text-stone-500">per night</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
                            AC
                          </p>
                          <p className="text-3xl font-serif text-amber-400 font-light">
                            ₹{room.ac}
                          </p>
                          <p className="text-xs text-stone-500">per night</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-4">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <span className="text-amber-600">→</span>
                          <span className="text-sm text-stone-300 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Reserve Button */}
                    <button
                      onClick={whatsappClick}
                      className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative py-32 bg-gradient-to-b from-stone-900 to-stone-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-6xl font-serif text-stone-50 font-light tracking-tight">
              Premium Amenities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto" />
          </div>

          {/* Animated Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-stone-800/50 to-stone-900/50 rounded-xl border border-amber-900/30 hover:border-amber-600/60 transition-all duration-500 backdrop-blur-sm"
                style={{
                  animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`,
                  '--delay': `${idx * 0.1}s`,
                } as React.CSSProperties}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-serif text-stone-50 font-light mb-2">
                  {amenity.label}
                </h3>
                <p className="text-sm text-stone-400 font-light">
                  {amenity.desc}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:to-amber-600/0 rounded-xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="relative py-32 bg-stone-950 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-6xl font-serif text-stone-50 font-light tracking-tight">
              Location & Accessibility
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map with Zoom Animation */}
            <div className="group relative h-96 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl overflow-hidden border border-amber-900/40">
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <svg className="w-32 h-32 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent" />
              <p className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm font-light">
                Interactive Map Coming Soon
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-serif text-stone-50 font-light">
                  Hotel Address
                </h3>
                <p className="text-lg text-amber-100/80 font-light leading-relaxed">
                  Hotel Sai Darshan<br />
                  <span className="text-stone-500">[Prime Location to be Updated]</span><br />
                  India
                </p>
              </div>

              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Get Directions
              </button>

              <div className="space-y-6 border-t border-amber-900/30 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-2">
                    Telephone
                  </p>
                  <a href="tel:+919712227011" className="text-2xl font-serif text-stone-50 font-light hover:text-amber-400 transition-colors duration-300">
                    +91 9712227011
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-2">
                    Availability
                  </p>
                  <p className="text-stone-300 font-light">24/7 • Every Day of the Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-b from-stone-950 to-black px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-serif text-stone-50 font-light tracking-tight">
            Begin Your Luxury Journey
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={whatsappClick}
              className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Book via WhatsApp</span>
            </button>

            <button
              onClick={callClick}
              className="group relative px-12 py-4 border-2 border-amber-600 text-amber-100 font-semibold rounded-lg hover:bg-amber-900/20 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative">Call Now</span>
            </button>
          </div>

          <p className="text-stone-400 text-sm font-light">+91 9712227011</p>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40 lg:hidden">
        <button
          onClick={whatsappClick}
          className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          💬
        </button>
        <button
          onClick={callClick}
          className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-900/20 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-amber-400 font-light">
                Hotel Sai Darshan
              </h3>
              <p className="text-stone-400 text-sm font-light">
                Luxury redefined. Affordability elevated.
              </p>
            </div>

            {[
              {
                title: 'Explore',
                links: [
                  { label: 'Rooms', id: 'rooms', type: 'section' as const },
                  { label: 'Location', id: 'location', type: 'section' as const },
                ],
              },
              {
                title: 'Contact',
                links: [
                  { label: '+91 9712227011', href: 'tel:+919712227011', type: 'link' as const },
                  { label: 'WhatsApp Chat', href: '#', type: 'action' as const },
                ],
              },
              {
                title: 'Information',
                links: [
                  { label: 'Privacy Policy', href: '#', type: 'link' as const },
                  { label: 'Terms & Conditions', href: '#', type: 'link' as const },
                ],
              },
            ].map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-amber-600 text-xs uppercase tracking-widest font-semibold">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      {link.type === 'section' ? (
                        <button
                          onClick={() => scrollToSection(link.id!)}
                          className="text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm font-light"
                        >
                          {link.label}
                        </button>
                      ) : link.type === 'action' ? (
                        <button
                          onClick={whatsappClick}
                          className="text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm font-light"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm font-light"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-amber-900/20 pt-8 text-center text-stone-500 text-sm font-light">
            <p>&copy; 2024 Hotel Sai Darshan. An Experience in Luxury.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(0px);
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Smooth scrolling with momentum */
        html {
          scroll-behavior: smooth;
        }

        /* Glassmorphism for cards */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  );
}
