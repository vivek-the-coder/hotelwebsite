'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rooms = [
    {
      id: 1,
      category: 'Budget Room',
      nonAc: 1199,
      ac: 1700,
      description: 'Comfortable and well-appointed rooms perfect for the budget-conscious traveler',
      features: ['Comfortable Bedding', 'Attached Bathroom', 'Free Wi-Fi', 'Daily Housekeeping'],
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22400%22%3E%3Crect fill=%22%23f5f1eb%22 width=%22500%22 height=%22400%22/%3E%3Crect fill=%22%23d4c5b9%22 x=%2250%22 y=%2280%22 width=%22400%22 height=%22250%22/%3E%3Ccircle cx=%22100%22 cy=%22130%22 r=%2230%22 fill=%22%23b89968%22/%3E%3Ccircle cx=%22400%22 cy=%22130%22 r=%2230%22 fill=%22%23b89968%22/%3E%3C/svg%3E',
    },
    {
      id: 2,
      category: 'Semi Deluxe Room',
      nonAc: 1599,
      ac: 2099,
      description: 'Enhanced comfort with modern amenities and premium furnishings for a luxurious experience',
      features: ['Premium Bedding', 'AC/Cooler', 'LED TV', 'Premium Toiletries'],
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22400%22%3E%3Crect fill=%22%23f9f6f0%22 width=%22500%22 height=%22400%22/%3E%3Crect fill=%22%23d9cdc0%22 x=%2240%22 y=%2270%22 width=%22420%22 height=%22270%22/%3E%3Ccircle cx=%2290%22 cy=%22120%22 r=%2235%22 fill=%22%23c0a88c%22/%3E%3Ccircle cx=%22410%22 cy=%22120%22 r=%2235%22 fill=%22%23c0a88c%22/%3E%3C/svg%3E',
    },
    {
      id: 3,
      category: 'Deluxe Room',
      nonAc: 2099,
      ac: 2599,
      description: 'Premium luxury experience with finest furnishings and comprehensive amenities for ultimate comfort',
      features: ['Luxury Bedding', 'Climate Control AC', '24/7 Hot Water', 'Smart TV'],
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22400%22%3E%3Crect fill=%22%23faf8f3%22 width=%22500%22 height=%22400%22/%3E%3Crect fill=%22%23e0d4c8%22 x=%2230%22 y=%2260%22 width=%22440%22 height=%22290%22/%3E%3Ccircle cx=%2280%22 cy=%22110%22 r=%2240%22 fill=%22%23c9b39a%22/%3E%3Ccircle cx=%22420%22 cy=%22110%22 r=%2240%22 fill=%22%23c9b39a%22/%3E%3C/svg%3E',
    },
  ];

  const trust = [
    { icon: '✓', label: 'Clean & Hygienic Rooms', desc: '5-star cleanliness standards' },
    { icon: '✓', label: 'Free Wi-Fi', desc: 'High-speed connectivity' },
    { icon: '✓', label: 'Parking Available', desc: 'Secure covered parking' },
    { icon: '✓', label: 'Family Friendly', desc: 'Perfect for all guests' },
    { icon: '✓', label: 'Transparent Pricing', desc: 'No hidden charges' },
    { icon: '✓', label: '24/7 Support', desc: 'Always here to help' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappClick = () => {
    window.open('https://wa.me/919712227011?text=Hi%20Hotel%20Sai%20Darshan%2C%20I%20want%20to%20book%20a%20room', '_blank');
  };

  const callClick = () => {
    window.location.href = 'tel:+919712227011';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: 'Hotel Sai Darshan',
          description: 'Luxury budget hotel near prime location. Affordable AC & Non-AC rooms for couples, families & business travelers.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hotel Sai Darshan',
            addressCountry: 'IN',
          },
          telephone: '+919712227011',
          priceRange: '₹₹',
          starRating: { '@type': 'Rating', ratingValue: '4.5' },
          amenities: ['WiFi', 'Parking', 'Hot Water', 'Family-Friendly', 'Cleanliness'],
        })}
      </script>

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm border-b border-gray-200' : 'bg-white/95'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-serif font-semibold text-gray-900">Hotel Sai Darshan</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Rooms', id: 'rooms' },
                { label: 'Location', id: 'location' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={whatsappClick}
              className="hidden md:block bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-serif font-light text-gray-900 leading-tight">
                A Peaceful & Comfortable Stay Near Prime Location
              </h1>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Affordable luxury rooms for couples, families & business travelers. Experience comfort without compromise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={whatsappClick}
                  className="bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Book on WhatsApp
                </button>
                <button
                  onClick={callClick}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3 font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Call Now
                </button>
              </div>
              <p className="text-sm text-gray-600 pt-4">📞 +91 9712227011 • Available 24/7</p>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-40 h-40 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10l5 5v11a2 2 0 0 1-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900">
              Room Collections
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Each room is thoughtfully designed for your comfort and peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                {/* Room Image */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={room.image}
                    alt={room.category}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Room Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-light text-gray-900 mb-2">{room.category}</h3>
                    <p className="text-gray-700 font-light text-sm leading-relaxed">{room.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-b border-gray-200 py-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-2">Non-AC</p>
                        <p className="text-2xl font-serif font-light text-gray-900">₹{room.nonAc}</p>
                        <p className="text-xs text-gray-500 mt-1">per night</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-2">AC</p>
                        <p className="text-2xl font-serif font-light text-gray-900">₹{room.ac}</p>
                        <p className="text-xs text-gray-500 mt-1">per night</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <span className="text-gray-400">—</span>
                        <span className="text-sm text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={whatsappClick}
                    className="w-full bg-gray-900 text-white py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    Reserve Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900">
              Why Choose Hotel Sai Darshan
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Exceptional service at affordable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trust.map((item, idx) => (
              <div key={idx} className="flex space-x-4 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0 text-gray-900 text-lg font-semibold">{item.icon}</div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">{item.label}</h3>
                  <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900">
              Location & Map
            </h2>
            <p className="text-lg text-gray-700 font-light">
              Conveniently located near prime attractions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-gray-200 aspect-square flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <p className="text-gray-600 font-light">Google Map embed coming soon</p>
              </div>
            </div>

            {/* Address Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-light text-gray-900 mb-4">Hotel Address</h3>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Hotel Sai Darshan<br />
                  <span className="text-gray-600">[Location to be updated]</span><br />
                  India
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Get Directions
              </a>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-serif font-light text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-2">Phone</p>
                    <a href="tel:+919712227011" className="text-lg text-gray-900 font-light hover:text-gray-700">
                      +91 97122 27011
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-2">WhatsApp</p>
                    <button
                      onClick={whatsappClick}
                      className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
                    >
                      Chat with us →
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 font-light pt-2">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-gray-700 font-light">
            Contact us for exclusive offers and instant confirmation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={whatsappClick}
              className="bg-gray-900 text-white px-12 py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Book on WhatsApp
            </button>
            <button
              onClick={callClick}
              className="border-2 border-gray-900 text-gray-900 px-12 py-3 font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Call Us
            </button>
          </div>
          <p className="text-sm text-gray-600 pt-4">📞 +91 9712227011</p>
        </div>
      </section>

      {/* Floating Call Button (Mobile) */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40 md:hidden">
        <button
          onClick={whatsappClick}
          className="bg-gray-900 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-gray-800 transition-colors duration-200"
          title="Chat on WhatsApp"
        >
          💬
        </button>
        <button
          onClick={callClick}
          className="bg-gray-900 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-gray-800 transition-colors duration-200"
          title="Call us"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-serif font-light mb-4">Hotel Sai Darshan</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Luxury comfort at affordable prices. Your perfect stay awaits.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors duration-200 font-light">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('rooms')} className="hover:text-white transition-colors duration-200 font-light">
                    Rooms
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('location')} className="hover:text-white transition-colors duration-200 font-light">
                    Location
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">📞 +91 97122 27011</p>
              <p className="text-gray-400 text-sm font-light">Available 24/7</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Booking</h4>
              <button
                onClick={whatsappClick}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
              >
                WhatsApp Booking →
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Hotel Sai Darshan. All rights reserved.</p>
            <p className="mt-2 font-light">Affordable Luxury Hotel</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @font-face {
          font-family: 'Serif';
          src: system-ui, -apple-system, sans-serif;
        }

        .font-serif {
          font-family: Georgia, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}
