'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      // Scroll tracking for future parallax effects
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
      description: 'A sanctuary of comfort. Simple, elegant, authentic.',
    },
    {
      id: 2,
      title: 'Semi Deluxe Room',
      nonAc: 1599,
      ac: 2099,
      description: 'Where thoughtful design meets refined comfort.',
    },
    {
      id: 3,
      title: 'Deluxe Room',
      nonAc: 2099,
      ac: 2599,
      description: 'The finest expression of hospitality and luxury.',
    },
  ];

  const whatsappClick = () => {
    window.open('https://wa.me/919712227011?text=I%20would%20like%20to%20reserve%20a%20room', '_blank');
  };

  const callClick = () => {
    window.location.href = 'tel:+919712227011';
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-stone-950 to-black text-stone-100">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: 'Hotel Sai Darshan',
          description: 'A refined stay experience',
          address: { '@type': 'PostalAddress', addressCountry: 'IN' },
          telephone: '+919712227011',
          priceRange: '₹₹',
        })}
      </script>

      {/* Soft ambient light cursor */}
      <div
        className="pointer-events-none fixed z-50 hidden lg:block rounded-full"
        style={{
          width: '120px',
          height: '120px',
          left: `${mousePos.x - 60}px`,
          top: `${mousePos.y - 60}px`,
          background: 'radial-gradient(circle at 30% 30%, rgba(212, 175, 105, 0.08) 0%, transparent 60%)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
          filter: 'blur(40px)',
        }}
      />

      {/* Hero Section - Cinematic Opening */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Layered depth background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-stone-950/60 to-black/80" />
          
          {/* Warm accent glow */}
          <div
            className="absolute top-1/4 right-0 w-full h-full opacity-20"
            style={{
              background: `radial-gradient(ellipse at ${50 + mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1) * 20}% 30%, rgba(212, 175, 105, 0.15) 0%, transparent 40%)`,
              transition: 'background 2s ease-out',
            }}
          />

          {/* Floating depth elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 105, 0.4) 0%, transparent 70%)',
                animation: 'slowDrift 15s ease-in-out infinite',
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5"
              style={{
                background: 'radial-gradient(circle, rgba(168, 162, 158, 0.3) 0%, transparent 70%)',
                animation: 'slowDrift 20s ease-in-out infinite 2s',
              }}
            />
          </div>
        </div>

        {/* Hero Content - Fade in elegantly */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="space-y-8" style={{ animation: 'fadeInUp 2s ease-out' }}>
            <p className="text-amber-100/60 text-xs tracking-widest uppercase font-light">
              Welcome to
            </p>

            <h1 className="text-7xl md:text-8xl font-serif font-light text-stone-50 leading-tight tracking-tight">
              Hotel Sai Darshan
            </h1>

            <p className="text-2xl md:text-3xl font-serif font-light text-amber-100/80">
              A Refined Stay Experience
            </p>

            <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
              Where affordable luxury meets genuine hospitality. A sanctuary designed for those who appreciate quiet elegance and authentic comfort.
            </p>
          </div>

          {/* Buttons with heavy presence */}
          <div
            className="flex flex-col sm:flex-row gap-8 justify-center mt-16"
            style={{ animation: 'fadeInUp 2s ease-out 0.3s both' }}
          >
            <button
              onClick={whatsappClick}
              className="px-12 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-semibold text-lg rounded-sm transition-all duration-700 hover:shadow-2xl"
              style={{
                boxShadow: '0 20px 60px rgba(212, 175, 105, 0.15)',
              }}
            >
              Reserve a Room
            </button>

            <button
              onClick={callClick}
              className="px-12 py-4 border-2 border-amber-700/60 text-amber-200 font-semibold text-lg rounded-sm hover:border-amber-600 hover:bg-amber-900/10 transition-all duration-700"
            >
              Call Us
            </button>
          </div>

          <p className="text-stone-500 text-sm font-light mt-8">+91 9712227011 • Available 24/7</p>
        </div>
      </section>

      {/* Rooms Section - Experiential Journey */}
      <section id="rooms" className="relative py-40 px-6 bg-gradient-to-b from-stone-950 via-zinc-950 to-stone-950">
        <div className="max-w-7xl mx-auto">
          {/* Section intro */}
          <div className="text-center mb-32 space-y-4">
            <h2 className="text-6xl font-serif font-light text-stone-50 tracking-tight">
              Our Rooms
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-700 to-amber-900 mx-auto opacity-60" />
            <p className="text-lg text-stone-400 font-light max-w-2xl mx-auto">
              Each thoughtfully crafted to offer a unique expression of comfort
            </p>
          </div>

          {/* Rooms displayed as full-width experiences */}
          <div className="space-y-24">
            {rooms.map((room, idx) => (
              <div
                key={room.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animation: `fadeInUp 1s ease-out ${idx * 0.2}s both` }}
              >
                {/* Visual - Large and immersive */}
                <div
                  className="group relative h-96 lg:h-full min-h-96 rounded-sm overflow-hidden"
                  onMouseEnter={() => setHoveredRoom(room.id)}
                  onMouseLeave={() => setHoveredRoom(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-stone-800 to-stone-900" />
                  
                  {/* Large placeholder icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-48 h-48 text-stone-700 opacity-30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z" />
                    </svg>
                  </div>

                  {/* Subtle depth effect on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent transition-all duration-1000"
                    style={{
                      opacity: hoveredRoom === room.id ? 1 : 0.6,
                    }}
                  />

                  {/* Soft light reflection */}
                  <div
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                      background:
                        hoveredRoom === room.id
                          ? 'radial-gradient(ellipse at 30% 30%, rgba(212, 175, 105, 0.08) 0%, transparent 50%)'
                          : 'radial-gradient(ellipse at 30% 30%, rgba(212, 175, 105, 0) 0%, transparent 50%)',
                    }}
                  />
                </div>

                {/* Content - Text and pricing */}
                <div className="space-y-8 py-8">
                  <div className="space-y-4">
                    <h3 className="text-5xl font-serif font-light text-stone-50">
                      {room.title}
                    </h3>
                    <p className="text-lg text-stone-400 font-light leading-relaxed max-w-xl">
                      {room.description}
                    </p>
                  </div>

                  {/* Pricing - Presented confidently */}
                  <div className="space-y-6 pt-8 border-t border-amber-700/30">
                    <div className="grid grid-cols-2 gap-12">
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-widest text-amber-600 font-light">
                          Non-Air Conditioned
                        </p>
                        <p className="text-5xl font-serif font-light text-amber-100">
                          ₹{room.nonAc}
                        </p>
                        <p className="text-xs text-stone-600 font-light">per night</p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-widest text-amber-600 font-light">
                          Air Conditioned
                        </p>
                        <p className="text-5xl font-serif font-light text-amber-100">
                          ₹{room.ac}
                        </p>
                        <p className="text-xs text-stone-600 font-light">per night</p>
                      </div>
                    </div>
                  </div>

                  {/* Reserve button */}
                  <button
                    onClick={whatsappClick}
                    className="mt-8 px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-semibold rounded-sm hover:shadow-2xl transition-all duration-700"
                    style={{
                      boxShadow: hoveredRoom === room.id ? '0 30px 60px rgba(212, 175, 105, 0.2)' : '0 10px 30px rgba(212, 175, 105, 0.08)',
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

      {/* Amenities Section - Quiet Confidence */}
      <section className="relative py-32 px-6 bg-black border-t border-amber-700/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-serif font-light text-stone-50 tracking-tight">
              What We Provide
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-700 to-amber-900 mx-auto opacity-60" />
          </div>

          {/* Minimal amenities display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: '✓', label: 'Immaculate Rooms', desc: 'Attention to every detail, always pristine' },
              { icon: '✓', label: 'High-Speed WiFi', desc: 'Reliable connectivity throughout' },
              { icon: '✓', label: 'Free Parking', desc: 'Secure and convenient' },
              { icon: '✓', label: '24/7 Availability', desc: 'We are always here for you' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="space-y-3 pb-8 border-b border-amber-700/20 group"
                style={{ animation: `fadeInUp 1s ease-out ${idx * 0.15}s both` }}
              >
                <p className="text-4xl text-amber-700 font-light">{item.icon}</p>
                <h3 className="text-2xl font-serif font-light text-stone-50 group-hover:text-amber-100 transition-colors duration-500">
                  {item.label}
                </h3>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Trust */}
      <section id="location" className="relative py-32 px-6 bg-gradient-to-b from-black via-stone-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-serif font-light text-stone-50 tracking-tight">
              Find Us
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-700 to-amber-900 mx-auto opacity-60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map placeholder */}
            <div className="relative h-80 bg-gradient-to-br from-stone-800 to-stone-900 rounded-sm overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-stone-700 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
            </div>

            {/* Contact information */}
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-4">
                <h3 className="text-4xl font-serif font-light text-stone-50">
                  Hotel Sai Darshan
                </h3>
                <p className="text-lg text-stone-400 font-light leading-relaxed">
                  A well-kept secret in a prime location. Easy to find, easy to love.
                </p>
              </div>

              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-semibold rounded-sm hover:shadow-2xl transition-all duration-700 w-fit"
              >
                Get Directions
              </button>

              <div className="space-y-6 border-t border-amber-700/30 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600 font-light mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+919712227011"
                    className="text-3xl font-serif font-light text-stone-50 hover:text-amber-200 transition-colors duration-500"
                  >
                    +91 9712227011
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-600 font-light mb-2">
                    Hours
                  </p>
                  <p className="text-stone-400 font-light">24 Hours • 365 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Invitation */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-6xl font-serif font-light text-stone-50 tracking-tight">
            Begin Your Stay
          </h2>

          <p className="text-lg text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
            A comfortable room awaits. Warm hospitality. Genuine service. The kind of hotel experience you&apos;ve been looking for.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <button
              onClick={whatsappClick}
              className="px-12 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-semibold text-lg rounded-sm hover:shadow-2xl transition-all duration-700"
              style={{
                boxShadow: '0 20px 60px rgba(212, 175, 105, 0.15)',
              }}
            >
              Reserve Now
            </button>

            <button
              onClick={callClick}
              className="px-12 py-4 border-2 border-amber-700/60 text-amber-200 font-semibold text-lg rounded-sm hover:border-amber-600 hover:bg-amber-900/10 transition-all duration-700"
            >
              Call
            </button>
          </div>

          <p className="text-stone-600 text-sm font-light">+91 9712227011</p>
        </div>
      </section>

      {/* Floating Action Buttons - Mobile */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40 lg:hidden">
        <button
          onClick={whatsappClick}
          className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 text-stone-950 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-700"
        >
          💬
        </button>
        <button
          onClick={callClick}
          className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 text-stone-950 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-700"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-700/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-stone-600 text-xs font-light">
          <p>&copy; 2024 Hotel Sai Darshan</p>
          <p className="mt-2">A Refined Stay Experience</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slowDrift {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(20px);
          }
          50% {
            transform: translateY(-60px) translateX(0px);
          }
          75% {
            transform: translateY(-30px) translateX(-20px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
