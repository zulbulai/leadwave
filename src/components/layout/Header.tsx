import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
            <MessageSquare className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}>GetLeadWave</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === link.path 
                  ? 'text-green-600' 
                  : (isScrolled || location.pathname !== '/' ? 'text-gray-600 hover:text-green-600' : 'text-gray-300 hover:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/916387617678?text=Hi, I want to book a strategy call." 
            className="bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-md shadow-green-100"
          >
            Book a Strategy Call
          </a>
        </div>

        <button 
          className={`md:hidden ${isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`text-xl font-bold ${location.pathname === link.path ? 'text-green-600' : 'text-gray-900'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/916387617678" 
                className="bg-green-500 text-white py-4 rounded-2xl font-bold text-xl"
              >
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
