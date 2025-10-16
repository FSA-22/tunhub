'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { allProjects } from '@/constants/projects';

export default function ProjectsSection() {
  const featured = allProjects.slice(0, 6);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#f9fafb] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A showcase of creative works — from branding to merchandise and
            special print collections.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {featured.map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
              <motion.div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000099] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition"></div>
                <div className="absolute bottom-5 left-5 z-10">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200">{project.category}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            asChild
            className="bg-[#8d092c] hover:bg-[#a71b3d] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
