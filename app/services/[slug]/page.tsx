'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { allServices } from '@/constants/services';
import { use } from 'react';

const ServiceDetailPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = use(params);
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Service not found 😕
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fff] to-[#f9fafb] pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src={service.images[0]}
          alt={service.name}
          fill
          priority
          className="object-cover brightness-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#8d092c] via-[#d84f7a] to-[#f2b8c6] bg-clip-text text-transparent">
            {service.name}
          </h1>
          <p className="text-lg text-gray-100">{service.category}</p>
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          {service.description}
        </p>
      </motion.div>

      {/* Gallery */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {service.images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={img}
              alt={`${service.name} sample ${index + 1}`}
              width={500}
              height={400}
              className="object-cover w-full h-64 group-hover:brightness-90 transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-600 mb-4 text-lg">
          Want to get this service or customize it for your brand?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] text-white px-8 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition"
        >
          Contact Now
        </Link>
      </motion.div>
    </section>
  );
};

export default ServiceDetailPage;
