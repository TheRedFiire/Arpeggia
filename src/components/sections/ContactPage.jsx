import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div>
      {/* Hero contact */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-gray-50/50 to-blush/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 mb-8 transition-colors">
              <ArrowLeft size={16} />
              <span className="text-sm font-montserrat">Retour à l'accueil</span>
            </Link>
            
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 w-24 h-24 border border-violet-200 rounded-full animate-pulse" />
                <div className="absolute inset-1 w-22 h-22 border border-ambre-200 rounded-full" />
                <div className="w-20 h-20 bg-gradient-to-br from-dark-navy to-slate-800 rounded-full flex items-center justify-center shadow-2xl">
                  <img src="/logo.png" alt="Arpeggia" className="w-12 h-12 object-contain" />
                </div>
              </div>
            </div>
            
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-dark-navy mb-6">
              Nous Contacter
            </h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 