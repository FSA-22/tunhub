'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/tunhubconcept@gmail.com',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      );

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else alert('Something went wrong. Please try again later.');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0524] via-[#1a0b44] to-[#2b0f5e] text-white flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e91e63_0%,_transparent_70%)] opacity-30 animate-pulse"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e91e63] via-[#f06292] to-[#ffb6c1] bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Let’s discuss your next creative project — whether it’s branding,
          design, or printing. I’d love to collaborate with you.
        </p>
      </motion.div>

      {/* Floating Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: [0, -5, 0], // floating animation
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full max-w-lg p-8 rounded-2xl bg-[#1a1442]/70 backdrop-blur-md border border-transparent shadow-lg hover:shadow-[0_0_25px_rgba(233,30,99,0.3)] transition-all duration-500"
      >
        {/* ⚡ Neon border — now behind form elements */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-[#e91e63] hover:shadow-[0_0_25px_#e91e63] transition-all duration-500 pointer-events-none"></div>

        {submitted ? (
          <motion.p
            className="text-center text-green-400 font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent successfully! I’ll get back to you soon.
          </motion.p>
        ) : (
          <>
            <div className="mb-5">
              <label className="block text-gray-300 mb-2 font-medium">
                Name
              </label>
              <Input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-[#2b1b5a]/60 text-white border-gray-500 focus:border-[#e91e63] focus:ring-[#e91e63]"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="bg-[#2b1b5a]/60 text-white border-gray-500 focus:border-[#e91e63] focus:ring-[#e91e63]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="bg-[#2b1b5a]/60 text-white border-gray-500 focus:border-[#e91e63] focus:ring-[#e91e63] h-32"
              />
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e91e63] via-[#9c27b0] to-[#673ab7] text-white py-3 rounded-full font-medium text-lg shadow-[0_0_15px_#e91e63] hover:shadow-[0_0_25px_#e91e63] transition"
              >
                Send Message
              </Button>
            </motion.div>
          </>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-12 text-gray-300 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="https://wa.me/2349030330133?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#1a1442]/80 border border-[#e91e63]/30 hover:border-[#e91e63] hover:shadow-[0_0_15px_#e91e63] hover:text-[#25D366] transition"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        <a
          href="https://instagram.com/tunhub_graphic"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#1a1442]/80 border border-[#e91e63]/30 hover:border-[#e91e63] hover:shadow-[0_0_15px_#e91e63] hover:text-[#e4405f] transition"
        >
          <FaInstagram className="w-6 h-6" />
        </a>

        <a
          href="https://facebook.com/share/1BGmWp9avz/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#1a1442]/80 border border-[#e91e63]/30 hover:border-[#e91e63] hover:shadow-[0_0_15px_#e91e63] hover:text-[#1877F2] transition"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default ContactPage;
