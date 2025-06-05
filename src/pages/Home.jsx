import Hero from '../components/sections/Hero';
import Concept from '../components/sections/Concept';
import Espaces from '../components/sections/Espaces';
import Abonnements from '../components/sections/Abonnements';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Concept />
      <Espaces />
      <Abonnements />

      {/* Section de redirection */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-blush/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lien vers Événements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-4">
                Découvrez nos événements
              </h3>
              <p className="text-gray-warm mb-6">
                Masterclasses, concerts et défis exclusifs pour nos membres
              </p>
              <Link 
                to="/evenements" 
                className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium"
              >
                <span>Voir le calendrier</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Lien vers Témoignages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-4">
                Ils nous font confiance
              </h3>
              <p className="text-gray-warm mb-6">
                Découvrez les retours d'expérience de nos membres
              </p>
              <Link 
                to="/temoignages" 
                className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium"
              >
                <span>Lire les témoignages</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}