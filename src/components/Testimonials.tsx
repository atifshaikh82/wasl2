import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      content: t('testimonials.client1.content'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.role'),
      content: t('testimonials.client2.content'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.role'),
      content: t('testimonials.client3.content'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">{t('testimonials.badge')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            {t('testimonials.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8cc63f] to-[#b4f066]">{t('testimonials.title2')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-[#8cc63f]/20 transition-colors rtl:left-8 rtl:right-auto rtl:rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#8cc63f] text-[#8cc63f]" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
