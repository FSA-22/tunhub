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
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // ✅ Send form using FormSubmit
      const res = await fetch(
        'https://formsubmit.co/ajax/tunhubconcept@gmail.com',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        },
      );

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fff] via-[#fdf5f7] to-[#fdeef1] flex flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8d092c] via-[#d84f7a] to-[#f2b8c6] bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Let’s discuss your next creative project — whether it’s a banner,
          branding, or design concept. I’d love to collaborate with you.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        {submitted ? (
          <motion.p
            className="text-center text-green-600 font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent successfully! I’ll get back to you soon.
          </motion.p>
        ) : (
          <>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium">
                Name
              </label>
              <Input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border-gray-300 focus:border-[#8d092c] focus:ring-[#8d092c]"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full border-gray-300 focus:border-[#8d092c] focus:ring-[#8d092c]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="w-full border-gray-300 focus:border-[#8d092c] focus:ring-[#8d092c] h-32"
              />
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8d092c] via-[#c94f7c] to-[#f2b8c6] text-white py-3 rounded-full font-medium text-lg hover:opacity-90 transition"
              >
                Send Message
              </Button>
            </motion.div>
          </>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-12 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/2349030330133?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:text-[#25D366] transition"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/tunhub_graphic"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:text-[#8d092c] transition"
        >
          <FaInstagram className="w-6 h-6" />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/share/1BGmWp9avz/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:text-[#1877F2] transition"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default ContactPage;
