
import React from 'react';

const VideoBanner = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://player.vimeo.com/external/411652927.sd.mp4?s=d5f3da47d902ec12554c4d064e5654a4a6c68495&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop"
          alt="Fashion collection"
          className="w-full h-full object-cover"
        />
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafted with Style
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Discover our latest fashion collection made with premium materials
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
