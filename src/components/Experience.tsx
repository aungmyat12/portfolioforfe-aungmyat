import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const timeline = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    location: "Japan",
    desc: "Developing bespoke web solutions for small businesses and individuals. Focused on management systems, workflow optimization, and high-performance frontend interfaces.",
    achievements: [
      "Built over 5 unique management systems using Laravel/React",
      "Optimized database queries reducing load times by 40%",
      "Integrated secure payment gateways (Stripe, PayPal)"
    ]
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Community",
    period: "2022 - 2023",
    location: "Remote",
    desc: "Contributing to various web development repositories while focusing on IoT and AI student projects during academic studies in Japan.",
    achievements: [
      "Collaborated on modern UI component libraries",
      "Bug fixing and feature implementation in Node.js tools"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Professional Path" subtitle="Experience" align="left" />

        <div className="relative mt-12 pl-8 md:pl-0">
          {/* Vertical line for desktop */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-20 flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-[-32px] md:left-1/2 top-0 md:top-6 w-4 h-4 rounded-full bg-cyan-500 border-4 border-neutral-950 z-20 -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

              {/* Content Panel */}
              <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-500/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase rounded-md tracking-wider flex items-center">
                      <Calendar size={12} className="mr-1.5" />
                      {item.period}
                    </span>
                    <span className="text-neutral-500 text-xs flex items-center">
                       <MapPin size={12} className="mr-1.5" />
                       {item.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                  <p className="text-cyan-500 font-display text-sm font-semibold mb-4">{item.company}</p>
                  
                  <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2">
                    {item.achievements.map((acc, key) => (
                      <div key={key} className="flex items-start space-x-2 text-xs text-neutral-300">
                         <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                         <span>{acc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for other side on desktop */}
              <div className="hidden md:block w-[10%]" />
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
