
import React from 'react';

const CatalogueMenu = () => {
  const categories = [
    {
      name: "Sushi Rolls",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop",
      icon: "🍣"
    },
    {
      name: "Nigiri",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=200&h=200&fit=crop",
      icon: "🍤"
    },
    {
      name: "Sashimi",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=200&h=200&fit=crop",
      icon: "🐟"
    },
    {
      name: "Appetizers",
      image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=200&h=200&fit=crop",
      icon: "🥟"
    },
    {
      name: "Special Sets",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=200&h=200&fit=crop",
      icon: "🍱"
    },
    {
      name: "Beverages",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&h=200&fit=crop",
      icon: "🍵"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600">Discover our delicious categories</p>
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
