'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { allServices } from '@/constants/services';

const categories = ['All', 'Design', 'Printing', 'Gifts', 'Merch', 'Events'];

export default function ServicesPage() {
  const [selected, setSelected] = useState('All');

  const filteredServices =
    selected === 'All'
      ? allServices
      : allServices.filter((s) => s.category === selected);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#f9fafb] py-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8d092c] via-[#d84f7a] to-[#f2b8c6] bg-clip-text text-transparent">
          Available Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          From creative graphic design to custom branding, I deliver designs
          that stand out, impress, and connect deeply with your audience.
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
                ? 'bg-[#8d092c] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {filteredServices.map((service, index) => (
          <Link key={index} href={`/services/${service.slug}`} passHref>
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {service.name}
              </h3>
              <div className="mt-2 w-12 mx-auto border-b-2 border-[#8d092c] group-hover:w-20 transition-all duration-300"></div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Outro */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have something unique in mind? Let’s bring your vision to life
          together.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] text-white px-8 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
