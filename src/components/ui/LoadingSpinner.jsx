import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blush">
      <div className="text-center">
        {/* Logo animé */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 bg-gradient-to-br from-ambre-400 to-cognac-500 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4"
        >
          <span className="text-white font-bold text-xl">A</span>
        </motion.div>

        {/* Texte de chargement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="font-montserrat text-dark-navy text-lg"
        >
          Chargement...
        </motion.p>

        {/* Barre de progression */}
        <div className="w-48 h-1 bg-champagne-200 rounded-full mx-auto mt-4 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/3 bg-gradient-to-r from-ambre-400 to-cognac-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}