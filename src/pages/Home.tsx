import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
};
