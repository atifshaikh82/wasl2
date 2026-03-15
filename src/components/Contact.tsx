import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-32 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#8cc63f]" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">{t('contact.badge')}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8"
            >
              {t('contact.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8cc63f] to-[#b4f066]">{t('contact.title2')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed"
            >
              {t('contact.desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-6 h-6 text-[#8cc63f]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{t('contact.email')}</h4>
                  <p className="text-lg font-medium text-white">hello@wasl.agency</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-6 h-6 text-[#8cc63f]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{t('contact.call')}</h4>
                  <p className="text-lg font-medium text-white">+966 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-6 h-6 text-[#8cc63f]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{t('contact.visit')}</h4>
                  <p className="text-lg font-medium text-white">{t('contact.address')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8cc63f]/10 rounded-full blur-[100px] -z-10" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-400">{t('contact.form.service')}</label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-[#0a0a0a] text-gray-500">{t('contact.form.serviceSelect')}</option>
                  <option value="web" className="bg-[#0a0a0a]">{t('contact.form.serviceWeb')}</option>
                  <option value="ai" className="bg-[#0a0a0a]">{t('contact.form.serviceAi')}</option>
                  <option value="seo" className="bg-[#0a0a0a]">{t('contact.form.serviceSeo')}</option>
                  <option value="social" className="bg-[#0a0a0a]">{t('contact.form.serviceSocial')}</option>
                  <option value="other" className="bg-[#0a0a0a]">{t('contact.form.serviceOther')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">{t('contact.form.details')}</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all resize-none"
                  placeholder={t('contact.form.detailsPlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#8cc63f] text-[#050505] font-semibold text-lg overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                {t('contact.form.send')}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
