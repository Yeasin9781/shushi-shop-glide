
import React from 'react';
import { Shield, Lock, CreditCard, Truck, Award, CheckCircle } from 'lucide-react';

const TrustedBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "256-bit SSL encryption"
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your data is safe with us"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Card, PayPal, Apple Pay"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free shipping over $50"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "30-day return policy"
    },
    {
      icon: CheckCircle,
      title: "Verified Reviews",
      description: "Authentic customer feedback"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Why Shop With Us?</h3>
          <p className="text-gray-600">Your trust and security are our top priorities</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">{badge.title}</h4>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBadges;
