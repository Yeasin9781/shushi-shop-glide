
import React from 'react';

const DetailedCatalogue = () => {
  const featuredItems = [
    {
      name: "Dragon Roll",
      description: "Eel, cucumber, avocado topped with fresh avocado and eel sauce",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      category: "Specialty Rolls"
    },
    {
      name: "Salmon Nigiri Set",
      description: "Fresh Atlantic salmon over seasoned sushi rice (6 pieces)",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
      category: "Nigiri"
    },
    {
      name: "Tuna Sashimi",
      description: "Premium bluefin tuna, expertly sliced (8 pieces)",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=200&fit=crop",
      category: "Sashimi"
    },
    {
      name: "Chirashi Bowl",
      description: "Assorted fresh sashimi over sushi rice with wasabi and pickles",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=200&fit=crop",
      category: "Special Sets"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Items</h2>
          <p className="text-xl text-gray-600">Our chef's recommendations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedCatalogue;
