import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';
import LeyesCR from './components/LeyesCR';

const App = () => {
  return (
    <BrowserRouter basename="/RedesSocialesCR">
        <Header />
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <CallToAction />
        <LeyesCR />
    </BrowserRouter>
  );
};

export default App;
