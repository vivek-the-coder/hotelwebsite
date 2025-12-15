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
      description: 'Perfect for budget-conscious travelers seeking comfort',
      amenities: ['Basic Furnishings', 'Fan', 'Attached Bathroom', 'Free WiFi'],
      badge: 'STARTER',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23f5e6d3%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23e8d4b8%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=%22url(%23grad1)%22 width=%22400%22 height=%22300%22/%3E%3Crect fill=%22%23c9a876%22 x=%2250%22 y=%2250%22 width=%22100%22 height=%2280%22 rx=%225%22/%3E%3Crect fill=%22%23c9a876%22 x=%22250%22 y=%2250%22 width=%22100%22 height=%2280%22 rx=%225%22/%3E%3Crect fill=%22%23d4af37%22 x=%2220%22 y=%22150%22 width=%22360%22 height=%22130%22 rx=%2210%22/%3E%3Ctext x=%22200%22 y=%22220%22 font-size=%2218%22 text-anchor=%22middle%22 fill=%22%231a1a1a%22 font-weight=%22600%22 font-family=%22serif%22%3EComfort Room%3C/text%3E%3C/svg%3E',
    },
    {
      id: 2,
      category: 'Semi Deluxe Room',
      nonAc: 1599,
      ac: 2099,
      description: 'Experience enhanced comfort with modern amenities',
      amenities: ['Premium Bedding', 'AC/Cooler', 'Hot Water', 'LED TV', 'Free WiFi'],
      badge: 'POPULAR',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23f9ede0%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23f0dcc8%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=%22url(%23grad2)%22 width=%22400%22 height=%22300%22/%3E%3Crect fill=%22%23d4a574%22 x=%2240%22 y=%2240%22 width=%22120%22 height=%2290%22 rx=%226%22/%3E%3Crect fill=%22%23d4a574%22 x=%22240%22 y=%2240%22 width=%22120%22 height=%2290%22 rx=%226%22/%3E%3Crect fill=%22%23d4af37%22 x=%2210%22 y=%22150%22 width=%22380%22 height=%22140%22 rx=%2212%22/%3E%3Ctext x=%22200%22 y=%22220%22 font-size=%2218%22 text-anchor=%22middle%22 fill=%22%231a1a1a%22 font-weight=%22600%22 font-family=%22serif%22%3ESemi Deluxe%3C/text%3E%3C/svg%3E',
    },
    {
      id: 3,
      category: 'Deluxe Room',
      nonAc: 2099,
      ac: 2599,
      description: 'Premium luxury experience with all modern conveniences',
      amenities: ['Luxury Bedding', 'AC with Climate Control', '24/7 Hot Water', 'Smart TV', 'Premium Toiletries'],
      badge: 'PREMIUM',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23faf5e8%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23f5e8d6%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=%22url(%23grad3)%22 width=%22400%22 height=%22300%22/%3E%3Crect fill=%22%23daa86d%22 x=%2230%22 y=%2230%22 width=%22140%22 height=%22100%22 rx=%227%22/%3E%3Crect fill=%22%23daa86d%22 x=%22230%22 y=%2230%22 width=%22140%22 height=%22100%22 rx=%227%22/%3E%3Crect fill=%22%23d4af37%22 width=%22400%22 height=%22160%22 y=%22140%22 rx=%2214%22/%3E%3Ctext x=%22200%22 y=%22220%22 font-size=%2218%22 text-anchor=%22middle%22 fill=%22%231a1a1a%22 font-weight=%22600%22 font-family=%22serif%22%3EPremium Deluxe%3C/text%3E%3C/svg%3E',
    },
  ];

  const amenities = [
    { icon: '📡', title: 'High-Speed WiFi', desc: 'Ultra-fast connectivity' },
    { icon: '🚗', title: 'Premium Parking', desc: 'Secure & covered' },
    { icon: '💧', title: '24/7 Hot Water', desc: 'Round-the-clock availability' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Suites', desc: 'Space & comfort' },
    { icon: '✨', title: 'Luxury Cleanliness', desc: '5-star hygiene standards' },
    { icon: '🔒', title: 'Elite Security', desc: 'Advanced protection' },
  ];

  const reviews = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent stay! Clean rooms, friendly staff, and great value for money. Highly recommended!',
      date: '2 weeks ago',
      verified: true,
    },
    {
      name: 'Priya Singh',
      rating: 5,
      text: 'Perfect place for our family vacation. Good rooms and location is convenient.',
      date: '1 month ago',
      verified: true,
    },
    {
      name: 'Amit Patel',
      rating: 4,
      text: 'Very comfortable and affordable. The WiFi is fast and staff is helpful.',
      date: '3 weeks ago',
      verified: true,
    },
  ];

  const faqs = [
    {
      question: 'What are the check-in and check-out times?',
      answer: 'Check-in is from 1:00 PM and check-out is till 11:00 AM. Early check-in and late check-out available upon request.',
    },
    {
      question: 'Do you provide WiFi?',
      answer: 'Yes! We offer high-speed free WiFi in all rooms and common areas.',
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we provide free secure parking for all our guests.',
    },
    {
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, cancellations made 24 hours before check-in are free. Modifications can be made anytime.',
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes! Contact us directly for group bookings and special discounts.',
    },
    {
      question: 'Is there a restaurant on-site?',
      answer: 'We have a common area with tea/coffee facilities. Many restaurants are nearby.',
    },
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: 'Hotel Sai Darshan',
          description: 'Affordable luxury hotel with clean, comfortable rooms',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hotel Sai Darshan',
            addressLocality: 'Your City',
            addressCountry: 'IN',
            postalCode: '000000',
          },
          telephone: '+919712227011',
          email: 'info@hotelsaidarshan.com',
          priceRange: '₹₹',
          starRating: {
            '@type': 'Rating',
            ratingValue: '4.5',
            bestRating: '5',
          },
          image: 'https://hotelsaidarshan.com/hotel-image.jpg',
          url: 'https://hotelsaidarshan.com',
          amenities: ['WiFi', 'Parking', 'Hot Water', 'Security', 'Cleanliness', 'Family-friendly'],
        })}
      </script>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">✨</span>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-900 via-amber-700 to-amber-600 bg-clip-text text-transparent">Hotel Sai Darshan</h1>
                <p className="text-xs text-amber-600 font-semibold">Luxury Comfort</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-1">
              {['home', 'rooms', 'gallery', 'location', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-amber-900 transition-all duration-300 relative group capitalize"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
            <button
              onClick={whatsappClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-gray-800 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-2 bg-amber-500/20 border border-amber-400/50 rounded-full backdrop-blur-sm">
              <p className="text-sm font-semibold text-amber-200">✨ Welcome to Luxury Comfort</p>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent">
                Hotel Sai Darshan
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-light">
              Premium Comfort at Affordable Rates
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the perfect blend of luxury and affordability. Clean, comfortable, and elegantly designed rooms for couples, families, and business travelers who deserve the best.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={whatsappClick}
              className="group bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>💬</span> Book on WhatsApp
            </button>
            <button
              onClick={callClick}
              className="group bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>📞</span> Call Now
            </button>
          </div>

          <div className="text-center">
            <p className="text-amber-300 font-bold text-xl">
              📞 +91 9712227011 | 24/7 Available
            </p>
            <p className="text-gray-400 mt-2 text-sm">Instant response guaranteed</p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Curated Room Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each room is meticulously designed for your comfort and elegance. From cozy comfort to premium luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-amber-400"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  {room.badge}
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={room.image}
                    alt={room.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.category}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{room.description}</p>

                  {/* Pricing Card */}
                  <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Non-AC</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                          ₹{room.nonAc}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">per night</p>
                      </div>
                      <div className="border-l-2 border-amber-300"></div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase mb-1">AC</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                          ₹{room.ac}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">per night</p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-amber-600">✓</span> Room Highlights
                    </h4>
                    <ul className="space-y-2">
                      {room.amenities.map((amenity, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-3">
                          <span className="text-amber-500 font-bold mt-0.5">◆</span>
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button
                    onClick={whatsappClick}
                    className="w-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>📱</span> Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="1200" height="600" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Premium Amenities & Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every detail is crafted to enhance your stay with world-class comfort and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:border-amber-400/50 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{amenity.title}</h3>
                <p className="text-gray-300">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore our beautifully designed spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Luxury Bedroom', emoji: '🛏️', color: 'from-amber-100 to-amber-50' },
              { title: 'Modern Bathroom', emoji: '🚿', color: 'from-blue-100 to-blue-50' },
              { title: 'Common Area', emoji: '🛋️', color: 'from-purple-100 to-purple-50' },
              { title: 'Reception', emoji: '🏛️', color: 'from-red-100 to-red-50' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group h-72 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center border-4 border-gray-100 hover:border-amber-300 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="text-7xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Location & Map
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located near major landmarks and attractions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl h-96 flex items-center justify-center border-4 border-gray-400 hover:shadow-3xl transition-shadow duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  🗺️
                </div>
                <p className="text-2xl font-bold text-gray-700">Interactive Google Maps</p>
                <p className="text-gray-600 mt-2">Map embed available when location is finalized</p>
              </div>
            </div>

            {/* Address & Directions */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border-l-4 border-amber-600 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">📍</span> Address
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                  Hotel Sai Darshan<br />
                  <span className="font-semibold">[Location to be Updated]</span><br />
                  India
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📍 Get Directions
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl shadow-xl border border-green-300 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">💬</span> Contact Us
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-green-700 uppercase mb-2">WhatsApp / Call</p>
                    <a
                      href="https://wa.me/919712227011"
                      className="text-3xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300 block"
                    >
                      +91 97122 27011
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-700 uppercase mb-2">Availability</p>
                    <p className="text-gray-700 font-semibold">24/7 for bookings & inquiries</p>
                  </div>
                  <button
                    onClick={whatsappClick}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg flex items-center justify-center gap-2"
                  >
                    <span>💬</span> Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Guest Reviews & Ratings
            </h2>
            <p className="text-xl text-gray-600">
              Experience the voices of our satisfied guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-100 hover:border-amber-400 group"
              >
                {/* Verified Badge */}
                {review.verified && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-green-500 font-bold">✓ Verified Guest</span>
                  </div>
                )}

                {/* User Info */}
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {review.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-amber-400">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 italic font-light leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our hotel
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border-2 border-gray-200 hover:border-amber-400 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <summary className="font-bold text-lg text-gray-900 flex items-center gap-3 cursor-pointer select-none">
                  <span className="text-2xl group-open:hidden">➕</span>
                  <span className="text-2xl hidden group-open:block">➖</span>
                  {faq.question}
                </summary>
                <p className="text-gray-700 mt-6 ml-10 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready for Your Perfect Stay?</h2>
          <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto">
            Contact us now for exclusive offers, special packages, and instant booking confirmation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={whatsappClick}
              className="group bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-2xl">💬</span> WhatsApp Now
            </button>
            <button
              onClick={callClick}
              className="group bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-2xl">📞</span> Call Now
            </button>
          </div>

          <div className="text-2xl font-bold">
            📞 +91 97122 27011 (Available 24/7)
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <button
          onClick={whatsappClick}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl"
          title="Chat on WhatsApp"
        >
          💬
        </button>
        <button
          onClick={callClick}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl"
          title="Call us"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Hotel Sai Darshan</h3>
              <p className="text-gray-400 leading-relaxed">
                Your destination for affordable luxury and unforgettable memories.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-colors duration-300">
                    → Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('rooms')} className="hover:text-amber-400 transition-colors duration-300">
                    → Rooms
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('location')} className="hover:text-amber-400 transition-colors duration-300">
                    → Location
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contact Info</h4>
              <p className="text-gray-400 mb-2">📞 +91 97122 27011</p>
              <p className="text-amber-400 font-semibold">24/7 Available</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-xl">
                  f
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-xl">
                  📷
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hotel Sai Darshan. All rights reserved. | Premium Budget Hotel</p>
            <p className="text-sm mt-2 text-gray-500">Crafted with ❤️ for your comfort</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
