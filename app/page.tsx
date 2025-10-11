import About from '@/components/AboutSection';
import Hero from '@/components/HeroSection';
import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full text-4xl font-bold text-blue-700">
      <Hero />
      <About />
    </section>
  );
};

export default Home;
