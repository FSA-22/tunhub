'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const About = () => {
  return (
    <section className="relative py-20 bg-[#faeff2] w-full text-gray-800 overflow-hidden">
      <div className="flex items-center justify-center flex-col space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I am <span className="font-semibold text-[#8d092c]">Tunde</span>,
          a passionate
          <span className="text-sky-600 font-semibold"></span>
          and print specialist who helps brands tell their stories visually.
        </p>
      </div>
      <div className="container mb-10 mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 lg:px-20">
        {/* Image side */}
        <motion.div
          className="relative w-full md:w-1/2 h-[450px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/tunde.jpg" // replace with your image path
            alt="Graphic designer at work"
            width={550}
            height={400}
            className=" object-fit object-center"
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 leading-relaxed">
            From bold banners to detailed sticker prints, I transform ideas into
            designs that leave lasting impressions. Every project is a new
            opportunity to combine creativity and precision — turning simple
            concepts into remarkable visuals.
            <Link href={'#'}> More...</Link>
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-10 pt-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#8d092c] to-[#c94f7c] text-white shadow-md">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-sm">Years Experience</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md">
            <p className="text-2xl font-bold">300+</p>
            <p className="text-sm">Projects Completed</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md">
            <p className="text-2xl font-bold">300+</p>
            <p className="text-sm">Projects Completed</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md">
            <p className="text-2xl font-bold">300+</p>
            <p className="text-sm">Projects Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
