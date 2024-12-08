import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';
import LeyesCR from './components/LeyesCR';

const App = () => {
  return (
    <>
        <Header />
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <CallToAction />
        <LeyesCR />
    </>
  );
};

export default App;