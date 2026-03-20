import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { serviceData } from '../data/services';

export const PricingPage = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = Object.values(serviceData);

  const renderPricingTable = (pricing: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {pricing.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative p-8 rounded-3xl border transition-all duration-500 flex flex-col ${
            plan.popular 
              ? 'bg-gradient-to-b from-[#8cc63f]/10 to-transparent border-[#8cc63f]/50 shadow-[0_0_40px_rgba(140,198,63,0.1)]' 
              : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#8cc63f] text-[#050505] text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 whitespace-nowrap">
              <Sparkles className="w-3 h-3" /> {isArabic ? 'الأكثر طلباً' : 'Popular'}
            </div>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-white mb-2">{isArabic ? plan.nameAr : plan.name}</h3>
          </div>
          
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
            <span className="text-gray-500 font-medium">{isArabic ? plan.periodAr : plan.period}</span>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            {(isArabic ? plan.featuresAr : plan.features).map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-[#8cc63f]' : 'text-gray-500'}`} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button
            className={`w-full py-4 rounded-full text-center font-semibold transition-all duration-300 ${
              plan.popular
                ? 'bg-[#8cc63f] text-[#050505] hover:bg-[#9ddb45] shadow-[0_0_20px_rgba(140,198,63,0.3)]'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
            }`}
          >
            {isArabic ? 'اختر الخطة' : 'Choose Plan'}
          </button>
        </motion.div>
      ))}
    </div>
  );

  const renderRequirementForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mt-12 p-8 rounded-3xl bg-white/5 border border-white/10"
    >
      <h3 className="text-2xl font-display font-bold mb-6 text-center">
        {isArabic ? 'أخبرنا عن متطلباتك' : 'Tell us about your requirements'}
      </h3>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {isArabic ? 'الاسم' : 'Name'}
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8cc63f] transition-colors"
            placeholder={isArabic ? 'أدخل اسمك' : 'Enter your name'}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {isArabic ? 'البريد الإلكتروني' : 'Email'}
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8cc63f] transition-colors"
            placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {isArabic ? 'متطلبات المشروع' : 'Project Requirements'}
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8cc63f] transition-colors resize-none"
            placeholder={isArabic ? 'صف مشروعك ومتطلباتك...' : 'Describe your project and requirements...'}
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-[#8cc63f] text-[#050505] font-bold hover:bg-[#9ddb45] transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {isArabic ? 'إرسال المتطلبات' : 'Submit Requirements'}
        </button>
      </form>
    </motion.div>
  );

  return (
    <main className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              {isArabic ? 'الأسعار والخدمات' : 'Pricing & Services'}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            {isArabic ? 'اختر' : 'Choose Your'}{' '}
            <span className="text-[#8cc63f]">{isArabic ? 'خدمتك' : 'Service'}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {isArabic 
              ? 'حدد الخدمة التي تحتاجها لعرض خيارات التسعير أو لطلب عرض سعر مخصص.' 
              : 'Select a service to view pricing options or request a custom quote.'}
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedService ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedService(service.id)}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#8cc63f]/50 transition-all text-left group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {isArabic ? service.titleAr : service.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-1">
                        {isArabic ? service.descriptionAr : service.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#8cc63f] transition-colors mb-8"
              >
                {isArabic ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                {isArabic ? 'العودة إلى الخدمات' : 'Back to Services'}
              </button>

              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {isArabic ? serviceData[selectedService].titleAr : serviceData[selectedService].title}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {isArabic ? serviceData[selectedService].descriptionAr : serviceData[selectedService].description}
                </p>
              </div>

              {serviceData[selectedService].pricing 
                ? renderPricingTable(serviceData[selectedService].pricing)
                : renderRequirementForm()
              }
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};
