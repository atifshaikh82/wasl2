import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "AI Analytics", "Tailwind"]
    },
    {
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tags: ["SEO", "Content", "PPC"]
    },
    {
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
      tags: ["AI Reels", "TikTok", "Instagram"]
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">{t('portfolio.badge')}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight"
            >
              {t('portfolio.title1')} <span className="text-[#8cc63f]">{t('portfolio.title2')}</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            {t('portfolio.viewAll')} <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 z-20 flex gap-2 rtl:left-auto rtl:right-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-[#8cc63f] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#8cc63f] group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 rtl:rotate-[-90deg]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
