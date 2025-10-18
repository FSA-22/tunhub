'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { allServices, categories } from '@/constants/services';

const ServicesPage = () => {
  const [selected, setSelected] = useState('All');

  const filteredServices =
    selected === 'All'
      ? allServices
      : allServices.filter((s) => s.category === selected);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0524] via-[#1a0b44] to-[#2b0f5e] py-24 px-6 md:px-12 lg:px-20 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e91e63] via-[#f06292] to-[#ffb6c1] bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Transform your brand with creativity that speaks and visuals that
          connect. Explore our wide range of services below.
        </p>
      </motion.div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selected === cat
                ? 'bg-[#e91e63] text-white shadow-lg'
                : 'bg-[#2b1b5a] text-gray-300 hover:bg-[#3c2677]'
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {filteredServices.map((service, index) => (
          <Link key={index} href={`/services/${service.slug}`} passHref>
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 bg-[#1a1442]/70 backdrop-blur-sm rounded-2xl border border-[#3c2a7a]/40 shadow-lg hover:shadow-xl text-center transition-all duration-300 group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/10 via-transparent to-[#9c27b0]/20 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg">{service.name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {service.description || 'Creative and professional service'}
              </p>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Outro */}
      <motion.div
        className="text-center mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a special project in mind? Let’s create something amazing
          together.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-gradient-to-r from-[#e91e63] via-[#9c27b0] to-[#673ab7] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
};

export default ServicesPage;
