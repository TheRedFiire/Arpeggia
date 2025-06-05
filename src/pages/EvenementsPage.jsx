import Evenements from '../components/sections/Evenements';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function EvenementsPage() {
  return (
    <div>
      {/* Hero événements */}
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
              Événements & Masterclasses
            </h1>
            <p className="font-montserrat text-xl text-gray-warm max-w-2xl mx-auto leading-relaxed">
              Participez à nos événements exclusifs et progressez aux côtés d'artistes reconnus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Événements */}
      <Evenements />

      {/* Calendrier complet */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-cormorant text-3xl font-bold text-dark-navy text-center mb-12">
            Calendrier mensuel
          </h3>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <Calendar size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Calendrier interactif en cours de développement
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}