'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Track page scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-white/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* 🔹 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#8d092c] to-[#c94f7c] origin-left z-[9999]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="text-2xl flex justify-center items-center  gap-2 font-bold bg-gradient-to-r from-[#8d092c] to-[#c94f7c] bg-clip-text text-transparent"
          >
            <Image
              src={'/logo.jpg'}
              width={30}
              height={30}
              alt="TunHub-logo"
              className="rounded-full"
            />
            TunHub
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hovered === link.href;
            return (
              <motion.div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={link.href}
                  className={`text-white/90 transition-colors duration-200 font-medium ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>

                {/* Underline animation */}
                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8d092c] to-[#c94f7c] rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="ml-6 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#8d092c] to-[#c94f7c] text-white shadow-md hover:shadow-lg transition-all"
          >
            Explore
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-[#0f011a]/95 backdrop-blur-lg shadow-lg z-50 flex flex-col px-8 pt-10"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-6 text-gray-300 hover:text-white transition"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-[#c94f7c] border-b-2 border-[#c94f7c]'
                            : 'text-white hover:text-[#c94f7c]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8d092c] to-[#c94f7c] text-white font-semibold shadow-md"
                >
                  Explore
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
