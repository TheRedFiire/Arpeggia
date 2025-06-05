import React from 'react';
import { motion } from 'framer-motion';

export default function EspaceMembre() {
  // Cette page pourrait contenir un dashboard protégé avec authentification
  return (
    <div className="pt-20 pb-10 bg-ivoire min-h-screen">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-playfair text-dark-navy mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Espace Membre
        </motion.h2>
        <p className="text-gray-slate/80">
          Cette section sera accessible uniquement aux abonnés connectés.  
          Vous pourrez gérer vos réservations, consulter vos crédits d’heures, etc.
        </p>
        {/* Ajoutez ici un lien vers la page de connexion ou un composant Auth */}
      </div>
    </div>
  );
}
