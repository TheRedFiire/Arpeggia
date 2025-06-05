// src/components/Philosophie.jsx
import { motion } from 'framer-motion';

export default function Philosophie() {
  return (
    <section
      id="philosophie"
      className="py-20 bg-ivoire text-noir px-6 md:px-12"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-playfair text-3xl md:text-4xl mb-4">
          Notre philosophie
        </h2>
        <p className="text-[#4A4E69] text-base md:text-lg">
          Arpeggia est plus qu’un simple lieu de répétition : c’est un véritable sanctuaire
          pour tout passionné de piano, conçu pour inspirer et faire évoluer votre jeu.
        </p>
      </motion.div>
    </section>
  );
}
