'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-start justify-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/wavy-bg.png"
          alt="Abstract wavy background"
          fill
          priority
          className=" object-right-bottom object-cover"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 px-6 text-center md:px-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl mb-2  bg-gradient-to-l from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          Crafting <span className="text-sky-600">Creative Visuals</span> that
          Inspire
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:mt-6 md:text-lg lg:text-xl max-w-2xl mx-auto
             bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6]
             bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          I help brands stand out with custom graphic designs, banners, and
          digital art that tell stories beyond words.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.div
            className="rounded-4xl"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 6px 13px rgba(56, 189, 248, 0.4)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full text-lg">
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
