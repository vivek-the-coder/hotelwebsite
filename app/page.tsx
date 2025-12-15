'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rooms = [
    {
      id: 1,
      title: 'Budget Room',
      nonAc: '₹1199',
      ac: '₹1700',
      description: 'Thoughtfully appointed comfort for the discerning traveler',
      amenities: ['Comfortable Bedding', 'Attached Bathroom', 'Free Wi-Fi'],
    },
    {
      id: 2,
      title: 'Semi Deluxe Room',
      nonAc: '₹1599',
      ac: '₹2099',
      description: 'Elevated comfort with premium appointments and amenities',
      amenities: ['Premium Bedding', 'AC/Cooler', 'Modern Furnishings'],
    },
    {
      id: 3,
      title: 'Deluxe Room',
      nonAc: '₹2099',
      ac: '₹2599',
      description: 'The finest accommodations for an exceptional experience',
      amenities: ['Luxury Bedding', 'Climate Control AC', '24/7 Hot Water'],
    },
  ];

  const whatsappClick = () => {
    window.open('https://wa.me/919712227011?text=Hi%20Hotel%20Sai%20Darshan%2C%20I%20would%20like%20to%20make%20a%20reservation', '_blank');
  };

  const callClick = () => {
    window.location.href = 'tel:+919712227011';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: 'Hotel Sai Darshan',
          description: 'Ultra-luxury boutique hotel with refined accommodations',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
          },
          telephone: '+919712227011',
          priceRange: '₹₹',
          starRating: { '@type': 'Rating', ratingValue: '4.5' },
          amenities: ['WiFi', 'Parking', '24/7 Hot Water', 'Family-Friendly'],
        })}
      </script>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl font-serif text-stone-900 font-light tracking-wide">
            HOTEL SAI DARSHAN
          </h1>
          <div className="hidden md:flex items-center space-x-12">
            {['Rooms', 'Location', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-stone-700 hover:text-stone-900 transition-colors duration-300 font-light tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={whatsappClick}
            className="text-sm text-stone-700 hover:text-stone-900 transition-colors duration-300 font-light tracking-wide"
          >
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/60 z-10"></div>
        <div className="absolute inset-0 bg-stone-800 opacity-50 z-5"></div>

        {/* Content */}
        <div className="relative z-20 text-center space-y-8 px-6">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-serif text-stone-50 font-light tracking-tight">
              Hotel Sai Darshan
            </h1>
            <p className="text-2xl md:text-3xl text-stone-200 font-light tracking-wide">
              A calm, comfortable and refined stay
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={whatsappClick}
              className="px-10 py-3 text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors duration-300 font-light tracking-wide text-sm"
            >
              Book via WhatsApp
            </button>
            <button
              onClick={callClick}
              className="px-10 py-3 text-stone-100 border border-stone-100 hover:bg-stone-100/10 transition-colors duration-300 font-light tracking-wide text-sm"
            >
              Call Hotel
            </button>
          </div>

          <p className="text-stone-300 text-sm font-light pt-4">📞 +91 9712227011</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce text-stone-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl font-serif text-stone-900 font-light tracking-tight">
              Our Rooms
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
              Each space is meticulously designed to provide the utmost comfort and elegance
            </p>
          </div>

          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {rooms.map((room) => (
              <div key={room.id} className="flex flex-col space-y-8">
                {/* Room Image Placeholder */}
                <div className="aspect-square bg-stone-200 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center">
                    <svg className="w-32 h-32 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3 12l2.422-3.865a3 3 0 005.156 0L13 4m0 0l2.422 3.865a3 3 0 005.156 0L21 12M3 12a9 9 0 0118 0m-9 9v-6m0 0l2.422-3.865a3 3 0 005.156 0L21 12" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>

                {/* Room Details */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-serif text-stone-900 font-light">
                      {room.title}
                    </h3>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-b border-stone-300 py-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <p className="text-xs text-stone-600 uppercase tracking-widest font-semibold">
                          Non-AC
                        </p>
                        <p className="text-2xl font-serif text-stone-900 font-light">
                          {room.nonAc}
                        </p>
                        <p className="text-xs text-stone-500">per night</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-stone-600 uppercase tracking-widest font-semibold">
                          AC
                        </p>
                        <p className="text-2xl font-serif text-stone-900 font-light">
                          {room.ac}
                        </p>
                        <p className="text-xs text-stone-500">per night</p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-3">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <span className="text-amber-700 mt-1">•</span>
                        <span className="text-sm text-stone-700 font-light">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Reserve Button */}
                  <button
                    onClick={whatsappClick}
                    className="w-full py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all duration-300 font-light tracking-wide text-sm mt-6"
                  >
                    Reserve Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-stone-900 font-light">
                Premium Amenities
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Refined Comfort', desc: 'Premium furnishings selected for elegance and durability' },
                  { title: 'High-Speed Connectivity', desc: 'Seamless WiFi throughout the property' },
                  { title: 'Secure Parking', desc: 'Protected and convenient vehicle storage' },
                  { title: 'Always Available', desc: '24/7 dedicated support and assistance' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-amber-700 pl-6">
                    <h3 className="text-lg font-serif text-stone-900 font-light mb-2">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="aspect-square bg-stone-200 hidden md:flex items-center justify-center">
              <svg className="w-48 h-48 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-serif text-stone-900 font-light">Location</h2>
            <p className="text-lg text-stone-600 font-light">
              Situated in a prime location with easy access to attractions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="aspect-square bg-stone-300 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 text-stone-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-stone-600 text-sm font-light">Map Coming Soon</p>
              </div>
            </div>

            {/* Address & Contact */}
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-stone-900 font-light">Address</h3>
                <p className="text-lg text-stone-700 font-light leading-relaxed">
                  Hotel Sai Darshan<br />
                  <span className="text-stone-600">[Location to be updated]</span><br />
                  India
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all duration-300 font-light tracking-wide text-sm w-fit"
              >
                Get Directions
              </a>

              <div className="space-y-6 border-t border-stone-300 pt-12">
                <div>
                  <p className="text-xs text-stone-600 uppercase tracking-widest font-semibold mb-2">
                    Telephone
                  </p>
                  <a
                    href="tel:+919712227011"
                    className="text-lg text-stone-900 font-light hover:text-stone-700 transition-colors duration-300"
                  >
                    +91 9712227011
                  </a>
                </div>
                <div>
                  <p className="text-xs text-stone-600 uppercase tracking-widest font-semibold mb-2">
                    Availability
                  </p>
                  <p className="text-stone-700 font-light">24/7 • Every day of the year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-32 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl font-serif font-light tracking-tight">
            Begin Your Stay
          </h2>
          <p className="text-xl text-stone-200 font-light">
            Reserve your room and experience refined comfort
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <button
              onClick={whatsappClick}
              className="px-12 py-4 bg-stone-100 text-stone-900 hover:bg-stone-50 transition-colors duration-300 font-light tracking-wide text-sm"
            >
              Book via WhatsApp
            </button>
            <button
              onClick={callClick}
              className="px-12 py-4 border border-stone-100 text-stone-100 hover:bg-stone-100/10 transition-colors duration-300 font-light tracking-wide text-sm"
            >
              Call Us
            </button>
          </div>

          <p className="text-sm text-stone-400 font-light">📞 +91 9712227011 • Available 24/7</p>
        </div>
      </section>

      {/* Floating Action Button - Mobile */}
      <div className="fixed bottom-8 right-8 md:hidden z-40 flex flex-col gap-3">
        <button
          onClick={whatsappClick}
          className="w-14 h-14 bg-stone-900 text-stone-50 rounded-full flex items-center justify-center text-lg shadow-lg hover:bg-stone-800 transition-colors duration-300 font-light"
          title="Book via WhatsApp"
        >
          💬
        </button>
        <button
          onClick={callClick}
          className="w-14 h-14 bg-stone-900 text-stone-50 rounded-full flex items-center justify-center text-lg shadow-lg hover:bg-stone-800 transition-colors duration-300 font-light"
          title="Call Hotel"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-stone-100 font-serif font-light text-lg tracking-wide">
                HOTEL SAI DARSHAN
              </h3>
              <p className="text-sm font-light leading-relaxed">
                A sanctuary of calm and refined comfort
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-stone-100 text-xs uppercase tracking-widest font-semibold">
                Navigate
              </h4>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <button onClick={() => scrollToSection('rooms')} className="hover:text-stone-100 transition-colors duration-300">
                    Rooms
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('location')} className="hover:text-stone-100 transition-colors duration-300">
                    Location
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-stone-100 text-xs uppercase tracking-widest font-semibold">
                Contact
              </h4>
              <div className="text-sm font-light space-y-2">
                <p>+91 9712227011</p>
                <p className="text-stone-500">Available 24/7</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-stone-100 text-xs uppercase tracking-widest font-semibold">
                Reserve
              </h4>
              <button
                onClick={whatsappClick}
                className="text-sm font-light hover:text-stone-100 transition-colors duration-300"
              >
                WhatsApp Booking →
              </button>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-500 font-light">
            <p>&copy; 2024 Hotel Sai Darshan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
