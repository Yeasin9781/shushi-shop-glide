
import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      name: "Regular Fit",
      image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=300&h=200&fit=crop",
      description: "Classic comfortable fit"
    },
    {
      name: "Oversized",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
      description: "Relaxed and trendy style"
    },
    {
      name: "Joggers",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
      description: "Comfortable athletic wear"
    },
    {
      name: "Shorts",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=200&fit=crop",
      description: "Perfect for summer"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Style</h2>
          <p className="text-xl text-gray-600">Find your perfect fit</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-colors duration-300 rounded-lg"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-1">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
