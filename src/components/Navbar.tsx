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
import { useProjectModal } from '../context/ProjectModalContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t, language, setLanguage } = useLanguage();
  const { openModal } = useProjectModal();

  const services = [
    {
      category: t('nav.cat.dev'),
      items: [
        { id: 'web-apps', name: t('services.dev.webApps.title'), icon: Code, desc: t('services.dev.webApps.desc') },
        { id: 'mobile-apps', name: t('services.dev.mobileApps.title'), icon: Smartphone, desc: t('services.dev.mobileApps.desc') },
        { id: 'websites', name: t('services.dev.websites.title'), icon: Monitor, desc: t('services.dev.websites.desc') },
        { id: 'software-applications', name: t('services.dev.software.title'), icon: AppWindow, desc: t('services.dev.software.desc') },
      ]
    },
    {
      category: t('nav.cat.ai'),
      items: [
        { id: 'ai-product-shoot', name: t('services.ai.productShoot.title'), icon: Camera, desc: t('services.ai.productShoot.desc') },
        { id: 'ai-chatbots', name: t('services.ai.chatbots.title'), icon: MessageSquare, desc: t('services.ai.chatbots.desc') },
        { id: 'agentic-ai', name: t('services.ai.agentic.title'), icon: Bot, desc: t('services.ai.agentic.desc') },
        { id: 'ai-apps', name: t('services.ai.apps.title'), icon: Cpu, desc: t('services.ai.apps.desc') },
      ]
    },
    {
      category: t('nav.cat.marketing'),
      items: [
        { id: 'seo-optimization', name: t('services.marketing.seo.title'), icon: Search, desc: t('services.marketing.seo.desc') },
        { id: 'social-media-marketing', name: t('services.marketing.social.title'), icon: Share2, desc: t('services.marketing.social.desc') },
      ]
    },
    {
      category: t('nav.cat.social'),
      items: [
        { id: 'instagram-management', name: t('services.social.instagram.title'), icon: Instagram, desc: t('services.social.instagram.desc') },
        { id: 'facebook-management', name: t('services.social.facebook.title'), icon: Facebook, desc: t('services.social.facebook.desc') },
        { id: 'tiktok-management', name: t('services.social.tiktok.title'), icon: PlaySquare, desc: t('services.social.tiktok.desc') },
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
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled && !isMobileMenuOpen ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        } ${isMobileMenuOpen ? 'bg-[#050505]' : ''}`}
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
                              <Link key={item.name} to={`/services/${item.id}`} className="flex items-start gap-3 group/item">
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
                              </Link>
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
          <Link to="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav.pricing')}</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors mr-4"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <Link to="/contact" className="text-sm font-medium text-white hover:text-[#8cc63f] transition-colors">
            {t('nav.login')}
          </Link>
          <button 
            onClick={openModal} 
            className="px-5 py-2.5 rounded-full bg-[#8cc63f] text-[#050505] text-sm font-semibold hover:bg-[#9ddb45] transition-colors shadow-[0_0_20px_rgba(140,198,63,0.3)]"
          >
            {t('nav.startProject')}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-4 relative z-50">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <button 
            className="p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#050505] z-40 pt-32 px-6 overflow-y-auto pb-10"
          >
            <div className="flex flex-col gap-6 mt-8">
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-display font-medium text-white">{t('nav.about')}</Link>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-xl font-display font-medium text-white"
                >
                  {t('nav.services')}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-6 border-l border-white/10 py-2">
                        {services.map(section => (
                          <div key={section.category} className="space-y-3">
                            <h3 className="text-sm font-bold text-[#8cc63f] uppercase tracking-wider">
                              {section.category}
                            </h3>
                            <div className="space-y-3">
                              {section.items.map(item => (
                                <Link 
                                  key={item.name} 
                                  to={`/services/${item.id}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                >
                                  <item.icon className="w-4 h-4" />
                                  <span className="text-base">{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-display font-medium text-white">{t('nav.portfolio')}</a>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-display font-medium text-white">{t('nav.pricing')}</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-display font-medium text-white">{t('nav.contact')}</Link>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }} 
                  className="block w-full px-6 py-4 rounded-full bg-[#8cc63f] text-[#050505] text-center font-semibold text-lg hover:bg-[#9ddb45] transition-colors shadow-[0_0_20px_rgba(140,198,63,0.3)]"
                >
                  {t('nav.startProject')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
