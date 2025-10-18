'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import InfiniteStatsScroll from './StatCard';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-[#faeff2] via-white to-[#faeff2] text-gray-800 overflow-hidden py-16"
    >
      {/* Intro Heading */}
      <motion.div
        className="flex flex-col items-center justify-center text-center space-y-4 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
          Hi, I’m <span className="font-semibold text-[#8d092c]">Tunde</span>, a
          creative{' '}
          <span className="font-semibold text-sky-600">graphic designer </span>
          and print specialist who brings brands to life through timeless visual
          storytelling.
        </p>
      </motion.div>

      {/* Main About Section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 mt-10 px-6 md:px-12 lg:px-20">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From bold banners to detailed sticker prints, I transform ideas into
            designs that make brands unforgettable. Each project is an
            opportunity to blend creativity, craftsmanship, and emotion —
            delivering visuals that speak louder than words.
          </p>

          <Link
            href="#"
            className="inline-block mt-2 text-[#8d092c] font-medium hover:text-[#c94f7c] transition-all duration-300 underline decoration-[#c94f7c]/50 hover:decoration-[#8d092c]"
          >
            Learn more about my story →
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full md:w-1/2 h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-[#c94f7c]/30"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/tunde.jpg"
            alt="Tunde - Graphic designer at work"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Infinite Scrolling Stats */}
      <div className="mt-16">
        <InfiniteStatsScroll />
      </div>
    </section>
  );
};

export default About;
