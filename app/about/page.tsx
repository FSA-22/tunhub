'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaFigma, FaCameraRetro, FaPaintBrush } from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiAdobelightroom,
  SiCoreldraw,
} from 'react-icons/si';

import { Button } from '@/components/ui/button';
import { ABOUT_ME, name, testimonials } from '@/constants/about';

const tools = [
  {
    icon: <SiAdobephotoshop className="text-sky-400 text-4xl" />,
    name: 'Photoshop',
  },
  {
    icon: <SiAdobeillustrator className="text-orange-500 text-4xl" />,
    name: 'Illustrator',
  },
  {
    icon: <SiCoreldraw className="text-green-500 text-4xl" />,
    name: 'CorelDRAW',
  },
  { icon: <SiCanva className="text-cyan-400 text-4xl" />, name: 'Canva' },
  {
    icon: <SiAdobelightroom className="text-blue-400 text-4xl" />,
    name: 'Lightroom',
  },
  { icon: <FaFigma className="text-pink-500 text-4xl" />, name: 'Figma' },
  {
    icon: <FaCameraRetro className="text-yellow-400 text-4xl" />,
    name: 'Photography',
  },
  {
    icon: <FaPaintBrush className="text-purple-400 text-4xl" />,
    name: 'Brand Design',
  },
];

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0524] via-[#1a0b44] to-[#2b0f5e] text-white relative overflow-hidden">
      {/* Animated Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e91e63_0%,_transparent_70%)] opacity-30 animate-pulse" />

      {/* HERO SECTION */}
      <div className="relative px-6 md:px-12 lg:px-20 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#e91e63] via-[#f06292] to-[#ffb6c1] bg-clip-text text-transparent"
        >
          About TunHub
        </motion.h1>
        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
          TunHub is a creative hub specializing in **graphic design, brand
          identity, print, and product photography**. We help brands express
          their stories through visuals that speak louder than words.
        </p>
      </div>

      {/* CEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="relative">
          <Image
            src="/ceo.jpg"
            alt="TunHub CEO"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-[0_0_25px_rgba(233,30,99,0.4)]"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#e91e63] to-[#9c27b0] bg-clip-text text-transparent mb-4">
            Meet Our Creative Director
          </h2>
          <p className="text-gray-400 mb-6">
            Hello, <span className="text-2xl font-semibold">{name}</span>
            {ABOUT_ME}
          </p>
          <p className="text-gray-400">
            “At TunHub, we do not just design — we communicate. Every project is
            a chance to make a brand unforgettable.”
          </p>
        </div>
      </motion.div>

      {/* TOOLS SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e91e63] via-[#f06292] to-[#ffb6c1] bg-clip-text text-transparent mb-10"
        >
          Our Creative Tools
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-[#1a1442]/70 rounded-2xl border border-transparent hover:border-[#e91e63] hover:shadow-[0_0_20px_#e91e63] transition-all duration-300"
            >
              {tool.icon}
              <p className="mt-3 text-gray-300 font-medium">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e91e63] via-[#f06292] to-[#ffb6c1] bg-clip-text text-transparent mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1442]/70 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_#e91e63] border border-transparent hover:border-[#e91e63] transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-[#e91e63] shadow-[0_0_15px_#e91e63]"
                />
              </div>
              <p className="text-gray-300 italic mb-4">“{t.message}”</p>
              <h4 className="text-lg font-semibold text-white">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center py-20"
      >
        <p className="text-gray-300 text-lg mb-6">
          Let us create visuals that bring your brand to life.
        </p>
        <Link href="/contact">
          <Button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e91e63] via-[#9c27b0] to-[#673ab7] cursor-pointer hover:opacity-10 transition">
            Work With Us
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};
export default AboutPage;
