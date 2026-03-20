/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PricingPage } from './pages/PricingPage';
import { ServicePage } from './pages/ServicePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { LanguageProvider } from './context/LanguageContext';
import { ProjectModalProvider } from './context/ProjectModalContext';
import { ProjectQuestionnaire } from './components/ProjectQuestionnaire';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <LanguageProvider>
      <ProjectModalProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-[#050505] text-white selection:bg-[#8cc63f]/30 selection:text-white font-sans">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/services/:serviceId" element={<ServicePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:id" element={<CaseStudyPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
            <ProjectQuestionnaire />
            <Chatbot />
          </div>
        </Router>
      </ProjectModalProvider>
    </LanguageProvider>
  );
}
