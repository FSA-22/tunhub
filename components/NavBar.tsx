'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { navLinks } from '@/constants/navbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  //  Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //  Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  //  Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-gray-900/20 shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#8d092c] to-[#c94f7c] origin-left z-[9999]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl flex items-center gap-2 font-bold bg-gradient-to-r from-[#8d092c] to-[#c94f7c] bg-clip-text text-transparent"
        >
          <Image
            src="/TunHub.png"
            width={32}
            height={32}
            alt="TunHub Logo"
            className="rounded-full object-cover object-center"
          />
          <span className="hidden lg:block">TunHub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 relative">
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
                  className={`text-white/90 font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8d092c] to-[#c94f7c] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
          <Button
            asChild
            className="ml-6 bg-gradient-to-r from-[#8d092c] to-[#c94f7c] text-white rounded-full shadow-md hover:shadow-lg px-5 py-2"
          >
            <Link href="/projects">Explore</Link>
          </Button>
        </div>

        {/* Mobile Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-pink-500 bg-transparent hover:bg-transparent rounded-md"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
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
              className="fixed top-0 right-0 w-3/4 sm:w-2/3 md:w-1/2 h-full bg-[#0f011a]/95 backdrop-blur-lg shadow-lg z-50 flex flex-col px-8 pt-10"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-6 text-gray-300 hover:text-white"
                aria-label="Close Menu"
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
                        className={`text-xl font-medium ${
                          isActive
                            ? 'text-[#c94f7c] border-b-2 border-[#c94f7c]'
                            : 'text-white hover:text-[#c94f7c]'
                        } transition-all duration-200`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8d092c] to-[#c94f7c] text-white font-semibold shadow-md hover:shadow-lg"
                >
                  <Link href="/projects">Explore</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
