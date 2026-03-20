import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Zap, Users, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProjectModal } from '../context/ProjectModalContext';

export const About = () => {
  const { t } = useLanguage();
  const { openModal } = useProjectModal();

  const values = [
    {
      icon: Zap,
      title: t('about.v1.title'),
      description: t('about.v1.desc')
    },
    {
      icon: Users,
      title: t('about.v2.title'),
      description: t('about.v2.desc')
    },
    {
      icon: Shield,
      title: t('about.v3.title'),
      description: t('about.v3.desc')
    },
    {
      icon: Rocket,
      title: t('about.v4.title'),
      description: t('about.v4.desc')
    }
  ];

  const team = [
    {
      name: t('about.t1.name'),
      role: t('about.t1.role'),
      image: "/atif.png" // Please upload your image as 'atif.png' in the 'public' folder
    },
    {
      name: t('about.t2.name'),
      role: t('about.t2.role'),
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#8cc63f] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8cc63f] animate-pulse" />
            {t('about.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            {t('about.title1')} <span className="text-[#8cc63f]">{t('about.title2')}</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {t('about.desc')}
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8cc63f]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#8cc63f]/20 transition-colors duration-500 rtl:-translate-x-1/2" />
            <Target className="w-12 h-12 text-[#8cc63f] mb-6 relative z-10" />
            <h2 className="text-3xl font-display font-bold mb-4 relative z-10">{t('about.mission.title')}</h2>
            <p className="text-gray-400 leading-relaxed relative z-10">
              {t('about.mission.desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8cc63f]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-[#8cc63f]/20 transition-colors duration-500 rtl:translate-x-1/2" />
            <Eye className="w-12 h-12 text-[#8cc63f] mb-6 relative z-10" />
            <h2 className="text-3xl font-display font-bold mb-4 relative z-10">{t('about.vision.title')}</h2>
            <p className="text-gray-400 leading-relaxed relative z-10">
              {t('about.vision.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('about.values.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('about.values.desc')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8cc63f]/30 transition-colors"
            >
              <value.icon className="w-10 h-10 text-[#8cc63f] mb-6" />
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('about.team.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('about.team.desc')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-[#8cc63f] font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gradient-to-b from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20"
        >
          <h2 className="text-4xl font-display font-bold mb-6">{t('about.cta.title')}</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('about.cta.desc')}
          </p>
          <button 
            onClick={openModal} 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#8cc63f] text-[#050505] font-bold text-lg hover:bg-[#9ddb45] transition-colors shadow-[0_0_30px_rgba(140,198,63,0.3)]"
          >
            {t('about.cta.btn')}
          </button>
        </motion.div>
      </section>
    </main>
  );
};
