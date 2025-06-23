
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Logo and Email Section */}
          <div className="md:col-span-1">
            <div className="text-3xl font-bold text-orange-600 mb-4">
              Shushi
            </div>
            <p className="text-gray-300 mb-6">
              Authentic Japanese cuisine crafted with passion and served with love.
            </p>
            
            {/* Email Subscription */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-md font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Sushi Rolls</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Nigiri</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Sashimi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Special Sets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Appetizers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>📍 123 Sushi Street, Tokyo District</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@shushi.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Shushi. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
