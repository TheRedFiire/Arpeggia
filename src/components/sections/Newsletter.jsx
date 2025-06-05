import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Sparkles, Check, Heart, Music, Star } from 'lucide-react';

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-purple-50/20 to-amber-50/30 relative overflow-hidden">
      
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-rose-200/20 to-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl relative overflow-hidden"
        >
          
          {/* Effets décoratifs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-200/30 to-transparent rounded-bl-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-tr-3xl" />
          
          {/* Contenu principal */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            
            {/* Badge premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200/50 text-violet-700 px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-lg"
            >
              <Heart size={16} className="text-rose-500" />
              <span>NEWSLETTER PREMIUM</span>
              <Sparkles size={16} className="text-amber-500" />
            </motion.div>

            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Restez inspiré,
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                restez connecté
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Recevez en exclusivité nos événements, conseils d'experts et actualités musicales. 
              Rejoignez une communauté passionnée de pianistes.
            </motion.p>

            {/* Avantages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {[
                { icon: Star, title: "Événements VIP", desc: "Accès prioritaire aux masterclasses" },
                { icon: Music, title: "Conseils d'experts", desc: "Tips exclusifs de nos professeurs" },
                { icon: Heart, title: "Communauté", desc: "Connectez-vous avec d'autres passionnés" }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <benefit.icon size={20} className="text-violet-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-800 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre@email.com"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 border border-white/40 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent backdrop-blur-sm shadow-lg transition-all duration-300"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-violet-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>S'inscrire</span>
                      <Sparkles size={18} />
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-xl p-6 max-w-md mx-auto"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Merci !</h3>
                      <p className="text-emerald-600 text-sm">Vous êtes maintenant inscrit</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Note de confidentialité */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-slate-500 text-sm mt-6"
            >
              📧 Pas de spam, désinscription en un clic. Votre email reste confidentiel.
            </motion.p>

          </div>

          {/* Particules décoratives */}
          <div className="absolute top-6 right-8 w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-12 w-1 h-1 bg-rose-400 rounded-full animate-pulse" />
        </motion.div>

      </div>
    </section>
  );
}