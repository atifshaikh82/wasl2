import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProjectModal } from '../context/ProjectModalContext';

export const Hero = () => {
  const { t } = useLanguage();
  const { openModal } = useProjectModal();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-48 md:pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8cc63f]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8cc63f]/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#8cc63f]" />
          <span className="text-sm font-medium text-gray-300">{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-8"
        >
          {t('hero.title1')} <br />
          {t('hero.title2')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8cc63f] to-[#b4f066]">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={openModal}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#8cc63f] text-[#050505] font-semibold text-lg overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            {t('hero.cta1')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            {t('hero.cta2')}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          {[
            { label: t('hero.stat1.label'), value: t('hero.stat1.value') },
            { label: t('hero.stat2.label'), value: t('hero.stat2.value') },
            { label: t('hero.stat3.label'), value: t('hero.stat3.value') },
            { label: t('hero.stat4.label'), value: t('hero.stat4.value') }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider text-center">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
