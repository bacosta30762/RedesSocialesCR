import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';
import LeyesCR from './components/LeyesCR';
import ProblematicasCR from './components/ProblematicaCR';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter basename="/RedesSocialesCR">
        <Header />
        <Hero />
        <ProblematicasCR />
        <AboutSection />
        <FeaturesSection />
        <CallToAction />
        <LeyesCR />
        <Footer />
    </BrowserRouter>
  );
};

export default App;
