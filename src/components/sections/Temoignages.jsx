import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, Music, Heart, Sparkles } from 'lucide-react';

const TestimonialCard = ({ testimonial, delay }) => {
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
      {/* Carte principale */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-violet-200/50">
        
        {/* Icône de citation */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-violet-100 to-violet-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        >
          <Quote size={20} className="text-violet-600" />
        </motion.div>

        {/* Photo du témoin */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.7, delay: delay + 0.1 }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-violet-100 transition-colors duration-300">
            <div className={`w-full h-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-2xl`}>
              {testimonial.initials}
            </div>
          </div>
          {/* Badge vérifié */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>

        {/* Étoiles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="flex space-x-1 mb-4"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.4, delay: delay + 0.4 + i * 0.05 }}
            >
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Témoignage */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="text-gray-700 text-lg leading-relaxed mb-6 italic relative"
        >
          "{testimonial.content}"
        </motion.blockquote>

        {/* Informations du témoin */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
        >
          <h4 className="font-cormorant text-xl font-bold text-dark-navy mb-1">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-sm mb-2">
            {testimonial.role}
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-violet-600 text-xs font-semibold bg-violet-100 px-2 py-1 rounded-full">
              {testimonial.membership}
            </span>
            <span className="text-gray-400 text-xs">
              • Membre depuis {testimonial.duration}
            </span>
          </div>
        </motion.div>

        {/* Badge d'émotion */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.6 }}
          className="absolute bottom-6 right-6"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center">
            <Heart size={16} className="text-white" />
          </div>
        </motion.div>

        {/* Overlay d'interaction */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Ombre externe */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-200/20 to-purple-200/20 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
    </motion.div>
  );
};

export default function Temoignages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Développeuse Web",
      content: "Arpeggia a révolutionné ma pratique du piano. L'accès 24/7 me permet de jouer après mes journées de code, dans un environnement parfait. Les cabines acoustiques sont un rêve pour tout pianiste !",
      membership: "Studio+",
      duration: "8 mois",
      initials: "MD",
      gradient: "from-violet-400 to-purple-500"
    },
    {
      name: "Thomas Chen",
      role: "Étudiant en Médecine",
      content: "Entre mes études intensives, Arpeggia est mon oasis musical. L'app mobile facilite les réservations et la communauté est incroyable. C'est vraiment le concept piano fitness !",
      membership: "Essentiel",
      duration: "5 mois", 
      initials: "TC",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      name: "Sophie Martin",
      role: "Chef d'Entreprise",
      content: "Le service Maestro correspond parfaitement à mes attentes. Les masterclasses avec des artistes et le coaching personnalisé ont fait décoller mon niveau. Une expérience premium exceptionnelle.",
      membership: "Maestro",
      duration: "1 an",
      initials: "SM",
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  const stats = [
    { number: "95%", label: "Satisfaction membre", icon: Heart },
    { number: "2,500+", label: "Heures pratiquées/mois", icon: Music },
    { number: "4.9/5", label: "Note moyenne", icon: Star }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-champagne-50/50 via-white to-blush/30 relative overflow-hidden">
      
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl text-gray-400">♪</div>
        <div className="absolute top-40 right-32 text-4xl text-gray-400">♫</div>
        <div className="absolute bottom-32 left-1/4 text-5xl text-gray-400">♪</div>
        <div className="absolute bottom-20 right-20 text-3xl text-gray-400">♬</div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-violet-500/10 backdrop-blur-sm border border-pink-200/50 text-pink-700 px-6 py-3 rounded-full text-sm font-semibold mb-8"
          >
            <Sparkles size={16} />
            <span>TÉMOIGNAGES</span>
          </motion.div>

          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-dark-navy mb-8 leading-tight">
            Ils vivent leur
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              passion musicale
            </span>
          </h2>
          
          <p className="font-montserrat text-xl md:text-2xl text-gray-warm max-w-4xl mx-auto leading-relaxed">
            Découvrez comment nos membres ont transformé leur relation au piano
            <br className="hidden md:block" />
            grâce à l'expérience Arpeggia.
          </p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-violet-600" />
              </div>
              <div className="font-cormorant text-4xl font-bold text-dark-navy mb-2">
                {stat.number}
              </div>
              <p className="text-gray-warm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Grille des témoignages */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              delay={0.2 + index * 0.15}
            />
          ))}
        </div>

        {/* Section communauté */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-violet-200/30"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart size={32} className="text-white" />
            </motion.div>

            <h3 className="font-cormorant text-3xl font-bold text-dark-navy mb-4">
              Rejoignez notre communauté
            </h3>
            
            <p className="text-gray-warm text-lg mb-8 max-w-2xl mx-auto">
              Plus qu'un club de piano, Arpeggia c'est une communauté passionnée qui partage, 
              évolue et se challenge ensemble. Faites partie de l'aventure !
            </p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Découvrir la communauté
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}