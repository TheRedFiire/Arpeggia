import { motion } from 'framer-motion';
import Espaces from '../components/sections/Espaces';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EspacesPage() {
  return (
    <div>
      {/* Hero spécifique aux espaces */}
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
            
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-dark-navy mb-6">
              Nos Espaces Premium
            </h1>
            <p className="font-montserrat text-xl text-gray-warm max-w-2xl mx-auto leading-relaxed">
              Découvrez en détail nos trois univers musicaux conçus pour révéler votre potentiel artistique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Espaces complète */}
      <Espaces />

      {/* CTA vers réservation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-3xl p-12"
          >
            <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-4">
              Prêt à découvrir nos espaces ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Réservez une visite gratuite et testez nos pianos premium dans un environnement d'exception.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-ambre-500 to-cognac-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
            >
              <Calendar size={20} />
              <span>Réserver une visite gratuite</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
