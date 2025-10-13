'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { allServices } from '@/constants/services';

const Services = () => {
  const limitedServices = allServices.slice(0, 8); // Only show 8 on landing page

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#f9fafb] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            I’m available for various custom print and design services —
            bringing creative ideas to life through quality design and
            production.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {limitedServices.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={index}>
              <motion.div
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {service.name}
                </h3>
                <div className="mt-2 w-10 mx-auto border-b-2 border-[#8d092c] group-hover:w-16 transition-all duration-300"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            variant="default"
            className="bg-[#8d092c] hover:bg-[#a71b3d] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2"
            asChild
          >
            <Link href="/services">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
