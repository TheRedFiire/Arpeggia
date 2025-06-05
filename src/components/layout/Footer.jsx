import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Mail, Phone, Instagram, Twitter, Linkedin, Sparkles, Music, Star, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
      
      {/* Fond décoratif subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-ambre-100/30 to-cognac-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        
        {/* Contenu principal du footer */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Logo + Vision */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Logo élégant */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                {/* Logo principal */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl">
                  <img src="/logo.png" alt="Arpeggia" className="w-16 h-16 object-contain rounded-full" />
                </div>
                
                {/* Effet de brillance */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
              </div>
              
              <div>
                <span className="font-cormorant text-2xl font-bold text-dark-navy">
                  Arpeggia
                </span>
                <p className="text-violet-600 text-sm font-montserrat font-medium">Piano Fitness</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-xs font-montserrat">
              L'excellence musicale à Montpellier. Une révolution douce 
              au service de votre passion pianistique et de votre épanouissement.
            </p>

            {/* Badge innovation */}
            <div className="inline-flex items-center space-x-2 bg-violet-50 border border-violet-200 text-violet-700 px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              <span>INNOVATION 2025</span>
            </div>

            {/* Réseaux sociaux contrastés */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Instagram, href: "#", label: "Instagram", bg: "bg-gradient-to-r from-pink-500 to-purple-600" },
                { icon: Twitter, href: "#", label: "Twitter", bg: "bg-gradient-to-r from-blue-400 to-cyan-500" }, 
                { icon: Linkedin, href: "#", label: "LinkedIn", bg: "bg-gradient-to-r from-blue-600 to-blue-700" }
              ].map(({ icon: Icon, href, label, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  aria-label={label}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${bg} rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                  
                  {/* Icon container */}
                  <div className={`relative w-12 h-12 ${bg} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Localisation Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-cormorant text-2xl font-bold text-dark-navy flex items-center space-x-3">
              <MapPin size={24} className="text-violet-600" />
              <span>Localisation</span>
            </h4>
            
            {/* Carte élégante */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg relative overflow-hidden">
              {/* Effet décoratif */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-100 to-transparent rounded-bl-2xl" />
              
              <div className="relative z-10">
                <p className="font-montserrat font-semibold text-dark-navy mb-2">Centre-ville Montpellier</p>
                <p className="text-gray-600 text-sm mb-4 font-montserrat">
                  Zone premium, accès transport<br />
                  Adresse communiquée aux membres
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-violet-600 to-violet-700 text-white px-4 py-2 rounded-xl text-sm font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <ArrowRight size={18} />
                  <span>Itinéraire</span>
                </motion.button>
              </div>
              
              {/* Points décoratifs */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-ambre-400 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Horaires & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="font-cormorant text-2xl font-bold text-dark-navy flex items-center space-x-3">
              <Clock size={24} className="text-ambre-600" />
              <span>Accès & Contact</span>
            </h4>
            
            <div className="space-y-4">
              {/* Accès membres */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <p className="font-montserrat font-semibold text-emerald-700 text-sm">ACCÈS MEMBRES</p>
                </div>
                <p className="text-emerald-600 text-sm font-montserrat">24h/24 - 7j/7</p>
              </div>
              
              {/* Accueil */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <p className="font-montserrat font-semibold text-blue-700 text-sm">ACCUEIL</p>
                </div>
                <p className="text-blue-600 text-sm font-montserrat">Lun-Ven: 9h-19h • Sam: 10h-17h</p>
              </div>
              
              {/* Contact direct */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:contact@arpeggia.fr"
                  className="flex items-center space-x-3 text-gray-600 hover:text-violet-600 transition-colors text-sm group font-montserrat"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  <span>contact@arpeggia.fr</span>
                </a>
                <a
                  href="tel:+33123456789"
                  className="flex items-center space-x-3 text-gray-600 hover:text-ambre-600 transition-colors text-sm group font-montserrat"
                >
                  <Phone size={16} className="group-hover:scale-110 transition-transform" />
                  <span>01 23 45 67 89</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h4 className="font-cormorant text-2xl font-bold text-dark-navy flex items-center space-x-3">
              <Music size={24} className="text-cognac-600" />
              <span>Navigation</span>
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Espaces", path: "/espaces" },
                { name: "Abonnements", path: "/abonnements" },
                { name: "Événements", path: "/evenements" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
                { name: "Légal", path: "/legal" }
              ].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-dark-navy transition-all duration-300 text-sm py-1 hover:translate-x-2 transform flex items-center space-x-2 group font-montserrat"
                  >
                    <Star size={12} className="opacity-50 group-hover:opacity-100 group-hover:text-violet-600" />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Newsletter contrastée */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-6 shadow-lg mt-8">
              <div className="flex items-center space-x-2 mb-3">
                <Heart size={16} className="text-cognac-500" />
                <p className="text-sm font-cormorant font-semibold text-dark-navy">Newsletter Premium</p>
              </div>
              <p className="text-xs text-gray-600 mb-4 font-montserrat">Événements exclusifs et actualités</p>
              
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 text-xs rounded-lg bg-white border border-violet-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 font-montserrat"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-violet-600 to-violet-700 text-white w-10 h-10 flex items-center justify-center rounded-lg text-sm font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-4"
          >
            <p className="text-gray-600 text-sm font-montserrat">
              © 2025 Arpeggia. Made with ❤️ in Montpellier.
            </p>
            <div className="flex items-center space-x-2 bg-violet-50 border border-violet-200 text-violet-600 px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Powered by Music</span>
            </div>
          </motion.div>

          {/* Liens légaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex space-x-6 text-sm"
          >
            {['CGV', 'Confidentialité', 'Cookies'].map((link, index) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              >
                <Link 
                  to="/legal" 
                  className="text-gray-600 hover:text-violet-600 transition-colors duration-300 hover:underline font-montserrat"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}