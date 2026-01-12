import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-aum-orange selection:text-white">
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <React.Fragment key="content">
            <Header />
            <main>
              <Hero />
              <About />
              <Services />
              <Stats />
              <Team />
              <Portfolio />
            </main>
            <Contact />
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;