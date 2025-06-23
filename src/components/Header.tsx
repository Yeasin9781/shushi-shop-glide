
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-orange-600">
              Shushi
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </a>
            
            {/* Catalogue Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCatalogueOpen(!isCatalogueOpen)}
                className="flex items-center text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Catalogue
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCatalogueOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Sushi Rolls
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Nigiri
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Sashimi
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Special Sets
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Appetizers
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Tracking Order
            </a>
          </nav>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact Us
            </a>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search sushi..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Cart */}
            <button className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
