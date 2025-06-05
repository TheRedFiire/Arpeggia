import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const MusicParticle = ({ note, initialX, initialY, delay, duration, scale = 1 }) => {
  return (
    <motion.div
      className="absolute text-gray-slate/40 pointer-events-none select-none"
      initial={{ 
        x: initialX, 
        y: initialY, 
        opacity: 0, 
        scale: 0.5 * scale,
        rotate: Math.random() * 360 
      }}
      animate={{ 
        x: initialX + (Math.random() - 0.5) * 200,
        y: initialY - 100 - Math.random() * 150,
        opacity: [0, 0.8, 0.4, 0],
        scale: [0.5 * scale, 1.2 * scale, 0.8 * scale, 0.3 * scale],
        rotate: Math.random() * 360 + 180
      }}
      transition={{
        delay: delay,
        duration: duration,
        repeat: Infinity,
        ease: 'easeOut',
        times: [0, 0.3, 0.7, 1]
      }}
      style={{
        fontSize: `${16 + Math.random() * 20}px`,
        filter: 'blur(0.5px)'
      }}
    >
      {note}
    </motion.div>
  );
};

const FloatingNotes = () => {
  const [particles, setParticles] = useState([]);
  
  const musicNotes = ['♪', '♫', '♬', '♩', '♭', '♯', '𝄞', '𝄢', '𝅘𝅥', '𝅘𝅥𝅮', '𝅘𝅥𝅯', '𝅘𝅥𝅰'];
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      
      // Particules fixes flottantes (comme l'original)
      const fixedPositions = [
        { left: '10%', top: '10%' },
        { left: '30%', top: '25%' },
        { left: '50%', top: '15%' },
        { left: '70%', top: '30%' },
        { left: '25%', top: '45%' },
        { left: '80%', top: '60%' },
        { left: '15%', top: '65%' },
        { left: '60%', top: '70%' },
      ];
      
      fixedPositions.forEach((pos, i) => {
        newParticles.push({
          id: `fixed-${i}`,
          note: musicNotes[Math.floor(Math.random() * musicNotes.length)],
          x: window.innerWidth * (parseFloat(pos.left) / 100),
          y: window.innerHeight * (parseFloat(pos.top) / 100),
          delay: Math.random() * 3,
          duration: 4 + Math.random() * 4,
          scale: 0.8 + Math.random() * 0.6,
          type: 'fixed'
        });
      });
      
      // Particules dynamiques supplémentaires
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: `dynamic-${i}`,
          note: musicNotes[Math.floor(Math.random() * musicNotes.length)],
          x: Math.random() * window.innerWidth,
          y: window.innerHeight * 0.3 + Math.random() * window.innerHeight * 0.6,
          delay: Math.random() * 5,
          duration: 6 + Math.random() * 6,
          scale: 0.5 + Math.random() * 0.8,
          type: 'dynamic'
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const interval = setInterval(() => {
      generateParticles();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <MusicParticle
          key={particle.id}
          note={particle.note}
          initialX={particle.x}
          initialY={particle.y}
          delay={particle.delay}
          duration={particle.duration}
          scale={particle.scale}
        />
      ))}
      
      {/* Particules statiques originales améliorées */}
      {[
        { note: '♪', left: '5%', top: '20%', duration: 8, delay: 0, size: 'text-4xl' },
        { note: '♫', left: '85%', top: '15%', duration: 10, delay: 1, size: 'text-3xl' },
        { note: '♬', left: '12%', top: '75%', duration: 9, delay: 0.5, size: 'text-5xl' },
        { note: '𝄞', left: '90%', top: '40%', duration: 7, delay: 1.5, size: 'text-4xl' },
        { note: '♭', left: '8%', top: '50%', duration: 11, delay: 2, size: 'text-3xl' },
        { note: '𝅘𝅥𝅮', left: '92%', top: '70%', duration: 6, delay: 0.8, size: 'text-4xl' },
      ].map((item, i) => (
        <motion.div
          key={`static-${i}`}
          className={`absolute ${item.size} text-gray-slate/30`}
          initial={{ opacity: 0, y: 20, rotate: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.7, 0.3, 0.6, 0],
            y: [20, -80, -40, -100, 20],
            rotate: [0, 180, 90, 270, 360],
            scale: [0.8, 1.2, 0.9, 1.1, 0.8]
          }}
          transition={{
            delay: item.delay,
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: item.left,
            top: item.top,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}
        >
          {item.note}
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Fond dégradé abstrait amélioré */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(139,160,203,0.4), transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(224,179,77,0.3), transparent 50%),
              radial-gradient(circle at center, rgba(201,177,189,0.2), transparent 70%),
              linear-gradient(150deg, #8DA0CB 0%, #C9B1BD 50%, #E0B34D 100%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10 backdrop-blur-sm"></div>
        
        {/* Éléments décoratifs supplémentaires */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/10 to-purple-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Système de particules musicales amélioré */}
      <FloatingNotes />

      {/* Contenu centré */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        {/* Logo arrondi avec effet de brillance */}
        <motion.div
          className="mx-auto mb-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-white/90 backdrop-blur-sm shadow-2xl border border-white/50 group"
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src="/logo.png" alt="Arpeggia Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
          
          {/* Effet de brillance */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Titre principal avec effet de gradient animé */}
        <motion.h1
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-dark-navy">Piano Fitness</span>
          <br />
          <motion.span 
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl block mt-2"
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Réveillez le musicien athlète
          </motion.span>
        </motion.h1>

        {/* Sous-titre avec animation échelonnée */}
        <motion.p
          className="text-gray-slate/90 text-base sm:text-lg md:text-xl mb-8 px-4 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Un espace lumineux et moderne à Montpellier :  
          <br className="hidden sm:block" />
          &nbsp;pianos haut de gamme, cabines acoustiques, apprentissage sur tablette.
        </motion.p>

        {/* Boutons avec effets hover améliorés */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.button 
            className="group relative overflow-hidden bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Découvrir nos offres</span>
            
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
          
          <motion.button 
            className="group relative bg-transparent border-2 border-dark-navy/80 text-dark-navy px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-dark-navy hover:text-white transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Visiter le club</span>
            
            {/* Fond animé au hover */}
            <div className="absolute inset-0 bg-dark-navy scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
          </motion.button>
        </motion.div>

        {/* Badge informatif animé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-green-200/50 text-green-700 px-6 py-3 rounded-full text-sm font-medium shadow-xl"
        >
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span>Disponible 24h/24 • 7j/7</span>
        </motion.div>
      </div>

      {/* Ombres supplémentaires pour la profondeur */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </div>
  );
}