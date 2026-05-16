import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-cyan-500 font-display font-semibold uppercase tracking-widest text-sm mb-4 block">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <div className={`h-1 w-20 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
      </motion.div>
    </div>
  );
}
