import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Music, Sparkles, Home, CreditCard, CalendarDays, HelpCircle, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Détection du scroll pour effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Espaces', path: '/espaces', icon: Home },
    { name: 'Abonnements', path: '/abonnements', icon: CreditCard },
    { name: 'Événements', path: '/evenements', icon: CalendarDays },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-white/20'
          : 'bg-white/60 backdrop-blur-xl border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo sophistiqué */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Logo principal */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl">
                <img src="/logo.png" alt="Arpeggia" className="w-16 h-16 object-contain rounded-full" />
              </div>
              
              {/* Effet de brillance */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Arpeggia
              </span>
              <span className="text-xs text-violet-600 -mt-1 font-medium">Piano Fitness</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`relative font-medium transition-all duration-300 group py-2 px-4 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-violet-600 bg-violet-100/50'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/50'
                  }`}
                >
                  {link.name}
                  
                  {/* Underline animé */}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-8' : 'w-0 group-hover:w-6'
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button premium */}
          <div className="hidden lg:flex">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Button content */}
              <div className="relative bg-gradient-to-r from-violet-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-xl transition-all duration-300 flex items-center space-x-2 border border-white/20">
                <Calendar size={18} />
                <span>Réserver une visite</span>
                <Sparkles size={16} className="animate-pulse" />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-white/60 backdrop-blur-xl border border-white/40 hover:bg-white/80 transition-all duration-300 shadow-lg"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-slate-700" />
              ) : (
                <Menu size={24} className="text-slate-700" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-white/30 shadow-2xl"
          >
            <div className="px-4 py-8 space-y-6">
              
              {/* Navigation links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block font-medium py-3 px-6 rounded-xl transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-violet-600 bg-violet-100/50 border border-violet-200/50'
                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <link.icon size={18} className="opacity-60" />
                      <span>{link.name}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* CTA Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full relative group overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl blur-lg opacity-40" />
                  
                  {/* Button content */}
                  <div className="relative bg-gradient-to-r from-violet-600 to-purple-700 text-white px-6 py-4 rounded-xl font-semibold shadow-xl flex items-center justify-center space-x-2 border border-white/20">
                    <Calendar size={18} />
                    <span>Réserver une visite</span>
                    <Sparkles size={16} className="animate-pulse" />
                  </div>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}