import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Music2, Users, Sparkles, Clock, Shield } from 'lucide-react';

const SpaceCard = ({ title, subtitle, description, features, icon: Icon, gradient, badge, delay, isNew = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-1 shadow-xl hover:shadow-2xl transition-all duration-500`}>
        {/* Badge "Nouveau" */}
        {isNew && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
            className="absolute top-4 right-4 z-20 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          >
            NOUVEAU
          </motion.div>
        )}

        {/* Contenu principal */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 h-full group-hover:bg-white/98 transition-all duration-500">
          
          {/* Icône flottante */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: delay + 0.2 }}
            className="relative mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
              <Icon size={32} className="text-dark-navy group-hover:scale-110 transition-transform duration-300" />
            </div>
            {/* Effet de brillance */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Titre et sous-titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            className="mb-6"
          >
            <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-2 group-hover:text-ambre-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-cognac-600 font-medium text-lg">
              {subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
            className="text-gray-warm leading-relaxed mb-8 text-base"
          >
            {description}
          </motion.p>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.5 }}
            className="space-y-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.6 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-ambre-400 to-cognac-500 rounded-full" />
                <span className="text-gray-warm text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Badge prix ou info */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.7 }}
              className="mt-8 inline-block bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-200 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {badge}
            </motion.div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ambre-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Ombre externe animée */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ambre-200/20 to-violet-200/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
    </motion.div>
  );
};

export default function Espaces() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spaces = [
    {
      title: "Studio Digital",
      subtitle: "Performance connectée",
      description: "Pianos numériques haute qualité avec écrans tactiles intégrés. Accès aux apps premium Flowkey et Simply Piano pour un apprentissage personnalisé et des défis musicaux.",
      features: [
        "Pianos Kawai ES920 avec toucher lourd",
        "Écrans 32\" tactiles 4K",
        "Casques premium Sony MDR-7506",
        "Apps d'apprentissage illimitées",
        "Système d'enregistrement intégré"
      ],
      icon: Monitor,
      gradient: "from-blue-400 via-purple-500 to-violet-600",
      badge: "À partir de 15€/h",
      isNew: false
    },
    {
      title: "Cabine Acoustique", 
      subtitle: "L'expérience authentique",
      description: "Cabines insonorisées avec pianos droits et grands formats. L'acoustique parfaite pour une pratique immersive sans contraintes sonores.",
      features: [
        "Pianos Yamaha U3 et C3 Grand",
        "Isolation phonique premium",
        "Acoustique optimisée",
        "Réglage personnalisé",
        "Ambiance feutrée et élégante"
      ],
      icon: Music2,
      gradient: "from-amber-400 via-orange-500 to-red-500",
      badge: "Réservation premium",
      isNew: true
    },
    {
      title: "Espace Collaboration",
      subtitle: "Créativité partagée", 
      description: "Zone ouverte pour les sessions duo, cours particuliers et jam sessions. Équipement professionnel pour créer et partager la musique ensemble.",
      features: [
        "2 pianos face à face",
        "Système audio multi-canal",
        "Écran de projection 65\"",
        "Enregistrement multi-pistes",
        "Ambiance modulable"
      ],
      icon: Users,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      badge: "Sur réservation",
      isNew: false
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-blush/30 relative overflow-hidden">
      
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-ambre-200/20 to-cognac-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          {/* Badge "Nos Espaces" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-ambre-500/10 backdrop-blur-sm border border-violet-200/50 text-violet-700 px-6 py-3 rounded-full text-sm font-semibold mb-8"
          >
            <Sparkles size={16} />
            <span>NOS ESPACES</span>
          </motion.div>

          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-dark-navy mb-8 leading-tight">
            Trois univers,
            <br />
            <span className="bg-gradient-to-r from-ambre-500 via-cognac-500 to-violet-600 bg-clip-text text-transparent">
              une passion
            </span>
          </h2>
          
          <p className="font-montserrat text-xl md:text-2xl text-gray-warm max-w-4xl mx-auto leading-relaxed">
            Découvrez nos espaces pensés pour révéler le musicien athlète qui est en vous. 
            <br className="hidden md:block" />
            Chaque environnement offre une expérience unique adaptée à votre style et niveau.
          </p>
        </motion.div>

        {/* Grille des espaces */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {spaces.map((space, index) => (
            <SpaceCard
              key={space.title}
              {...space}
              delay={0.4 + index * 0.2}
            />
          ))}
        </div>

        {/* Section informations complémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center mx-auto">
                <Clock size={24} className="text-violet-600" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-dark-navy">
                Accès 24/7
              </h3>
              <p className="text-gray-warm">
                Pratiquez quand vous voulez grâce à notre système d'accès automatisé par badge
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ambre-100 to-ambre-200 rounded-2xl flex items-center justify-center mx-auto">
                <Shield size={24} className="text-ambre-600" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-dark-navy">
                Hygiène Garantie
              </h3>
              <p className="text-gray-warm">
                Nettoyage quotidien et désinfection après chaque session pour votre sécurité
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cognac-100 to-cognac-200 rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles size={24} className="text-cognac-600" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-dark-navy">
                Équipement Premium
              </h3>
              <p className="text-gray-warm">
                Instruments et matériel de qualité professionnelle entretenus quotidiennement
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}