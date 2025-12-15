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
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23e8d4b8%22 width=%22400%22 height=%22300%22/%3E%3Crect fill=%22%238b4513%22 x=%2250%22 y=%2250%22 width=%22100%22 height=%2280%22/%3E%3Crect fill=%22%238b4513%22 x=%22250%22 y=%2250%22 width=%22100%22 height=%2280%22/%3E%3Crect fill=%22%23d4af37%22 x=%2220%22 y=%22150%22 width=%22360%22 height=%22130%22/%3E%3Ctext x=%22200%22 y=%22220%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%231a1a1a%22 font-weight=%22bold%22%3EComfortable Budget Room%3C/text%3E%3C/svg%3E',
    },
    {
      id: 2,
      category: 'Semi Deluxe Room',
      nonAc: 1599,
      ac: 2099,
      description: 'Experience enhanced comfort with modern amenities',
      amenities: ['Premium Bedding', 'AC/Cooler', 'Hot Water', 'LED TV', 'Free WiFi'],
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23d4c5b9%22 width=%22400%22 height=%22300%22/%3E%3Crect fill=%22%238b4513%22 x=%2240%22 y=%2240%22 width=%22120%22 height=%2290%22/%3E%3Crect fill=%22%238b4513%22 x=%22240%22 y=%2240%22 width=%22120%22 height=%2290%22/%3E%3Crect fill=%22%23d4af37%22 x=%2210%22 y=%22150%22 width=%22380%22 height=%22140%22/%3E%3Ctext x=%22200%22 y=%22220%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%231a1a1a%22 font-weight=%22bold%22%3ESemi Deluxe Room%3C/text%3E%3C/svg%3E',
    },
    {
      id: 3,
      category: 'Deluxe Room',
      nonAc: 2099,
      ac: 2599,
      description: 'Premium luxury experience with all modern conveniences',
      amenities: ['Luxury Bedding', 'AC with Climate Control', '24/7 Hot Water', 'Smart TV', 'Premium Toiletries'],
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23dcc9b6%22 width=%22400%22 height=%22300%22/%3E%3Crect fill=%22%238b4513%22 x=%2330%22 y=%2230%22 width=%22140%22 height=%22100%22/%3E%3Crect fill=%22%238b4513%22 x=%22230%22 y=%2230%22 width=%22140%22 height=%22100%22/%3E%3Crect fill=%22%23d4af37%22 width=%22400%22 height=%22160%22 y=%22140%22/%3E%3Ctext x=%22200%22 y=%22220%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%231a1a1a%22 font-weight=%22bold%22%3EPremium Deluxe Room%3C/text%3E%3C/svg%3E',
    },
  ];

  const amenities = [
    { icon: '📡', title: 'Free WiFi', desc: 'High-speed internet' },
    { icon: '🚗', title: 'Free Parking', desc: 'Secure parking facility' },
    { icon: '💧', title: '24/7 Hot Water', desc: 'Always available' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family-Friendly', desc: 'Perfect for families' },
    { icon: '✨', title: 'Spotless Cleanliness', desc: 'Hygiene guaranteed' },
    { icon: '🔒', title: '24/7 Security', desc: 'Safe & secure stay' },
  ];

  const reviews = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent stay! Clean rooms, friendly staff, and great value for money. Highly recommended!',
      date: '2 weeks ago',
    },
    {
      name: 'Priya Singh',
      rating: 5,
      text: 'Perfect place for our family vacation. Good rooms and location is convenient.',
      date: '1 month ago',
    },
    {
      name: 'Amit Patel',
      rating: 4,
      text: 'Very comfortable and affordable. The WiFi is fast and staff is helpful.',
      date: '3 weeks ago',
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
    <div className="min-h-screen bg-white">
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-amber-900">🏨</span>
              <h1 className="text-xl font-bold text-amber-900">Hotel Sai Darshan</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-900 font-medium transition">Home</button>
              <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-amber-900 font-medium transition">Rooms & Pricing</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-900 font-medium transition">Gallery</button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-amber-900 font-medium transition">Location</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-900 font-medium transition">Contact</button>
            </div>
            <button
              onClick={whatsappClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="#d4af37" opacity="0.1" />
            </pattern>
            <rect width="1200" height="600" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block">
            <span className="text-5xl md:text-7xl font-bold text-amber-400">Hotel Sai Darshan</span>
          </div>
          <p className="text-lg md:text-2xl mb-6 text-gray-200">
            Premium Comfort at Affordable Rates
          </p>
          <p className="text-md md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Your perfect stay awaits! Clean, comfortable, and luxurious rooms for couples, families, and business travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={whatsappClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              💬 Book on WhatsApp
            </button>
            <button
              onClick={callClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              📞 Call Now
            </button>
          </div>
          <div className="text-amber-400 font-bold text-lg">
            📞 +91 9712227011 | 24/7 Available
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Rooms & Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our carefully designed rooms. All rooms include free WiFi, 24/7 hot water, and security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden border-t-4 border-amber-600"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.image}
                  alt={room.category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{room.category}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Non-AC Room</p>
                        <p className="text-2xl font-bold text-amber-600">₹{room.nonAc}</p>
                        <p className="text-xs text-gray-500">per night</p>
                      </div>
                      <div className="border-l-2 border-amber-600"></div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">AC Room</p>
                        <p className="text-2xl font-bold text-amber-700">₹{room.ac}</p>
                        <p className="text-xs text-gray-500">per night</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Room Features:</h4>
                    <ul className="space-y-2">
                      {room.amenities.map((amenity, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center">
                          <span className="text-amber-600 mr-2">✓</span> {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={whatsappClick}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Premium Amenities & Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide everything you need for a comfortable and memorable stay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gradient-to-b from-amber-50 to-white rounded-lg shadow hover:shadow-lg transition border border-amber-100"
              >
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Gallery
          </h2>
          <p className="text-center text-gray-600 mb-12">View our beautiful rooms and facilities</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Luxury Bedroom', emoji: '🛏️' },
              { title: 'Modern Bathroom', emoji: '🚿' },
              { title: 'Common Area', emoji: '🛋️' },
              { title: 'Reception', emoji: '🏛️' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="h-64 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg shadow hover:shadow-lg transition flex items-center justify-center border-2 border-amber-200"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <p className="text-xl font-semibold text-amber-900">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Location & Map
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Conveniently located near major landmarks and attractions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg shadow-lg h-96 flex items-center justify-center border-4 border-amber-200">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl font-semibold text-gray-700">Interactive Google Maps</p>
                <p className="text-gray-600 mt-2">Map embed available when location is finalized</p>
              </div>
            </div>

            {/* Address & Directions */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-amber-600 mb-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">📍 Address</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Hotel Sai Darshan<br />
                  [Location to be Updated]<br />
                  India
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold transition transform hover:scale-105"
                >
                  📍 Get Directions
                </a>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg shadow-lg border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">🎯 Contact Us</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-semibold">WhatsApp / Call:</p>
                    <a
                      href="https://wa.me/919712227011"
                      className="text-2xl font-bold text-green-600 hover:text-green-700 transition"
                    >
                      +91 97122 27011
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Available:</p>
                    <p className="text-gray-700">24/7 for bookings & inquiries</p>
                  </div>
                  <button
                    onClick={whatsappClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition"
                  >
                    💬 Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Guest Reviews
          </h2>
          <p className="text-center text-gray-600 mb-12">
            See what our happy guests have to say
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-amber-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="mb-4">
                   {[...Array(review.rating)].map((_, i) => (
                     <span key={i} className="text-amber-400 text-lg">★</span>
                   ))}
                 </div>
                 <p className="text-gray-700 italic">&quot;{review.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Find answers to common questions about our hotel
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-gray-50 border border-amber-200 rounded-lg p-6 hover:bg-gray-100 transition"
              >
                <summary className="font-bold text-lg text-amber-900 cursor-pointer flex items-center">
                  <span className="text-2xl mr-4">❓</span>
                  {faq.question}
                </summary>
                <p className="text-gray-700 mt-4 ml-10">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us now for exclusive offers and instant booking
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={whatsappClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              💬 WhatsApp Now
            </button>
            <button
              onClick={callClick}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              📞 Call Now
            </button>
          </div>

          <div className="text-lg font-semibold">
            📞 +91 97122 27011 (Available 24/7)
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <button
          onClick={whatsappClick}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          💬
        </button>
        <button
          onClick={callClick}
          className="bg-red-500 hover:bg-red-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition transform hover:scale-110"
          title="Call us"
        >
          📞
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Hotel Sai Darshan</h3>
              <p className="text-gray-400">Your affordable luxury stay destination</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('rooms')} className="hover:text-white transition">Rooms</button></li>
                <li><button onClick={() => scrollToSection('location')} className="hover:text-white transition">Location</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">📞 +91 97122 27011</p>
              <p className="text-gray-400">Available 24/7</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hotel Sai Darshan. All rights reserved. | Premium Budget Hotel</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
