import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "Quels sont les horaires d'ouverture ?",
      a: "Arpeggia est accessible 24h/24, 7j/7 grâce au badge personnel. Pas de frais supplémentaires aux heures tardives.",
    },
    {
      q: "Dois-je apporter mon propre casque ?",
      a: "Non : nous fournissons des casques Sennheiser HD pour chaque piano numérique. Vous pouvez aussi amener le vôtre.",
    },
    {
      q: "Puis-je inviter un ami ?",
      a: "Oui : l’offre Studio+ inclut 1 invité gratuit par mois. Sinon, votre accompagnant peut payer 5€ dans la cabine acoustique.",
    },
    {
      q: "Comment annuler mon abonnement ?",
      a: "Les abonnements mensuels sont résiliables à tout moment avec 30 jours de préavis. Les abonnements annuels ont une période d’essai de 14 jours.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="font-playfair text-3xl md:text-4xl text-dark-navy text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Questions fréquentes
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-gray-slate/20 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <button
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 bg-ivoire/80 hover:bg-ivoire/90 transition-colors"
              >
                <p className="text-left font-medium text-dark-navy">{faq.q}</p>
                <svg
                  className={`w-6 h-6 text-gold-wood transition-transform ${
                    active === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: active === idx ? 'auto' : 0,
                  opacity: active === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="px-6 overflow-hidden bg-ivoire"
              >
                <p className="py-4 text-gray-slate/80 text-sm">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
