import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Tablet, Headphones, Users, Calendar, Gift, CheckCircle2, Sparkles, Star, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, gradient, delay, isHighlight = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      {/* Badge highlight */}
      {isHighlight && (
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
        >
          NOUVEAU
        </motion.div>
      )}

      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-1 shadow-xl hover:shadow-2xl transition-all duration-500`}>
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

          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            className="mb-6"
          >
            <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-2 group-hover:text-ambre-600 transition-colors duration-300">
              {title}
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
            className="text-gray-warm leading-relaxed text-base"
          >
            {description}
          </motion.p>

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ambre-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Ombre externe animée */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ambre-200/20 to-violet-200/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
    </motion.div>
  );
};

const ProcessStep = ({ number, title, description, icon: Icon, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex items-start space-x-6 group"
    >
      {/* Numéro élégant */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className="relative"
        >
          {/* Cercles décoratifs */}
          <div className="absolute inset-0 w-16 h-16 border border-violet-200/60 rounded-full group-hover:border-violet-300/80 transition-colors duration-300" />
          <div className="absolute inset-1 w-14 h-14 border border-purple-100/40 rounded-full" />
          
          {/* Cercle principal */}
          <div className="w-16 h-16 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-full flex items-center justify-center text-dark-navy font-bold text-xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 border border-white/50">
            <span className="relative z-10">{number}</span>
            
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent rounded-full" />
          </div>
        </motion.div>
        
        {/* Ligne de connexion */}
        {number < 4 && (
          <div className="absolute top-16 left-1/2 w-0.5 h-20 bg-gradient-to-b from-violet-300 via-purple-200 to-transparent transform -translate-x-1/2" />
        )}
      </div>

      {/* Contenu */}
      <div className="flex-1 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 group-hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center space-x-3 mb-3">
            <Icon size={22} className="text-violet-600" />
            <h4 className="font-cormorant text-2xl font-bold text-dark-navy">
              {title}
            </h4>
          </div>
          <p className="text-gray-warm leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Music,
      title: "Accès 24h/24",
      description: "Liberté totale avec notre système d'accès automatisé par badge. Pratiquez quand l'inspiration vous vient, dans un environnement sécurisé et moderne.",
      gradient: "from-violet-400 via-purple-500 to-indigo-600"
    },
    {
      icon: Tablet,
      title: "IA d'Apprentissage",
      description: "Tablettes premium intégrées avec intelligence artificielle musicale. Apps exclusives et coaching personnalisé pour accélérer votre progression.",
      gradient: "from-blue-400 via-cyan-500 to-teal-600",
      isHighlight: true
    },
    {
      icon: Headphones,
      title: "Espaces Premium",
      description: "Cabines acoustiques avec isolation phonique professionnelle. Pianos droits et grands formats dans un cadre d'exception.",
      gradient: "from-amber-400 via-orange-500 to-red-500"
    }
  ];

  const communityFeatures = [
    { icon: Users, title: "Communauté Elite", description: "Network de musiciens passionnés et bienveillants" },
    { icon: Calendar, title: "Événements VIP", description: "Masterclasses et concerts exclusifs pour membres" },
    { icon: Gift, title: "Privilèges Premium", description: "Avantages et tarifs préférentiels toute l'année" }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Inscription Express",
      description: "Choisissez votre formule et créez votre profil musical en 3 minutes. Processus simplifié et accueil personnalisé.",
      icon: Zap
    },
    {
      number: 2,
      title: "Badge & Application",
      description: "Recevez votre badge d'accès connecté et téléchargez notre app mobile intuitive pour réserver vos créneaux.",
      icon: Sparkles
    },
    {
      number: 3,
      title: "Pratique Immersive",
      description: "Découvrez nos espaces premium 24/7. Assistance intelligente et suivi de progression en temps réel.",
      icon: Music
    },
    {
      number: 4,
      title: "Évolution Continue",
      description: "Participez aux événements exclusifs et challenges. Progressez dans un écosystème musical stimulant.",
      icon: Star
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-blush/30 relative overflow-hidden">
      
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-gradient-to-r from-ambre-200/20 to-cognac-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* En-tête élégant */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          {/* Badge premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-ambre-500/10 backdrop-blur-sm border border-violet-200/50 text-violet-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <Sparkles size={16} />
            <span>CONCEPT RÉVOLUTIONNAIRE</span>
          </motion.div>

          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-dark-navy mb-8 leading-tight">
            Innovation &
            <br />
            <span className="bg-gradient-to-r from-ambre-500 via-cognac-500 to-violet-600 bg-clip-text text-transparent">
              Excellence Musicale
            </span>
          </h2>
          
          <p className="font-montserrat text-xl md:text-2xl text-gray-warm max-w-4xl mx-auto leading-relaxed">
            Une expérience immersive qui fusionne technologie de pointe, 
            <br className="hidden md:block" />
            espaces premium et communauté d'élite pour révéler votre potentiel musical.
          </p>
        </motion.div>

        {/* Grille des fonctionnalités */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={0.2 + index * 0.2}
            />
          ))}
        </div>

        {/* Section écosystème */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="font-cormorant text-4xl font-bold text-dark-navy mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Avantages Membres
              </span>
            </h3>
            <p className="text-gray-warm text-lg">
              Rejoignez une communauté exclusive et bénéficiez d'avantages uniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/40 hover:border-violet-200/60 transition-all duration-300 group-hover:scale-105 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon size={24} className="text-violet-600" />
                  </div>
                  <h4 className="font-cormorant text-xl font-bold text-dark-navy mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-warm text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Processus élégant */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
        >
          <div className="text-center mb-16">
            <h3 className="font-cormorant text-4xl font-bold text-dark-navy mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Processus d'Intégration
              </span>
            </h3>
            <p className="text-gray-warm text-lg">
              4 étapes pour rejoindre l'élite musicale de Montpellier
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                delay={1.0 + index * 0.2}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}