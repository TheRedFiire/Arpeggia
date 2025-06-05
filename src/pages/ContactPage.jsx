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
            
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-dark-navy mb-6">
              Nous Contacter
            </h1>
            <p className="font-montserrat text-xl text-gray-warm max-w-2xl mx-auto leading-relaxed">
              Une question ? Un projet musical ? Notre équipe est là pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulaire et informations */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="font-cormorant text-2xl font-bold text-dark-navy mb-6">
                Envoyez-nous un message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 font-montserrat"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 font-montserrat"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 font-montserrat"
                />
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 font-montserrat">
                  <option>Sujet de votre message</option>
                  <option>Demande d'information</option>
                  <option>Réservation de visite</option>
                  <option>Support technique</option>
                  <option>Partenariat</option>
                </select>
                <textarea
                  rows="6"
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 font-montserrat"
                ></textarea>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-ambre-500 to-cognac-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>

            {/* Informations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-cormorant text-2xl font-bold text-dark-navy mb-6">
                  Informations pratiques
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-violet-600 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-dark-navy mb-1">Adresse</h4>
                      <p className="text-gray-600">Centre-ville Montpellier<br />Adresse exacte communiquée aux membres</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock size={24} className="text-ambre-600 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-dark-navy mb-1">Horaires</h4>
                      <p className="text-gray-600">Membres : 24h/24 - 7j/7<br />Accueil : Lun-Ven 9h-19h, Sam 10h-17h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail size={24} className="text-violet-600 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-dark-navy mb-1">Email</h4>
                      <a href="mailto:contact@arpeggia.fr" className="text-violet-600 hover:underline">contact@arpeggia.fr</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone size={24} className="text-ambre-600 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-dark-navy mb-1">Téléphone</h4>
                      <a href="tel:+33123456789" className="text-ambre-600 hover:underline">01 23 45 67 89</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte placeholder */}
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-gray-500">Carte interactive à venir</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}