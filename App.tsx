import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Settings } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

// ─── TEMPORARY MAINTENANCE SCREEN ──────────────────────────────────────────────
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white p-6 text-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-aum-orange rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-aum-orange/10 rounded-full flex items-center justify-center mb-8 border border-aum-orange/20">
          <Settings className="text-aum-orange w-10 h-10 animate-[spin_4s_linear_infinite]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">
          Under Maintenance
        </h1>
        <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed mb-12">
          We are currently updating our website to bring you a better experience. We'll be back online shortly.
        </p>
        <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">
          &copy; {new Date().getFullYear()} AUM Structural Consultants
        </p>
      </div>
    </div>
  );
};

export default App;

/* 
// ─── ORIGINAL APP (COMMENTED OUT FOR MAINTENANCE) ────────────────────────────
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-white text-gray-800 selection:bg-aum-orange selection:text-white">
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
*/