import { motion } from 'framer-motion';

const Experience = () => {
  const steps = [
    {
      title: "Badge d'accès",
      description: "Accès 24h/24 avec votre badge personnel"
    },
    {
      title: "Réservation",
      description: "Réservez votre session via notre application"
    },
    {
      title: "Apprentissage",
      description: "Tablettes pédagogiques avec Flowkey et SimplyPiano"
    },
    {
      title: "Inspiration",
      description: "Bibliothèque musicale et partitions exclusives"
    },
    {
      title: "Communauté",
      description: "Événements et rencontres entre passionnés"
    }
  ];

  return (
    <section className="py-20 relative bg-[url('/path/to/wood-texture.jpg')] bg-cover">
      <div className="absolute inset-0 bg-noir/70 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-ivoire mb-4">
            L'expérience Arpeggia
          </h2>
          <div className="w-24 h-1 bg-dore mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Ligne de connexion */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-dore hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="md:flex items-center"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                  <h3 className="font-playfair text-2xl text-dore">{step.title}</h3>
                  <p className="text-ivoire/90 mt-2">{step.description}</p>
                </div>
                
                <div className="flex justify-center my-4 md:my-0">
                  <div className="w-16 h-16 rounded-full bg-dore flex items-center justify-center border-4 border-ivoire">
                    <span className="text-bordeaux font-bold text-xl">{index + 1}</span>
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;