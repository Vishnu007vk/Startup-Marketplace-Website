import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedListings } from './components/FeaturedListings';
import { Categories } from './components/Categories';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedListings />
      <Categories />
      <Stats />
      <Footer />
    </div>
  );
}