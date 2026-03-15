import React from 'react';
import { motion } from 'motion/react';
import { Code, Sparkles, LineChart, Megaphone, Video, PenTool, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.web.title'),
      description: t('services.web.desc'),
      icon: Code,
      color: "from-blue-500/20 to-cyan-500/20",
      border: "group-hover:border-cyan-500/50"
    },
    {
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      icon: Sparkles,
      color: "from-[#8cc63f]/20 to-emerald-500/20",
      border: "group-hover:border-[#8cc63f]/50"
    },
    {
      title: t('services.seo.title'),
      description: t('services.seo.desc'),
      icon: LineChart,
      color: "from-purple-500/20 to-pink-500/20",
      border: "group-hover:border-purple-500/50"
    },
    {
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
      icon: Megaphone,
      color: "from-orange-500/20 to-red-500/20",
      border: "group-hover:border-orange-500/50"
    },
    {
      title: t('services.reels.title'),
      description: t('services.reels.desc'),
      icon: Video,
      color: "from-indigo-500/20 to-blue-500/20",
      border: "group-hover:border-indigo-500/50"
    },
    {
      title: t('services.branding.title'),
      description: t('services.branding.desc'),
      icon: PenTool,
      color: "from-yellow-500/20 to-amber-500/20",
      border: "group-hover:border-yellow-500/50"
    }
  ];

  return (
    <section id="services" className="py-32 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">{t('services.badge')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            {t('services.title1')} <br />
            <span className="text-gray-500">{t('services.title2')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden ${service.border}`}
            >
              {/* Background Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />
              
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 rtl:translate-x-4 rtl:group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-white rtl:rotate-[-90deg]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[#8cc63f] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
