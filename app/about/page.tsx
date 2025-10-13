'use client';

import { motion } from 'framer-motion';
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

const AboutPage = () => {
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
    <section className="min-h-screen bg-gradient-to-b from-white to-[#f9fafb] py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hi there! 👋 I’m{' '}
            <span className="font-semibold text-[#8d092c]">
              a passionate Graphic Designer
            </span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              asChild
              className="bg-[#8d092c] hover:bg-[#a31c3c] text-white rounded-full px-6 py-3 text-lg"
            >
              <Link href="/services">Explore My Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg border-4 border-[#8d092c]/20">
            <Image
              src="/ceo.jpg"
              alt="Graphic designer portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="mt-24 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Creative Process
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From concept to final delivery, I follow a simple but effective
          process to bring your vision to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              step: '01',
              title: 'Discovery',
              desc: 'Understanding your goals, brand, and audience to shape the right design approach.',
            },
            {
              step: '02',
              title: 'Design & Create',
              desc: 'Bringing your ideas to life through creativity, balance, and color harmony.',
            },
            {
              step: '03',
              title: 'Deliver & Support',
              desc: 'Delivering top-quality visuals and ensuring your satisfaction post-project.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl border border-gray-100 transition-all"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-4xl font-extrabold text-[#8d092c] mb-3">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-24 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tools I Use
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          I combine creativity with powerful design tools to craft clean,
          stunning, and effective visuals.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-center">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl py-6 px-4 border border-gray-100 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h4 className="text-sm font-medium text-gray-700">{tool.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-24 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Clients Say
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from amazing people I’ve worked with — their satisfaction is what
          drives me to keep creating.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all flex flex-col items-center"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <h4 className="font-semibold text-[#8d092c]">{t.name}</h4>
              <span className="text-gray-500 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="mt-28 text-center bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] py-16 px-6 rounded-3xl mx-6 md:mx-20 shadow-lg">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Work Together
        </motion.h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Have a design project in mind? Whether it’s branding, print, or
          creative design — let’s make something outstanding together.
        </p>
        <Button
          asChild
          className="bg-white text-[#8d092c] hover:bg-[#f2b8c6] font-semibold px-8 py-4 rounded-full text-lg"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default AboutPage;
