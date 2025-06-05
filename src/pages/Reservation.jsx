import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  const [form, setForm] = useState({ nom: '', email: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici appel API ou logic pour enregistrer la réservation
    setSubmitted(true);
  };

  return (
    <div className="pt-20 pb-10 bg-ivoire min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <motion.h2
          className="text-3xl font-playfair text-dark-navy text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Réserver une visite
        </motion.h2>

        {submitted ? (
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-dark-navy text-lg font-semibold mb-4">
              Merci, {form.nom} !  
            </p>
            <p className="text-gray-slate/80">
              Nous avons bien reçu votre demande. Une confirmation vous sera envoyée à {form.email}.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block">
              <span className="text-sm text-dark-navy">Nom complet</span>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-ivoire border border-gray-slate/20 rounded-md focus:ring-2 focus:ring-gold-wood"
              />
            </label>
            <label className="block">
              <span className="text-sm text-dark-navy">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-ivoire border border-gray-slate/20 rounded-md focus:ring-2 focus:ring-gold-wood"
              />
            </label>
            <label className="block">
              <span className="text-sm text-dark-navy">Date souhaitée</span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-ivoire border border-gray-slate/20 rounded-md focus:ring-2 focus:ring-gold-wood"
              />
            </label>
            <button
              type="submit"
              className="w-full mt-4 bg-gold-wood text-dark-navy py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-gold-light transition-all"
            >
              Envoyer ma demande
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
