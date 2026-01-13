import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Glassmorphic header classes with better contrast
  const headerClasses = scrolled
    ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm py-3'
    : 'bg-transparent py-4 md:py-6';

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${headerClasses}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[94%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col justify-center cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <h1 className={`text-2xl font-bold font-heading leading-none tracking-tight transition-colors duration-300 ${scrolled ? 'text-aum-black' : 'text-white'}`}>
              AUM
            </h1>
            <span className={`text-[10px] tracking-[0.2em] font-medium uppercase mt-1 transition-colors duration-300 ${scrolled ? 'text-aum-orange' : 'text-gray-200 group-hover:text-white'}`}>
              Structural Consultants
            </span>
          </div>

          {/* Desktop Menu - Glass Pills */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${scrolled
                    ? 'text-gray-600 hover:text-aum-black hover:bg-black/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${scrolled ? 'text-aum-black hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Glass Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-aum-black hover:text-aum-orange hover:bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium transition-all border border-transparent hover:border-gray-100"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;