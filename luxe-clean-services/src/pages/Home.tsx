import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturesBar } from '../components/FeaturesBar';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturesBar />
      <AboutSection />
      <ServicesSection /> 
    </div>
  );
};