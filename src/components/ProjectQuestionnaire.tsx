import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useProjectModal } from '../context/ProjectModalContext';

const SERVICES = [
  'Web App Development',
  'Mobile App Development',
  'AI Solutions',
  'Digital Marketing',
  'Social Media Management',
  'Other'
];

export const ProjectQuestionnaire = () => {
  const { isOpen, closeModal } = useProjectModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    description: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setStep(6);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">What kind of project are you looking for?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map(service => (
                <button
                  key={service}
                  onClick={() => {
                    setFormData({ ...formData, service });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.service === service 
                      ? 'border-[#8cc63f] bg-[#8cc63f]/10 text-white' 
                      : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">What's on your mind?</h3>
            <p className="text-gray-400 text-sm mb-4">Please describe your project requirements briefly.</p>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full h-40 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all resize-none"
              placeholder="Tell us about your idea..."
            />
            <div className="flex justify-between pt-4">
              <button onClick={handlePrev} className="text-gray-400 hover:text-white flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                onClick={handleNext}
                disabled={!formData.description.trim()}
                className="px-6 py-3 rounded-full bg-[#8cc63f] text-[#050505] font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">What is your estimated budget?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Less than $5k', '$5k - $10k', '$10k - $25k', '$25k+'].map(budget => (
                <button
                  key={budget}
                  onClick={() => {
                    setFormData({ ...formData, budget });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.budget === budget 
                      ? 'border-[#8cc63f] bg-[#8cc63f]/10 text-white' 
                      : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
            <div className="pt-4">
              <button onClick={handlePrev} className="text-gray-400 hover:text-white flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">What is your timeline?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['ASAP', '1-3 months', '3-6 months', 'Flexible'].map(timeline => (
                <button
                  key={timeline}
                  onClick={() => {
                    setFormData({ ...formData, timeline });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.timeline === timeline 
                      ? 'border-[#8cc63f] bg-[#8cc63f]/10 text-white' 
                      : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {timeline}
                </button>
              ))}
            </div>
            <div className="pt-4">
              <button onClick={handlePrev} className="text-gray-400 hover:text-white flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">Your Contact Details</h3>
            <p className="text-gray-400 text-sm mb-4">How can we reach you?</p>
            
            <div className="space-y-4">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all"
                placeholder="Your Name"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all"
                placeholder="Email Address"
              />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8cc63f]/50 focus:bg-white/10 transition-all"
                placeholder="Contact Number"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                type="submit"
                className="px-8 py-3 rounded-full bg-[#8cc63f] text-[#050505] font-semibold hover:bg-[#9ddb45] transition-colors"
              >
                Submit Request
              </button>
            </div>
          </motion.form>
        );
      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 py-8"
          >
            <div className="w-20 h-20 bg-[#8cc63f]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#8cc63f]" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white">Thank You!</h3>
            <p className="text-gray-400 text-lg">
              We have received your project requirements. We shall give you a reply back ASAP.
            </p>
            <button 
              onClick={() => {
                closeModal();
                setTimeout(() => setStep(1), 300); // reset after close
              }}
              className="mt-8 px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Close
            </button>
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {step < 6 && (
            <div className="mb-8">
              <div className="flex gap-2 mb-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div 
                    key={i} 
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i <= step ? 'bg-[#8cc63f]' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Step {step} of 5</p>
            </div>
          )}

          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
