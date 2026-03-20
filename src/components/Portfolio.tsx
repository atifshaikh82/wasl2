import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioProjects } from '../data/portfolio';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const projects = portfolioProjects.slice(0, 3);

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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
            >
              {t('portfolio.viewAll')} <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link to={`/portfolio/${project.id}`} key={project.id}>
              <motion.div
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
                    alt={isArabic ? project.titleAr : project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex gap-2 rtl:left-auto rtl:right-6">
                    {project.techStack.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-[#8cc63f] transition-colors">
                      {isArabic ? project.projectNameAr : project.projectName}
                    </h3>
                    <p className="text-gray-300 font-medium mb-1 line-clamp-1">{isArabic ? project.titleAr : project.title}</p>
                    <p className="text-gray-500 text-sm">{isArabic ? project.categoryAr : project.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#8cc63f] group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                    <ArrowUpRight className="w-5 h-5 rtl:rotate-[-90deg]" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
