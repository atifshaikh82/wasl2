import React from 'react';
import { motion } from 'motion/react';
import { Contact } from '../components/Contact';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            {t('nav.contact')}
          </h1>
        </motion.div>
      </div>
      <Contact />
    </main>
  );
};
