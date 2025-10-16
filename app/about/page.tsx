'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiFigma,
  SiBlender,
  SiAdobepremierepro,
} from 'react-icons/si';
import { useRef } from 'react';

const AboutPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Smooth parallax transform
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const tools = [
    {
      name: 'Adobe Photoshop',
      icon: <SiAdobephotoshop className="text-[#31A8FF]" />,
    },
    {
      name: 'Adobe Illustrator',
      icon: <SiAdobeillustrator className="text-[#FF9A00]" />,
    },
    { name: 'Canva', icon: <SiCanva className="text-[#00C4CC]" /> },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: 'Blender', icon: <SiBlender className="text-[#F5792A]" /> },
    {
      name: 'Premiere Pro',
      icon: <SiAdobepremierepro className="text-[#9999FF]" />,
    },
  ];

  const testimonials = [
    {
      name: 'Samuel Adeyemi',
      role: 'Brand Owner, SkyPrint',
      feedback:
        'Working with him was a breeze. He understood my brand vision perfectly and delivered designs that exceeded expectations.',
      image: '/images/client1.jpg',
    },
    {
      name: 'Mary Johnson',
      role: 'Event Planner',
      feedback:
        'Every banner and flyer he designed brought life to my events. Great communication and professional all through!',
      image: '/images/client2.jpg',
    },
    {
      name: 'Ahmed Bello',
      role: 'Business Owner',
      feedback:
        'Creative, timely, and detail-oriented. My custom prints came out so beautiful. Highly recommended!',
      image: '/images/client3.jpg',
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#b23d63] to-[#f9fafb] overflow-hidden"
    >
      {/* 🔥 HERO SECTION with Parallax */}
      <div className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center md:text-left">
        {/* Background gradient overlay */}
        <motion.div
          style={{ y, scale, opacity }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-[#8d092c] via-[#b23d63] to-[#f2b8c6]"
        />

        {/* Subtle background designer image (blurred overlay) */}
        <motion.div
          style={{ y, scale, opacity }}
          className="absolute inset-0 z-0 opacity-20"
        >
          <Image
            src="/ceo.jpg"
            alt="Designer Background"
            fill
            className="object-cover blur-md"
            priority
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 lg:px-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-[#e337] mb-6 leading-tight">
              Designing <span className="text-[#325]">Stories</span> That
              Inspire
            </h1>
            <p className="text-gray-900 text-lg md:text-xl mb-8 max-w-md">
              I’m a creative designer passionate about turning bold ideas into
              timeless visual experiences.
            </p>
            <Button
              asChild
              className="bg-white text-[#8d092c] hover:bg-[#f2b8c6] font-semibold px-8 py-4 rounded-full text-lg"
            >
              <Link href="/projects">View My Works</Link>
            </Button>
          </div>

          {/* Floating portrait */}
          <motion.div
            className="flex-1 flex justify-center relative"
            style={{ y }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/logo.jpg"
                alt="Designer portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-10"></div>
      </div>

      {/* 🧠 ABOUT SECTION */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg border-4 border-[#8d092c]/20">
            <Image
              src="/ceo.jpg"
              alt="Designer portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hi there! 👋 I’m{' '}
            <span className="font-semibold text-[#8d092c]">
              a passionate Graphic Designer
            </span>{' '}
            with a flair for transforming ideas into powerful visual stories. My
            work focuses on creating meaningful designs that leave a lasting
            impression — from brand visuals and digital art to personalized
            print products.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Over the years, I’ve collaborated with individuals, brands, and
            businesses to craft designs that are not only visually appealing but
            also emotionally engaging. Every project I take on is a chance to
            tell a story — <span className="italic">your story</span> — through
            design.
          </p>

          <Button
            asChild
            className="bg-[#8d092c] hover:bg-[#a31c3c] text-white rounded-full px-6 py-3 text-lg"
          >
            <Link href="/services">Explore My Services</Link>
          </Button>
        </motion.div>
      </div>

      {/* (Process, Tools, Testimonials, CTA sections remain unchanged) */}
      {/* Keep the ones you already had below this line */}
    </section>
  );
};

export default AboutPage;
