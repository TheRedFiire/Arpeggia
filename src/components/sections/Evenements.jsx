import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Music, Users, Award, Clock, MapPin, ArrowRight, Sparkles, Star } from 'lucide-react';

const EventCard = ({ event, delay, isUpcoming = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      {/* Carte d'événement */}
      <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-4 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 group-hover:scale-[1.02]">
        
        {/* Badge de date */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.1 }}
          className={`absolute -top-3 -right-3 z-20 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
            isUpcoming 
              ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white' 
              : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white'
          }`}
        >
          {event.date}
        </motion.div>

        {/* En-tête avec icône */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="flex items-center space-x-4"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
              event.type === 'masterclass' ? 'bg-gradient-to-br from-violet-500 to-purple-600' :
              event.type === 'concert' ? 'bg-gradient-to-br from-rose-500 to-pink-600' :
              'bg-gradient-to-br from-amber-500 to-orange-600'
            } group-hover:scale-110 transition-transform duration-300`}>
              <event.icon size={24} className="text-white" />
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-slate-600 font-medium">
                {event.category}
              </p>
            </div>
          </motion.div>

          {/* Badge spécial */}
          {event.special && (
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.4 }}
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
            >
              <Star size={12} fill="currentColor" />
              <span>{event.special}</span>
            </motion.div>
          )}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="text-slate-600 leading-relaxed mb-6 text-base"
        >
          {event.description}
        </motion.p>

        {/* Détails de l'événement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="grid md:grid-cols-2 gap-4 mb-6"
        >
          <div className="flex items-center space-x-3 text-slate-600">
            <Clock size={16} className="text-violet-500" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <MapPin size={16} className="text-violet-500" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <Users size={16} className="text-violet-500" />
            <span className="text-sm">{event.capacity}</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <Award size={16} className="text-violet-500" />
            <span className="text-sm">{event.level}</span>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {event.tags.map((tag, index) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Prix et bouton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-slate-800">
              {event.price}
            </div>
            {event.memberPrice && (
              <div className="text-sm text-slate-500">
                <span className="line-through">{event.originalPrice}</span>
                <span className="text-emerald-600 font-semibold ml-2">Membre: {event.memberPrice}</span>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl ${
              isUpcoming
                ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white'
                : 'bg-gradient-to-r from-violet-600 to-purple-700 text-white'
            }`}
          >
            <span>{isUpcoming ? 'Réserver' : 'En savoir plus'}</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        {/* Indicateur de places */}
        {event.spotsLeft && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.7 }}
            className="mt-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-3"
          >
            <p className="text-red-700 text-sm font-medium text-center">
              🔥 Plus que {event.spotsLeft} places disponibles !
            </p>
          </motion.div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Ombre externe */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-200/20 to-purple-200/20 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
    </motion.div>
  );
};

export default function Evenements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      date: "15 DÉC",
      title: "Masterclass Jazz Fusion",
      category: "Masterclass Premium",
      description: "Explorez les subtilités du jazz fusion avec le pianiste renommé Marc Benoit. Techniques avancées, improvisation et secrets des grands maîtres.",
      time: "14h00 - 17h00",
      location: "Espace Collaboration",
      capacity: "12 participants max",
      level: "Intermédiaire/Avancé",
      price: "45€",
      memberPrice: "35€",
      originalPrice: "60€",
      tags: ["Jazz", "Improvisation", "Technique"],
      type: "masterclass",
      icon: Music,
      special: "EXCLUSIF",
      spotsLeft: 3
    },
    {
      date: "22 DÉC",
      title: "Concert de Noël",
      category: "Événement Communauté",
      description: "Soirée magique où nos membres partagent leurs plus belles interprétations dans une ambiance chaleureuse et festive. Vin chaud et surprises !",
      time: "19h00 - 22h00",
      location: "Tous les espaces",
      capacity: "50 personnes",
      level: "Tous niveaux",
      price: "Gratuit",
      memberPrice: null,
      tags: ["Concert", "Communauté", "Noël"],
      type: "concert", 
      icon: Users,
      special: null
    },
    {
      date: "8 JAN",
      title: "Défi 30 jours",
      category: "Challenge Fitness Piano",
      description: "Lancez votre année avec notre défi exclusif ! 30 jours d'exercices progressifs pour développer votre technique et endurance musicale.",
      time: "Challenge mensuel",
      location: "Application mobile",
      capacity: "Illimité",
      level: "Tous niveaux",
      price: "19€",
      memberPrice: "Inclus",
      tags: ["Challenge", "Progression", "Communauté"],
      type: "challenge",
      icon: Award,
      special: "NOUVEAU"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-purple-50/20 to-amber-50/30 relative overflow-hidden">
      
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-200/20 to-rose-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-xl border border-violet-200/50 text-slate-700 px-8 py-4 rounded-2xl text-sm font-semibold mb-8 shadow-xl"
          >
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            <span>ÉVÉNEMENTS</span>
            <Sparkles size={18} className="text-amber-500" />
          </motion.div>

          <h2 className="font-serif text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Votre calendrier
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              musical exclusif
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Masterclasses avec des artistes, concerts communautaires et défis motivants.
            <br className="hidden md:block" />
            Vivez votre passion à fond avec des événements uniques.
          </p>
        </motion.div>

        {/* Grille des événements */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 mb-20">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              event={event}
              delay={0.2 + index * 0.15}
              isUpcoming={index === 0}
            />
          ))}
        </div>

        {/* Section CTA finale - CORRIGÉE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <Calendar size={32} className="text-white" />
            </motion.div>

            <h3 className="font-serif text-3xl font-bold text-slate-800 mb-4">
              Ne manquez aucun événement
            </h3>
            
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Membres Arpeggia, recevez en priorité les invitations et bénéficiez de tarifs préférentiels 
              sur tous nos événements exclusifs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-violet-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Voir tous les événements</span>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
              >
                S'abonner aux notifications
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}