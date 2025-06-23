
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CatalogueMenu from '../components/CatalogueMenu';
import AnnouncementBar from '../components/AnnouncementBar';
import DetailedCatalogue from '../components/DetailedCatalogue';
import VideoBanner from '../components/VideoBanner';
import Testimonials from '../components/Testimonials';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <CatalogueMenu />
      <AnnouncementBar />
      <DetailedCatalogue />
      <VideoBanner />
      <Testimonials />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
