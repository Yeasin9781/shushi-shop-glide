
import React from 'react';

const Reviews = () => {
  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "4.9", label: "Average Rating" },
    { number: "500+", label: "5-Star Reviews" },
    { number: "50+", label: "Menu Items" }
  ];

  const recentReviews = [
    {
      name: "David Kim",
      rating: 5,
      comment: "Outstanding quality and service!",
      date: "2 days ago"
    },
    {
      name: "Lisa Wang",
      rating: 5,
      comment: "Best sushi in town, hands down!",
      date: "1 week ago"
    },
    {
      name: "John Smith",
      rating: 4,
      comment: "Great food, fast delivery!",
      date: "2 weeks ago"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Customer Reviews & Stats</h2>
          <p className="text-xl text-gray-600">See what makes us special</p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Recent Reviews */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Recent Reviews</h3>
          <div className="space-y-6">
            {recentReviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="font-semibold text-gray-800 mr-2">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
