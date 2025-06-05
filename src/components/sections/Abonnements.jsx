import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight, Sparkles } from 'lucide-react';

const PricingCard = ({ plan, isPopular = false, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative group ${isPopular ? 'lg:scale-110 lg:-mt-8' : ''}`}
    >
      
      {/* Badge populaire */}
      {isPopular && (
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
            <Star size={16} fill="currentColor" />
            <span>RECOMMANDÉ</span>
          </div>
        </motion.div>
      )}

      {/* Conteneur principal avec gradient border */}
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br p-1 shadow-xl hover:shadow-2xl transition-all duration-500 ${
        isPopular 
          ? 'from-violet-400 via-purple-500 to-pink-500' 
          : 'from-gray-200 via-gray-300 to-gray-400'
      }`}>
        
        {/* Carte intérieure */}
        <div className="relative bg-white rounded-3xl p-8 h-full group-hover:bg-gray-50/50 transition-all duration-500">
          
          {/* Icône du plan */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: delay + 0.2 }}
            className="mb-6"
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg border ${
              isPopular 
                ? 'bg-gradient-to-br from-violet-500 to-purple-600 text-white border-violet-200' 
                : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 border-gray-300'
            } group-hover:scale-110 transition-all duration-500`}>
              <plan.icon size={32} />
            </div>
          </motion.div>

          {/* Nom du plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            className="mb-6"
          >
            <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-warm text-lg">
              {plan.subtitle}
            </p>
          </motion.div>

          {/* Prix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
            className="mb-8"
          >
            <div className="flex items-baseline space-x-2">
              <span className={`font-bold text-5xl ${isPopular ? 'bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent' : 'text-dark-navy'}`}>
                {plan.price}€
              </span>
              <span className="text-gray-warm text-xl">
                /{plan.period}
              </span>
            </div>
            {plan.originalPrice && (
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-400 line-through text-lg">{plan.originalPrice}€</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  Économisez {plan.savings}€
                </span>
              </div>
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.5 }}
            className="space-y-4 mb-8"
          >
            {plan.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.6 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isPopular 
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600' 
                    : 'bg-gradient-to-r from-ambre-400 to-cognac-500'
                }`}>
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.7 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
              isPopular
                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            <span>Choisir {plan.name}</span>
            <ArrowRight size={20} />
          </motion.button>

          {/* Garantie */}
          {plan.guarantee && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.8 }}
              className="text-center text-gray-500 text-sm mt-4"
            >
              {plan.guarantee}
            </motion.p>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Ombre externe */}
      <div className={`absolute inset-0 rounded-3xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 ${
        isPopular 
          ? 'bg-gradient-to-br from-violet-200/40 to-purple-200/40'
          : 'bg-gradient-to-br from-gray-200/30 to-gray-300/30'
      }`} />
    </motion.div>
  );
};

