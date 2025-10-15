'use client';

import { useState } from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from 'react-icons/fa';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#111827] to-[#1f2937] text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">TunHub Concepts</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Bringing your creative ideas to life — from banners to branded
            shirts, frames, mugs, and more. Quality designs that speak louder
            than words.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Contact'].map((link, i) => (
              <li key={i}>
                <Link
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="hover:text-sky-400 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>

          {/* Email */}
          <div className="flex items-center gap-2 mb-3">
            <p className="text-gray-400">tunhubconcept@gmail.com</p>
            <Button
              onClick={() => handleCopy('tunhubconcept@gmail.com', 'email')}
              className="hover:text-sky-400 bg-transparent transition"
            >
              {copied === 'email' ? <FaCheck /> : <FaCopy />}
            </Button>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 mb-3">
            <p className="text-gray-400">+234 903 033 0133</p>
            <Button
              onClick={() => handleCopy('+2349030330133', 'phone')}
              className="hover:text-sky-400 bg-transparent transition"
            >
              {copied === 'phone' ? <FaCheck /> : <FaCopy />}
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-4">
            <Link
              href="https://wa.me/2349030330133?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition"
            >
              <FaWhatsapp size={26} />
            </Link>
            <Link
              href="https://instagram.com/tunhub_graphic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition"
            >
              <FaInstagram size={26} />
            </Link>
            <Link
              href="https://facebook.com/share/1BGmWp9avz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition"
            >
              <FaFacebook size={26} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TunHub Concepts. All rights reserved.
      </div>

      {copied && (
        <div className="absolute bottom-6 right-6 bg-sky-600 text-white px-4 py-2 rounded-full text-sm shadow-lg animate-fadeInOut">
          {copied === 'phone' ? 'Phone number copied!' : 'Email copied!'}
        </div>
      )}
    </footer>
  );
};

export default Footer;
