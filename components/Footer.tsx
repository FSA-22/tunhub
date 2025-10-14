'use client';

import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#1f2937] text-gray-300 py-12 mt-20">
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
            <li>
              <Link href="/" className="hover:text-sky-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-sky-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-400 mb-3">tunhubprints@gmail.com</p>
          <p className="text-gray-400 mb-3">+234 812 345 6789</p>

          <div className="flex space-x-5 mt-4">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition"
            >
              <FaWhatsapp size={26} />
            </a>
            <a
              href="https://instagram.com/tunhubprints"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition"
            >
              <FaInstagram size={26} />
            </a>
            <a
              href="https://facebook.com/tunhubprints"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition"
            >
              <FaFacebook size={26} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TunHub Prints. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
