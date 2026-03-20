import React from 'react';
import { Logo } from './Logo';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#8cc63f]/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Logo className="mb-8" />
            <p className="text-gray-400 leading-relaxed mb-8">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#8cc63f] hover:text-[#050505] hover:border-[#8cc63f] transition-all duration-300 text-gray-400">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {[
                t('services.web.title'),
                t('services.ai.title'),
                t('services.seo.title'),
                t('services.marketing.title'),
                t('services.reels.title')
              ].map((item, index) => (
                <li key={index}>
                  <a href="/#services" className="text-gray-400 hover:text-[#8cc63f] transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[#8cc63f] transition-colors text-sm">{t('nav.about')}</Link></li>
              <li><a href="/#portfolio" className="text-gray-400 hover:text-[#8cc63f] transition-colors text-sm">{t('nav.portfolio')}</a></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-[#8cc63f] transition-colors text-sm">{t('nav.pricing')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#8cc63f] transition-colors text-sm">{t('footer.company.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-gray-400 text-sm mb-6">{t('footer.newsletter.desc')}</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 transition-colors text-sm"
              />
              <button type="submit" className="px-6 py-3 rounded-xl bg-[#8cc63f] text-[#050505] font-semibold text-sm hover:bg-[#9ddb45] transition-colors shrink-0">
                {t('footer.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>{t('footer.rights')}</p>
            <p>Wasl Tech is owned and operated by Parki Limited, United Kingdom</p>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.cookie')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
