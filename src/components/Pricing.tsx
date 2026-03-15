import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, X, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Pricing = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: t('pricing.p1.name'),
      price: t('pricing.p1.price'),
      period: t('pricing.p1.period'),
      description: t('pricing.p1.desc'),
      features: [
        t('pricing.p1.f1'),
        t('pricing.p1.f2'),
        t('pricing.p1.f3'),
        t('pricing.p1.f4'),
        t('pricing.p1.f5')
      ],
      popular: false
    },
    {
      name: t('pricing.p2.name'),
      price: t('pricing.p2.price'),
      period: t('pricing.p2.period'),
      description: t('pricing.p2.desc'),
      features: [
        t('pricing.p2.f1'),
        t('pricing.p2.f2'),
        t('pricing.p2.f3'),
        t('pricing.p2.f4'),
        t('pricing.p2.f5')
      ],
      popular: true
    },
    {
      name: t('pricing.p3.name'),
      price: t('pricing.p3.price'),
      period: t('pricing.p3.period'),
      description: t('pricing.p3.desc'),
      features: [
        t('pricing.p3.f1'),
        t('pricing.p3.f2'),
        t('pricing.p3.f3'),
        t('pricing.p3.f4'),
        t('pricing.p3.f5')
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">{t('pricing.badge')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            {t('pricing.title1')} <span className="text-[#8cc63f]">{t('pricing.title2')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 group flex flex-col ${
                plan.popular 
                  ? 'bg-gradient-to-b from-[#8cc63f]/10 to-transparent border-[#8cc63f]/50 shadow-[0_0_40px_rgba(140,198,63,0.1)]' 
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#8cc63f] text-[#050505] text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" /> {t('pricing.popular')}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-[#8cc63f]' : 'text-gray-500'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`w-full py-4 rounded-full text-center font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#8cc63f] text-[#050505] hover:bg-[#9ddb45] shadow-[0_0_20px_rgba(140,198,63,0.3)]'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {t('pricing.getStarted')}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8cc63f]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-3xl font-display font-bold mb-4 relative z-10">{t('pricing.custom.title')}</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
            {t('pricing.custom.desc')}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#050505] font-bold hover:bg-gray-200 transition-colors"
          >
            {t('pricing.custom.btn')}
          </button>
        </motion.div>
      </div>

      {/* Quote Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors rtl:right-auto rtl:left-6"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-display font-bold mb-2">{t('quote.title')}</h3>
              <p className="text-gray-400 mb-8">{t('quote.desc')}</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">{t('quote.name')}</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">{t('quote.email')}</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">{t('quote.phone')}</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">{t('quote.service')}</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white appearance-none">
                    <option value="">Select a service...</option>
                    <option value="web">Web App Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ai">AI Solutions & Chatbots</option>
                    <option value="software">Custom Software</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">{t('quote.details')}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-[#8cc63f] text-[#050505] font-bold flex items-center justify-center gap-2 hover:bg-[#9ddb45] transition-colors mt-6">
                  {t('quote.submit')} <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
