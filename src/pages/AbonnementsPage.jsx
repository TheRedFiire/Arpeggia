import Abonnements from '../components/sections/Abonnements';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AbonnementsPage() {
  return (
    <div>
      {/* Hero abonnements */}
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
              Nos Formules
            </h1>
            <p className="font-montserrat text-xl text-gray-warm max-w-2xl mx-auto leading-relaxed">
              Choisissez l'abonnement qui correspond à vos ambitions musicales et votre rythme de vie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Abonnements */}
      <Abonnements />

      {/* FAQ rapide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-cormorant text-3xl font-bold text-dark-navy text-center mb-12">
            Questions fréquentes
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "Puis-je changer d'abonnement ?",
                r: "Oui, vous pouvez modifier votre formule à tout moment. Les changements prennent effet le mois suivant."
              },
              {
                q: "Y a-t-il un engagement ?",
                r: "Aucun engagement. Vous pouvez résilier votre abonnement à tout moment avec un préavis de 30 jours."
              },
              {
                q: "Les heures non utilisées sont-elles reportées ?",
                r: "Les heures de cabines acoustiques non utilisées sont reportées sur le mois suivant (maximum 2 mois)."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-dark-navy mb-2">{faq.q}</h4>
                    <p className="text-gray-600 text-sm">{faq.r}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}