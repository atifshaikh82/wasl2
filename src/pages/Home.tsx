import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { VideoCarousel } from '../components/VideoCarousel';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <VideoCarousel />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};
