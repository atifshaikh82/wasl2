import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioProjects } from '../data/portfolio';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Target, Trophy, Building2, Lightbulb, Users, Share2, Megaphone } from 'lucide-react';

export const CaseStudyPage = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const project = portfolioProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-[#8cc63f] hover:underline">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#8cc63f] transition-colors mb-12"
        >
          {isArabic ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
          {isArabic ? 'العودة إلى الأعمال' : 'Back to Portfolio'}
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#8cc63f]/20 text-[#8cc63f] text-sm font-medium border border-[#8cc63f]/20">
                {isArabic ? project.categoryAr : project.category}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10">
                {isArabic ? project.industryAr : project.industry}
              </span>
              {project.id === 'halal-first' && (
                <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium border border-blue-500/20">
                  {isArabic ? 'قيد التطوير' : 'Under Development'}
                </span>
              )}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display font-medium text-[#8cc63f] mb-2">
              {isArabic ? project.projectNameAr : project.projectName}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              {isArabic ? project.titleAr : project.title}
            </h1>
            
            {/* Services Mentioned */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(isArabic ? project.servicesAr : project.services).map((service, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 text-sm border border-white/10">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10"
          >
            <img 
              src={project.image} 
              alt={isArabic ? project.titleAr : project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>

        {/* Client Overview & Challenge */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-500 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{isArabic ? 'نظرة عامة على العميل' : 'Client Overview'}</h3>
            <p className="text-gray-400 leading-relaxed">
              {isArabic ? project.clientOverviewAr : project.clientOverview}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-500 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{isArabic ? 'التحدي' : 'The Challenge'}</h3>
            <p className="text-gray-300 leading-relaxed">
              {isArabic ? project.challengeAr : project.challenge}
            </p>
          </motion.div>
        </div>

        {/* What Wasl Did & Approach */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-[#8cc63f]/10 border border-[#8cc63f]/20 mb-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#8cc63f]/20 text-[#8cc63f] flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-6">{isArabic ? 'ماذا قدمت وصل للعميل' : 'What Wasl did for client'}</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-12">
              {isArabic ? project.whatWaslDidAr : project.whatWaslDid}
            </p>

            <h4 className="text-2xl font-display font-bold mb-6 text-white">{isArabic ? 'النهج' : 'The Approach'}</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#050505]/50 p-6 rounded-2xl border border-white/5">
                <h5 className="text-[#8cc63f] font-bold mb-3">{isArabic ? 'المرحلة 1' : 'Phase 1'}</h5>
                <p className="text-gray-400 leading-relaxed">{isArabic ? project.approachPhase1Ar : project.approachPhase1}</p>
              </div>
              <div className="bg-[#050505]/50 p-6 rounded-2xl border border-white/5">
                <h5 className="text-[#8cc63f] font-bold mb-3">{isArabic ? 'المرحلة 2' : 'Phase 2'}</h5>
                <p className="text-gray-400 leading-relaxed">{isArabic ? project.approachPhase2Ar : project.approachPhase2}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Results */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-[#8cc63f]" />
            {isArabic ? 'النتائج والمشاركة الرقمية' : 'The Result & Digital Media Involvement'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <Users className="w-8 h-8 text-[#8cc63f] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-white">{isArabic ? 'المؤثرين' : 'Influencers'}</h4>
              <p className="text-gray-400 leading-relaxed">
                {isArabic ? project.resultsText.influencersAr : project.resultsText.influencers}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <Share2 className="w-8 h-8 text-[#8cc63f] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-white">{isArabic ? 'وسائل التواصل الاجتماعي' : 'Social Media'}</h4>
              <p className="text-gray-400 leading-relaxed">
                {isArabic ? project.resultsText.socialMediaAr : project.resultsText.socialMedia}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <Megaphone className="w-8 h-8 text-[#8cc63f] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-white">{isArabic ? 'الإعلانات' : 'Ads'}</h4>
              <p className="text-gray-400 leading-relaxed">
                {isArabic ? project.resultsText.adsAr : project.resultsText.ads}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid & Tech Stack */}
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-white">
              {isArabic ? 'أبرز الإحصائيات' : 'Key Stats'}
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-4xl font-display font-bold text-[#8cc63f] mb-2">{result.value}</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                    {isArabic ? result.labelAr : result.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-white">
              <Layers className="w-6 h-6 text-[#8cc63f]" />
              {isArabic ? 'التقنيات' : 'Tech Stack'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
