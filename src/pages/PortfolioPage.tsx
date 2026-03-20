import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioProjects } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Grid2X2, Grid3X3, LayoutGrid } from 'lucide-react';

export const PortfolioPage = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const [columns, setColumns] = useState<2 | 3 | 4>(2);

  return (
    <main className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              {isArabic ? 'أعمالنا' : 'Our Work'}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
          >
            {isArabic ? 'مشاريع' : 'Selected'}{' '}
            <span className="text-[#8cc63f]">{isArabic ? 'مختارة' : 'Projects'}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {isArabic 
              ? 'اكتشف كيف ساعدنا الشركات في مختلف الصناعات على تحقيق أهدافها الرقمية من خلال حلول مبتكرة.' 
              : 'Discover how we\'ve helped businesses across various industries achieve their digital goals through innovative solutions.'}
          </motion.p>
        </div>

        {/* View Options */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setColumns(2)}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                columns === 2 ? 'bg-[#8cc63f] text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              title="2 Columns"
            >
              <Grid2X2 className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">2</span>
            </button>
            <button
              onClick={() => setColumns(3)}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                columns === 3 ? 'bg-[#8cc63f] text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              title="3 Columns"
            >
              <Grid3X3 className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">3</span>
            </button>
            <button
              onClick={() => setColumns(4)}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                columns === 4 ? 'bg-[#8cc63f] text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              title="4 Columns"
            >
              <LayoutGrid className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">4</span>
            </button>
          </div>
        </div>

        {/* Uniform Grid */}
        <div className={`grid gap-8 transition-all duration-500 ${
          columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
          columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        }`}>
          {portfolioProjects.map((project, index) => (
            <Link to={`/portfolio/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8cc63f]/50 transition-all duration-500 ${
                  columns === 2 ? 'aspect-square md:aspect-[4/3]' :
                  columns === 3 ? 'aspect-[4/5] md:aspect-square' :
                  'aspect-[3/4]'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={isArabic ? project.titleAr : project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top Section: Tags & Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 rounded-full bg-[#8cc63f]/20 text-[#8cc63f] text-sm font-medium backdrop-blur-md border border-[#8cc63f]/20">
                        {isArabic ? project.categoryAr : project.category}
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-md border border-white/10">
                        {isArabic ? project.industryAr : project.industry}
                      </span>
                      {project.id === 'halal-first' && (
                        <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-md border border-blue-500/20">
                          {isArabic ? 'قيد التطوير' : 'Under Development'}
                        </span>
                      )}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/20 shrink-0 ml-4">
                      <ArrowUpRight className="w-6 h-6 text-white rtl:rotate-[-90deg]" />
                    </div>
                  </div>
                  
                  {/* Bottom Section: Title & Description */}
                  <div className="mt-auto">
                    {/* Project Name (Big) */}
                    <h2 className={`${
                      columns === 2 ? 'text-4xl md:text-5xl' :
                      columns === 3 ? 'text-3xl md:text-4xl' :
                      'text-2xl md:text-3xl'
                    } font-display font-bold text-white mb-2 group-hover:text-[#8cc63f] transition-colors`}>
                      {isArabic ? project.projectNameAr : project.projectName}
                    </h2>
                    {/* Project Title/Hook (Medium) */}
                    <h3 className={`${
                      columns === 2 ? 'text-xl md:text-2xl' :
                      columns === 3 ? 'text-lg md:text-xl' :
                      'text-base md:text-lg'
                    } font-medium text-gray-200 mb-4 line-clamp-2`}>
                      {isArabic ? project.titleAr : project.title}
                    </h3>
                    {/* Project Description (Small) */}
                    <p className={`text-gray-400 line-clamp-2 max-w-2xl ${
                      columns >= 3 ? 'text-sm' : 'text-base'
                    }`}>
                      {isArabic ? project.descriptionAr : project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
