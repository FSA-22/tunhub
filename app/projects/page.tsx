'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { allProjects } from '@/constants/projects';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
  const categories = ['All', ...new Set(allProjects.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0524] via-[#1a0b44] to-[#2b0f5e] py-24 px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e91e63_0%,_transparent_70%)] opacity-30 animate-pulse"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e91e63] via-[#f06292] to-[#ffb6c1] bg-clip-text text-transparent">
          Our Projects
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Explore TunHub’s catalogue of creative works — from branding and
          merchandise to event designs and prints.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 bg-transparent rounded-full border transition-all duration-500 text-sm md:text-base ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#e91e63] to-[#f06292] text-white shadow-[0_0_15px_rgba(233,30,99,0.6)] border-transparent'
                : 'border-[#e91e63]/40 text-gray-300 hover:bg-transparent hover:text-white hover:border-[#e91e63]'
            }`}
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
              <motion.div
                className="relative bg-[#1a1442]/70 backdrop-blur-md rounded-2xl border border-transparent shadow-lg hover:shadow-[0_0_25px_rgba(233,30,99,0.3)] group overflow-hidden transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {project.category}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#e91e63] group-hover:shadow-[0_0_25px_#e91e63] transition-all duration-500"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-20 text-gray-400 italic"
        >
          No projects found for "{selectedCategory}".
        </motion.p>
      )}
    </section>
  );
};

export default ProjectsPage;
