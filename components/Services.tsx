'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { allServices } from '@/constants/services';

const Services = () => {
  const limitedServices = allServices.slice(0, 8); // show only 8 on landing page

  return (
    <section
      id="services"
      className="relative w-full bg-gradient-to-b from-[#faeff2] via-white to-[#faeff2] py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            I specialize in transforming creative ideas into high-quality prints
            and designs — helping brands stand out with precision, beauty, and
            originality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {limitedServices.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <motion.div
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden"
                whileHover={{ y: -6 }}
              >
                {/* Gradient Hover Overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#8d092c]/10 via-[#c94f7c]/10 to-[#f2b8c6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="text-5xl mb-4 text-[#8d092c] group-hover:scale-110 transition-transform duration-300 z-10">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#8d092c] transition-colors duration-300 z-10">
                  {service.name}
                </h3>

                {/* Underline Animation */}
                <motion.div className="mt-3 w-10 mx-auto border-b-2 border-[#8d092c] group-hover:w-16 transition-all duration-300 z-10"></motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="default"
            className="bg-[#8d092c] hover:bg-[#a71b3d] text-white px-8 py-4 rounded-full text-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link href="/services">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        className="absolute -top-10 -left-10 w-48 h-48 bg-[#8d092c]/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-[#c94f7c]/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Services;
