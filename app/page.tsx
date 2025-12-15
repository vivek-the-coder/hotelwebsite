'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rooms = [
    {
      id: 1,
      name: 'Budget Room',
      nonAc: 1199,
      ac: 1700,
      description: 'Comfortable, quiet, and genuine hospitality.',
    },
    {
      id: 2,
      name: 'Semi Deluxe Room',
      nonAc: 1599,
      ac: 2099,
      description: 'Thoughtfully designed for your comfort.',
    },
    {
      id: 3,
      name: 'Deluxe Room',
      nonAc: 2099,
      ac: 2599,
      description: 'Our finest expression of luxury hospitality.',
    },
  ];

  return (
    <div className="relative overflow-hidden bg-stone-950 text-stone-100 selection:bg-amber-700/50 selection:text-stone-50">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: 'Hotel Sai Darshan',
          description: 'Boutique luxury hotel offering refined comfort and genuine hospitality',
          address: { '@type': 'PostalAddress', addressCountry: 'IN' },
          telephone: '+919712227011',
          priceRange: '₹₹',
          starRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' },
          amenities: ['WiFi', 'Parking', 'Hygienic Rooms', 'Family Friendly'],
        })}
      </script>

      {/* Soft ambient light cursor - desktop only */}
      <div
        className="pointer-events-none fixed z-50 hidden lg:block rounded-full mix-blend-screen"
        style={{
          width: '100px',
          height: '100px',
          left: `${mousePos.x - 50}px`,
          top: `${mousePos.y - 50}px`,
          background: 'radial-gradient(circle at 35% 35%, rgba(212, 175, 105, 0.06) 0%, transparent 60%)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          filter: 'blur(50px)',
        }}
      />

      {/* Hero Section - Arrival */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-stone-900 via-stone-950 to-black">
        {/* Atmospheric layered background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-40" style={{
            background: `radial-gradient(ellipse at ${50 + mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1000) * 15}% 20%, rgba(212, 175, 105, 0.08) 0%, transparent 50%)`,
            transition: 'background 2s ease-out',
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-12">
          <div className="space-y-6" style={{ animation: 'fadeInSoft 2.5s ease-out' }}>
            <p className="text-amber-100/40 text-xs tracking-widest uppercase font-light">
              Welcome
            </p>
            <h1 className="text-7xl md:text-8xl font-serif text-stone-50 font-light leading-tight">
              Hotel Sai Darshan
            </h1>
            <p className="text-2xl font-serif text-amber-100/70 font-light">
              A refined stay experience
            </p>
          </div>

          <p className="text-lg text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
            Quiet elegance. Genuine hospitality. A sanctuary designed for those who value comfort and authenticity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8" style={{ animation: 'fadeInSoft 2.5s ease-out 0.2s both' }}>
            <button
              onClick={() => window.open('https://wa.me/919712227011', '_blank')}
              className="px-12 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-light rounded-sm transition-all duration-700 hover:shadow-2xl"
              style={{
                boxShadow: '0 16px 48px rgba(212, 175, 105, 0.12)',
              }}
            >
              Book via WhatsApp
            </button>
            <button
              onClick={() => { window.location.href = 'tel:+919712227011'; }}
              className="px-12 py-4 border border-amber-700/40 text-amber-100 font-light rounded-sm hover:border-amber-600/60 hover:bg-amber-900/5 transition-all duration-700"
            >
              Call Us
            </button>
          </div>

          <p className="text-stone-600 text-sm font-light">+91 9712227011 • Open 24/7</p>
        </div>
      </section>

      {/* Rooms Section - Comfort Discovery */}
      <section id="rooms" className="relative py-40 px-6 bg-gradient-to-b from-black via-stone-950 to-black">
        <div className="max-w-6xl mx-auto">
          {/* Section intro */}
          <div className="text-center mb-32 space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-50">
              Our Rooms
            </h2>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-700/40 to-transparent mx-auto" />
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {rooms.map((room, idx) => (
              <div
                key={room.id}
                className="group"
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
                style={{ animation: `fadeInSoft 1s ease-out ${idx * 0.15}s both` }}
              >
                {/* Image */}
                <div className="relative h-80 bg-gradient-to-br from-amber-900/20 via-stone-800 to-stone-900 rounded-sm overflow-hidden mb-8 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-stone-700 opacity-25" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent" />
                  <div
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                      background: hoveredRoom === room.id
                        ? 'radial-gradient(ellipse at 30% 30%, rgba(212, 175, 105, 0.06) 0%, transparent 50%)'
                        : 'radial-gradient(ellipse at 30% 30%, rgba(212, 175, 105, 0) 0%, transparent 50%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-serif font-light text-stone-50">
                      {room.name}
                    </h3>
                    <p className="text-stone-400 font-light text-base leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-6 pt-6 border-t border-amber-700/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-amber-600/70 font-light">
                          Non-AC
                        </p>
                        <p className="text-4xl font-serif font-light text-amber-100">
                          ₹{room.nonAc}
                        </p>
                        <p className="text-xs text-stone-600 font-light">per night</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-amber-600/70 font-light">
                          AC
                        </p>
                        <p className="text-4xl font-serif font-light text-amber-100">
                          ₹{room.ac}
                        </p>
                        <p className="text-xs text-stone-600 font-light">per night</p>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => window.open('https://wa.me/919712227011', '_blank')}
                    className="w-full py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-light rounded-sm transition-all duration-700 hover:shadow-lg"
                    style={{
                      boxShadow: hoveredRoom === room.id ? '0 20px 40px rgba(212, 175, 105, 0.15)' : '0 8px 20px rgba(212, 175, 105, 0.08)',
                    }}
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section - Trust Builder */}
      <section className="relative py-32 px-6 bg-black border-t border-amber-700/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-serif font-light text-stone-50">
              What We Provide
            </h2>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-700/40 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { label: 'Immaculate Rooms', desc: 'Pristine, hygienic, always cared for' },
              { label: 'High-Speed WiFi', desc: 'Reliable connectivity throughout' },
              { label: 'Complimentary Parking', desc: 'Secure and convenient' },
              { label: 'Family & Couple Friendly', desc: 'Welcome to all our guests' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="space-y-3 pb-8 border-b border-amber-700/10 group"
                style={{ animation: `fadeInSoft 1s ease-out ${idx * 0.1}s both` }}
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-600/30 to-amber-700/10 flex items-center justify-center">
                  <span className="text-amber-400 text-sm">✓</span>
                </div>
                <h3 className="text-xl font-serif font-light text-stone-50 group-hover:text-amber-100 transition-colors duration-500">
                  {item.label}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Decision */}
      <section id="location" className="relative py-32 px-6 bg-gradient-to-b from-black via-stone-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-serif font-light text-stone-50">
              Find Us
            </h2>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-700/40 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map */}
            <div className="relative h-96 bg-gradient-to-br from-stone-800/30 to-stone-900/50 rounded-sm overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-stone-700 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-4">
                <h3 className="text-4xl font-serif font-light text-stone-50">
                  Hotel Sai Darshan
                </h3>
                <p className="text-lg text-stone-400 font-light leading-relaxed">
                  A well-kept gem in a prime location. Easily accessible. Warmly welcomed.
                </p>
              </div>

              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="px-10 py-3 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-light rounded-sm transition-all duration-700 hover:shadow-lg w-fit"
              >
                Get Directions
              </button>

              <div className="space-y-6 border-t border-amber-700/20 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600/60 font-light mb-2">
                    Phone
                  </p>
                  <a href="tel:+919712227011" className="text-3xl font-serif font-light text-stone-50 hover:text-amber-200 transition-colors duration-500">
                    +91 9712227011
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600/60 font-light mb-2">
                    Hours
                  </p>
                  <p className="text-stone-400 font-light">24 Hours Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Decision Moment */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-50">
            Begin Your Stay
          </h2>

          <p className="text-lg text-stone-400 font-light leading-relaxed">
            A comfortable room awaits. Genuine hospitality. The kind of experience that feels like home, but better.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <button
              onClick={() => window.open('https://wa.me/919712227011', '_blank')}
              className="px-12 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-light rounded-sm transition-all duration-700 hover:shadow-2xl"
              style={{
                boxShadow: '0 16px 48px rgba(212, 175, 105, 0.12)',
              }}
            >
              Reserve Now
            </button>
            <button
              onClick={() => { window.location.href = 'tel:+919712227011'; }}
              className="px-12 py-4 border border-amber-700/40 text-amber-100 font-light rounded-sm hover:border-amber-600/60 hover:bg-amber-900/5 transition-all duration-700"
            >
              Call
            </button>
          </div>

          <p className="text-stone-600 text-sm font-light">+91 9712227011</p>
        </div>
      </section>

      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 lg:hidden">
        <button
          onClick={() => window.open('https://wa.me/919712227011', '_blank')}
          className="w-14 h-14 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-500 font-bold text-lg"
        >
          💬
        </button>
        <button
          onClick={() => { window.location.href = 'tel:+919712227011'; }}
          className="w-14 h-14 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-500 font-bold text-lg"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-700/10 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-500 text-xs font-light">
            Hotel Sai Darshan
          </p>
          <p className="text-stone-600 text-xs font-light mt-2">
            A refined stay experience
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInSoft {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
