'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import InfiniteStatsScroll from './StatCard';

const About = () => {
  return (
    <section className="relative bg-[#faeff2] w-full text-gray-800 overflow-hidden">
      <div className="flex items-center justify-center flex-col space-y-4 w-full my-4 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Hi, I am <span className="font-semibold text-[#8d092c]">Tunde</span>,
          a passionate
          <span className="text-sky-600 font-semibold"></span>
          and print specialist who helps brands tell their stories visually.
        </p>
      </div>
      <div className="container mb-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20">
        {/* Image side */}
        <motion.div
          className="relative w-full md:w-1/2 h-[350px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/tunde.jpg"
            alt="Graphic designer at work"
            fill
            className=" object-cover object-center"
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <p className="text-gray-600 leading-relaxed text-2xl">
            From bold banners to detailed sticker prints, I transform ideas into
            designs that leave lasting impressions. Every project is a new
            opportunity to combine creativity and precision — turning simple
            concepts into remarkable visuals.
            <Link href={'#'} className="text-sm italic underline ml-2">
              {' '}
              More...
            </Link>
          </p>
        </motion.div>
      </div>
      <InfiniteStatsScroll />
    </section>
  );
};

export default About;
