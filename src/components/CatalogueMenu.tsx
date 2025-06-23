
import React from 'react';

const CatalogueMenu = () => {
  const categories = [
    {
      name: "Men's Collection",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=200&h=200&fit=crop",
      icon: "👔"
    },
    {
      name: "Women's Collection",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop",
      icon: "👗"
    },
    {
      name: "Kids Collection",
      image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=200&h=200&fit=crop",
      icon: "👶"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
      icon: "👜"
    },
    {
      name: "Footwear",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop",
      icon: "👟"
    },
    {
      name: "Sale Items",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop",
      icon: "🏷️"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Collections</h2>
          <p className="text-xl text-gray-600">Discover our fashion categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-orange-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.icon}
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogueMenu;