export default function Abonnements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Essentiel",
      subtitle: "Pour débuter votre parcours",
      price: isAnnual ? 45 : 55,
      originalPrice: isAnnual ? 55 : null,
      savings: isAnnual ? 10 : null,
      period: "mois",
      icon: Zap,
      features: [
        "Accès illimité hors heures pleines",
        "1h de cabine acoustique incluse",
        "Applications d'apprentissage premium",
        "Espace digital en libre accès",
        "Support technique 7j/7"
      ],
      guarantee: "Satisfait ou remboursé 30 jours"
    },
    {
      name: "Studio+",
      subtitle: "L'expérience complète",
      price: isAnnual ? 75 : 89,
      originalPrice: isAnnual ? 89 : null,
      savings: isAnnual ? 14 : null,
      period: "mois",
      icon: Star,
      features: [
        "Accès illimité 24h/24 - 7j/7",
        "5h de cabines acoustiques incluses",
        "Espace collaboration premium",
        "Invité gratuit 1×/mois",
        "Enregistrement multi-pistes",
        "Cours en ligne exclusifs",
        "Priority booking"
      ],
      guarantee: "Engagement flexible, résiliation libre"
    },
    {
      name: "Maestro",
      subtitle: "Performance d'exception",
      price: isAnnual ? 125 : 149,
      originalPrice: isAnnual ? 149 : null,
      savings: isAnnual ? 24 : null,
      period: "mois",
      icon: Crown,
      features: [
        "Tous les avantages Studio+",
        "10h de cabines acoustiques premium",
        "Accès prioritaire heures pleines",
        "Événements privés & jam sessions",
        "Masterclasses avec artistes",
        "Coaching personnalisé mensuel",
        "Conciergerie musicale dédiée"
      ],
      guarantee: "Service premium garanti"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-blush/30 via-white to-champagne-50/50 relative overflow-hidden">
      
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-ambre-200/20 to-cognac-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-violet-300/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-ambre-300/30 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-ambre-500/10 backdrop-blur-sm border border-violet-200/50 text-violet-700 px-6 py-3 rounded-full text-sm font-semibold mb-8"
          >
            <Sparkles size={16} />
            <span>ABONNEMENTS</span>
          </motion.div>

          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-dark-navy mb-8 leading-tight">
            Choisissez votre
            <br />
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              niveau de performance
            </span>
          </h2>
          
          <p className="font-montserrat text-xl md:text-2xl text-gray-warm max-w-4xl mx-auto leading-relaxed mb-12">
            Des formules flexibles adaptées à votre rythme de vie et vos ambitions musicales.
            <br className="hidden md:block" />
            Réveillez le musicien athlète qui est en vous.
          </p>

          {/* Toggle Mensuel/Annuel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <span className={`font-semibold transition-colors duration-200 ${!isAnnual ? 'text-dark-navy' : 'text-gray-400'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 ${
                isAnnual ? 'bg-gradient-to-r from-violet-500 to-purple-600' : 'bg-gray-300'
              }`}
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </button>
            <span className={`font-semibold transition-colors duration-200 ${isAnnual ? 'text-dark-navy' : 'text-gray-400'}`}>
              Annuel
            </span>
          </motion.div>

          {/* Badge économie */}
          {isAnnual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-12"
            >
              <Star size={14} />
              <span>Économisez jusqu'à 15% avec l'abonnement annuel</span>
            </motion.div>
          )}
        </motion.div>

        {/* Grille des abonnements */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20 mt-8 pt-10">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isPopular={index === 1}
              delay={0.2 + index * 0.15}
            />
          ))}
        </div>

        {/* Section informations complémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
        >
          <div className="text-center mb-12">
            <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-4">
              Inclus dans tous nos abonnements
            </h3>
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              Profitez d'avantages exclusifs conçus pour optimiser votre expérience musicale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎹",
                title: "Instruments Premium",
                description: "Pianos Yamaha, Kawai et équipement professionnel"
              },
              {
                icon: "📱",
                title: "App Mobile",
                description: "Réservation, suivi des progrès et communauté"
              },
              {
                icon: "🔧",
                title: "Maintenance 24/7", 
                description: "Instruments accordés et entretenus quotidiennement"
              },
              {
                icon: "🎓",
                title: "Ressources Exclusives",
                description: "Partitions, cours vidéo et conseils d'experts"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-cormorant text-xl font-bold text-dark-navy">
                  {feature.title}
                </h4>
                <p className="text-gray-warm text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-violet-200/30">
            <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-4">
              Pas encore sûr de votre choix ?
            </h3>
            <p className="text-gray-warm text-lg mb-8 max-w-2xl mx-auto">
              Réservez une visite gratuite et testez nos espaces avant de vous engager. 
              Découvrez l'environnement qui vous correspond le mieux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Réserver une visite gratuite</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-dark-navy text-dark-navy px-8 py-4 rounded-2xl font-semibold text-lg bg-white/50 hover:bg-white/70 transition-all duration-300"
              >
                Nous contacter
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}