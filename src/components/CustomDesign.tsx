
import React from 'react';
import { Button } from './ui/button';
import { Palette, Upload, Shirt, Sparkles } from 'lucide-react';

const CustomDesign = () => {
  const designSteps = [
    {
      icon: Upload,
      title: "Upload Your Design",
      description: "Upload your artwork, logo, or choose from our templates"
    },
    {
      icon: Palette,
      title: "Customize Colors",
      description: "Pick colors, adjust placement, and preview your design"
    },
    {
      icon: Shirt,
      title: "Choose Your Fit",
      description: "Select from Regular, Oversized, or Premium fits"
    },
    {
      icon: Sparkles,
      title: "Get Your Unique Tee",
      description: "We'll print and deliver your custom creation"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Create Your <span className="text-orange-600">Custom Design</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bring your imagination to life with our custom t-shirt design service. 
            From personal artwork to business logos, we make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Design showcase */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop"
                alt="Custom designed t-shirt"
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Design Here</h3>
                <p className="text-gray-600">Unlimited possibilities await</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Starting at $24.99
            </div>
          </div>

          {/* Right side - Process steps */}
          <div className="space-y-6">
            {designSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Design Your Perfect Tee?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Join thousands of customers who've created their unique style with our custom design service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              Start Designing Now
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
              View Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesign;
