import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, Globe,
  Code, Smartphone, Monitor, AppWindow,
  Camera, MessageSquare, Bot, Cpu,
  Search, Share2, Instagram, Facebook, PlaySquare
} from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t, language, setLanguage } = useLanguage();

  const services = [
    {
      category: t('nav.cat.dev'),
      items: [
        { name: t('services.dev.webApps.title'), icon: Code, desc: t('services.dev.webApps.desc') },
        { name: t('services.dev.mobileApps.title'), icon: Smartphone, desc: t('services.dev.mobileApps.desc') },
        { name: t('services.dev.websites.title'), icon: Monitor, desc: t('services.dev.websites.desc') },
        { name: t('services.dev.software.title'), icon: AppWindow, desc: t('services.dev.software.desc') },
      ]
    },
    {
      category: t('nav.cat.ai'),
      items: [
        { name: t('services.ai.productShoot.title'), icon: Camera, desc: t('services.ai.productShoot.desc') },
        { name: t('services.ai.chatbots.title'), icon: MessageSquare, desc: t('services.ai.chatbots.desc') },
        { name: t('services.ai.agentic.title'), icon: Bot, desc: t('services.ai.agentic.desc') },
        { name: t('services.ai.apps.title'), icon: Cpu, desc: t('services.ai.apps.desc') },
      ]
    },
    {
      category: t('nav.cat.marketing'),
      items: [
        { name: t('services.marketing.seo.title'), icon: Search, desc: t('services.marketing.seo.desc') },
        { name: t('services.marketing.social.title'), icon: Share2, desc: t('services.marketing.social.desc') },
      ]
    },
    {
      category: t('nav.cat.social'),
      items: [
        { name: t('services.social.instagram.title'), icon: Instagram, desc: t('services.social.instagram.desc') },
        { name: t('services.social.facebook.title'), icon: Facebook, desc: t('services.social.facebook.desc') },
        { name: t('services.social.tiktok.title'), icon: PlaySquare, desc: t('services.social.tiktok.desc') },
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" className="z-50 relative">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav.about')}</Link>
          
          {/* Mega Menu Trigger */}
          <div 
            className="group static"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-4">
              {t('nav.services')} <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mx-auto w-full max-w-[1100px] pt-2"
                >
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                      {services.map((section) => (
                        <div key={section.category}>
                          <h3 className="text-xs font-bold text-[#8cc63f] uppercase tracking-wider mb-4">
                            {section.category}
                          </h3>
                          <div className="space-y-4">
                            {section.items.map((item) => (
                              <a key={item.name} href={`/#${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-start gap-3 group/item">
                                <div className="p-2 rounded-lg bg-white/5 group-hover/item:bg-[#8cc63f]/20 transition-colors">
                                  <item.icon className="w-5 h-5 text-gray-400 group-hover/item:text-[#8cc63f] transition-colors" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {item.desc}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 p-4 text-center border-t border-white/10">
                      <a href="/#services" className="text-sm font-medium text-[#8cc63f] hover:text-white transition-colors">
                        {t('nav.viewAllServices')} &rarr;
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/#portfolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav.portfolio')}</a>
          <a href="/#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav.pricing')}</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors mr-4"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <a href="/#contact" className="text-sm font-medium text-white hover:text-[#8cc63f] transition-colors">
            {t('nav.login')}
          </a>
          <a href="/#contact" className="px-5 py-2.5 rounded-full bg-[#8cc63f] text-[#050505] text-sm font-semibold hover:bg-[#9ddb45] transition-colors shadow-[0_0_20px_rgba(140,198,63,0.3)]">
            {t('nav.startProject')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2 text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-[#050505] z-40 pt-24 px-6 overflow-y-auto pb-10"
            >
              <div className="flex flex-col gap-6">
                <button 
                  onClick={() => {
                    setLanguage(language === 'en' ? 'ar' : 'en');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xl font-display font-medium text-white"
                >
                  <Globe className="w-5 h-5" />
                  {language === 'en' ? 'عربي' : 'English'}
                </button>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-display font-medium text-white">{t('nav.about')}</Link>
                <div className="space-y-4">
                  <div className="text-xl font-display font-medium text-white">{t('nav.services')}</div>
                  <div className="pl-4 space-y-4 border-l border-white/10">
                    {services.flatMap(s => s.items).map(item => (
                      <a 
                        key={item.name} 
                        href={`/#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-400 hover:text-[#8cc63f]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="/#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-display font-medium text-white">{t('nav.portfolio')}</a>
                <a href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-display font-medium text-white">{t('nav.pricing')}</a>
                <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-6 py-3 rounded-full bg-[#8cc63f] text-[#050505] text-center font-semibold text-lg">
                  {t('nav.startProject')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
