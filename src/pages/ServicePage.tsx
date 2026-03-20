import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ArrowRight, Send, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { serviceData } from '../data/services';

export const ServicePage = () => {
  const { serviceId } = useParams();
  const { t, language } = useLanguage();

  // Default fallback for services not explicitly defined above
  const defaultService = {
    icon: Code,
    title: serviceId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    titleAr: serviceId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: 'We provide top-tier solutions tailored to your specific business requirements. Our expert team ensures high-quality delivery and exceptional results.',
    descriptionAr: 'نقدم حلولاً عالية المستوى مصممة خصيصًا لتلبية متطلبات عملك المحددة. يضمن فريق الخبراء لدينا تقديم جودة عالية ونتائج استثنائية.',
    features: ['Custom Strategy', 'Expert Implementation', 'Continuous Support', 'Performance Tracking'],
    featuresAr: ['استراتيجية مخصصة', 'تنفيذ بواسطة خبراء', 'دعم مستمر', 'تتبع الأداء']
  };

  const data = serviceData[serviceId || ''] || defaultService;
  const Icon = data.icon;
  const isArabic = language === 'ar';

  return (
    <main className="pt-32 pb-24 bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#8cc63f]/10 text-[#8cc63f] mb-8">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {isArabic ? data.titleAr : data.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {isArabic ? data.descriptionAr : data.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#request-form" className="px-8 py-4 rounded-full bg-[#8cc63f] text-[#050505] font-bold hover:bg-[#9ddb45] transition-colors flex items-center gap-2">
                {isArabic ? 'اطلب الخدمة الآن' : 'Request Service Now'}
                <ArrowRight className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8cc63f]/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">{isArabic ? 'ماذا تتضمن الخدمة؟' : 'What\'s Included?'}</h3>
              <ul className="space-y-4">
                {(isArabic ? data.featuresAr : data.features).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-[#8cc63f]/20 text-[#8cc63f]">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section (if available) */}
      {data.techStack && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">{isArabic ? 'التقنيات التي نستخدمها' : 'Technologies We Use'}</h2>
            <p className="text-gray-400">{isArabic ? 'نحن نستخدم أحدث التقنيات لضمان أفضل أداء' : 'We leverage the latest technologies to ensure optimal performance'}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {data.techStack.map((tech: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8cc63f]/50 transition-colors w-32"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Pricing Section (if available) */}
      {data.pricing && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">{isArabic ? 'باقات الأسعار' : 'Pricing Plans'}</h2>
            <p className="text-gray-400">{isArabic ? 'اختر الباقة التي تناسب احتياجاتك' : 'Choose the plan that fits your needs'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pricing.map((plan: any, index: number) => (
              <div key={index} className={`p-8 rounded-3xl border ${plan.popular ? 'bg-[#8cc63f]/10 border-[#8cc63f]/50 relative' : 'bg-white/5 border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#8cc63f] text-[#050505] text-xs font-bold uppercase rounded-full">
                    {isArabic ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{isArabic ? plan.nameAr : plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-[#8cc63f]">{plan.price}</span>
                  <span className="text-gray-400">{isArabic ? plan.periodAr : plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {(isArabic ? plan.featuresAr : plan.features).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#8cc63f] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#request-form" className={`block text-center py-3 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-[#8cc63f] text-[#050505] hover:bg-[#9ddb45]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  {isArabic ? 'اختر الباقة' : 'Choose Plan'}
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Request Form Section */}
      <section id="request-form" className="max-w-3xl mx-auto px-6">
        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold mb-4">{isArabic ? 'أرسل متطلباتك' : 'Send Your Requirements'}</h2>
            <p className="text-gray-400">{isArabic ? 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك' : 'Let\'s discuss how we can help you achieve your goals'}</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{isArabic ? 'الاسم الكامل' : 'Full Name'}</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{isArabic ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">{isArabic ? 'رقم الهاتف' : 'Phone Number'}</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">{isArabic ? 'تفاصيل المشروع' : 'Project Details'}</label>
              <textarea required rows={5} placeholder={isArabic ? 'أخبرنا المزيد عن متطلباتك...' : 'Tell us more about your requirements...'} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#8cc63f] focus:outline-none transition-colors text-white resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-[#8cc63f] text-[#050505] font-bold flex items-center justify-center gap-2 hover:bg-[#9ddb45] transition-colors">
              {isArabic ? 'إرسال الطلب' : 'Submit Request'} <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
