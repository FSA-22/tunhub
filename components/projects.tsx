'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { allProjects } from '@/constants/projects';

const ProjectsSection = () => {
  const featured = allProjects.slice(0, 6);

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#fff5f7] via-white to-[#fff8fa] overflow-hidden">
      {/* Decorative background glow elements */}
      <motion.div
        className="absolute top-[-4rem] left-[-4rem] w-[20rem] h-[20rem] bg-[#8d092c]/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-[-6rem] right-[-6rem] w-[24rem] h-[24rem] bg-[#c94f7c]/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A look into some of TunHub’s signature works — designs, prints, and
          brand visuals crafted to tell stories that stand out.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-5 w-24 h-1 bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] mx-auto rounded-full origin-left"
        />
      </div>

      {/* Projects Showcase (Full Width) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-4 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {featured.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative w-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/40 backdrop-blur-md border border-white/40"
            >
              {/* Image */}
              <div className="relative w-full h-[400px] md:h-[420px] lg:h-[440px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000b0] via-[#00000040] to-transparent opacity-70 group-hover:opacity-80 transition-all duration-500"></div>

              {/* Text info */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200">{project.category}</p>
              </div>

              {/* Hover overlay button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center bg-[#00000060] opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8d092c] to-[#c94f7c] text-white font-medium text-sm shadow-lg">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        className="flex justify-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Button
          asChild
          className="bg-[#8d092c] hover:bg-[#a71b3d] text-white px-8 py-4 rounded-full text-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <Link href="/projects">
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
