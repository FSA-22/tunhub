'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  {
    number: '5+',
    label: 'Years Experience',
    gradient: 'from-[#8d092c] to-[#c94f7c]',
  },
  {
    number: '300+',
    label: 'Projects Completed',
    gradient: 'from-sky-500 to-sky-600',
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: '24/7',
    label: 'Support Availability',
    gradient: 'from-[#8d092c] to-[#c94f7c]',
  },
];

const InfiniteStatsScroll = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        if (!isPaused) {
          await controls.start({
            x: ['0%', '-50%'],
            transition: {
              duration: 10,
              ease: 'linear',
            },
          });
          controls.set({ x: '0%' });
        } else {
          await new Promise((r) => setTimeout(r, 100));
        }
      }
    };
    animate();
  }, [controls, isPaused]);

  return (
    <div className="relative w-full overflow-hidden border-1 py-4">
      {/* Fades */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-violet-600 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-violet-600 to-transparent pointer-events-none z-10" />

      {/* Motion container */}
      <motion.div
        className="flex space-x-8 px-6 md:px-12 lg:px-20 w-max"
        animate={controls}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate for infinite loop */}
        {[...stats, ...stats].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`min-w-[160px] flex-shrink-0 p-5 rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
          >
            <p className="text-2xl font-bold">{item.number}</p>
            <p className="text-sm">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default InfiniteStatsScroll;
